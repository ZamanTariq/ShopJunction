import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';
import {
 
  PieChartOutlined,
  TeamOutlined,
  DropboxOutlined,
  CalendarOutlined,
  RiseOutlined,
  ReconciliationOutlined,
  DollarCircleOutlined,
  SyncOutlined
  
} from '@ant-design/icons';


import styled from "styled-components";
var dateFormat = require('dateformat');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class DeliverdOrders extends Component {
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

getAdminId (){
  const token=localStorage.admintoken
  const decoded=jwt_decode(token)
  this.setState({
      merchantId:decoded._id 
  })
 return decoded._id
}

componentDidMount(){
  axios.get('http://localhost:5000/deliverdOrder/merchant/'+this.getAdminId())
    .then(response => {          
      this.setState({ order: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
    axios
    .get("http://localhost:5000/order/total")
    .then((res) => {
      this.setState({ totals: res.data });
    })
    .catch((err) => {
      console.log("Error" + err);
    });
}

      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
      const data = {
        columns: [
          {
            label: 'Product Name',
            field: 'productname',
            sort: 'asc',
            width: 40
          },
          {
            label: 'Image',
            field: 'img',
            sort: 'asc',
            width: 40
          },
          
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
            width: 60
          },
          
          {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc',
            width: 80
          }
          ,
          
          {
            label: 'Total',
            field: 'total',
            sort: 'asc',
            width: 60
          } ,
          
          {
            label: 'Name',
            field: 'username',
            sort: 'asc',
            width: 120
          } 
          
          ,
          
          {
            label: 'Phone',
            field: 'phoneno',
            sort: 'asc',
            width: 120
          },
          
          {
            label: 'Address',
            field: 'address',
            sort: 'asc',
            width: 120
          } ,
          
          {
            label: 'Deliverd Order Date',
            field: 'date',
            sort: 'asc',
            width: 150
          } ,
          
          


          
          
          
        ],
        
        rows:
        
      
       
        this.state.order.map(orders => {
          return {
          
            productname: orders.title,
            img: <img src={"/Upload/"+orders.image}  alt='cart' width="40px" height="40px"/>,
            price:orders.price,
            quantity:orders.quantity,
            total:orders.totalPrice,
            username:orders.userName,
            phoneno:"0"+orders.userPhone,
            address:orders.userAddress,

            date:dateFormat(orders.date),
           
            
       
           
          }
        })
      }
      
        return (
            <Wrapper>
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/admin-dashboard">ADMIN</Link></div>
          <div  />
          <Menu theme="dark" mode="inline"    >
          
          <SubMenu
              key="sub1"
              title={
                <span>
                  <TeamOutlined />
                  <span >Users List</span>
                </span>
              }
            >
              <Menu.Item key="1" onClick={(e)=>this.props.history.push("/admin-dashboard/users/admin")}>Admin</Menu.Item>
              <Menu.Item key="2" onClick={(e)=>this.props.history.push("/admin-dashboard/users/customers")}>Customer</Menu.Item>
              <Menu.Item key="3" onClick={(e)=>this.props.history.push("/admin-dashboard/users/merchants")}>Merchant</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={
                <span>
                 <DropboxOutlined />
                  <span >Products</span>
                </span>
              }
            >
              <Menu.Item key="4" onClick={(e)=>this.props.history.push("/admin-dashboard/products/admin")} >Admin</Menu.Item>
              <Menu.Item key="5"onClick={(e)=>this.props.history.push("/admin-dashboard/products/merchants")} >Merchants</Menu.Item>
            </SubMenu>
            
           
            <SubMenu
              key="sub3"
              title={
                <span>
                <RiseOutlined />
                  <span>Sale</span>
                </span>
              }
            >
              <Menu.Item key="6" onClick={(e)=>{this.props.history.push("/admin-dashboard/sale/title")}} >
        
              <span>Sale By Title</span>
            </Menu.Item>
             
                 <Menu.Item key="7" onClick={(e)=>{this.props.history.push("/admin-dashboard/sale/category")}} >
           
              <span>Sale By Category</span>
            </Menu.Item>

            
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
            <ReconciliationOutlined />
                  <span>Report</span>
                </span>
              }
            >
              <Menu.Item key="8" onClick={(e)=>{this.props.history.push("/admin-dashboard/report/monthly")}} >
           
              <span>Monthly Sale</span>
            </Menu.Item>
             
                 <Menu.Item key="9" onClick={(e)=>{this.props.history.push("/admin-dashboard/report/yearly")}} >
        
              <span>Yearly Sale</span>
            </Menu.Item>

            
            </SubMenu>
           
            <SubMenu
              key="sub5"
              title={
                <span>
               <DollarCircleOutlined />
                  <span>Investment </span>
                </span>
              }
            >
              <Menu.Item key="10" onClick={(e)=>{this.props.history.push("/admin-dashboard/invest/category")}} >
            <CalendarOutlined />
              <span>By Category</span>
            </Menu.Item>
             
               

            
            </SubMenu>
            <SubMenu
              key="sub6"
              title={
                <span>
                 <PieChartOutlined />
                  <span>Statistics</span>
                </span>
              }
            >
              <Menu.Item key="11" onClick={(e)=>{this.props.history.push("/admin-dashboard/statistics/products")}} >
          
              <span>Product's</span>
            </Menu.Item>
             
                 <Menu.Item key="12" onClick={(e)=>{this.props.history.push("/admin-dashboard/statistics/users")}} >
         
              <span>User's</span>
            </Menu.Item>
            </SubMenu>

            <Menu.Item key="13" onClick={(e)=>{this.props.history.push("/admin-dashboard/calender")}} >
            <CalendarOutlined />
              <span>Calender</span>
            </Menu.Item>


            <Menu.Item key="14" onClick={(e)=>{this.props.history.push("/admin-dashboard/user-status")}} >
            <SyncOutlined spin />
              <span>User's Status</span>
            </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout className="site-layout">
      
          <Content >
        
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          
            <Wrapper>


  <div className="container cont">
         

        
    <div className="panel panel-default my-auto" id="transaction">
      <div className="panel-heading main-color-bg">
      <h3 className="font-weight-bold panel-title text-center text-uppercase ">Successfully Deliverd Order's</h3>

       
  
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
            </Wrapper>
           
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
