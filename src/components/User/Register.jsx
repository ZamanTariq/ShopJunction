import React, { Component } from "react";
import styled from "styled-components"
import "../custom.css";
import {fillAllFields,AlreadyHaveAccount,successfullyRegistered} from '../notificationMessages'
import  axios  from 'axios';

const phoneRegex = RegExp(
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
);
const nameRegex = RegExp(/^[a-zA-Z]{3,15}$/);
const passwordRegex = RegExp(
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z`~!@#$%^&*()-_+=|"':;<,>.]{6,}$/
);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);

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

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      },
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const newUser = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address,
      };
      axios.post('http://localhost:5000/newUser/signup',newUser).then((res) => {
        if(res.data){
          successfullyRegistered()
        this.props.history.push("/user-login");
        console.log(this.state.email, ":Resgistered");
      }
      }).catch((err) => {
        AlreadyHaveAccount()
this.setState({email:''})
      });
    } else {
     fillAllFields()
    }
  };
 


  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName = nameRegex.test(value)
          ? ""
          : "Must contain at least 3 letters";
        break;
      case "lastName":
        formErrors.lastName = nameRegex.test(value)
          ? ""
          : "invalid Last name only contains letters ";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "must contain at least one letter, at least one number, and be longer than six charaters.";
        break;
      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "First digit must start with 0 or +92 or  0092";
        break;
      case "address":
        formErrors.address =
          value.length < 15 ? "minimum 15 characaters required" : "";
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

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container reg">
        <Wrapper>

     
        <div className="row">
          <div className="col-md-6 my-2 mx-auto">
            <form noValidate onSubmit={this.handleSubmit} className="z-depth-1 p-4 ">
            <h6 className="font-weight-normal text-center text-uppercase mb-3">Sign Up</h6>
              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.firstName.length > 0
                      ? "error form-control text-capitalize"
                      : "form-control text-capitalize "
                  }
                  name="firstName"
                  placeholder="Enter First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  autoFocus
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.lastName.length > 0
                      ? "error form-control text-capitalize"
                      : "form-control text-capitalize"
                  }
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={
                    formErrors.email.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="email"
                  placeholder="Enter Email"
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
                  className={
                    formErrors.password.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.phone.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="phone"
                  placeholder=" XXXX-XXXXXXX"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                {formErrors.phone.length > 0 && (
                  <span className="errorMessage">{formErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.address.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                {formErrors.address.length > 0 && (
                  <span className="errorMessage">{formErrors.address}</span>
                )}
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-md btn-block btn-deep-orange"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        </Wrapper>
      </div>

    );
  }
}

export default Register;
const Wrapper=styled.div`
.container{
  height:320px;
 
}

.form-control:focus{

  border-color: #f57c00;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(255, 167, 4, 0.575);
 
}



`