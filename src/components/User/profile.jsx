import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';

import  axios  from 'axios';

export default class profile extends Component {
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            error:{}
        }
    }
    componentDidMount(){
        const token=localStorage.usertoken
        const decoded=jwt_decode(token)
        axios.get('http://localhost:5000/newuser/userProfile/'+decoded._id).then(res=>{
          this.setState({
            firstname:res.data[0].firstname,
            lastname:res.data[0].lastname,
            email:res.data[0].email,
            phone:res.data[0].phone,
            address:res.data[0].address
        })
        })
     
    }
    render() {
        return (
            <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">PROFILE   <Link to='/edit-user-profile'>  <i className="fas fa-edit" style={{fontSize:"20px"}} ></i></Link>  </h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>Fist Name</td>
                    <td>{this.state.firstname}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{this.state.lastname}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{this.state.phone}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{this.state.address}</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        )
        
    }
}
