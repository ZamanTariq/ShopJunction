import React, { Component } from 'react'
import axios from "axios"
import styled from "styled-components"
import { Link } from 'react-router-dom'

export default class QuantiyOfAll extends Component {
    constructor(props) {
        super(props);

  
        this.state = {
    newusers: [],
    merchants:[],
    adminProducts:[],
    merchantProducts:[],

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
    render() {
        return (
            <div>
                <Wrapper>
                 <div className="row mb-2">
 
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
   
     <span id="user"   className="card-footer footer-hover small text-center white-text border-0 p-2 ">More info<Link to="/admin-dashboard/users/customers" className="quantity-links hands"><i className="fas fa-arrow-circle-right pl-2"></i></Link></span>
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
     <span id="merchant"  className="card-footer footer-hover small text-center white-text border-0 p-2 ">More info<Link to="/admin-dashboard/users/merchants" className="quantity-links hands"><i className="fas fa-arrow-circle-right pl-2"></i></Link></span>
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
     <span id="product"  className="card-footer footer-hover small text-center white-text border-0 p-2 ">More info<Link to="/admin-dashboard/products/admin" className="quantity-links hands"><i className="fas fa-arrow-circle-right pl-2"></i></Link></span>
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
     <span id="merchantproduct"  className="card-footer footer-hover small text-center white-text border-0 p-2 ">More info<Link to="/admin-dashboard/products/merchants" className="quantity-links hands" ><i className="fas fa-arrow-circle-right pl-2"></i></Link></span>
   </div>
   {/* <!-- Card --> */}

 </div>
 {/* <!-- Grid column --> */}

</div>
</Wrapper>
            </div>
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