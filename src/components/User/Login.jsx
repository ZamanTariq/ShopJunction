import React, { Component } from "react";
import { login } from "./Function/UserFunction";
import "../custom.css";
import styled from "styled-components"
import {successfullyLogin,invalidEmailPasswordError,fillAllFields} from '../notificationMessages'

import { Link } from 'react-router-dom';
import { classNames } from 'classnames';

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

export default class Login extends Component {
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
          successfullyLogin();
          this.props.history.push("/");
        }
       else 
       invalidEmailPasswordError()
       
      });
    } else {
      fillAllFields()
    }
  };
 

  render() {
    const { formErrors } = this.state;
    return (
      <Wrapper>

     
      <div className="container ">
        <div className="row">
          <div className="col-md-6 my-2 mx-auto ">
            <form noValidate onSubmit={this.handleSubmit} className="z-depth-1 p-4 ">
         
              <h6 className="font-weight-normal text-center text-uppercase mb-3">Sign In</h6>
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
                  autoFocus
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
                className="btn btn-md btn-block btn-deep-orange "
                
              >
                Sign in
              </button>
              
            <Link to="/forget-password" className="text-center">Forgot password?</Link>
              
            </form>
          </div>
        </div>
      </div>
      </Wrapper>
    );
  }
}
const Wrapper=styled.div`
.container{
  height:320px;
 
}

.form-control:focus{

  border-color: #f57c00;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(255, 167, 4, 0.575);
 
}



`