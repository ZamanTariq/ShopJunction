
  
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';



import styled from "styled-components";

var dateFormat = require('dateformat');
export default class DisplayUsersConfirmBookings extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    products: [],
    totals:[],
    order: [],
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
  axios.get('http://localhost:5000/order/user/'+this.getUserId())
    .then(response => {          
      this.setState({ order: response.data });
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
            width: 100
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
            width: 110
          } ,
          {
            label: 'Shop Address',
            field: 'shopAddress',
            sort: 'asc',
            width: 220
          } ,
          
          {
            label: 'Order Date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Delivery Address',
            field: 'userAddress',
            sort: 'asc',
            width: 220
          } ,
          
          

          
          
          
        ],
        
        rows:
        
      
       
        this.state.order.map(orders => {
          return {
          
            productname: orders.title,
            img: <img src={"/Upload/"+orders.image}  alt='cart' width="40px" height="40px"/>,
            price:orders.price,
            quantity:orders.quantity,
            totalPrice:orders.totalPrice,
            shopAddress:orders.shopAddress,
            date:dateFormat(orders.date),
            userAddress:orders.userAddress
            
            

          
          
            
       
           
          }
        })
      }
      
        return (
  
                

  <div className="container cont">
         
           

        
    <div className="panel panel-default my-auto" id="transaction">
      <div className="panel-heading main-color-bg">
      <Link to="/recievedOrders" className="btn btn-primary">Recived Orders</Link>
      <h3 className="font-weight-bold panel-title text-center text-uppercase ">Pending Orders</h3>

       
  
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
