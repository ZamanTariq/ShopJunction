// create.component.js

import React, { Component } from "react";
import axios from "axios";
import Title from "../Title";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import {
  SuccessfullyCreateProduct,
  CreateProductError,
  FillRequiredFilleds,
} from "./../notificationMessages";
import MerchantSideBar from "./../merchantSideBar";
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeBookingStatus = this.onChangeBookingStatus.bind(this);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onChangeOldPrice = this.onChangeOldPrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeMinBookQuantity = this.onChangeMinBookQuantity.bind(this);
    this.onChangeMaxBookQuantity = this.onChangeMaxBookQuantity.bind(this);
    this.onChangeNewPrice = this.onChangeNewPrice.bind(this);
    this.onChange = this.handleChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      merchantId: "",
      title: "",
      image: "",
      category: "Electronic Devices",
      oldprice: "",
      price: "",
      rating: "",
      company: "",
      info: "",
      inCart: "false",
      count: 0,
      total: 0,
      merchantPhone: "",
      shopName: "",
      shopAddress: "",
      bookingStatus: "true",
      orderStatus: "true",
      minBookQuantity: "",
      maxBookQuantity: "",
      stock: "",

      formErrors: {
        title: "",
        company: "",
        info: "",
      },
    };
  }
  componentDidMount() {
    const token = localStorage.merchanttoken;
    const decoded = jwt_decode(token);
    this.setState({
      merchantId: decoded._id,
      merchantPhone: decoded.phoneNumber,
      shopName: decoded.shopName,
      shopAddress: decoded.shopAddress,
    });
  }

  onChangeImage = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };
  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onChangeBookingStatus(e) {
    this.setState({
      bookingStatus: e.target.value,
    });
  }
  onChangeOrderStatus(e) {
    this.setState({
      orderStatus: e.target.value,
    });
  }
  onChangeStock(e) {
    this.setState({
      stock: e.target.value,
    });
  }
  onChangeMinBookQuantity(e) {
    this.setState({
      minBookQuantity: e.target.value,
    });
  }
  onChangeMaxBookQuantity(e) {
    this.setState({
      maxBookQuantity: e.target.value,
    });
  }
  onChangeOldPrice(e) {
    const discount = (this.state.price / e.target.value) * 100;
    const actuallDiscount = 100 - discount;
    var rounded = Math.round(actuallDiscount * 10) / 10;
    const actualPercantage = rounded + "%";
    var number;
    if (
      e.target.value === "" ||
      rounded <= 0 ||
      rounded === "infinity" ||
      rounded === "-infinity" ||
      rounded === isNaN
    ) {
      number = "";
    } else {
      number = actualPercantage;
    }

    this.setState({
      price: this.state.price,
      oldprice: e.target.value,
      rating: number,
    });
  }

  onChangeNewPrice = (e) => {
    this.setState({
      price: e.target.value,
      oldprice: this.state.oldprice,
    });

    this.changeDiscout(this.state.oldprice, e.target.value);
  };

  changeDiscout(o, n) {
    const discount = (n / o) * 100;
    const actuallDiscount = 100 - discount;
    var rounded = Math.round(actuallDiscount * 10) / 10;
    const actualPercantage = rounded + "%";
    var number;
    if (
      this.state.oldprice === "" ||
      this.state.price === "" ||
      rounded <= 0 ||
      rounded === "infinity" ||
      rounded === "-infinity" ||
      rounded === isNaN
    ) {
      number = "";
    } else {
      number = actualPercantage;
    }
    this.setState({
      rating: number,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "title":
        formErrors.title =
          value.length < 3 || value.length > 15
            ? "max 15characaters required"
            : "";
        break;
      case "company":
        formErrors.company =
          value.length < 3 || value.length > 15
            ? "maximum 15 characaters required"
            : "";
        break;
      case "info":
        formErrors.info =
          value.length < 3 || value.length > 15
            ? "maximum 10 characaters required"
            : "";
        break;
      default:
        break;
    }

    this.setState(
      { formErrors, [name]: value, [e.target.name]: e.target.value },
      () => console.log(this.state)
    );
  };

  onSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      var obj = {
        merchantId: this.state.merchantId,
        title: this.state.title,
        image: this.state.image,
        category: this.state.category,
        rating: this.state.rating,
        oldprice: this.state.oldprice,
        price: this.state.price,
        company: this.state.company,
        info: this.state.info,
        inCart: this.state.inCart,
        count: this.state.count,
        total: this.state.total,
        merchantPhone: this.state.merchantPhone,
        shopName: this.state.shopName,
        shopAddress: this.state.shopAddress,
        bookingStatus: this.state.bookingStatus,
        orderStatus: this.state.orderStatus,
        minBookQuantity: this.state.minBookQuantity,
        maxBookQuantity: this.state.maxBookQuantity,
        stock: this.state.stock,
      };
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      axios
        .post("http://localhost:5000/merchantproduct/add", form_data)
        .then((res) => {
          SuccessfullyCreateProduct();
        })
        .catch((err) => {
          CreateProductError();
        });
      this.setState({
        title: "",
        image: "",
        category: "",
        rating: "",
        oldprice: "",
        price: "",
        company: "",
        info: "",
        inCart: "",
        count: "",
        total: "",
        stock: "",
      });
      this.props.history.push("/merchant-products");
    } else {
      FillRequiredFilleds();
    }
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container " style={{ marginTop: "80px" }}>
        {Title("Create", "Product")}
        <ul>
          <li>
            If you do not want to give discount on products, leave empty the old
            price{" "}
          </li>
          <li>
            اگر آپ مصنوعات پر چھوٹ نہیں دینا چاہتے تو پرانی قیمت خالی چھوڑ دیں
          </li>
        </ul>
        <form className="mx-2" noValidate onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label>Title: </label>
            <input
              type="text"
              className={
                formErrors.title.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              onChange={this.handleChange}
              name="title"
            />
            {formErrors.title.length > 0 && (
              <span className="errorMessage">{formErrors.title}</span>
            )}
          </div>
          <div className="form-group">
            <label>Image: </label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={(event) => this.onChangeImage(event)}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <select
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            >
              <option value="Electronic Devices">Electronic Devices</option>
              <option value="Electronic Accessories">
                Electronic Accessories
              </option>
              <option value="TV & Home Appliances">TV & Home Appliances</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Babies & Toys">Babies & Toys</option>
              <option value="Groceries & Pets">Groceries & Pets</option>
              <option value="Home & Lifestyle">Home & Lifestyle</option>
              <option value="Women Fashion">Women Fashion</option>
              <option value="Men Fashion">Men Fashion</option>
              <option value="Watches, Bags & Jewelery">
                Watches, Bags & Jewelery
              </option>
              <option value="Sports & Outdoor">Sports & Outdoor</option>
              <option value="Automotive & Motorbike">
                Automotive & Motorbike
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Actual Price: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.price}
              onChange={(event) => this.onChangeNewPrice(event)}
              name="price"
            />
          </div>
          <div className="form-group">
            <label>Old Price: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.oldprice}
              onChange={(event) => this.onChangeOldPrice(event)}
              name="oldprice"
            />
          </div>

          <div className="form-group">
            <label>Rating/%Off: </label>
            <label className="form-control"> {this.state.rating}</label>
          </div>
          <div className="form-group">
            <label>Stock Value: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.stock}
              onChange={(event) => this.onChangeStock(event)}
              name="stock"
            />
          </div>
          <div className="form-group">
            <label>Minimum Booking Quantity: </label>
            <input
              type="number"
              min="12"
              className="form-control"
              value={this.state.minBookQuantity}
              onChange={(event) => this.onChangeMinBookQuantity(event)}
              name="minBookQuantity"
            />
          </div>
          <div className="form-group">
            <label>Maximum Booking Quantity: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.maxBookQuantity}
              onChange={(event) => this.onChangeMaxBookQuantity(event)}
              name="maxBookQuantity"
            />
          </div>

          <div className="form-group">
            <label>Company: </label>
            <input
              type="text"
              className={
                formErrors.company.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              value={this.state.company}
              onChange={this.handleChange}
              name="company"
            />
            {formErrors.company.length > 0 && (
              <span className="errorMessage">{formErrors.company}</span>
            )}
          </div>
          <div className="form-group">
            <label>Info: </label>
            <input
              type="text"
              className={
                formErrors.info.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              value={this.state.info}
              onChange={this.handleChange}
              name="info"
            />
            {formErrors.info.length > 0 && (
              <span className="errorMessage">{formErrors.info}</span>
            )}
          </div>
          <div className="form-group">
            <label>Order Status: </label>
            <select
              className="form-control"
              value={this.state.orderStatus}
              onChange={this.onChangeOrderStatus}
            >
              <option value="true">Allow Order</option>
              <option value="false">Not Allow Order</option>
            </select>
          </div>
          <div className="form-group">
            <label>Booking Status: </label>
            <select
              className="form-control"
              value={this.state.bookingStatus}
              onChange={this.onChangeBookingStatus}
            >
              <option value="true">Allow Booking</option>
              <option value="false">Not Allow Booking</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Upload Product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
