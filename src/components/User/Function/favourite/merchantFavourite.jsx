import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Empty from "./EmptyAdminFavourite";



export default class MerchantFavouriteProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
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


  componentDidMount() {
    axios
      .get("http://localhost:5000/favourites/"+this.getUserId())
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("Error" + err);
      });
  }

  
  handleDelete=favourite=> {
    const favourites = this.state.products.filter(m => m._id !== favourite._id);
    this.setState({ products:favourites });
    axios.get('http://localhost:5000/favourites/delete/'+favourite._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  };
   
  ProductList() {
    if(this.state.products.length<1){
      return <Empty/>
    }
    else{
      
    
    return this.state.products.map(favourite => (
      <React.Fragment  key={favourite._id} >
      <div className="container col-lg-2 col-md-3 col-sm-3 col-xs-3 mb-1">
      <section >
          <div className="mb-2">
            <div className="card card-ecommerce">
            <Link to={"/merchant-product-detail/" +favourite.productId}>
              <div className="view overlay my-1 " >
           
                <img src={"Upload/" +favourite.image}  width="120vw" height="120" alt="Sample image" style={{position:"relative",overflow:"hidden",margin:"auto"}}/>
             
                <span>
                  <div className="mask rgba-white-slight"></div>
                </span>
              </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title mb-1 text-uppercase"><strong style={{fontSize:"0.8rem"}}><Link to={"/admin-product-detail/" + favourite._id} className="dark-grey-text">{favourite.title}</Link></strong>
                </h5>
                <ProductWrapper>
                <span className="badge badge-danger mb-2">{favourite.rating}</span>
                <div className="card-footer pb-0">
                  <div className="row mb-0">
                    <h5 className="mb-0 pb-0 mt-1 font-weight-bold" style={{fontSize:"1rem"}}>  <span className="grey-text" style={{fontSize:"1rem"}}><small className="mr-1"><s>{favourite.oldprice}</s></small></span><span className="orange-text"><strong>{favourite.price}Rs</strong></span>
                    </h5>
                  </div>
               
                <span className="float-right hands" onClick={() => this.handleDelete(favourite)} data-toggle="tooltip" data-placement="top" title="Remove" ><i className="fas fa-times"></i></span>   
           
                
                </div>
                </ProductWrapper>
              </div>
            </div>
          </div>
      
      </section>
      
      
      </div>
      </React.Fragment>
    
    )
  )
    }
  }
  
  render() {
    return (
      <React.Fragment>
  
        <div className="container-fluid">
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
    right:2px;
    top: 2px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  
    color: red;
    
 }
 
 .float-right:hover{
   
    font-size: 16px;

  
   
    
 }




 








`;