import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from "axios";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import PieChart from "./PieCharts";
import PolarChart from "./PolarChart";
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
const {Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class AdminMainPage extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    link:'Admin',
    products: [],
    totals:[]
  };
}

componentDidMount() {
    axios
      .get("http://localhost:5000/deliverdOrder/monthly")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.log("Error" + err);
      });

      axios
      .get("http://localhost:5000/deliverdOrder/total/salebytitle")
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
                label: 'Month',
                field: 'name',
                sort: 'asc',
                width: 220
              },
              {
                label: 'Total',
                field: 'total',
                sort: 'asc',
                width: 220
              },
              {
                label: 'Quantity',
                field: 'quantity',
                sort: 'asc',
                width: 220
              }
              ,
              {
                label: 'Products',
                field: 'products',
                sort: 'asc',
                width: 220
              }
             
             
             
              
              
            ],
            
            rows:
            
          
           
            this.state.products.map(products => {
              return {
              
                name: products._id.month+"-Month",
                total: products.total,
                quantity:products.quantity,
                products:products.product
                
                
           
               
              }
            })
          }
          
        return (
          
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/admin-dashboard">ADMIN</Link></div>
          <div  />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['11']}   >
          
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

            <DoughnutChart />
                <br/>
                <br/>
                <br/>
                <br/>
                <BarChart/>
                <br/>
                <br/>
                <br/>
                <br/>
                <LineChart/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PieChart/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PolarChart/>
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

@media screen and (max-width: 600px) {
    .cont {
    
     margin-left:10px;
    }
   
  }


`
