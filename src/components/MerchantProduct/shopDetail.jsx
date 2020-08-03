import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {ProductAddtoCartSuccessfully,ProductAlreadyIntheCart} from '../notificationMessages'


class Deal extends Component {

constructor(props) {
    super(props);
    this.state = {
      productId:'',
      merchantId:'',
      userId:'',
      title: '',
      image: '',
      category:'',
      price:'',
      company:'',
      info:'',
      inCart:'',
      count:'',
      total:'',
      quantity:1,
      totalPrice:'',
      userAddress:'',
      shopName:'',
      shopAddress:'',

    }
    this.onSubmit = this.onSubmit.bind(this);
  }
getUserId (){
    const token=localStorage.usertoken
    const decoded=jwt_decode(token)
    this.setState({
        userId:decoded._id,
        userAddress:decoded.address 
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
getUserEmail() {
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);
  this.setState({
    userAddress: decoded.address,
  });
  return decoded.email;
}
getToken(){
    const token=localStorage.usertoken
    return token;

  }
  
componentDidMount() {
        this.setState({
          productId:this.props.deal._id,
          merchantId:this.props.deal.merchantId,
          title:this.props.deal.title,
          image: this.props.deal.image,
          category:this.props.deal.category,
          price: this.props.deal.price,
          company: this.props.deal.company,
          info: this.props.deal.info,
          inCart: this.props.deal.inCart,
          count: this.props.deal.count,
          total: this.props.deal.total,
          shopName: this.props.deal.shopName,
          shopAddress:this.props.deal.shopAddress,
        });     
  }
onSubmit(e) {
  e.preventDefault();
    axios.post('http://localhost:5000/addtocart', {
      userId: this.getUserId(),
      merchantId: this.state.merchantId,
      productId:this.state.productId,
      userEmail:this.getUserEmail(),
      title: this.state.title,
      image: this.state.image,
      category: this.state.category,
      price: this.state.price,
      company: this.state.company,
      info: this.state.info,
      inCart: this.state.inCart,
      count: this.state.count,
      total: this.state.total,
      quantity: this.state.quantity,
      totalPrice: this.state.price,
      shopAddress:this.state.shopAddress,
      userAddress: this.getUserAddress(),
      })
      .then((res) =>{
        if(res.status===200){
       ProductAddtoCartSuccessfully()}
        })
      .catch((ex) => {
        if(ex.response && ex.response.status===400){
        ProductAlreadyIntheCart();
        }
      });
        
       
  }


  render() {
        return(
  <React.Fragment >
  <div className="container col-lg-2 col-md-3 col-sm-3 col-xs-3 mb-1 mx-3">
  <section >
      <div className="mb-2">
        <div className="card card-ecommerce">
        <Link to={"/merchant-product-detail/" +this.props.deal._id}>
          <div className="view overlay my-1 " >
       
            <img src={"/Upload/" +this.props.deal.image}  width="120vw" height="120" alt="Sample image" style={{position:"relative",overflow:"hidden",margin:"auto"}}/>
         
            <span>
              <div className="mask rgba-white-slight"></div>
            </span>
          </div>
          </Link>
          <div className="card-body">
            <h5 className="card-title mb-1 text-uppercase"><strong style={{fontSize:"0.8rem"}}><Link to={"/merchant-product-detail/" + this.props.deal._id} className="dark-grey-text">{this.props.deal.title}</Link></strong>
            
            </h5>
            
            <ProductWrapper>
            <span className="badge badge-danger mb-2">{this.props.deal.rating}</span>
            
         
    
   
            <div className="card-footer pb-0">
              <div className="row mb-0">
                <h5 className="mb-0 pb-0 mt-1 font-weight-bold" style={{fontSize:"1rem"}}>  <span className="grey-text" style={{fontSize:"1rem"}}><small className="mr-1"><s>{this.props.deal.oldprice}</s></small></span><span className="orange-text"><strong>{this.props.deal.price}Rs</strong></span>
                
                </h5>
               
              </div> 
              {localStorage.usertoken ? (
                <React.Fragment>
                 
                  <span
                    className="float-right hands"
                    onClick={this.onSubmit}
                      
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to Cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  
                  <Link to="/user-login">
                    <span
                      className="float-right"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                  </Link>
                </React.Fragment>
              )}
            
            </div>
            </ProductWrapper>
          </div>
        </div>
      </div> 
  </section>
  </div>
  </React.Fragment>);
}
}

export default class ShopDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      
      merchantName:'',
      shopName:'',
      shopDetail:'',
      shopAddress:'',
      id:''
      
    };
  }
 
  componentDidMount() {
    

    axios.get('http://localhost:5000/newmerchant/profile/'+this.props.match.params.id)
    .then(res => {
      
      this.setState({
        merchantName: res.data[0].merchantName,
        shopName:res.data[0].shopName,
        shopDetail:res.data[0].shopDetail,
        shopAddress:res.data[0].shopAddress, });
    })
    .catch(function (error) {
      console.log(error);

    })
 
    axios
      .get("http://localhost:5000/merchantproduct/"+this.props.match.params.id)
      .then(res => {
        this.setState({
             products: res.data,
             
        });
      }).catch(err => {
        console.log("Error" + err);
      });  
      
     
  }

ProductList() {
    return this.state.products.map(currentDeal => { 
      return <Deal deal={currentDeal} key={currentDeal._id} />
    }) ;  
  }

  shop(){

      return <div className="jumbotron container mt-5 mx-3">
      <div className="col-sm-8 mx-auto">
        <h3 className="text-center"><i class="fas fa-id-card m-3"></i>Shop Profile</h3>
      </div>
      <table className="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Owner Name <i class="fas fa-signature"></i></td>
            <td>{this.state.merchantName}</td>
          </tr>
          <tr>
            <td>Shop Name <i class="fab fa-shopify"></i></td>
            <td>{this.state.shopName}</td>
          </tr>
          <tr>
            <td>Shop Detail <i class="fas fa-info-circle"></i></td>
            <td>{this.state.shopDetail}</td>
          </tr>
          <tr>
            <td>Shop Address  <i class="fas fa-map-marker-alt"></i></td>
            <td>{this.state.shopAddress}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
  }

 
 
render() {
    return (
      <React.Fragment>
        <div className="container">
        {this.shop()}
        <div className=" text-center">
        <h3 className="panel-title text-center "><b><strong style={{fontSize:"1.8rem"}}>Our Products</strong></b></h3>
        </div>
        <div className="row">{this.ProductList()}</div>
        </div>
      </React.Fragment>
    );
  }
}
const ProductWrapper = styled.div`

  .badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    background: red;
    color: #fff;
    padding: 3px 5px;
  }

 .float-right{
    position: absolute;
    right:0;
    top: 150px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  
    color: grey;
    
 }
 
 .float-right:hover{
    position: absolute;
    right:0;
    top: 150px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  
    color: red;
    
 }




 








`;