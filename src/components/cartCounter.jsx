import React, { Component } from 'react'
import styled from "styled-components"
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {merchantCartLength} from './User/Function/cartDetails/merchantCart'
export default class cartCounter extends Component {
      constructor(props) {
       
    super(props);
    this.getUserId = this.getUserId.bind(this);
    this.state = {
      cart: [],
      carts:[]
    
    };
  }
  getUserId=()=>{
      
    const token=localStorage.usertoken
    const decoded=jwt_decode(token)
    this.setState({
        userId:decoded._id
       
    })
   return decoded._id
  }

  componentWillReceiveProps(){
    axios.get('http://localhost:5000/addtocart/'+this.getUserId())
      .then((response) => {
     
        this.setState({ cart: response.data });
      
      })
      .catch((error)=> {
        console.log(error);

      })
      axios.get('http://localhost:5000/adminaddtocart/'+this.getUserId())
      .then(response => {          
        this.setState({ carts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  gettotalLength(){
const length = this.state.cart.length+this.state.carts.length
return length

  }
    render() {
        return (
            <div>
                 <Wrapper>
   
  {localStorage.usertoken?<React.Fragment><i className="fas fa-cart-plus"></i><sup className="m-0">{this.gettotalLength()}</sup></React.Fragment>:null} 

    </Wrapper> 
            </div>
        )
    }
}


const Wrapper=styled.nav`

.counter-sm {
  top: -24px !important;
  
}

`