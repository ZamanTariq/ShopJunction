// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { ProductAddtoCartSuccessfully, ProductAlreadyIntheCart } from '../../components/notificationMessages';
import './comment.css';
import styled from "styled-components"
var dateFormat = require('dateformat');

export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productId: '',
			userId: '',
			merchantId: '',
			userEmail: '',
			title: '',
			image: '',
			category: '',
			price: '',
			company: '',
			info: '',
			inCart: '',
			count: '',
			total: '',
			quantity: 1,
			totalPrice: '',
			shopAddress: '',
			bookingStatus: '',
			oderStatus: '',
      userAddress: '',
      comment:'',
      comments:[]
		};
		this.onSubmit = this.onSubmit.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeComment=this.onChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	getUserId() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			userId: decoded._id,
			userAddress: decoded.address
		});
		return decoded._id;
	}

	getMerchantToken() {
		const token = localStorage.merchanttoken;
		const decoded = jwt_decode(token);

		return decoded._id;
	}
	getUserAddress() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			userAddress: decoded.address
		});
		return decoded.address;
	}
	getUserEmail() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			userEmail: decoded.email
		});
		return decoded.email;
	}

	getUserName() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);

		return decoded.firstname;
	}
	getUserPhone() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);

		return decoded.phone;
	}
	getToken() {
		const token = localStorage.usertoken;
		return token;
  }
  
  

	componentDidMount() {
		axios
			.get('http://localhost:5000/merchantproduct/edit/' + this.props.match.params.id)
			.then((response) => {
				this.setState({
					productId: response.data._id,
					merchantId: response.data.merchantId,
					title: response.data.title,
					image: response.data.image,
					category: response.data.category,
					price: response.data.price,
					company: response.data.company,
					info: response.data.info,
					inCart: response.data.inCart,
					count: response.data.count,
					total: response.data.total,
					shopAddress: response.data.shopAddress,
					bookingStatus: response.data.bookingStatus,
					orderStatus: response.data.orderStatus
				});
				console.log();
			})
			.catch(function(error) {
				console.log(error);
      });
      
      axios
			.get('http://localhost:5000/comments/product/' + this.props.match.params.id)
			.then((response) => {
        this.setState({comments:response.data})
				})
			.catch(function(error) {
				console.log(error);
			});



	}
	onSubmit(e) {
		e.preventDefault();
		axios
			.post('http://localhost:5000/addtocart', {
				userId: this.getUserId(),

				productId: this.state.productId,
				userEmail: this.getUserEmail(),

				quantity: this.state.quantity,
				totalPrice: this.state.price,

				userAddress: this.getUserAddress(),
				userName: this.getUserName(),
				userPhone: this.getUserPhone()
			})
			.then((res) => {
				if (res.status === 200) {
					ProductAddtoCartSuccessfully();
				}
			})
			.catch((ex) => {
				if (ex.response && ex.response.status === 400) {
					ProductAlreadyIntheCart();
				}
			});
	}
	onChangeQuantity(e) {
		const no = e.target.value;
		const price = this.state.price;
		const total = no * price;
		this.setState({
			quantity: e.target.value,
			totalPrice: total
		});
	}

	getTotalPrice() {
		const price = this.state.price;
		const quantity = this.state.quantity;
		const total = price * quantity;
		return total;
  }
  
  onChangeComment=(e)=>{
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const obj={
      userId: this.getUserId(),
      productId: this.state.productId,
      userName: this.getUserName(),
      content:this.state.comment
    }
    this.state.comments.push(obj)
		axios
			.post('http://localhost:5000/comments', obj)
			.then((res) => {
				if (res.status === 200) {
        console.log("Succfully")
        this.setState({comment:''})
				}
			})
			.catch((ex) => {
				if (ex.response && ex.response.status === 400) {
					console.log(ex.response.error)
				}
			});

  }
	render() {
		return (
			<div className="container my-5 py-5 z-depth-1 ">
				<span className="hands" onClick={this.props.history.goBack}>
					<h4>
						<i className="fas fa-arrow-circle-left" />Back
					</h4>
				</span>

				<section className="text-center">
					<h3 className="font-weight-bold mb-3">Product Details</h3>

					{localStorage.merchanttoken ? (
						<Link to={'/user-login'}>
							<button className="btn btn-outline-purple btn-sm px-5 py-2 mb-3">
								<i className="fas fa-door-open" />Visit Shop
							</button>
						</Link>
					) : (
						<Link to={'/shop/' + this.state.merchantId}>
							<button className="btn btn-outline-purple btn-sm px-5 py-2 mb-3">
								<i className="fas fa-door-open" />Visit Shop
							</button>
						</Link>
					)}

					<div className="row">
						<div className="col-lg-5">
							<div className="carousel  carousel-thumbnails">
								<img
									src={'/Upload/' + this.state.image}
									alt="Product Detail"
									width="10rem"
									height="10rem"
									className="img-fluid ml-2"
								/>
							</div>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-5 text-center text-md-left ">
							<h2 className="h2-responsive text-center text-md-left text-uppercase product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
								<strong>{this.state.title}</strong>
							</h2>
							<span className="badge badge-danger product mb-4 ml-xl-0 ml-4 pl-4 pr-4">
								{this.state.category}
							</span>
							<h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
								<span className="red-text font-weight-bold">
									<strong>RS:{this.state.price}</strong>
								</span>
								<span className="grey-text">
									<small>
										<s>{this.state.oldprice}</s>
									</small>
								</span>
							</h3>

							<div
								className="accordion md-accordion"
								id="accordionEx"
								role="tablist"
								aria-multiselectable="true"
							>
								<div className="card">
									<div className="card-header" role="tab" id="headingOne1">
										<h5 className="mb-0 text-uppercase text-bold">Detail</h5>
									</div>

									<div data-parent="#accordionEx">
										<div className="card-body">{this.state.info}</div>
									</div>
								</div>
							</div>

							{localStorage.usertoken ? (
								<div className="row mt-3">
									<div className="col-md-6 text-center text-md-left text-md-right">
										<button
											className="btn btn-primary btn-rounded"
											onClick={this.onSubmit}
											disabled={!this.getToken() || this.state.orderStatus === false}
										>
											<i className="fas fa-cart-plus mr-2" aria-hidden="true" /> Add to cart
										</button>
									</div>

									<div className="col-md-6 text-center text-md-left text-md-right">
										<Link
											className="btn btn-warning btn-rounded"
											to={'/merchant-product-bookingDetail/' + this.state.productId}
											disabled={!this.getToken() || this.state.bookingStatus === false}
										>
											<i className="fas fa-calendar-check mr-2" aria-hidden="true" /> Booking
										</Link>
									</div>
									<div>
										{this.getToken() && this.state.bookingStatus === false ? (
											<p>
												<li>Sorry ! Seller not Allowed This product to be booked currently</li>
												<li>You can order this Product By Add to cart it </li>{' '}
											</p>
										) : (
											<p />
										)}
									</div>
									<div>
										{this.getToken() && this.state.orderStatus === false ? (
											<p>
												<li>Sorry ! Seller not Allowed This product to Order Currently</li>
												<li>You can book this product by use booking option </li>
												<li>
													Wait Untill shopkepper will allow this product to be order/Book
												</li>
											</p>
										) : (
											<p />
										)}
									</div>
								</div>
							) : (
								<div className="row mt-3">
									<div className="col-md-6 text-center text-md-left text-md-right">
										<Link to="/user-login" className="btn btn-primary btn-rounded">
											<i className="fas fa-cart-plus mr-2" aria-hidden="true" /> Add to cart
										</Link>
									</div>
									<div className="col-md-6 text-center text-md-left text-md-right">
										<Link className="btn btn-warning btn-rounded" to="/user-login">
											<i className="fas fa-calendar-check mr-2" aria-hidden="true" /> Booking
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</section>
			<CommentWrapper>
			<div className="container row bootstrap snippets mt-5">
    <div className="col-md-12 col-md-offset-2 col-sm-12">
        <div className="comment-wrapper">
            <div className="panel panel-info">
			<div className="card bg-info text-white">
    <div className="card-body">Comment Section</div>
  </div>
  <br/>
                <div className="panel-body">
                    <textarea className="form-control" placeholder="write a comment..." rows="3"  value={this.state.comment}
                  onChange={(event) => this.onChangeComment(event)}
				  ></textarea>
                    <br/>
   
					{localStorage.usertoken?(<button onClick={this.handleSubmit} className="btn btn-success pull-right" type="button">
										Comment
									</button>):(<Link to={'/user-login'}className="btn btn-success pull-right">Comment </Link>)}
                    <div className="clearfix"></div>
                    <hr/>
					{this.state.comments.map((comment,index) => 
					(
                    <ul className="media-list" >
                        <li className="media" key={comment.id}>
                            <a href="#" className="pull-left">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle"/>
                            </a>
                            <div className="media-body">
                                <span className="text-muted pull-right">
                                    <small className="text-muted">{dateFormat(comment.date)}</small>
                                </span>
                                <strong className="text-success">{comment.userName}</strong>
                                <p>
								{comment.content}
                                </p>
                            </div>
                        </li>
					
                    </ul>

))}

					
	
                </div>
            </div>
        </div>

    </div>
</div>
</CommentWrapper>
			</div>
			
		);
	}
}
const CommentWrapper=styled.div`



.comment-wrapper .panel-body {
    max-height:650px;
    overflow:auto;
}

.comment-wrapper .media-list .media img {
    width:64px;
    height:64px;
    border:2px solid #e5e7e8;
}

.comment-wrapper .media-list .media {
    border-bottom:1px dashed #efefef;
    margin-bottom:25px;
}


`