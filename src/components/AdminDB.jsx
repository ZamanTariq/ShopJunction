import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Divider } from 'antd';
import {
 
  PieChartOutlined,
  PieChartFilled,
  TeamOutlined,
  DropboxOutlined,
  CalendarOutlined,
  BarChartOutlined,
  LineChartOutlined,
  RadarChartOutlined
  
} from '@ant-design/icons';

import styled from "styled-components";
import QuantityOfAll from "./AdminPanelChart/QuantiyOfAll"

import Customer from "./Admin/displayUsers";
import Merchant from "./Admin/merchantDetails/displayMerchants";
import IndexAdminProducts from "./adminProducts/Index"
import Calender from './AdminPanelChart/Calender';
import DisplayAdmins from './Admin/displayAdmin';
import BarChart from './AdminPanelChart/UsersChart/BarChart';
import PolarChart from './AdminPanelChart/UsersChart/PolarChart';
import PieChart from './AdminPanelChart/UsersChart/PieChart';
import DoughnutChart from './AdminPanelChart/UsersChart/DoughnutChart';
import LineChart from "./AdminPanelChart/UsersChart/LineChart"
import ProductBarChart from "./AdminPanelChart/ProductsChart/BarChart";
import ProductDoughnutChart from "./AdminPanelChart/ProductsChart/DoughnutChart";
import ProductLineChart from "./AdminPanelChart/ProductsChart/LineChart";
import ProductPieChart from "./AdminPanelChart/ProductsChart/PieCharts";
import ProductPolarChart from "./AdminPanelChart/ProductsChart/PolarChart";
import AdminProductList from "./adminProducts/Index";
import MerchantProductList from "./MerchantProduct/Index";
import OnlineVsOffline from "./AdminPanelChart/OnlineVsOffline";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SideBar extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
    link:'Admin'
  };
}
onChangeAdmin=()=>{
this.setState({
  link:"Admin"
})
}
onChangeCustomer=()=>{
  this.setState({
    link:"Customer"
  })
  }
  onChangeMerchant=()=>{
    this.setState({
      link:"Merchant"
    })
  }
  
  onChangeCalender=()=>{
    this.setState({
      link:"Calender"
    })
  }
            //  Product Chart
  
  onChangeProductDoughnut=()=>{
    this.setState({
      link:"ProductDoughnut"
    })
  }

  onChangeProductLine=()=>{
    this.setState({
      link:"ProductLine"
    })
  }
  
  onChangeProductBar=()=>{
    this.setState({
      link:"ProductBar"
    })
  }

  onChangeProductPolar=()=>{
    this.setState({
      link:"ProductPolar"
    })
  }

  onChangeProductPie=()=>{
    this.setState({
      link:"ProductPie"
    })
  }
                  //  Product Chart End
   

                  // User Chart
  
                  onChangeAdminDoughnut=()=>{
                    this.setState({
                      link:"AdminDoughnut"
                    })
                  }
                
                  onChangeAdminLine=()=>{
                    this.setState({
                      link:"AdminLine"
                    })
                  }
                  
                  onChangeAdminBar=()=>{
                    this.setState({
                      link:"AdminBar"
                    })
                  }
                
                  onChangeAdminPolar=()=>{
                    this.setState({
                      link:"AdminPolar"
                    })
                  }
                
                  onChangeAdminPie=()=>{
                    this.setState({
                      link:"AdminPie"
                    })
                  }
// END

onChangeAdminProductList=()=>{
  this.setState({
    link:"AdminProduct"
  })
}

onChangeMerchantProductList=()=>{
  this.setState({
    link:"MerchantProduct"
  })
}

