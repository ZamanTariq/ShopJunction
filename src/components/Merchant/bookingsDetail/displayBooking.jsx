import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom';
import {AcceptBookingRequest, UpgradeBookingStock ,RejectBookingRequest} from '../../notificationMessages'
import { MDBDataTable } from 'mdbreact';
import {
 BookOutlined,
 ShopOutlined,
 ShoppingCartOutlined,
  DropboxOutlined,
  
  
} from '@ant-design/icons';
import jwt_decode from "jwt-decode";
import styled from "styled-components";
var dateFormat = require('dateformat');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class DisplayBooking extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    booking: []
     
  };
}
getMerchantId (){
      
  const token=localStorage.merchanttoken
  const decoded=jwt_decode(token)
  this.setState({
      merchantId:decoded._id
     
  })
 return decoded._id
}

componentDidMount(){
  axios.get('http://localhost:5000/bookings/merchant/'+this.getMerchantId())
    .then(response => {
      
      this.setState({ booking: response.data });
    })
    .catch(function (error) {
      console.log(error);

    })
}

checkData(){
  if (!this.state.booking){
    return
  }
}

handleSubmit(bookings) {

  if(bookings.quantity>bookings.stock){
    UpgradeBookingStock()
  }
else{
  try {
  axios.post('http://localhost:5000/confirmBookings',bookings)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    
  const obj={
   stock:bookings.quantity
  }

  axios.post('http://localhost:5000/merchantproduct/updateStock/'+bookings.productId,obj)
  .then(res => console.log(res.data), AcceptBookingRequest(),this.handleDelete(bookings))
  .catch(err => console.log(err))
    
  
} catch (error) {
  console.log(error)
  
}
  
      
}    
}

handleDelete=booking=> {
  const bookings = this.state.booking.filter(m => m._id !== booking._id);
  this.setState({ booking:bookings });
  try {
    axios.post('http://localhost:5000/rejectBookings',booking)
      .then(RejectBookingRequest())
      .catch(err => console.log(err))
  axios.get('http://localhost:5000/bookings/delete/'+booking._id)
  .then(console.log('Deleted'))
  .catch(err => console.log(err))
 
    
  } catch (error) {
    console.log(error)
    
  }
  
};

      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
      const data = {
        columns: [
          {
            label: 'Title',
            field: 'title',
            sort: 'asc',
            width:100
          },
          {
            label: 'Image',
            field: 'img',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Total Price',
            field: 'totalprice',
            sort: 'asc',
            width: 100
          },
          
          {
            label: 'Order Date',
            field: 'orderdate',
            sort: 'asc',
            width: 100
          },
          ,
          
          {
            label: 'Booking Date',
            field: 'bookingdate',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Address',
            field: 'address',
            sort: 'asc',
            width: 100
          }
          
         ,
          {
            label: 'Payment method',
            field: 'method',
            sort: 'asc',
            width: 100
          }
        
        ,
        {
          label: 'Stock',
          field: 'stock',
          sort: 'asc',
          width: 100
        }
      ,
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 100
          }
         
         
          
          
        ],
        
        rows:
        
      
       
        this.state.booking.map(booking => {
          return {
          
            title: booking.title,
            img: <img src={"/Upload/"+booking.image}  alt='cart' width="40px" height="40px"/>,
           
            price:booking.price,
            quantity: booking.quantity,
            totalprice: booking.totalPrice,
            orderdate:  dateFormat(booking.currentDate),
            bookingdate:  dateFormat(booking.bookingDate),
            address:booking.userAddress,
            method:booking.paymentMethod,
            stock:booking.stock,
        

            action:<div> <button
            onClick={() => this.handleSubmit(booking)}
              className="btn btn-m-2 btn-secondary btn-sm"
            >
              Accept
            </button>
            
          
            
            
            <button
            onClick={() => this.handleDelete(booking)}
              className="btn btn-danger btn-sm"
            >
              Reject
            </button></div>
            
       
           
          }
        })
      }
      
          
        return (
         
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/merchant-shop">MERCHANT</Link></div>
          <div  />
          <Menu theme="dark" mode="inline"    defaultSelectedKeys={['4']}   >
      

         <Menu.Item key="1" onClick={(e)=>{this.props.history.push("/merchant-shop")}} >
         <ShopOutlined />
           <span>Shop Detail</span>
         </Menu.Item>


         <Menu.Item key="2" onClick={(e)=>{this.props.history.push("/merchant-products")}} >
         <DropboxOutlined />
           <span>Products</span>
         </Menu.Item>

         <Menu.Item key="3" onClick={(e)=>{this.props.history.push("/orders")}} >
         <ShoppingCartOutlined />
           <span>Order</span>
         </Menu.Item>

         <Menu.Item key="4" onClick={(e)=>{this.props.history.push("/bookingRequests")}} >
         <BookOutlined />
           <span>Booking</span>
         </Menu.Item>

         <SubMenu
         key="sub4"
         title={
         <span>
         <span>Sale</span>
         </span>
         }
         >
         <Menu.Item key="5" onClick={(e)=>{this.props.history.push("/merchant-sale-title")}} >
            <span>Sale BY title</span>
         </Menu.Item>
         <Menu.Item key="6" onClick={(e)=>{this.props.history.push("/merchant-sale-category")}} >
            <span>Sale By Category</span>
         </Menu.Item>
         </SubMenu>
        
       </Menu>
        </Sider>
        <Layout className="site-layout">
      
          <Content >
        
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          
            <Wrapper>
           
  <div className="container cont">
         
            

        
         <div className="panel panel-default my-auto" id="transaction">
           <div className="panel-heading main-color-bg">
         
           <h3 className="panel-title text-center "><b>PENDING BOOKING</b></h3>
            
       
           </div>
           <div className="row d-flex justify-content-center">
        <Link to="/bookingRequests" className="btn btn-warning btn">Booking Requests</Link> 
        <Link to="/confirmBookings" className="btn btn-success btn">Confirm Booking</Link>
        
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
  </Wrapper>
            </div>
          </Content>
         
        </Layout>
      </Layout>
                </div>
         
           
        )
    }
}
const Wrapper=styled.div`
.btn{

 
 
  border-top-left-radius: 10em;
  border-bottom-left-radius: 10em;
  border-top-right-radius: 10em;
  border-bottom-right-radius: 10em;

}


@media screen and (max-width: 600px) {
  .cont {
  
   margin-left:10px;
  }
 
}

`
