import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {Link} from "react-router-dom";
export default class NewNavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <React.Fragment>
  {/* NAV FOR VISITOR*/}
      <MDBNavbar className="fixed-top" color="warning-color-dark" dark  expand="sm">
        <MDBNavbarBrand  >
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/" ><strong >HOME</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/merchant-product-list"><strong >SHOP</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/product-category"><strong >CATEGORY</strong></MDBNavLink>
            </MDBNavItem>
          
          
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/login">
              <button type="button" className="btn btn-unique" style={{ marginTop:"0px",paddingTop:"0.2rem",paddingRight:"0.5rem",paddingBottom:"0.2rem",paddingLeft:"0.5rem"}}><LockOpenIcon style={{fontSize:"0.9rem"}}/> <small><b>Sign In</b></small></button>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/register">
              <button type="button" className="btn btn-deep-purple" style={{marginTop:"0px",paddingTop:"0.2rem",paddingRight:"0.5rem",paddingBottom:"0.2rem",paddingLeft:"0.5rem"}}><LockIcon style={{fontSize:"0.9rem"}}/> <small><b>Sign Up</b></small></button>
              </MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <br/>
      <br/>
      <br/>
      
      {   /*     NAV FOR USER */}
 
      <MDBNavbar color="red" dark expand="sm">
      <MDBNavbarBrand  >
        <strong className="white-text">Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
        <MDBNavItem >
              <MDBNavLink to="/" ><strong >HOME</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/merchant-product-list"><strong >SHOP</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/product-category"><strong >CATEGORY</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/mybookings"><strong>My BOOKINGS</strong></MDBNavLink>
            </MDBNavItem>
          
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
           
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light " to="/mycart">
            <i className="fas fa-cart-plus"></i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
              <i className="fas fa-cog"></i>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem  component={Link} to="/user-profile">Profile</MDBDropdownItem>
                <MDBDropdownItem onClick={this.logOut.bind(this)}>Logout</MDBDropdownItem>
              
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>


   <br/>
   {  /*   NAV FOR Merchant*/}
 
 <MDBNavbar color="red" dark expand="sm">
 <MDBNavbarBrand  >
   <strong className="white-text">Navbar</strong>
 </MDBNavbarBrand>
 <MDBNavbarToggler onClick={this.toggleCollapse} />
 <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
   <MDBNavbarNav left>
   <MDBNavItem >
         <MDBNavLink to="/" ><strong >HOME</strong></MDBNavLink>
       </MDBNavItem>
       <MDBNavItem>
         <MDBNavLink to="/merchant-product-list"><strong >SHOP</strong></MDBNavLink>
       </MDBNavItem>
       <MDBNavItem>
         <MDBNavLink to="/product-category"><strong >CATEGORY</strong></MDBNavLink>
       </MDBNavItem>
       <MDBNavItem>
         <MDBNavLink to="/product-category"><strong >BOOKING</strong></MDBNavLink>
       </MDBNavItem>
     
   </MDBNavbarNav>
   <MDBNavbarNav right>
     <MDBNavItem>
       <MDBNavLink className="waves-effect waves-light" to="#!">
      
       </MDBNavLink>
     </MDBNavItem>
    
     <MDBNavItem>
       <MDBDropdown>
         <MDBDropdownToggle nav caret>
         <i className="fas fa-cog"></i>
         </MDBDropdownToggle>
         <MDBDropdownMenu className="dropdown-default">
           <MDBDropdownItem component={Link} to="/merchant-profile" >Profile</MDBDropdownItem>
           <MDBDropdownItem onClick={this.merchatLogOut.bind(this)}>Logout</MDBDropdownItem>
         
         </MDBDropdownMenu>
       </MDBDropdown>
     </MDBNavItem>
   </MDBNavbarNav>
 </MDBCollapse>
</MDBNavbar>
    </React.Fragment>
    );
  }
}

