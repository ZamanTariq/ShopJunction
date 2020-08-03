// edit.component.js

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Electronic from "./RelatedProducts/Electronic";
import ElectronicAccessories from "./RelatedProducts/ElectronicAccessories";
import TvHomeAppliance from "./RelatedProducts/TV&HomeAppliances";
import BabyToys from "./RelatedProducts/BabiesToys";
import BagsJewelery from "./RelatedProducts/BagsJewelery";
import HealthBeauty from "./RelatedProducts/Health&Beauty";
import HomeLifeStyle from "./RelatedProducts/Home&LifeStyle";
import Men from "./RelatedProducts/MenFashion";
import Women from "./RelatedProducts/WomenFashion";
import AutoBikes from "./RelatedProducts/AutoBikes";
import Pet from "./RelatedProducts/Groceries&Pets";
import Sport from "./RelatedProducts/Sports&Outdoor";
import {
  ProductAddtoCartSuccessfully,
  ProductAlreadyIntheCart,
} from "../../components/notificationMessages";
import { Link } from "react-router-dom";
import ".././custom.css";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      merchantId: "",
      productId: "",
      title: "",
      image: "",
      category: "",
      price: "",
      company: "",
      info: "",
      inCart: "",
      count: "",
      total: "",
      quantity: "",
      totalPrice: "",
      shopAddress: "",
      userAddress: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }
  getUserId() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    return decoded._id;
  }
  getUserAddress() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    return decoded.address;
  }
  getUserEmail() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    return decoded.address;
  }

  getToken() {
    const token = localStorage.usertoken;
    return token;
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/adminproduct/edit/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          productId: response.data._id,
          merchantId: response.data.adminId,
          title: response.data.title,
          image: response.data.image,
          category: response.data.category,
          price: response.data.price,
          oldprice: response.data.oldprice,
          rating: response.data.rating,
          company: response.data.company,
          info: response.data.info,
          inCart: response.data.inCart,
          count: response.data.count,
          total: response.data.total,
          shopAddress: response.data.shopAddress,
        });
        console.log(this.s);
      })
      .catch(function(error) {
        console.log(error);
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
  onChangeQuantity(e) {
    const no = e.target.value;
    const price = this.state.price;
    const total = no * price;
    this.setState({
      quantity: e.target.value,
      totalPrice: total,
    });
  }

  getTotalPrice() {
    const price = this.state.price;
    const quantity = this.state.quantity;
    const total = price * quantity;

    return total;
  }

  render() {
    return (
      <div className="container my-5 py-5 z-depth-1 ">
        <span
          className="hands"
          onClick={this.props.history.goBack}
          style={{ color: "black" }}
        >
          <h4 title="Back">
            <i className="fas fa-arrow-circle-left"></i>Back
          </h4>
        </span>
        <section className="text-center">
          <h3 className="font-weight-bold mb-5">Product Details</h3>

          <div className="row">
            <div className="col-lg-5">
              <div className="carousel  carousel-thumbnails">
                <img
                  src={"/Upload/" + this.state.image}
                  alt="Product Detail"
                  width="10rem"
                  height="10rem"
                  className="img-fluid ml-2"
                />
              </div>
            </div>
            <div className="col-lg-1"></div>
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
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <button
                      className="btn btn-primary btn-rounded"
                      onClick={this.onSubmit}
                    >
                      <i
                        className="fas fa-cart-plus mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row mt-3">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <Link
                      to="/user-login"
                      className="btn btn-primary btn-rounded"
                    >
                      <i
                        className="fas fa-cart-plus mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Add to cart
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="container font-weight-bold">
          Related Products
          <hr className="mt-1" />
          {this.state.category === "Electronic Devices" ? (
            <React.Fragment>
              <Electronic />
            </React.Fragment>
          ) : this.state.category === "Electronic Accessories" ? (
            <React.Fragment>
              <ElectronicAccessories />
            </React.Fragment>
          ) : this.state.category === "Health & Beauty" ? (
            <React.Fragment>
              <HealthBeauty />
            </React.Fragment>
          ) : this.state.category === "Babies & Toys" ? (
            <React.Fragment>
              <BabyToys />
            </React.Fragment>
          ) : this.state.category === "Groceries & Pets" ? (
            <React.Fragment>
              <Pet />
            </React.Fragment>
          ) : this.state.category === "Home & Lifestyle" ? (
            <React.Fragment>
              <HomeLifeStyle />
            </React.Fragment>
          ) : this.state.category === "Women Fashion" ? (
            <React.Fragment>
              <Women />
            </React.Fragment>
          ) : this.state.category === "Men Fashion" ? (
            <React.Fragment>
              <Men />
            </React.Fragment>
          ) : this.state.category === "Watches, Bags & Jewelery" ? (
            <React.Fragment>
              <BagsJewelery />
            </React.Fragment>
          ) : this.state.category === "Sports & Outdoor" ? (
            <React.Fragment>
              <Sport />
            </React.Fragment>
          ) : this.state.category === "Automotive & Motorbike" ? (
            <React.Fragment>
              <AutoBikes />
            </React.Fragment>
          ) : this.state.category === "TV & Home Appliances" ? (
            <React.Fragment>
              <TvHomeAppliance />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}
export default withRouter(Detail);
