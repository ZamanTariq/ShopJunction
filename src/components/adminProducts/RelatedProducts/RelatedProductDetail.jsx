

import React, { Component } from "react";
import axios from "axios";
import {message} from 'antd';
import {withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

class RelatedProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:'',
      merchantId:'',
      title: '',
      image: '',
      category:'',
      price:'',
      company:'',
      info:'',
      inCart:'',
      count:'',
      total:'',
      quantity:"",
      totalPrice:'',
      userAddress:''
     

    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    
  }
  getUserId (){
      
    const token=localStorage.usertoken
    const decoded=jwt_decode(token)
    this.setState({
        userId:decoded._id
       
    })
   return decoded._id
  }
  getUserAddress(){
    const token=localStorage.usertoken
      const decoded=jwt_decode(token)
      this.setState({
          
          userAddress:decoded.address
         
      })
     return decoded.address
  }

  getToken(){
    const token=localStorage.usertoken
    return token;

  }
  
  
componentDidMount() {
    
    axios
      .get(
        "http://localhost:5000/adminproduct/edit/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          merchantId:response.data.adminId,
          title: response.data.title,
          image: response.data.image,
          category: response.data.category,
          price: response.data.price,
          oldprice:response.data.oldprice,
          rating:response.data.rating,
         
          company: response.data.company,
          info: response.data.info,
          inCart: response.data.inCart,
          count: response.data.count,
          total: response.data.total
        });
        console.log(this.s)
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }
  onSubmit(e) {
    e.preventDefault();


    axios.post('http://localhost:5000/addtocart', {
        userId:this.getUserId(),
        merchantId:this.state.merchantId,
        title: this.state.title,
        image: this.state.image,
        category: this.state.category,
        price: this.state.price,
        company: this.state.company,
      
        info: this.state.info,
        inCart: this.state.inCart,
        count: this.state.count,
        total: this.state.total,
        quantity:this.state.quantity,
        totalPrice:this.state.totalPrice,
        userAddress:this.getUserAddress()
  
      })
        .then(res => console.log(res.data),this.addToCart());
        this.setState({
           quantity:'',
           
          })
       
  }
  onChangeQuantity(e) {
    const no =e.target.value
    const price = this.state.price
    const total= no * price
    this.setState({
      quantity: e.target.value,
      totalPrice:total
     
    })
   
  }
  
  getTotalPrice(){
    const price= this.state.price;
    const quantity=this.state.quantity;
    const total = price*quantity
    
    
     return total
    
}


addToCart = () => {
  message.config({
    top:"60"
    
  })
   message.success('Added to Cart!');
};





  render() {
    return (
      <div className="container my-5 py-5 z-depth-1 ">

<span className="hands"  onClick={this.props.history.goBack} style={{color:"black"}}><h4 title="Back"><i className="fas fa-arrow-circle-left"></i>Back</h4></span>
      <section className="text-center">
    
   
        <h3 className="font-weight-bold mb-5">Product Details</h3>
    
        <div className="row">
    
          <div className="col-lg-5">
    
          
            <div  className="carousel  carousel-thumbnails" >
    
              
            
                  <img  src={"/Upload/" + this.state.image}
                    alt="Product Detail" width="10rem" height="10rem" className="img-fluid ml-2"/>
           
               
              
           
    
           
    
            </div>
        
    
          </div>
  <div className="col-lg-1"></div>
          <div className="col-lg-5 text-center text-md-left ">
    
            <h2 className="h2-responsive text-center text-md-left text-uppercase product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>{this.state.title}</strong>
            </h2>
            <span className="badge badge-danger product mb-4 ml-xl-0 ml-4 pl-4 pr-4">{this.state.category}</span>
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
    
 
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
    
              <div className="card">
    
                <div className="card-header" role="tab" id="headingOne1">
                
                    <h5 className="mb-0 text-uppercase text-bold">
                Detail
                     
                    </h5>
                 
                </div>
    
              
                <div 
                  data-parent="#accordionEx">
                  <div className="card-body">
                  { this.state.info}
                  </div>
                </div>
              </div>
            
    
    
          
    
            </div>
           
    
         
           
    
                <div className="row mt-3">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <button className="btn btn-primary btn-rounded" onClick={this.onSubmit} 
              disabled={!this.getToken()}>
                      <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                  </div>
                </div>
              </div>
          
    
    
          </div>
    
      
    
      </section>
      
     
                
    
    
    </div>
    );
  }
}
export default withRouter(RelatedProductDetail)