onChangeUserStatus=()=>{
  this.setState({
    link:"Online"
  })
}
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
     
        return (
            <Wrapper>
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4">ADMIN</div>
          <div  />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"   >
          <SubMenu
              key="sub1"
              title={
                <span>
                  <TeamOutlined />
                  <span >Users</span>
                </span>
              }
            >
              <Menu.Item key="1" onClick={this.onChangeAdmin}>Admin</Menu.Item>
              <Menu.Item key="2" onClick={this.onChangeCustomer}>Customers</Menu.Item>
              <Menu.Item key="3" onClick={this.onChangeMerchant}>Merchants</Menu.Item>
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
              <Menu.Item key="4" onClick={this.onChangeAdminProductList}>Admin</Menu.Item>
              <Menu.Item key="5" onClick={this.onChangeMerchantProductList}>Merchants</Menu.Item>
            </SubMenu>
            
          
           
            
            <SubMenu
              key="sub3"
              title={
                <span>
                 <PieChartOutlined />
                  <span>Statistics</span>
                </span>
              }
            >
              <SubMenu key="sub4"  title={
              
                  <span>Products</span>
               
              }>
                 <Menu.Item key="6" onClick={this.onChangeProductDoughnut}><PieChartFilled />Doughnut Chart</Menu.Item>
                 <Menu.Item key="7" onClick={this.onChangeProductPie}> <PieChartOutlined />Pie Chart</Menu.Item>
                 <Menu.Item key="8" onClick={this.onChangeProductLine}><LineChartOutlined />Line Chart</Menu.Item>
                 <Menu.Item key="9" onClick={this.onChangeProductBar}><BarChartOutlined />Bar Chart</Menu.Item>
                 <Menu.Item key="10" onClick={this.onChangeProductPolar}><RadarChartOutlined />Polar Chart</Menu.Item>
                 
                 
                 
                 </SubMenu>
                 <SubMenu key="sub5"  title={
                <span>
               
                  <span>Users</span>
                </span>
              }>
             
             <Menu.Item key="11" onClick={this.onChangeAdminDoughnut}><PieChartFilled />Doughnut Chart</Menu.Item>
                 <Menu.Item key="12"  onClick={this.onChangeAdminPie}>  <PieChartOutlined />Pie Chart</Menu.Item>
                 <Menu.Item key="13" onClick={this.onChangeAdminLine}><LineChartOutlined />Line Chart</Menu.Item>
                 <Menu.Item key="14" onClick={this.onChangeAdminBar}><BarChartOutlined />Bar Chart</Menu.Item>
                 <Menu.Item key="15" onClick={this.onChangeAdminPolar}><RadarChartOutlined />Polar Chart</Menu.Item>
                 
                 
                 
                 </SubMenu>
             
            </SubMenu>
            <Menu.Item key="16" onClick={this.onChangeCalender}>
            <CalendarOutlined />
              <span>Calender</span>
            </Menu.Item>


            <Menu.Item key="17" onClick={this.onChangeUserStatus}>
            <CalendarOutlined />
              <span>User's Status</span>
            </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout className="site-layout">
      
          <Content >
        
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          
            { this.state.link==="home"?<QuantityOfAll/>:
              this.state.link==="Customer"?<Customer/>:
              this.state.link==="Merchant"?<Merchant/>:
              this.state.link==="Admin"?<DisplayAdmins/>:
              this.state.link==="Calender"?<Calender/>:
              this.state.link==="AdminBar"?<BarChart/>:
              this.state.link==="AdminLine"?<LineChart/>:
              this.state.link==="AdminPolar"?<PolarChart/>:
              this.state.link==="AdminPie"?<PieChart/>:
              this.state.link==="AdminDoughnut"?<DoughnutChart/>:
              this.state.link==="ProductBar"?<ProductBarChart/>:
              this.state.link==="ProductLine"?<ProductLineChart/>:
              this.state.link==="ProductPolar"?<ProductPolarChart/>:
              this.state.link==="ProductPie"?<ProductPieChart/>:
              this.state.link==="ProductDoughnut"?<ProductDoughnutChart/>:
              this.state.link==="AdminProduct"?<AdminProductList/>:
              this.state.link==="Online"?<OnlineVsOffline/>:
              this.state.link==="MerchantProduct"?<MerchantProductList/>:null
              }
          
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

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
    [data-theme="dark"] .site-layout .site-layout-background {
      background: #141414;
    }

`