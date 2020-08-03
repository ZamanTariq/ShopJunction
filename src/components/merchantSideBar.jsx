import React, { Component } from 'react'
import 'antd/dist/antd.css';




import styled from "styled-components";


import { Link } from 'react-router-dom';


export default class MerchantSideBar extends Component {

    render() {
     
        return (
            <Wrapper>
            <div className="sidebar mob-view">
<Link className="active" to="/merchant-shop">
Home
</Link>
<Link to="/merchant-product-panel">Product Panel</Link>
<Link to="/merchant-products">My Products</Link>
<Link to="/orders">Orders</Link>
<Link to="/bookingRequests">Bookings</Link>
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