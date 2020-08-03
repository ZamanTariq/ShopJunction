import React, { Component } from "react";
import "../../custom.css"
import axios from 'axios';
import Title from "../../Title";
//import color from '@material-ui/core/colors/amber';
const phoneRegex = RegExp(
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
);
const nameRegex = RegExp(
  /^[a-zA-Z]{6,15}$/
);
const passwordRegex = RegExp(
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z`~!@#$%^&*()-_+=|"':;<,>.]{6,}$/
);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);
const cnicRegex = RegExp(
  /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
)

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

class EditMerchant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      merchantName: "",
      email: "",
      password: "",
      phoneNumber: "",
      shopName:"",
      shopDetail:"",
      cnic:"",
      shopAddress:"",
      
      formErrors: {
        merchantName: "",
        email: "",
        password: "",
        phoneNumber: "",
        shopName:"",
        shopDetail:"",
        cnic:"",
        shopAddress:"",
        
      }
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:5000/newmerchant/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
    merchantName: response.data.merchantName,
    email: response.data.email,
    password: response.data.password,
    phoneNumber: response.data.phoneNumber,
    shopName: response.data.shopName,
    shopDetail: response.data.shopDetail,
    cnic: response.data.cnic,
    shopAddress: response.data.shopAddress,
     });
     console.log(response)
   
        })
        .catch(function (error) {
            console.log(error);
        })
        
  }
  handleSubmit = async e => {
    e.preventDefault();

    
      const newUser = {
        merchantName: this.state.merchantName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        shopName:this.state.shopName,
        shopDetail:this.state.shopDetail,
        cnic:this.state.cnic,
        shopAddress:this.state.shopAddress,
        
      };

      await axios.post('http://localhost:5000/newmerchant/update/'+this.props.match.params.id, newUser)
      .then(res => console.log(res.data));
     await  this.props.history.push('/admin/merchants-detail');
      
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "merchantName":
        formErrors.merchantName = nameRegex.test(value)
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
        formErrors.phoneNumber =phoneRegex.test(value) 
        ? ""
        : "First digit must start with 0 or +92 or  0092";
        break;
        case "shopeName":
            formErrors.shopeName =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
            case "shopDetail":
                formErrors.shopDetail =
                  value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "cnic":
              formErrors.cnic =cnicRegex.test(value) 
              ? ""
              : "must be in this form xxxxx-xxxxxxx-x";
              break;
      case "shopAddress":
        formErrors.shopAddress =
          value.length < 6 ? "minimum 6 characaters required" : "";
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
                            <h1 className="h3 mb-3 font-weight-bold my-3">{Title("Update", "MerchantS")}</h1>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={
                                        formErrors.merchantName.length > 0 ? 'error form-control text-capitalize' : 'form-control text-capitalize'
                                    }
                                    name="merchantName"
                                    placeholder="Enter Merchant Name"
                                    value={this.state.merchantName}
                                    onChange={this.handleChange}
                                />
                                {formErrors.merchantName.length > 0 && (
                                    <span className="errorMessage">{formErrors.merchantName}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className={formErrors.email.length > 0 ? 'error form-control' : 'form-control'}
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
                                    className={formErrors.password.length > 0 ? 'error form-control' : 'form-control'}
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
                                        formErrors.phoneNumber.length > 0 ? 'error form-control' : 'form-control'
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
                                    className={formErrors.shopName.length > 0 ? 'error form-control' : 'form-control'}
                                    name="shopName"
                                    placeholder="Enter Shop Name"
                                    value={this.state.shopName}
                                    onChange={this.handleChange}
                                />
                                {formErrors.shopName.length > 0 && (
                                    <span className="errorMessage">{formErrors.shopName}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className={formErrors.shopDetail.length > 0 ? 'error form-control' : 'form-control'}
                                    // className="form-control"
                                    name="shopDetail"
                                    placeholder="Enter shop Detail"
                                    value={this.state.shopDetail}
                                    onChange={this.handleChange}
                                />
                                {formErrors.shopDetail.length > 0 && (
                                    <span className="errorMessage">{formErrors.shopDetail}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className={formErrors.cnic.length > 0 ? 'error form-control' : 'form-control'}
                                    name="cnic"
                                    placeholder="Enter cnic xxxxx-xxxxxxx-x"
                                    value={this.state.cnic}
                                    onChange={this.handleChange}
                                />
                                {formErrors.cnic.length > 0 && <span className="errorMessage">{formErrors.cnic}</span>}
                            </div>
                            
                            <div className="form-group">
                            <input
                                type="text"
                                className={formErrors.shopAddress.length > 0 ? 'error form-control' : 'form-control'}
                                name="shopAddress"
                                placeholder="Enter Shop Address"
                                value={this.state.shopAddress}
                                onChange={this.handleChange}
                            />
                            {formErrors.shopAddress.length > 0 && <span className="errorMessage">{formErrors.shopAddress}</span>}
                        </div>
                        
                            <br />
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
      </div>
    );
  }
}

export default EditMerchant;