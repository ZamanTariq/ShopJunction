import React, { Component } from "react";
import Title from "../../Title";
import { Link } from "react-router-dom";

import MerchantSideBar from './../../merchantSideBar';

export default class merchantProductPanel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <MerchantSideBar/>
          </div>

          <div className="col-lg-9 col-md-9">
            {Title("Merchant", "Panel")}
            {/* UPLOAD PRODUCT  */}
            <div className="card">
              <div className="card-header">Product</div>
              <div className="card-body">
                <h5 className="card-title">Create Product</h5>
                <p className="card-text">
                  You can upload new product from here
                </p>
                <Link to="/create-merchant-product">
                  <span className="btn btn-primary">Upload</span>
                </Link>
              </div>
            </div>
            <br />
            {/* VIEW PRODUCT  */}
            <div className="card">
              <div className="card-header">Product</div>
              <div className="card-body">
                <h5 className="card-title">View Product</h5>
                <p className="card-text">You can view product from here</p>
                <Link to="/merchant-products">
                  <span className="btn btn-primary">View</span>
                </Link>
              </div>
            </div>

            <br />
            {/* UPDATE/DELETE PRODUCT  */}
            <div className="card">
              <div className="card-header">Product</div>
              <div className="card-body">
                <h5 className="card-title">Modify Product</h5>
                <p className="card-text">
                  You can delete or modify product from here
                </p>
                <a
                  href="/edit-merchant-product/:id"
                  className="btn btn-primary"
                >
                  Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
