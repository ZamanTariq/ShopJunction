import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export default class AdminProfile extends Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      email: "",
      phoneNumber: "",
      cnic: "",
    
     

      error: {},
    };
  }
  componentDidMount() {
    const token = localStorage.admintoken;
    const decoded = jwt_decode(token);
    this.setState({
      adminName: decoded.adminName,
      email: decoded.email,
      phoneNumber: decoded.phoneNumber,
      cnic: decoded.cnic,
      shopName: decoded.shopName,
      shopDetail: decoded.shopDetail,
      shopAddress: decoded.shopAddress,
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
                <td>Admin Name</td>
                <td>{this.state.adminName}</td>
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
                <td>Store</td>
              </tr>
              
           
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
