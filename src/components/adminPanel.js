import React, { Component } from 'react'
import axios from "axios"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import UserTable from "./Admin/displayUsers";
import MerchantTable from "./Admin/merchantDetails/displayMerchants";
import AdminProduct from "./adminProducts/Index";
import MerchantProduct from "./MerchantProduct/Index";


export default class adminPanel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
  
        this.state = {
    newusers: [],
    merchants:[],
    adminProducts:[],
    merchantProducts:[],
  user:"false",
  merchant:"false",
  product:"false",
  merchantProduct:"false"
};
      }
      componentDidMount(){
        axios.get('http://localhost:5000/newuser')
          .then(response => {
            
            this.setState({ newusers: response.data });
          })
          .catch(function (error) {
            console.log(error);
  
          })

          axios.get('http://localhost:5000/newmerchant')
        .then(response => {
          
          this.setState({ merchants: response.data });
        })
        .catch(function (error) {
          console.log(error);

        })

        axios.get('http://localhost:5000/adminProduct')
        .then(response => {
          
          this.setState({ adminProducts: response.data });
        })
        .catch(function (error) {
          console.log(error);

        })

        axios.get('http://localhost:5000/merchantProduct')
        .then(response => {
          
          this.setState({ merchantProducts: response.data });
        })
        .catch(function (error) {
          console.log(error);

        })
      }
      handleClick(e) {
        //     Setting state and a callback function   
              if (e.target.id === "user") {
                this.setState({user: true})
                this.setState({merchant: false})
                this.setState({product: false})
                this.setState({merchantProduct: false})
              }
              if (e.target.id === "merchant") {
                this.setState({user: false})
                this.setState({merchant: true})
                this.setState({product: false})
                this.setState({merchantProduct: false})
              }
              if (e.target.id === "product") {
                this.setState({user: false})
                this.setState({merchant: false})
                this.setState({product: true})
                this.setState({merchantProduct: false})
              }
              if (e.target.id === "merchantproduct") {
                this.setState({user: false})
                this.setState({merchant: false})
                this.setState({product: false})
                this.setState({merchantProduct: true})
              }

            }
        
          
          
    render() {
    
        return (
            <React.Fragment>
          
                  <div className="container">

{/* <!-- Section: Block Content --> */}
<section>
  
<Wrapper>

  {/* <PieChart/> */}
  
  {/* <!-- Grid row --> */}
  <div className="row">
 
    {/* <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-0 ">

      {/* <!-- Card --> */}
      <div className="card primary-color white-text">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="h2-responsive font-weight-bold text-white mt-n2 mb-0">{this.state.newusers.length}</p>
            <p className="mb-0 text-white">Customers</p>
          </div>
          <div>
          <i className="fas fa-users fa-2x text-black-40"></i>
          </div>
        </div>
        <span id="user" onClick={this.handleClick} className="card-footer footer-hover small text-center white-text border-0 p-2">More info<i className="fas fa-arrow-circle-right pl-2"></i></span>
      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-0">
{/* 
      <!-- Card --> */}
      <div className="card warning-color white-text">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="h2-responsive font-weight-bold text-white mt-n2 mb-0">{this.state.merchants.length}</p>
            <p className="mb-0 text-white">Merchants </p>
          </div>
          <div>
            <i className="fab fa-monero fa-2x text-black-40"></i>
          </div>
        </div>
        <span id="merchant" onClick={this.handleClick} className="card-footer footer-hover small text-center white-text border-0 p-2">More info<i className="fas fa-arrow-circle-right pl-2"></i></span>
      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column -->

    <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-0">

      {/* <!-- Card --> */}
      <div className="card light-blue lighten-1 white-text">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="h2-responsive font-weight-bold text-white mt-n2 mb-0">{this.state.adminProducts.length}</p>
            <p className="mb-0 text-white">Products</p>
          </div>
          <div>
          <i className="fas fa-cart-arrow-down  fa-2x text-black-40"></i>
       
          </div>
        </div>
        <span id="product" onClick={this.handleClick} className="card-footer footer-hover small text-center white-text border-0 p-2">More info<i className="fas fa-arrow-circle-right pl-2"></i></span>
      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column -->

    <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-0">

      {/* <!-- Card --> */}
      <div className="card red accent-2 white-text">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="h2-responsive font-weight-bold text-white mt-n2 mb-0">{this.state.merchantProducts.length}</p>
            <p className="mb-0 text-white">Merchant Products</p>
          </div>
          <div>
            <i className="fas fa-cart-plus fa-2x text-black-40"></i>
          </div>
        </div>
        <span id="merchantproduct" onClick={this.handleClick} className="card-footer footer-hover small text-center white-text border-0 p-2">More info<i className="fas fa-arrow-circle-right pl-2"></i></span>
      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}
  </Wrapper>
</section>
{/* <!-- Section: Block Content --> */}

</div>
{/* SIDE NAVIGATION */}


<SideNavWrapper>
<div className="wrapper1 container ">
    <div className="sidebar1">
       <h6>ShopInn</h6>
        <ul>
            <li><span onClick={this.onChangeUser}><i className="fas fa-home"></i>Home</span></li>
            <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i className="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i className="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="#"><i className="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i className="fas fa-address-book"></i>Contact</a></li>
            <li><a href="#"><i className="fas fa-map-pin"></i>Map</a></li>
        </ul> 
       
    </div>
   <div className="main_content">

  {this.state.user?<UserTable/>:
  this.state.merchant?<MerchantTable/>:
  this.state.product?<AdminProduct/>:
  this.state.merchantProduct?<MerchantProduct/>:
  null}
  </div>
</div>
</SideNavWrapper>




            </React.Fragment>
        )
    }
}
const Wrapper=styled.div`

.footer-hover {
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
  }

  .footer-hover:hover {
    background-color: rgba(0, 0, 0, 0.2)
  }

  .text-black-40 {
    color: rgba(0, 0, 0, 0.4)
  }
`
const SideNavWrapper=styled.div`

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');




.wrapper1{
  display: flex;
 
}

.wrapper1 .sidebar1{
  width: 195px;
  height: 100%;
  background: #4b4276;
  padding: 25px 0px;
 
}

.wrapper1 .sidebar1 h6{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper1 .sidebar1 ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
  list-style:none;
}    

.wrapper1 .sidebar1 ul li a{
  color: white;
  display: block;
}

.wrapper1 .sidebar1 ul li span .fas{
  width: 25px;
}

.wrapper1 .sidebar1 ul li:hover{
  background-color: #594f8d;
}
    
.wrapper1 .sidebar1 ul li:hover span{
  color: #fff;
}
 




.wrapper1 .main_content{
  width: 80%%;
  margin-left: 0px;
}




@media (max-height: 500px){
  .social_media{
  display: none !important;
  }
 
}
`