import React, { Component } from "react";
import Title from "../../Title";

export default class productPanel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar">
              <a className="active" href="#home">
                Home
              </a>
              <a href="/admin-panel">Panel</a>
              <a href="/product-panel">Product Panel</a>
              <a href="/create-admin-product">Create Product</a>
              <a href="/edit-admin-product/:id">Update Product</a>
              <a href="/index-admin-product">Delete Product</a>
            </div>
          </div>
          <div className="col-lg-9">
            {Title("Product", "Panel")}
            {/* UPLOAD PRODUCT  */}
            <div className="card">
              <div className="card-header">Product</div>
              <div className="card-body">
                <h5 className="card-title">Create Product</h5>
                <p className="card-text">
                  You can upload new product from here
                </p>
                <a href="/create-admin-product" className="btn btn-primary">
                  Upload
                </a>
              </div>
            </div>
            <br />
            {/* VIEW PRODUCT  */}
            <div className="card">
              <div className="card-header">Product</div>
              <div className="card-body">
                <h5 className="card-title">View Product</h5>
                <p className="card-text">You can view product from here</p>
                <a href="/index-admin-product" className="btn btn-primary">
                  View{" "}
                </a>
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
                <a href="/edit-admin-product/:id" className="btn btn-primary">
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
