// edit.component.js

import React, { Component } from "react";
import axios from "axios";
import Title from "../Title";
import { message } from "antd";
import styled from "styled-components";
import {
  FillRequiredFilleds,
  UpdateError,
  successfullyUploaded,
} from "../notificationMessages";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeOldPrice = this.onChangeOldPrice.bind(this);
    this.onChangeNewPrice = this.onChangeNewPrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChange = this.handleChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      image: "",
      category: "Electronic Devices",
      rating: "",
      oldprice: "",
      price: "",
      company: "",
      info: "",
      inCart: false,
      count: 0,
      total: 0,
      stock:"",

      formErrors: {
        title: "",
        company: "",
        info: "",
      },
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/adminproduct/edit/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          title: response.data.title,
          image: response.data.image,
          category: response.data.category,
          rating: response.data.rating,
          oldprice: response.data.oldprice,
          price: response.data.price,
          company: response.data.company,
          info: response.data.info,
          inCart: response.data.inCart,
          count: response.data.count,
          total: response.data.total,
          stock: response.data.stock,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
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

  onChangeStock(e) {
    this.setState({
      stock: e.target.value,
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
      const obj = {
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
        stock:this.state.stock
      };
      axios
        .post(
          "http://localhost:5000/adminproduct/update/" +
            this.props.match.params.id,
          obj
        )
        .then((res) => {
          successfullyUploaded();
        })
        .catch((err) => {
          UpdateError();
        });

      this.props.history.push("/index-admin-product");
    } else {
      FillRequiredFilleds();
    }
  }
 

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container">
        {Title("Update", "Product")}
        <ul>
          <li>
            If you do not want to give discount on products, leave empty the old
            price
          </li>
          <li>
            اگر آپ مصنوعات پر چھوٹ نہیں دینا چاہتے تو پرانی قیمت خالی چھوڑ دیں
          </li>
        </ul>
        <Wrapper>
          <div className="row d-flex justify-content-center">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title: </label>
                <input
                  type="text"
                  className={
                    formErrors.title.length > 0
                      ? "error form-control text-capitalize"
                      : "form-control text-capitalize"
                  }
                  value={this.state.title}
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
                  type="text"
                  className="form-control"
                  value={this.state.image}
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
                  <option value="TV & Home Appliances">
                    TV & Home Appliances
                  </option>
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
                <input
                  type="submit"
                  value="Upload Product"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  .form-control {
    width: 60vw;
  }
  .form-control:focus {
    border-color: #f57c00;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(255, 167, 4, 0.575);
  }

  .reg-btn {
    border-radius: 14px;
    padding: 14px 120px 14px 120px;
  }
`;
