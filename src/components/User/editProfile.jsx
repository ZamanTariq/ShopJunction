import React, { Component } from "react";
//import { register } from "./Function/UserFunction";
import "../custom.css";
import axios from 'axios';
import Title from "../Title";
import jwt_decode from 'jwt-decode'
import {successfullyUpdateProfile } from '../notificationMessages'
const phoneRegex = RegExp(
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
);
const nameRegex = RegExp(
  /^[a-zA-Z]{3,15}$/
);
const passwordRegex = RegExp(
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z`~!@#$%^&*()-_+=|"':;<,>.]{6,}$/
);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);



// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === "" && (valid = false);
//   });

//   return valid;
// };

class EditProfile extends Component {
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
        address: ""
      }
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  getUserId(){
    const token=localStorage.usertoken
        const decoded=jwt_decode(token)
        return decoded._id
         
  }
  componentDidMount() {
    axios.get('http://localhost:5000/newuser/edit/'+this.getUserId())
        .then(response => {
            this.setState({ 
    firstName: response.data.firstname,
    lastName: response.data.lastname,
    email: response.data.email,
    password: response.data.password,
    phone: response.data.phone,
    address: response.data.address,
     });
     console.log(response)
   
        })
        .catch(function (error) {
            console.log(error);
        })
        
  }

  handleSubmit =async e => {
    e.preventDefault();

    
      const newUser = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address
      }
    

     await axios.post('http://localhost:5000/newuser/update/'+this.getUserId(), newUser)
      .then(res => console.log(res.data),successfullyUpdateProfile());
     await  this.props.history.push('/');
      
  
    
  };

  handleChange = e => {
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
        formErrors.phone =phoneRegex.test(value) 
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

    this.setState(
      { formErrors, [name]: value, [e.target.name]: e.target.value }
    );
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container reg">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">{Title("Edit", "Profile")}</h1>
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
              <label> </label>
              <label  
                className="form-control"
                
                > {this.state.email}</label>
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
                className="btn btn-lg btn-primary btn-block"
              >
                Update profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;