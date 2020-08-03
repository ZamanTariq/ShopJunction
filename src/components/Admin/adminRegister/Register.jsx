import React, { Component } from "react";
import {message} from 'antd';
import "../../custom.css";
import axios from 'axios'
import {fillAllFields,AlreadyHaveAccount,successfullyRegistered} from '../../notificationMessages'
const phoneRegex = RegExp(
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
);
const nameRegex = RegExp(/^[a-zA-Z]{6,15}$/);
const passwordRegex = RegExp(
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z`~!@#$%^&*()-_+=|"':;<,>.]{6,}$/
);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);
const cnicRegex = RegExp(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/);

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

class AdminRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: "",
      email: "",
      password: "",
      phoneNumber: "",
      cnic: "",
      

      formErrors: {
        adminName: "",
        email: "",
        password: "",
        phoneNumber: "",
        cnic: "",
        
      },
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const newUser = {
        adminName: this.state.adminName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        cnic: this.state.cnic,
      };
      axios.post('http://localhost:5000/newAdmin/signup',newUser )
      .then((res) => {
        if(res.data){
         successfullyRegistered()
        this.props.history.push("/admin-login");
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
      case "adminName":
        formErrors.adminName = nameRegex.test(value)
          ? ""
          : "Must contain atleast 6  letters ";

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
      case "phoneNumber":
        formErrors.phoneNumber = phoneRegex.test(value)
          ? ""
          : "First digit must start with 0 or +92 or  0092";
        break;
     
      case "cnic":
        formErrors.cnic = cnicRegex.test(value)
          ? ""
          : "must be in this form xxxxx-xxxxxxx-x";
        break;
      
      default:
        break;
    }

    this.setState(
      { formErrors, [name]: value, [e.target.name]: e.target.value },
      () => console.log(this.state)
    );
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container reg">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-bold my-3"> Admin Sign Up</h1>
              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.adminName.length > 0
                      ? "error form-control text-capitalize"
                      : "form-control text-capitalize"
                  }
                  name="adminName"
                  placeholder="Enter admin Name"
                  value={this.state.adminName}
                  onChange={this.handleChange}
                />
                {formErrors.adminName.length > 0 && (
                  <span className="errorMessage">{formErrors.adminName}</span>
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
                  placeholder="Enter your  Email"
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
                  placeholder="password"
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
                    formErrors.phoneNumber.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
                {formErrors.phoneNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.phoneNumber}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={
                    formErrors.cnic.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="cnic"
                  placeholder="Enter cnic xxxxx-xxxxxxx-x"
                  value={this.state.cnic}
                  onChange={this.handleChange}
                />
                {formErrors.cnic.length > 0 && (
                  <span className="errorMessage">{formErrors.cnic}</span>
                )}
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block btn-btm"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminRegister;
