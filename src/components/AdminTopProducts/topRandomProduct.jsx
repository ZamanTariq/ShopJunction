import React, { Component } from 'react'
import jwt_decode from "jwt-decode";
import { ProductAddtoCartSuccessfully,ProductAlreadyIntheCart,ProductAddToFavourites,ProductAlreadyIntheFavourites } from '../notificationMessages';

import axios from "axios"
export default class topRandomProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productId: "",
          merchantId: "",
          userId: "",
          title: "",
          image: "",
          category: "",
          price: "",
          company: "",
          info: "",
          inCart: "",
          count: "",
          total: "",
          quantity: 1,
          totalPrice: "",
          userAddress: "",
          shopName: "",
          shopAddress: "",
          addToCart:false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

      getUserId() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
          userId: decoded._id,
          userAddress: decoded.address,
        });
        return decoded._id;
      }
      getUserAddress() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
          userAddress: decoded.address,
        });
        return decoded.address;
      }
    
      getUserEmail() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
          userAddress: decoded.address,
        });
        return decoded.email;
      }
      getToken() {
        const token = localStorage.usertoken;
        return token;
      }
    
      componentDidMount() {
        this.setState({
          productId: this.props.deal._id,
          merchantId: this.props.deal.merchantId,
          
          title: this.props.deal.title,
          image: this.props.deal.image,
          category: this.props.deal.category,
          price: this.props.deal.price,
          company: this.props.deal.company,
          info: this.props.deal.info,
          inCart: this.props.deal.inCart,
          count: this.props.deal.count,
          total: this.props.deal.total,
          shopName: this.props.deal.shopName,
          shopAddress: this.props.deal.shopAddress,
        });
      }
     onSubmit(e) {
        e.preventDefault();
    
        axios
          .post("http://localhost:5000/adminaddtocart", {
            userId: this.getUserId(),
            productId: this.state.productId,
            userEmail: this.getUserEmail(),
            quantity: 1,
            totalPrice: this.state.price,
            userAddress: this.getUserAddress(),
            userName: this.getUserName(),
            userPhone: this.getUserPhone(),
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
      handleSubmit(e) {
        e.preventDefault();
    
        axios
          .post("http://localhost:5000/favourites", {
            userId: this.getUserId(),
            merchantId: this.state.merchantId,
            productId: this.state.productId,
            title: this.state.title,
            image: this.state.image,
            category: this.state.category,
            price: this.state.price,
            company: this.state.company,
            info: this.state.info,
            inCart: this.state.inCart,
            count: this.state.count,
            total: this.state.total,
            userAddress: this.getUserAddress(),
            shopName: this.state.shopName,
            shopAddress: this.state.shopAddress,
          })
          .then((res) =>{
            if(res.status===200){
              ProductAddToFavourites()}
            })
          .catch((ex) => {
            if(ex.response && ex.response.status===400){
            ProductAlreadyIntheFavourites();
            }
          });	
    
      }
    
     
    render() {
        return (
            <div>
                  
                  <div className="modal fade " id={this.props.deal._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="row">

              <div className="col-lg-6">

                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails"
                  data-ride="carousel">

                
                  <div className="carousel-inner text-center text-md-left" role="listbox">
                    <div className="">
                      <img src={"Upload/" + this.props.deal.image}
                        alt={this.props.deal.title+"img"} className="img-fluid my-2" />
                    </div>
                    
                  </div>
                

                </div>
           

              </div>

              <div className="col-lg-5 text-center text-md-left">

                <h2
                  className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                  <strong>{this.props.deal.title}</strong>
                </h2>
                <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">{this.props.deal.category}</span>
                <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                  <span className="red-text font-weight-bold">
                    <strong>RS:{this.props.deal.price}</strong>
                  </span>
                  <span className="grey-text">
                    <small>
                      <s>{this.props.deal.oldprice}</s>
                    </small>
                  </span>
                </h3>

                {/* <!--Accordion wrapper--> */}
                <div>

                  {/* <!-- Accordion card --> */}
                  <div className="card">
{/* 
                    <!-- Card header --> */}
                    <div className="card-header" role="tab" id="headingOne1">
                     
                        <h5 className="mb-0">
                     DETAIL
                        
                        </h5>
                    
                    </div>

                    {/* <!-- Card body --> */}
                    <div 
                    >
                      <div className="card-body">
                      {this.props.deal.info}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Accordion card -->

                  <!-- Accordion card --> */}
                  <div className="card">
                   
                  </div>
               

                </div>
               
                <section className="color">
                  <div className="mt-5">
                 
                  
                    <div className="row mt-3">
                      <div className="col-md-6 text-center text-md-left text-md-right">
                        <button className="btn btn-primary btn-sm" onClick={this.onSubmit}>
                          {this.state.addToCart?"Added":"Add to Cart"}</button>
                      </div>
                      <div className="col-md-6 text-center text-md-left text-md-right">
                        <button className="btn btn-success btn-sm" onClick={this.handleSubmit}>
                          Favourite</button>
                      </div>
                    </div>
                  </div>
                </section>
           

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
            <a className="card z-depth-0 mb-4" data-toggle="modal" data-target={"#"+this.props.deal._id}>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-6 px-0">
                  <img src={"Upload/" + this.props.deal.image} className="img-fluid" height="120vh" width="120vw" />
                </div>
                <div className="col-6">
                  <p className="mb-0"><strong>{this.props.deal.title}</strong></p>
                 
                  <h6 className="h6-responsive font-weight-bold dark-grey-text"><strong>{this.props.deal.category}</strong></h6>
                  <p className="mb-0"> <span className="grey-text">
                    <small>
                      <s>{this.props.deal.oldprice}</s>
                    </small>
                  </span><strong>RS:{this.props.deal.price}</strong></p>
                  <small>{this.props.deal.rating}</small>
                </div>
              </div>
            </div>
          </a>
          </div>
        )
    }
}
