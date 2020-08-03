import React, { Component } from "react";
import "./custom.css";
import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

export default class adminPanel extends Component {
  render() {
    return (
      <div className="admin-body">
        <div className="container-fluid admin-container">
          <div className="box">
            <div className="icon">
              <SlideshowOutlinedIcon
                style={{ fontSize: 40, marginTop: "18px" }}
              />
            </div>
            <div className="content">
              <h3>
                <b>Deals</b>
              </h3>
              <p>Usama</p>
              <p>
                For viewing the slider deal.You can also delete and modify them
              </p>
              <a
                href="/delete-deal"
                type="button"
                className="btn btn-outline-primary btn-md"
              >
                Edit Deal
              </a>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <AccountCircleOutlinedIcon
                style={{ fontSize: 44, marginTop: "18px" }}
              />
            </div>
            <div className="content">
              <h3>
                <b>Users</b>
              </h3>
              <p>
                For view the registered user.You can also delete and modify them
              </p>
              <a
                href="/delete-deal"
                type="button"
                className="btn btn-outline-primary btn-md"
              >
                Edit User's
              </a>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <AddRoundedIcon style={{ fontSize: 44, marginTop: "18px" }} />
            </div>
            <div className="content">
              <h3>
                <b>Products</b>
              </h3>
              <p>
                For view the upload product's.You can also delete and modify
                them
              </p>
              <a
                href="/product-panel"
                type="button"
                className="btn btn-outline-primary btn-md"
              >
                Edit Products
              </a>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <AddRoundedIcon style={{ fontSize: 44, marginTop: "18px" }} />
            </div>
            <div className="content">
              <h3>
                <b>Products</b>
              </h3>
              <p>
                For view the upload product's.You can also delete and modify
                them
              </p>
              <a
                href="/delete-deal"
                type="button"
                className="btn btn-outline-primary btn-md"
              >
                Edit Products
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
