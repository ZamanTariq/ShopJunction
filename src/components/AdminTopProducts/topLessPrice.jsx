import React, { Component } from 'react'
import jwt_decode from "jwt-decode";
import { ProductAddtoCartSuccessfully,ProductAlreadyIntheCart,ProductAddToFavourites,ProductAlreadyIntheFavourites } from '../notificationMessages';
import axios from "axios";
import { Link } from 'react-router-dom'

export default class highPrice extends Component {
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
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div >
      
            <a className="card z-depth-0 mb-4"  >
            <Link to={"/admin-product-detail/" + this.props.deal._id}>
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
            </Link>
          </a>
        
          </div>
        )
    }
}
