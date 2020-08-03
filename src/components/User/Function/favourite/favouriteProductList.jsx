import React, { Component } from "react";
import MerchantFavouriteProductList from './merchantFavourite';
import AdminFavouriteProductList from './adminFavourites';
import { Divider} from 'antd';

import { withRouter } from "react-router-dom";

class FavouriteProductList extends Component {
 

  render() {
    return (
      <React.Fragment>
      
     <div className="container mt-0">
      <small className="font-weight-bold  ">Favourite List</small>
     <Divider className="mt-0"><i className="fas fa-heart"></i></Divider>
     <Divider className="mt-0" orientation="right"><small>From Home</small></Divider>
     <AdminFavouriteProductList/>
     <Divider className="mt-0" orientation="left"><small>From Shop</small></Divider>
    
     <MerchantFavouriteProductList/>
     </div>
    
      
  
      </React.Fragment>
    );
  }
}
export default withRouter(FavouriteProductList)