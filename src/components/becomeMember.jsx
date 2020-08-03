import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import styled from "styled-components"
import axios from "axios"
import { notification} from 'antd';
const formValid = (...rest ) => {
  let valid = true;


  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};
class FormsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      newusers:"",
      
     
     
      
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:5000/newuser')
      .then(response => {
        
        this.setState({ newusers: response.data });
      })
      .catch(function (error) {
        console.log(error);

      })
  }

  submitHandler = event => {
    event.preventDefault();
    if (formValid(this.state)) {

    event.target.className += "was-validated"
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address
    };

    axios.post('http://localhost:5000/newUser/signup',newUser).then((res) => {
        if(res.data){
          this.openNotification('bottomLeft')
        this.props.history.push("/user-login");
        console.log(this.state.email, ":Resgistered");
      }
      }).catch((err) => {
        this.openNotification1('bottomLeft')
this.setState({email:''})
      });
    }
    else {
      setTimeout(function () {
        alert("Please fill all required filleds");
      }, 1000);
    }
    }
  
  
   
    openNotification = placement => {
      notification.info({
        message: `SuccessFully Registerd`,
        description:
          'Your acoount has been created',
        placement,
      });
    };
  
    openNotification1 = placement => {
      notification.info({
        message: `Alert `,
        description:
          'Acoount is already created with this email',
        placement,
      });
    };
   
    openNotification2 = placement => {
      notification.info({
        message: `Alert `,
        description:
          'required to fill all fiellds',
        placement,
      });
    };
   
    
  

  

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
  
    return (

      
      <div className="container col-md-6 mt-5 mx-auto mb-3 z-depth-1" md="8" style={{borderStyle:"solid",borderColor:"#f57c00",borderWidth:"0.7"}}  >
        
<Wrapper>  
  <div className="row  btn-row">
                     
<button type="button" className="btn btn-danger btn-circle btn-xl " ><i className="fas fa-user-plus"></i>
</button>
</div>  

        <div className="sign-up">
       SIGN UP
      </div>
     
      </Wrapper>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          
       

            {/* First Name */}
            <MDBCol  className="mb-2 form-group ">
              <label
                htmlFor="defaultFormRegisterFirstNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.firstname}
                name="firstname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterFirstNameEx"
                className="form-control text-capitalize"
                placeholder="First Name"
                required
                autoFocus
                
                pattern="[A-Za-z]{3,15}"
              />
              <div className="valid-feedback">Looks Perfect!</div>
              <div className="invalid-feedback">Must contain more than 2 Alphabets</div>
            </MDBCol>
            {/* First Name End */}

            {/* Last Name */}
            <MDBCol  className="mb-2 form-group">
              <label htmlFor="defaultFormRegisterLastNameEx" className="grey-text">
                Last name
              </label>
              <input
                value={this.state.lastname}
                name="lastname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterLastNameEx"
                className="form-control text-capitalize"
                placeholder="Last name"
                required
                pattern="[A-Za-z]{3,15}"
              />
              <div className="valid-feedback">Looks Perfect!</div>
              <div className="invalid-feedback">Must contain more than 2 Alphabets</div>
            </MDBCol>
            {/* Last Name End */}
         
           {/* Email */}
            <MDBCol  className="mb-2 form-group">
              <label
                htmlFor="defaultFormRegisterEmailEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterEmailEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                pattern="[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"
                required
              />
                 <div className="valid-feedback">Looks Perfect!</div>
              <div className="invalid-feedback">"invalid email address"</div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>

         
          {/* Email End */}
             {/* Password*/}
             <MDBCol  className="mb-3 form-group" >

              <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
                Password
              </label>
              <input
                value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control pwd-show"
                placeholder="Password"
                required
                pattern="(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z`~!@#$%^&*()-_+=|':;<,>.]{6,}"
              />
            <span className="input-group-btn pull-right">
            <button className="btn  reveal" type="button"  style={{padding:"0px"}}><i className="far fa-eye"></i></button>
          </span> 
              <div className="valid-feedback">Looks Perfect!</div>
              <div className="invalid-feedback">Must contain at least one letter,Digit </div>
            </MDBCol>

     
       

            
            <MDBCol  className="mb-2 form-group">
              <label
                htmlFor="defaultFormRegisterPhoneEx4"
                className="grey-text"
              >
              Phone
              </label>
              <input
                value={this.state.phone}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPhoneEx4"
                className="form-control"
                name="phone"
                placeholder="Phone"
                pattern="  ((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}"
                required
              />
              <div className="invalid-feedback">
              First digit must start with 0 or +92 or  0092
              </div>
              <div className="valid-feedback">Looks Perfect!</div>
            </MDBCol>
            {/* Addree */}
            <MDBCol  className="mb-2 form-group">
              <label
                htmlFor="defaultFormRegisterAddressEx4"
                className="grey-text"
              >
                Address
              </label>
              <input
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterAddressEx4"
                className="form-control"
                name="address"
                placeholder="Address"
               
                minLength="15"
                

                required
              />
              <div className="invalid-feedback">
               Must Contain House No. ,Block,Town & City
              </div>
              <div className="valid-feedback">Looks Perfect!</div>
            </MDBCol>
           
         
          <MDBCol  className="mb-2 form-group">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before register.
              </div>
            </div>
          </MDBCol>
          <Wrapper>
            <div className="submit-btn">

          
          <MDBBtn className="reg-btn"  color="primary" type="submit"  >
            Register
          </MDBBtn>
          </div>
          </Wrapper>
        </form>
      </div>
    );
  }
}

export default FormsPage;
const Wrapper=styled.div`

.btn-circle.btn-xl {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  border-radius: 32px;
  font-size: 18px;
  line-height: 1.33;
}
.btn-row{
  display: flex;
  justify-content: center;
}
.sign-up{
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size:1.1rem;
}
.submit-btn{
  display: flex;
  justify-content: center;
}
.reg-btn{
  border-radius: 14px;
  padding: 14px 120px 14px 120px
}

`
