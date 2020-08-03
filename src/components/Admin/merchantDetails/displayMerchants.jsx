import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from "axios";
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
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class DisplayMerchant extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
   
    merchants: [],
  };
}
componentDidMount() {
  axios
    .get("http://localhost:5000/newmerchant")
    .then((res) => {
      this.setState({ merchants: res.data });
    })
    .catch((err) => {
      console.log("Error" + err);
    });
}

handleDelete=merchants=> {
  const product = this.state.merchants.filter(m => m._id !== merchants._id);
  this.setState({ merchants:product });
  axios.get('http://localhost:5000/newmerchant/delete/'+merchants._id)
  .then(console.log('Deleted'))
  .catch(err => console.log(err))
 
};

      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
      const data = {
        columns: [
          {
            label: "Name",
            field: "firstname",
            sort: "asc",
            width:130
         
          },
         
          {
            label: "Email",
            field: "email",
            sort: "asc",
           width:200
          },
          {
            label: "Phone",
            field: "phone",
            sort: "asc",
            width:150
          },
          {
            label: "CNIC",
            field: "cnic",
            sort: "asc",
         width:130
          },
          {
            label: "Shop Name",
            field: "shopname",
            sort: "asc",
          width:130
           
          },
          {
            label: "Shop Detail",
            field: "detail",
            sort: "asc",
          width:130
           
          },
          {
            label: "Address",
            field: "address",
            sort: "asc",
         width:250
          },
          
         
          
         
          {
            label: "Action",
            field: "action",
            sort: "asc",
          width:30
          },
        ],
  
        rows: this.state.merchants.map((merchants) => {
          return {
            firstname:merchants.merchantName,
            email:merchants.email,
            phone:merchants.phoneNumber,
            cnic:merchants.cnic,
            shopname:merchants.shopName,
            detail:merchants.shopDetail,
            address:merchants.shopAddress,
            action: (
              <React.Fragment>
                <Link
                  className="ml-5 text-primary"
                  to={"/edit-merchants-detail/" + merchants._id}
                  title="Edit"
                >
                  <MDBIcon icon="pencil-alt" />
                </Link>
                <span
                onClick={() => this.handleDelete(merchants)}
                  className="hands ml-3 text-danger"
                  title="Delete"
                >
                  <MDBIcon icon="trash" />
                </span>
                <Link
                  className="ml-5 text-primary"
                  to={"/shop/" + merchants._id}
                  title="Products"
                >
               <MDBIcon fab icon="dropbox" />
                </Link>
              </React.Fragment>
              
            ),
          };
        }),
      };
          
        return (
            <Wrapper>
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/admin-dashboard">ADMIN</Link></div>
          <div  />
          <Menu theme="dark" mode="inline"    defaultSelectedKeys={['3']}   >
       
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
             <h3 className="panel-title text-center "><b>OUR MERCHANTS</b></h3>
           </div>
           
           <div className="panel-body text-center">
            
     
           
       <MDBDataTable
     
         hover
       
         striped
         bordered
         small
         data={data}
         scrollX
         responsive
         entriesOptions={[5, 10, 15,  20, 25]} 
         entries={5}
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
