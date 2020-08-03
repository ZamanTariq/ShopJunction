// edit.component.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ConfirmBooking, BookingError } from "../notificationMessages";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { SelectBookingDate  } from "../notificationMessages";

export default class BookingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      merchantId: "",
      productId: "",
      userEmail: "",
      title: "",
      image: "",
      category: "",
      price: "",
      company: "",
      info: "",
      inCart: "",
      count: "",
      total: "",
      userAddress: "",
      shopName: "",
      shopAddress: "",
      quantity: '',
      totalPrice: "",
      bookingDate: "",
      paymentMethod: "Cash on Delivery",
      stock:'',
      minBookQuantity:'',
      maxBookQuantity:'',
      date: "",
    };
    this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
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

    return decoded.email;
  }
  getToken() {
    const token = localStorage.usertoken;
    return token;
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/merchantproduct/edit/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          productId: response.data._id,
          merchantId: response.data.merchantId,
          title: response.data.title,
          image: response.data.image,
          category: response.data.category,
          price: response.data.price,
          company: response.data.company,
          info: response.data.info,
          inCart: response.data.inCart,
          count: response.data.count,
          total: response.data.total,
          shopName: response.data.shopName,
          shopAddress: response.data.shopAddress,
          stock: response.data.stock,
          quantity:response.data.minBookQuantity,
          minBookQuantity:response.data.minBookQuantity,
          maxBookQuantity:response.data.maxBookQuantity
        });
        console.log(this.s);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const minDate=new Date()
    
    if (this.state.bookingDate === null || this.state.bookingDate === "" ){
      SelectBookingDate();
     
    }
    
