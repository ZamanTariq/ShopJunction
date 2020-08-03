import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  DropboxOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Title from "./../../Title";
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Deal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      merchantId: "",
      userId: "",
      title: "",
      image: "",
      category: "",
      price: "",
      company: "",
      info: "",
      inCart: "",
      count: "",
      total: "",
      quantity: 1,
      totalPrice: "",
      userAddress: "",
      shopName: "",
      shopAddress: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container col-lg-2 col-md-3 col-sm-3 col-xs-3 mb-1 mx-3">
          <section>
            <div className="mb-2">
              <div className="card card-ecommerce">
                <Link to={"/merchant-product-detail/" + this.props.deal._id}>
                  <div className="view overlay my-1 ">
                    <img
                      src={"/Upload/" + this.props.deal.image}
                      width="120vw"
                      height="120"
                      alt="Sample image"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    />

                    <span>
                      <div className="mask rgba-white-slight"></div>
                    </span>
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title mb-1 text-uppercase">
                    <strong style={{ fontSize: "0.8rem" }}>
                      <Link
                        to={"/merchant-product-detail/" + this.props.deal._id}
                        className="dark-grey-text"
                      >
                        {this.props.deal.title}
                      </Link>
                    </strong>
                  </h5>

                  <ProductWrapper>
                    <span className="badge badge-danger mb-2">
                      {this.props.deal.rating}
                    </span>

                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <h5
                          className="mb-0 pb-0 mt-1 font-weight-bold"
                          style={{ fontSize: "1rem" }}
                        >
                          {" "}
                          <span
                            className="grey-text"
                            style={{ fontSize: "1rem" }}
                          >
                            <small className="mr-1">
                              <s>{this.props.deal.oldprice}</s>
                            </small>
                          </span>
                          <span className="orange-text">
                            <strong>{this.props.deal.price}Rs</strong>
                          </span>
                        </h5>
                      </div>
                    </div>
                  </ProductWrapper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default class ShopDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      products: [],

      merchantName: "",
      shopName: "",
      shopDetail: "",
      shopAddress: "",
      id: "",
    };
  }
  getMerchantId() {
    const token = localStorage.merchanttoken;
    const decoded = jwt_decode(token);

    return decoded._id;
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/newmerchant/profile/" + this.getMerchantId())
      .then((res) => {
        this.setState({
          merchantName: res.data[0].merchantName,
          shopName: res.data[0].shopName,
          shopDetail: res.data[0].shopDetail,
          shopAddress: res.data[0].shopAddress,
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/merchantproduct/" + this.getMerchantId())
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  ProductList() {
    return this.state.products.map((currentDeal) => {
      return <Deal deal={currentDeal} key={currentDeal._id} />;
    });
  }

  shop() {
    return (
      <div className="jumbotron container mt-5 mx-3">
        <div className="col-sm-8 mx-auto">
          <h3 className="text-center">
            <i className="fas fa-id-card m-3"></i>Shop Profile
          </h3>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>
                Owner Name <i className="fas fa-signature"></i>
              </td>
              <td>{this.state.merchantName}</td>
            </tr>
            <tr>
              <td>
                Shop Name <i className="fab fa-shopify"></i>
              </td>
              <td>{this.state.shopName}</td>
            </tr>
            <tr>
              <td>
                Shop Detail <i className="fas fa-info-circle"></i>
              </td>
              <td>{this.state.shopDetail}</td>
            </tr>
            <tr>
              <td>
                Shop Address <i className="fas fa-map-marker-alt"></i>
              </td>
              <td>{this.state.shopAddress}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="text-center  font-weight-bold text-white py-4">
              <Link to="/merchant-shop">MERCHANT</Link>
            </div>
            <div />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="1"
                onClick={(e) => {
                  this.props.history.push("/merchant-shop");
                }}
              >
                <ShopOutlined />
                <span>Shop Detail</span>
              </Menu.Item>

              <Menu.Item
                key="2"
                onClick={(e) => {
                  this.props.history.push("/merchant-products");
                }}
              >
                <DropboxOutlined />
                <span>Products</span>
              </Menu.Item>

              <Menu.Item
                key="3"
                onClick={(e) => {
                  this.props.history.push("/orders");
                }}
              >
                <ShoppingCartOutlined />
                <span>Order</span>
              </Menu.Item>

              <Menu.Item
                key="4"
                onClick={(e) => {
                  this.props.history.push("/bookingRequests");
                }}
              >
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
            <Content>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <div className="container-fluid">
                  <div className="row">
                    {this.shop()}
                    <div className="container">
                      <h1 className="text-center">{Title("My", "Products")}</h1>

                      <div className="row">{this.ProductList()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
const ProductWrapper = styled.div`
  .badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    background: red;
    color: #fff;
    padding: 3px 5px;
  }

  .float-right {
    position: absolute;
    right: 0;
    top: 150px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;

    color: grey;
  }

  .float-right:hover {
    position: absolute;
    right: 0;
    top: 150px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;

    color: red;
  }
`;
