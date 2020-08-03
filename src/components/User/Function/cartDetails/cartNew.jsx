
import React, { Component } from 'react';
import axios from 'axios';
import Title from "../../../Title"
import jwt_decode from "jwt-decode";
import {orderPlacementMessage,cartUpdated} from '../../../notificationMessages'
import { Modal, Button } from 'antd';
import EmptyCart from "./EmptyCart"
import MerchantCart from './merchantCart';
import AdminCart from './adminCart';


export default class NewCart extends Component {

 

    render() {
    
      return (
        <div className="container">
          
         {Title("Your", "Cart")}
          <div className="container table-responsive mb-4 mx-2 ">

         
          <MerchantCart/>
          <AdminCart/>
            
          
        
          
      
        </div>
        
          
       

        
        



        </div>
      );
    }
  }

  