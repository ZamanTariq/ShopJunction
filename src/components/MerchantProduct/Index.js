import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
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

export default class DisplayMerchantProduct extends Component {
constructor(props){
  super(props)
  this.state = {
    collapsed: false,
   
    products: [],
  };
}

componentDidMount() {
  axios
    .get("http://localhost:5000/merchantproduct/")
    .then((res) => {
      this.setState({ products: res.data });
    })
    .catch((err) => {
      console.log("Error" + err);
    });
}


handleDelete=products=> {
const product = this.state.products.filter(m => m._id !== products._id);
this.setState({ products:product });
axios.get('http://localhost:5000/merchantproduct/delete/'+products._id)
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
            label: 'Title',
            field: 'title',
            sort: 'asc',
            width: 130
          },
          {
            label: 'Image',
            field: 'image',
            sort: 'asc',
            width: 60
          },
          {
            label: 'Category',
            field: 'category',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Less',
            field: 'rating',
            sort: 'asc',
            width: 130
          },
          {
            label: 'Old Price',
            field: 'oldprice',
            sort: 'asc',
            width: 130
          },
          ,
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Company',
            field: 'company',
            sort: 'asc',
            width: 150
          },
          {
              label: 'inCart',
              field: 'inCart',
              sort: 'asc',
              width: 30
          }
          ,
          {
              label: 'Action',
              field: 'action',
              sort: 'asc',
              width: 150
          }
        ],
        
        rows:
        
      
       
        this.state.products.map(products => {
          return {
          
            title: products.title,
            image: <img src={"/Upload/"+products.image} alt="product" width="40px" height="40px"/>,
            category: products.category,
            rating: products.rating,
            price: products.price,
           oldprice: products.oldprice,
           company: products.company,
           inCart: products.inCart?(<RadioButtonCheckedIcon style={{color:"#007E33"}}/>):(<RadioButtonCheckedIcon style={{color:"#757575"}} />),
           action:<React.Fragment >
      <Link className="ml-5 text-primary" to={"/change-merchant-product/"+products._id} title="Edit" ><MDBIcon icon="pencil-alt" /></Link>     <span  onClick={() => this.handleDelete(products)} className="hands ml-3 text-danger" title="Delete" ><MDBIcon icon="trash" /></span>
      
           </React.Fragment>
       
           
          }
        })
      }
      
        return (
           
                 <div >
                 <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="text-center  font-weight-bold text-white py-4"><Link to="/admin-dashboard">ADMIN</Link></div>
          <div  />
          <Menu theme="dark" mode="inline"    defaultSelectedKeys={['5']}   >
       
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
             <h3 className="panel-title text-center"><b>MERCHANT PRODUCTS</b></h3>
           </div>
           <div className="row d-flex justify-content-center">
           <Link to={"/create-merchant-product/"} className="btn btn-sm btn-primary" >
                   <b>Create</b>
                 </Link>
               
                 <Link to={"/merchant-product-list"} className="btn btn-sm btn-success" size="sm">
                   <b>Home View</b>
                 </Link>
                 </div>
     
     
           <div className="panel-body">
       <MDBDataTable
         hover
         striped
         bordered
         small
         data={data}
       
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
