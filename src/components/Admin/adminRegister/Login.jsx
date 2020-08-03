import React, { Component } from "react";

import { login } from "./function/adminFunction";

import { notification} from 'antd';
import {successfullyLogin,invalidEmailPasswordError,fillAllFields} from './../../notificationMessages'

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class AdminSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
      },
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      default:
        break;
    }
    this.setState({
      formErrors,
      [name]: value,
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      login(user).then((res) => {
        if (res) {
this.props.history.push("/admin-dashboard");
successfullyLogin()
        }
       else 
     invalidEmailPasswordError()
       
      });
    }else {
      fillAllFields()
    }
  };


  openNotification = placement => {
    notification.info({
      message: `Alert`,
      description:
        'Invaid email OR password',
      placement,
    });
  };

  openNotification1 = placement => {
    notification.info({
      message: `Alert`,
      description:
        'Fill all Fields',
      placement,
    });
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal center">Sign In</h1>
              <div className="form-group">
                <input
                
                  type="email"
                  className={
                    formErrors.email.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block btn-btm"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
