import React, { Component } from "react";
//import { register } from "./Function/UserFunction";
import "../../custom.css";
import axios from 'axios';
import Title from ".././../Title";


export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      discount:'',
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: ""
      }
    };
    this.onChange = this.changeDiscount.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:5000/newuser/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
    firstName: response.data.firstname,
    lastName: response.data.lastname,
    email: response.data.email,
    password: response.data.password,
    phone: response.data.phone,
    address: response.data.address,
    discount:response.data.discount
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
       
        discount:this.state.discount
      }
    

     await axios.post('http://localhost:5000/newuser/discount/'+this.props.match.params.id, newUser)
      .then(res => console.log(res.data));
     await  this.props.history.push('/admin-dashboard');
      
  
    
  };

  changeDiscount= e => {
    e.preventDefault();
    this.setState({
      discount:e.target.value
    })
    
    
  };

  render() {
    
    return (
      <div className="container reg">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">{Title("Update", "User")}</h1>
              <div className="form-group">
                <label
                  type="text"
                  className="form-control"
                    
                 
                 
                >{this.state.firstName}</label>
               
              </div>

              <div className="form-group">
                <label
                 
                  className="form-control"
                
                >
            {this.state.lastName}
                  

                </label>
              </div>
              <div className="form-group">
                <label
                 
                  className="form-control"
                >
                {this.state.email}</label>
              
              </div>

              
              <div className="form-group">
                <label
                 
                  className="form-control"
                  
                >{this.state.phone}</label>
               
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="discount"
                  min="0"
                  max="50"
                  value={this.state.discount}
                  onChange={this.changeDiscount}
                />
               
              </div>

             
              <br />
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Update User
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

