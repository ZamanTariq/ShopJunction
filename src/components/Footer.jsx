import React, { Component } from "react";
import { Link } from "react-router-dom";
import OurPartners from "./ourPartners";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="page-footer font-small unique-color-dark "
          style={{ position: "sticky" }}
        >
          <div style={{ backgroundColor: "#f57c00" }}>
            <div className="container">
              <div className="row py-3 d-flex align-items-center">
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text ">
                    <b>Get connected with us on social networks!</b>
                  </h6>
                </div>

                <div className="col-md-6 col-lg-7 text-center text-md-right">
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f white-text mr-4"> </i>
                  </a>

                  <a className="tw-ic">
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>

                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>

                  <a className="li-ic">
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>

                  <a className="ins-ic">
                    <i className="fab fa-instagram white-text"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold text-white">
                  Shop Inn
                </h6>
                <hr
                  className=" accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#f57c00" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "0.01",
                    fontFamily: "arial",
                  }}
                >
                  Its an e-commerce site where we not only provide our user's to
                  buy product's but also they can sell their product's by
                  creating his account as Merchant.
                </p>
                <Link to="/admin-signin">Admin Login</Link>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold text-white">
                  Customer Care
                </h6>
                <hr
                  className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#f57c00" }}
                />
                <p>
                  <Link to="/faq">FAQ</Link>
                </p>
                <p>
                  <a href="#!">Help Center</a>
                </p>
                <p>
                  <Link to="/how-to-buy">How to Buy</Link>
                </p>
                <p>
                  <Link to="/tcc">Term & Conditions</Link>
                </p>
                <p>
                  <Link to="/about-us">About Us</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold text-white">
                  Useful links
                </h6>
                <hr
                  className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#f57c00" }}
                />
                <p>
                  <Link to="/our-team">Our Team</Link>
                </p>
                <p>
                  <Link to="/our-services">Our Services</Link>
                </p>
                <p>
                  <Link to="/user-register">Become a Customer</Link>
                </p>
                <p>
                  <a href="#!">Become a Member</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold text-white">
                  Contact
                </h6>
                <hr
                  className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#f57c00" }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Ferozpur Road, Arfa
                  Tower, Lahore
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> shopinnsite@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 92 300 1234567
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 92 301 1234567
                </p>
              </div>
            </div>
          </div>
        </footer>
        <OurPartners />
      </React.Fragment>
    );
  }
}
