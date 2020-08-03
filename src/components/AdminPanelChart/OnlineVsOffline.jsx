import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { MDBDataTable,MDBIcon } from 'mdbreact';
import axios from "axios";
import {Doughnut} from 'react-chartjs-2';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
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
const {  Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class OnlineVsOffline extends Component {
   constructor(props) {
      super(props);
      this.state = {
        Data: {},
        Product:[],
        onlineUsers:[]
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:5000/newuser/status`)
        .then(res => {
          console.log(res)
          const users = res.data;
         
         
          this.setState({ 
            Data: {
              labels: ['Online','Offline'],
              datasets:[
                 {
                    label:'Online Vs Offline',
                    data: users ,
                    backgroundColor:[
                     '#F39C12',
                     '#8E44AD',
                     
                  ]
                 }
              ]
           }
           });
        })

        axios
        .get("http://localhost:5000/newuser/online-users")
        .then((res) => {

          (res.data==="Empty")?
          this.setState({onlineUsers:[{firstname:null,lastname:null,email:null,activeUser:null}]}):
          this.setState({ onlineUsers: res.data });
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
            label: 'First Name',
            field: 'firstname',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Last Name',
            field: 'lastname',
            sort: 'asc',
            width: 150
          },
          
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 150
          },
          ,
          
          {
            label: 'OnlineDate',
            field: 'onlinedate',
            sort: 'asc',
            width: 150
          },
          
        
          {
            label: 'OfflineDate',
            field: 'offlinedate',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Time Spent',
            field: 'timespent',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Offine Duration',
            field: 'offlineduration',
            sort: 'asc',
            width: 150
          },
          
          {
            label: 'Status',
            field: 'active',
            sort: 'asc',
            width: 150
          }
          ,{
            label: 'Discount',
            field: 'discount',
            sort: 'asc',
            width: 150

          }
          
        ],
        
        rows:       
        this.state.onlineUsers.map(users => {
         
          return {
        
            firstname: users.firstname,
            lastname: users.lastname,
            email:users.email,
            onlinedate:users.onlineDate,
            offlinedate:users.offlineDate,
            timespent:
            users.onlineDate>users.offlineDate?0:
            <Moment duration={users.onlineDate}
            date={users.offlineDate}
         
    />
,
            offlineduration:<Moment fromNow>{users.offlineDate}</Moment>,
            active:users.activeUser?"Online":"Offline",
            discount:<Link to={"/edit-user-discount/"+users._id} className="btn btn-primary btn-sm">Discount</Link>
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['14']}   >
          
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
           
     
           
            <div className="container" style={{height:"80vh"}}>
         <h6 className="font-weight-bold text-center ">Online Vs Offline</h6>
      <br/>
      <Doughnut
        data={this.state.Data}
        height={120}

        options={{ maintainAspectRatio: false }}
       
        />
   </div>
<br className="mb-3"/>
<br className="mb-3"/>
<br className="mb-3"/>
<br className="mb-3"/>
   <div className="container">
     
 
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
