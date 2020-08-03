import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "../../Deal/View";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { ProductAddtoCartSuccessfully,ProductAlreadyIntheCart,ProductAddToFavourites,ProductAlreadyIntheFavourites } from './../../notificationMessages';
import Loading from "../../LinearLoading";
class Deal extends Component {
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
  getToken() {
    const token = localStorage.usertoken;
    return token;
  }

  componentDidMount() {
    this.setState({
      productId: this.props.deal._id,
      merchantId: this.props.deal.adminId,
      title: this.props.deal.title,
      image: this.props.deal.image,
      category: this.props.deal.category,
      price: this.props.deal.price,
      company: this.props.deal.company,
      info: this.props.deal.info,
      inCart: this.props.deal.inCart,
      count: this.props.deal.count,
      total: this.props.deal.total,
      shopName: this.props.shopName,
      shopAddress: this.props.shopAddress,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/addtocart", {
        userId: this.getUserId(),
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
        quantity: this.state.quantity,
        totalPrice: this.state.price,
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

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/adminFavourites", {
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
      <React.Fragment>
        
        <div className="container col-lg-2 col-md-3 col-sm-3 col-xs-3 mb-1">
          <section>
            <div className="mb-2">
              <div className="card card-ecommerce">
                <Link to={"/related-product-detail/" + this.props.deal._id}>
                  <div className="view overlay my-1 ">
                    <img
                      src={"../Upload/" + this.props.deal.image}
                      width="120vw"
                      height="120"
                      alt="Sample image"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    />

                    <span>
                      <div className="mask rgba-white-slight"></div>
                    </span>
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title mb-1 text-uppercase">
                    <strong style={{ fontSize: "0.8rem" }}>
                      <Link
                        to={"/related-product-detail/" + this.props.deal._id}
                        className="dark-grey-text"
                      >
                        {this.props.deal.title}
                      </Link>
                    </strong>
                  </h5>
                  <ProductWrapper>
                    <span className="badge badge-danger mb-2">
                      {this.props.deal.rating}
                    </span>

                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <h5
                          className="mb-0 pb-0 mt-1 font-weight-bold"
                          style={{ fontSize: "1rem" }}
                        >
                          
                          <span
                            className="grey-text"
                            style={{ fontSize: "1rem" }}
                          >
                            <small className="mr-1">
                              <s>{this.props.deal.oldprice}</s>
                            </small>
                          </span>
                          <span className="orange-text">
                            <strong>{this.props.deal.price}Rs</strong>
                          </span>
                        </h5>
                      </div>

                      {localStorage.usertoken ? (
                        <React.Fragment>

                     
                        <span className="float-up"
                          
                            onClick={this.handleSubmit}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="favourite"
                          >
                           
                            <i className="fas fa-heart"></i>
                          </span>
                          <span className="float-right"
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
                       
                            <span className="float-up"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Favourite"
                            >
                        <i className="far fa-heart "></i>
                            </span>
                            </Link>
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
      </React.Fragment>
    );
  }
}

export default class adminProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading:true
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/adminproduct/category/relatedproduct/menfashion")
      .then((res) => {
        this.setState({ products: res.data,loading: false });
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }
  ProductList() {
    return this.state.products.map((currentDeal) => {
      return <Deal deal={currentDeal} key={currentDeal._id} />;
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* <Slider/> */}
        <div className="container-fluid">
          {this.state.loading?<Loading/>:    <div className="row">{this.ProductList()}</div>}
      
          
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

  .float-right {
    position: absolute;
    right: 0;
    top: 150px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;

    color: grey;
  }

  .float-right:hover {
   
    color: red;
  }

  
  .float-up {
    position: absolute;
    right: 2px;
    top: 2px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;

    color: grey;
  }

  .float-up:hover {
   
    color: orange;
  }
`

;
