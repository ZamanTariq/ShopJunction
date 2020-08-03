import React, { Component } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {fillAllFields} from '../../notificationMessages'

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
export default class MerchantResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkDate: "",
      email: "",
      password: "",
      
      errors: {},
      formErrors: {
        email: "",
        
      },
     
    };
  }
  componentDidMount() {
    let slugParam = this.props.match.params.slug;
    let splitSlug = slugParam.split("+++");
    let reqDate = splitSlug[0];
    let email = splitSlug[1];
    console.log(reqDate);
    console.log(email);
    this.setState({ email: email, linkDate: reqDate });
    let date1 = new Date(reqDate);
    let currentDate = new Date();
    let differenceinMS = currentDate - date1;
    if (differenceinMS > 3600000) {
      NotificationManager.error(
        "Link Not Valid link will be valid for 15 min.Please sent the reset link Again"
      );

    }
  }
  handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

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
  ha


  handleForm = (e) => {
    e.preventDefault();
    if(formValid(this.state)){
    if (this.state.email === "") {
      NotificationManager.warning("Email is Required");
      return false;
    }
    // const data = { email: this.state.email, };
    // console.log(data)
    axios
      .post("http://localhost:5000/newmerchant/updatepassword", this.state)
      .then((result) => {
        NotificationManager.success(result.data.msg) 
        this.props.history.push("/merchant-login")
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          NotificationManager.error(err.response.data.msg);
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: err.response });
      });}else{

 fillAllFields()
      }
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header text-center">Reset Password</div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Email</label>
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
                    />  {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                  </div>
                 
                </div>
                <div className="card-footer text-center">
                  <input
                    type="button"
                    value="Reset"
                    onClick={this.handleForm}
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </form>
      </div>
    );
  }
}
