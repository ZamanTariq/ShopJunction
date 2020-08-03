import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export default class profile extends Component {
  constructor() {
    super();
    this.state = {
      merchantName: "",
      email: "",
      phoneNumber: "",
      cnic: "",
      shopName: "",
      shopDetail: "",
      shopAddress: "",

      error: {}
    };
  }
  componentDidMount() {
    const token = localStorage.merchanttoken;
    const decoded = jwt_decode(token);
    this.setState({
      merchantName: decoded.merchantName,
      email: decoded.email,
      phoneNumber: decoded.phoneNumber,
      cnic: decoded.cnic,
      shopName: decoded.shopName,
      shopDetail: decoded.shopDetail,
      shopAddress: decoded.shopAddress
    });
  }
  render() {
    return (
      <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
        <h1 className="text-center">PROFILE</h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>Merchant Name</td>
                    <td>{this.state.merchantName}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{this.state.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Cnic</td>
                    <td>{this.state.cnic}</td>
                  </tr>
                  <tr>
                    <td>Shop Name</td>
                    <td>{this.state.shopName}</td>
                  </tr>
                  <tr>
                    <td>Shop Detail</td>
                    <td>{this.state.shopDetail}</td>
                  </tr>
                  <tr>
                    <td>Shop Address</td>
                    <td>{this.state.shopAddress}</td>
                  </tr>
                </tbody>
              </table>
            </div>
     
        </div>
 
    );
  }
}
