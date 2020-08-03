import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Link } from "react-router-dom";
import { MDBDataTable, MDBIcon } from "mdbreact";
import {
  BookOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import jwt_decode from "jwt-decode";
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class productTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      products: [],
    };
  }
  getUserId() {
    const token = localStorage.merchanttoken;
    const decoded = jwt_decode(token);
    this.setState({
      merchantId: decoded._id,
    });
    return decoded._id;
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/merchantproduct/" + this.getUserId())
      .then((res) => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleDelete = (products) => {
    const product = this.state.products.filter((m) => m._id !== products._id);
    this.setState({ products: product });
    axios
      .get("http://localhost:5000/merchantproduct/delete/" + products._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const data = {
      columns: [
        {
          label: "Title",
          field: "title",
          sort: "asc",
          width: 100,
        },
        {
          label: "Image",
          field: "img",
          sort: "asc",
          width: 100,
        },
        {
          label: "Category",
          field: "category",
          sort: "asc",
          width: 100,
        },
        {
          label: "Off",
          field: "rating",
          sort: "asc",
          width: 100,
        },
        {
          label: "OldPrice",
          field: "oldprice",
          sort: "asc",
          width: 100,
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
          width: 100,
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
          width: 100,
        },
        {
          label: "Company",
          field: "company",
          sort: "asc",
          width: 0,
        },
        {
          label: "Info",
          field: "info",
          sort: "asc",
          width: 100,
        },
        {
          label: "Booking",
          field: "status",
          sort: "asc",
          width: 100,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 100,
        },
      ],

      rows: this.state.products.map((products) => {
        return {
          title: products.title,
          img: (
            <img
              src={"/Upload/" + products.image}
              alt="cart"
              width="40px"
              height="40px"
            />
          ),
          category: products.category,
          rating: products.rating,
          oldprice: products.oldprice,
          price: products.price,
          stock: products.stock,
          company: products.company,
          info: products.info,
          status: products.bookingStatus ? (
            <RadioButtonCheckedIcon style={{ color: "green" }} />
          ) : (
            <RadioButtonCheckedIcon style={{ color: "red" }} />
          ),
          action: (
            <div>
              {" "}
              <Link
                to={"/edit-merchant-product/" + products._id}
                className=" outline-orange "
              >
                <i className="fas fa-edit"></i>
              </Link>
              |{" "}
              <span
                onClick={() => this.handleDelete(products)}
                className="outline-orange "
              >
                {" "}
                <i className="fas fa-trash-alt"></i>
              </span>
            </div>
          ),
        };
      }),
    };

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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
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
                <Menu.Item
                  key="5"
                  onClick={(e) => {
                    this.props.history.push("/merchant-sale-title");
                  }}
                >
                  <span>Sale BY title</span>
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={(e) => {
                    this.props.history.push("/merchant-sale-category");
                  }}
                >
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
                <Wrapper>
                  <div className="container cont">
                    <div
                      className="panel panel-default my-auto"
                      id="transaction"
                    >
                      <div className="panel-heading main-color-bg">
                        <h3 className="panel-title text-center ">
                          <b>YOUR PRODUCTS</b>
                        </h3>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <Link
                          to={"/create-merchant-product/"}
                          className="btn btn-sm btn-primary"
                        >
                          <b>Create</b>
                        </Link>

                        <Link
                          to={"/merchant-shop"}
                          className="btn btn-sm btn-success"
                          size="sm"
                        >
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
                          entriesOptions={[
                            10,
                            20,
                            30,
                            40,
                            50,
                            60,
                            70,
                            80,
                            90,
                            100,
                          ]}
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
    );
  }
}
const Wrapper = styled.div`
  .btn {
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
  }

  @media screen and (max-width: 600px) {
    .cont {
      margin-left: 10px;
    }
  }
`;
