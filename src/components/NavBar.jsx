import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import CartCounter from "./cartCounter";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./custom.css";
import Home from './AdminProduct/Product/Home';

class NavBar extends Component {
  getUserId() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    return decoded._id;
  }
  getMerchantId() {
    const token = localStorage.merchanttoken;
    const decoded = jwt_decode(token);
    return decoded._id;
  }

  logOut(e) {
    console.info(this.getUserId());
    e.preventDefault();

    axios
      .post("http://localhost:5000/newuser/logout/" + this.getUserId())
      .then((res) => {
        localStorage.removeItem("usertoken");
        this.props.history.push(`/`);

        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  merchatLogOut(e) {
    console.info(this.getMerchantId());
    e.preventDefault();
    axios
      .post("http://localhost:5000/newmerchant/logout/" + this.getMerchantId())
      .then((res) => {
        localStorage.removeItem("merchanttoken");
        this.props.history.push(`/`);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

  }

  adminLogout(e) {
    e.preventDefault();
    localStorage.removeItem("admintoken");
    this.props.history.push("/");
  }

  render() {
    const loginRegLink = (
      <div style={{ marginBottom: "65px" }}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./capture.png" height="30" alt="mdb logo" />
            </a>

            {/* <!-- Collapse button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Links --> */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* <!-- Left --> */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to="/" className="nav-link waves-effect">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/merchant-product-list"
                    className="nav-link waves-effect"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favourite" className="nav-link waves-effect">
                    Favourite
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookings" className="nav-link waves-effect">
                    Booking
                  </Link>
                </li>
              </ul>

              {/* <!-- Right --> */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link  rounded waves-effect mr-2"
                  >
                    <i className="fas fa-key mr-1"></i>Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link border border-warning rounded waves-effect mr-2"
                  >
                    <i className="fas fa-lock mr-1"></i>Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    const userLink = (
      <div style={{ marginBottom: "65px" }}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="./capture.png" height="30" alt="mdb logo" />
            </Link>

            {/* <!-- Collapse button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Links --> */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* <!-- Left --> */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to="/" className="nav-link waves-effect">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/merchant-product-list"
                    className="nav-link waves-effect"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/favouriteProductList"
                    className="nav-link waves-effect"
                  >
                    Favourite
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/mybookings" className="nav-link waves-effect">
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/myorders" className="nav-link waves-effect">
                    Orders
                  </Link>
                </li>
              </ul>
              <br />
              <br />
              {/* <!-- Right --> */}
              <ul className="navbar-nav nav-flex-icons">
                <Link to="/mycart" className="nav-link waves-effect">
                  <li className="nav-item mr-3">
                    <CartCounter />
                  </li>
                </Link>
                <Link to="/user-profile" className="nav-link waves-effect">
                  <li className="nav-item mr-4">
                    <i className="fas fa-user-circle"></i>
                  </li>
                </Link>

                <li className="nav-item">
                  <button
                    onClick={this.logOut.bind(this)}
                    className="nav-link  border border-primary rounded waves-effect mr-2 lg-color"
                  >
                    <i className="fas fa-sign-out-alt lg-color"></i>
                    <p className=" lg-color">LOGOUT</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    const adminLink = (
      <div style={{ marginBottom: "56px" }}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="./capture.png" height="30" alt="mdb logo" />
            </Link>

            {/* <!-- Collapse button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Links --> */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* <!-- Left --> */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to="/admin-dashboard" className="nav-link waves-effect">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/myAdminProducts" className="nav-link waves-effect">
                    My Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-orders" className="nav-link waves-effect">
                    Orders
                  </Link>
                </li>
              </ul>
              <br />
              <br />
              {/* <!-- Right --> */}
              <ul className="navbar-nav nav-flex-icons">
                <Link to="/admin-profile" className="nav-link waves-effect">
                  <li className="nav-item mr-4">
                    <i className="fas fa-user-circle"></i>
                  </li>
                </Link>

                <li className="nav-item">
                  <button
                    onClick={this.adminLogout.bind(this)}
                    className="nav-link  border border-primary rounded waves-effect mr-2"
                  >
                    <i className="fas fa-sign-out-alt lg-color"></i>
                    <p className=" lg-color">LOGOUT</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    const merchantLink = (
      <div style={{ marginBottom: "56px" }}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="./capture.png" height="30" alt="mdb logo" />
            </Link>

            {/* <!-- Collapse button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Links --> */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* <!-- Left --> */}
              <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
              <Link
                to="/merchant-shop"
                className="nav-link waves-effect"
              >
                Home
              </Link>
            </li>
                <li className="nav-item ">
                  <Link
                    to="/merchant-products"
                    className="nav-link waves-effect"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/orders" className="nav-link waves-effect">
                    Orders
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/bookingRequests" className="nav-link waves-effect">
                    Bookings
                  </Link>
                </li>
              </ul>
              <br />
              <br />
              {/* <!-- Right --> */}
              <ul className="navbar-nav nav-flex-icons ">
                <Link to="/merchant-profile" className="nav-link waves-effect">
                  <li className="nav-item mr-4">
                    <i className="fas fa-user-circle"></i>
                  </li>
                </Link>

                <li className="nav-item">
                  <button
                    onClick={this.merchatLogOut.bind(this)}
                    className="nav-link  border border-primary rounded waves-effect mr-2"
                  >
                    <i className="fas fa-sign-out-alt lg-color"></i>
                    <p className=" lg-color">LOGOUT</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    return (
      <div>
        {localStorage.usertoken
          ? userLink
          : localStorage.merchanttoken
          ? merchantLink
          : localStorage.admintoken
          ? adminLink
          : loginRegLink}
      </div>
    );
  }
}

export default withRouter(NavBar);