else {
      axios
        .post("http://localhost:5000/bookings", {
          userId: this.getUserId(),
          merchantId: this.state.merchantId,
          productId: this.state.productId,
          userEmail: this.getUserEmail(),
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
          totalPrice: this.state.quantity * this.state.price,
          userAddress: this.getUserAddress(),
          shopName: this.state.shopName,
          shopAddress: this.state.shopAddress,
          bookingDate: this.state.bookingDate,
          paymentMethod: this.state.paymentMethod,
        })
        .then((res) => console.log(res.data), ConfirmBooking())
        .catch((err) => {
          BookingError();
        });

      this.setState({
        quantity: "",
        bookingDate: "",
        paymentMethod: "",
      });
    }
  }
  

  onChangeDate(date) {
    this.setState({
      bookingDate: date,
    });
  }

  getTotalPrice() {
    const price = this.state.price;
    const quantity = this.state.quantity;
    const total = price * quantity;
    return total;
  }
  onChangePaymentMethod(e) {
    this.setState({
      paymentMethod: e.target.value,
    });
  }

  handleIncrement =(e)=>{
    e.preventDefault();
   
    this.setState({
      quantity: this.state.quantity + 1,
      totalPrice:this.getTotalPrice()
     
    });

  };
  handleDecrement =(e)=>{
    e.preventDefault();
    this.setState({
      quantity:this.state.quantity-1,
      totalPrice:this.getTotalPrice()
    })

  }

  render() {
    return (
      <Wrapper>
        <div className="container py-5 mt-0">
          {/*Title*/}
          <div className="row">
            <div className="col-10 mx-auto text-center text-slanted my-5">
              <h1 className="head">{this.state.title}</h1>
            </div>
          </div>
          {/*End Title*/}
          {/*Product Info*/}
          <div className="row">
            <div className="col-9 mx-auto col-md-5 my-3 text-capitalize zoom-in">
              <img
                src={"/Upload/" + this.state.image}
                className="img-fluid"
                alt="product"
                width="270px"
                height="220px"
              />
            </div>
            {/*Product Text*/}
            <div className="col-11 mx-auto col-md-7 my-3 text-capitalize ">
              <div className="text-blue text-muted mt-3 mb-2">
                <strong className="st-head">Product Name:</strong>
                <p className="para-set-1"> {this.state.title} </p>
              </div>
              <div className="text-blue text-muted mt-3 mb-2">
                <strong className="st-head"> Made by: </strong>
                <p className="para-set-2">{this.state.company} </p>
              </div>
              <div className="text-blue">
                <strong className="st-head">price:</strong>
                <p className="para-set-3">Rs.{this.state.price}</p>
              </div>
              <div>
                <strong className="st-head">Shop Name:</strong>
                <p className="para-set-4">{this.state.shopName}</p>
              </div>

              <div>
                <storng className="st-head">Shop Address:</storng>
                <p className="para-set-5">{this.state.shopAddress}</p>
              </div>

              <div>
                <strong className="st-head">info of product</strong>
                <p className="para-set-6">{this.state.info}</p>
                
              </div>

              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="st-head">Quantity</label>
                    <div>
                    <button  disabled={this.state.quantity===this.state.minBookQuantity} onClick={(e)=>this.handleDecrement(e)} className="btn btn-primary btn-sm">-</button>
                    <span className="badge badge-warning  m-2 text-muted"><h6>{this.state.quantity}</h6></span>
                      <button disabled={this.state.quantity===this.state.maxBookQuantity}onClick={(e)=>this.handleIncrement(e)} className="btn btn-primary btn-sm">+</button>
                      </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="st-head">Payment Method</label>
                    <select
                      className="form-control"
                      value={this.state.paymentMethod}
                      onChange={this.onChangePaymentMethod}
                    >
                      <option>Cash on delivery </option>
                      <option>Receive by yourself </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="glyphicon glyphicon-calendar st-head">
                      Booking Date:
                    </label>
                    <DatePicker
                      className="date-set"
                      selected={this.state.bookingDate}
                      onChange={this.onChangeDate}
                      minDate={new Date()}
                      placeholderText="When You Need It"
                    />

                    <div>
                      <label className="st-head">Your total Ammount:</label>
                      <p className="para-set-7">Rs.{this.getTotalPrice()}</p>
                    </div>
                  </div>
                </div>
              </form>

              <div>
                <h2 className="text-danger">
                  Instruction Before Book the Order
                </h2>

                <ul>
                  <li>
                    Your Booking will not be confirm untill the merchant will
                    Confirm it.
                  </li>
                  <li>
                    The Merchant may contact you in order to confirm the
                    booking.
                  </li>
                  <li>See your bookings details in your Booking details.</li>
                  <li>
                    You may visit the shop inorder to directly connect it with
                    seller.
                  </li>
                  <li>
                   Please Check Your pending Boking Status in bookings Tab
                  </li>
                </ul>
              </div>

              <div>
                <Link to="/" className="btn btn-sm btn-danger btn-bk">
                  Back
                </Link>

                <button
                  disabled={!this.getToken()}
                  onClick={this.onSubmit}
                  className="btn btn-sm  btn-warning btn-cb"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  
}

const Wrapper = styled.div`
  .zoom-in img {
    height: 300px;
    box-shadow: 2px 5px 8px #f67a00;
    width: 300px;
    border-radius: 25px;
    border: 1px solid black;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -ms-transition: all 2s ease;
    transition: all 2s ease;
  }

  .btn-bk {
    border-radius: 8px;
    padding: 11px 58px;
    font-size: 15px;
    font-weight: 700;
  }

  .btn-cb {
    border-radius: 8px;
    padding: 11px 4px;
    font-size: 15px;
    font-weight: 700;
  }

  .date-set {
    margin-left: 112px;
    boder: 1ps solid black;
    border-radius: 5px;
    border: 1px solid #b5abab;
    padding: 4px;
  }

  .st-head {
    font-size: 22px;
    color: black;
    font-weight: 700;
  }

  .head {
    border-bottom: 3px dotted #f67a00;
  }

  .zoom-in img:hover {
    width: 400px;
    height: 400px;
  }

  .para-set-1 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 45px;
  }

  .para-set-2 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 95px;
  }

  .para-set-3 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 145px;
  }

  .para-set-4 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 75px;
  }

  .para-set-5 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 55px;
  }

  .para-set-6 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 38px;
  }

  .para-set-7 {
    display: inline-block;
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin-left: 48px;
    display: inline-block;
  }

  @media only screen and (max-width: 600px) {
    .para-set-1 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 18px;
    }

    .para-set-2 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 70px;
    }

    .para-set-3 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 115px;
    }

    .para-set-4 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 45px;
    }

    .para-set-5 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 8px;
    }

    .para-set-6 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 3px;
    }

    .para-set-7 {
      display: inline-block;
      font-size: 22px;
      color: black;
      font-weight: 400;
      margin-left: 3px;
    }
    .date-set {
      margin-left: 12px;
      boder: 1ps solid black;
      border-radius: 5px;
      border: 1px solid #b5abab;
      padding: 4px;
    }
  }
`;
