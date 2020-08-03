import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';
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

export default class customerOrder extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    order: [],
    merchantId:''
     
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
  axios.get('http://localhost:5000/order/merchant/'+this.getMerchantId())
    .then(response => {          
      this.setState({ order: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
}
handleDelete=order=> {
    const orders = this.state.order.filter(m => m._id !== order._id);
    this.setState({ order:orders });
    axios.get('http://localhost:5000/order/delete/'+order._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  };

handleSubmit=order=>{
    axios.post('http://localhost:5000/deliverdOrder/',order)
    .then(res => console.log(res.data),this.handleDelete(order))
    .catch(err => console.log(err))
      }


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
            label: 'Address',
            field: 'address',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Date',
            field: 'date',
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
        
      
       
        this.state.order.map(orders => {
          return {
          
            title: orders.title,
            img: <img src={"/Upload/"+orders.image}  alt='cart' width="40px" height="40px"/>,
           
            price:orders.price,
            quantity: orders.quantity,
            totalprice: orders.totalPrice,
            address:orders.userAddress,
            date:  dateFormat(orders.date),
            action: <button
            onClick={() => this.handleSubmit(orders)}
              className="btn btn-success btn-sm"
            >
              Sent
            </button>,
         
            
            
       
           
          }
        })
      }
      
          
        return (
         
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/merchant-shop">MERCHANT</Link></div>
          <div  />
          <Menu theme="dark" mode="inline"    defaultSelectedKeys={['3']}   >
      

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
         
           <h3 className="panel-title text-center "><b>PENDING ORDERS</b></h3>
            
       
           </div>
           <div className="row d-flex justify-content-center">
        <Link to="/orders" className="btn btn-warning btn">Pending Orders Requests</Link> 
        <Link to="/sentorders" className="btn btn-success btn">Succesfully Deliverd Orders</Link>
        
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
