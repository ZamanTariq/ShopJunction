
  
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';



import styled from "styled-components";

var dateFormat = require('dateformat');
export default class DisplayBookingsDetail extends Component {
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
  axios.get('http://localhost:5000/bookings/'+this.getUserId())
    .then(response => {
      
      this.setState({ booking: response.data });
    })
    .catch(function (error) {
      console.log(error);

    })
}

handleDelete=booking=> {
    const bookings = this.state.booking.filter(m => m._id !== booking._id);
    this.setState({ booking:bookings });
    axios.get('http://localhost:5000/bookings/delete/'+booking._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
   
  };

    render() {
      const data = {
        columns: [
          {
            label: 'Product Name',
            field: 'productname',
            sort: 'asc',
            width: 90
          },
          {
            label: 'Product Image',
            field: 'img',
            sort: 'asc',
            width: 90
          },
          
          {
            label: 'Product Price',
            field: 'price',
            sort: 'asc',
            width: 100
          },
          
          {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 100
          }
          ,
          
          {
            label: 'Total Price',
            field: 'totalPrice',
            sort: 'asc',
            width: 100
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
            width: 120
          } ,
          
          {
            label: 'Payment Method',
            field: 'payment',
            sort: 'asc',
            width: 140
          } ,
          
          {
            label: 'Action',
            field: 'action',
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

          
            action:  <button
            onClick={() => this.handleDelete(bookings)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>,
            
       
           
          }
        })
      }
      
        return (
  
                

  <div className="container cont">
         
           

        
    <div className="panel panel-default my-auto" id="transaction">
      <div className="panel-heading main-color-bg">
      <Link to="/myconfirmBookings" className="btn btn-primary">Confirm Bookings</Link>
      <Link to="/user-reject-bookings" className="btn btn-warning">Rejected Bookings</Link>
      <h3 className="font-weight-bold panel-title text-center text-uppercase ">My Pending Booking Request</h3>

       
  
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
