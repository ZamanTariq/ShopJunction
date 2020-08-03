import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom'
import { MDBDataTable,MDBIcon } from 'mdbreact';
import jwt_decode from "jwt-decode";
import {
BookOutlined,
ShopOutlined,
ShoppingCartOutlined,
DropboxOutlined,
} from '@ant-design/icons';
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class MerchantSaleTitle extends Component {
constructor(props){
super(props)
this.state = {
collapsed: false,
products: [],
totals:[]
};
}
merchantId(){
const token = localStorage.merchanttoken;
const decoded = jwt_decode(token);
return decoded._id
}
componentDidMount() {
axios
.get("http://localhost:5000/deliverdOrder/merchantSalebytitle/"+this.merchantId())
.then((res) => {
(res.data==="Empty")?
this.setState({products:[{name:null,total:null,quantity:null}]}):
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
label: 'Category',
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
],
rows:
this.state.products.map(products => {
return {
name: products._id,
total: products.sum,
quantity:products.count
}
})
}
return (
<Wrapper>
   <div >
      <Layout style={{ minHeight: '100vh' }} >
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
         <div className="text-center  font-weight-bold text-white py-4">
            <Link to="/merchant-shop">
            MERCHANT</Link>
         </div>
         <div />
            <Menu theme="dark" mode="inline"    defaultSelectedKeys={['2']}   >
               <Menu.Item key="1" onClick={(e)=>
                  {this.props.history.push("/merchant-shop")}} >
                  <ShopOutlined />
                  <span>Shop Detail</span>
               </Menu.Item>
               <Menu.Item key="2" onClick={(e)=>
                  {this.props.history.push("/merchant-products")}} >
                  <DropboxOutlined />
                  <span>Products</span>
               </Menu.Item>
               <Menu.Item key="3" onClick={(e)=>
                  {this.props.history.push("/orders")}} >
                  <ShoppingCartOutlined />
                  <span>Order</span>
               </Menu.Item>
               <Menu.Item key="4" onClick={(e)=>
                  {this.props.history.push("/bookingRequests")}} >
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
      <h3 className="font-weight-bold panel-title text-center text-uppercase "> Sale By Title</h3>
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