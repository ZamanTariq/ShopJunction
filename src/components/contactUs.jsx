import React, { Component } from 'react'
import {fillAllFields,AlreadyHaveAccount,successfullyRegistered} from './notificationMessages'
import  axios  from 'axios';
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

export default class contactUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:'',
      email:'',
      subject:'',
      message:'',
      formErrors: {
        name:'',
        email:'',
        subject:'',
        message:''
      },
      
  }
    // this.onChange = this.handleChange.bind(this);
    // this.onSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 3 || value.length > 25? "max 25 characaters required" : "";
      
        break;
     
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "subject":
        formErrors.subject = value.length < 3 || value.length > 25? "max 25 characaters required" : "";
      
        break;
      case "message":
        formErrors.message = value.length < 3 || value.length > 150? "max 150 characaters required" : "";
      
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
      const obj = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
       
      };
      axios.post('http://localhost:5000/contactUs',obj).then((res) => {
        if(res.data){
          successfullyRegistered()
        this.props.history.push("/");
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
 


    render() {
      const { formErrors } = this.state;
        return (
            <React.Fragment>
             

            
                <div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="text-center px-md-5 mx-md-5 dark-grey-text">
{/* 
  <!-- Section heading --> */}
  <h3 class="font-weight-bold mb-4">Contact Us</h3>
 
  {/* <!-- Section description --> */}

  <h6>Dear Customer,</h6>
  <p class="text-center w-responsive mx-auto mb-5">
  


At ShopInn, we value your suggestions and feedback, as we aim to achieve excellence through the highest standards of customer service.

If you have any queries, complaints or feedback you can:

Call our 24/7 ShopInn Contact Center at: 111-825-888 (UAN)


Write to us at shopinnsite@gmail.com :Or Fill the below form 

  
  </p>
{/* 
  <!-- Grid row --> */}
  <div class="row">
{/* 
    <!-- Grid column --> */}
    <div class="col-md-9 mb-md-0 mb-5">
   
      <form>

        {/* <!-- Grid row --> */}
        <div class="row">
{/* 
          <!-- Grid column --> */}
          <div class="col-md-6">
            <div class="md-form mb-0">
         
              <input 
              type="text" 
              id="contact-name"
              placeholder="Enter Name"
              className={
                formErrors.name.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
            
             
             
            </div>
            {formErrors.name.length > 0 && (
              <span className="errorMessage">{formErrors.name}</span>
            )}
          </div>
          {/* <!-- Grid column -->

          <!-- Grid column --> */}
          <div class="col-md-6">
            <div class="md-form mb-0">
           
              <input type="text" id="contact-email" 
              placeholder="Enter Email"
              className={
                formErrors.email.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
            
            </div>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row -->

        <!-- Grid row --> */}
        <div class="row">
{/* 
          <!-- Grid column --> */}
          <div class="col-md-12">
            <div class="md-form mb-0">
              <input type="text" id="contact-Subject"  placeholder="Enter Subject"
              className={
                formErrors.subject.length > 0
                  ? "error form-control text-capitalize"
                  : "form-control text-capitalize"
              }
              
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}/>
              
            </div>
            {formErrors.subject.length > 0 && (
              <span className="errorMessage">{formErrors.subject}</span>
            )}
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row -->

        <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-md-12">
            <div class="md-form">
              <textarea id="contact-message" class="form-control md-textarea" rows="5" placeholder="Enter Message"
              className={
                formErrors.message.length > 0
                  ? "error form-control md-textarea text-capitalize"
                  : "form-control  md-textarea text-capitalize"
              }
              
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              
              ></textarea>
             
            </div>
            {formErrors.message.length > 0 && (
              <span className="errorMessage">{formErrors.message}</span>
            )}
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </form>
     
      <div class="text-center text-md-left">
        <span onClick={this.handleSubmit} class="btn btn-deep-orange btn-md">Send</span>
      </div>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-3 text-center">
      <ul class="list-unstyled mb-0">
        <li>
          <i class="fas fa-map-marker-alt fa-2x deep-orange-text"></i>
          <p>Ferozpur Road, Arfa
                  Tower, Lahore</p>
        </li>
        <li>
          <i class="fas fa-phone fa-2x mt-4 deep-orange-text"></i>
          <p>+ 92 300 1234567</p>
        </li>
        <li>
          <i class="fas fa-envelope fa-2x mt-4 deep-orange-text"></i>
          <p class="mb-0">shopinnsite@gmail.com</p>
        </li>
      </ul>
    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
{/* <!--Section: Content--> */}


</div>

            </React.Fragment>
        )
    }
}
