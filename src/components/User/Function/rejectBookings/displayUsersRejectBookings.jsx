
  
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';



import styled from "styled-components";

var dateFormat = require('dateformat');
export default class DisplayUsersRejectBookings extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    products: [],
    totals:[],
    booking: [],
    merchantId:''
  };
}

getUserId (){
      
  const token=localStorage.usertoken
  const decoded=jwt_decode(token)
  this.setState({
      userId:decoded._id
     
  })
 return decoded._id
}

componentDidMount(){
  axios.get('http://localhost:5000/rejectBookings/'+this.getUserId())
    .then(response => {
      
      this.setState({ booking: response.data });
    })
    .catch(function (error) {
      console.log(error);

    })
}



    render() {
      const data = {
        columns: [
          {
            label: 'Product Name',
            field: 'productname',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Product Image',
            field: 'img',
            sort: 'asc',
            width: 110
          },
          
          {
            label: 'Product Price',
            field: 'price',
            sort: 'asc',
            width: 110
          },
          
          {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 110
          }
          ,
          
          {
            label: 'Total Price',
            field: 'totalPrice',
            sort: 'asc',
            width: 110
          } 
          ,
          {
            label: 'Order Date',
            field: 'currentDate',
            sort: 'asc',
            width: 120
          } 

          ,
          {
            label: 'Booking Date',
            field: 'bookingDate',
            sort: 'asc',
            width: 120
          } 
          
          ,
          
          
          {
            label: 'Shop Address',
            field: 'address',
            sort: 'asc',
            width: 180
          } ,
          
          {
            label: 'Payment Method',
            field: 'payment',
            sort: 'asc',
            width: 120
          } 

          
          
          
        ],
        
        rows:
        
      
       
        this.state.booking.map(bookings => {
          return {
          
            productname: bookings.title,
            img: <img src={"/Upload/"+bookings.image}  alt='cart' width="40px" height="40px"/>,
            price:bookings.price,
            quantity:bookings.quantity,
            totalPrice:bookings.totalPrice,
            currentDate:dateFormat(bookings.currentDate),
            bookingDate:dateFormat(bookings.bookingDate),
            address:bookings.shopAddress,
            payment:bookings.paymentMethod,

          
          
            
       
           
          }
        })
      }
      
        return (
  
                

  <div className="container cont">
         
           

        
    <div className="panel panel-default my-auto" id="transaction">
      <div className="panel-heading main-color-bg">
      <Link to="/mybookings" className="btn btn-primary">Pending Bookings</Link>
      <h3 className="font-weight-bold panel-title text-center text-uppercase ">Reject Booking Requests</h3>

       
  
      </div>
      


      <div className="panel-body">
  <MDBDataTable
  
    hover
    striped
    bordered
    small
    data={data}
    entriesOptions={[10,20,30,40,50,60,70,80,90,100]} 
    entries={10}
  
    scrollX
    /> 
      </div>
    </div>
  </div>

          
        

           
        )
    }
}
const Wrapper=styled.div`

@media screen and (max-width: 600px) {
    .cont {
    
     margin-left:10px;
    }
   
  }


`
