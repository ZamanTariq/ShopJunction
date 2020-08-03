import React, { Component } from 'react'
import Title from "./Title";
import { Link } from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
          <React.Fragment>
            <div>
  {Title("", "Register")}
            </div>
         
            <div className="row row-cols-1 row-cols-md-2 ml-4" style={{marginLeft:"0.2rem",marginTop:"1.4rem",marginRight:"0.2rem"}}>
              <div className="col mb-4">
            <div className="card card-image card-image-user-register">
            
              
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text" style={{fontFamily:"'Cinzel Decorative', cursive"}}><i className="far fa-user-circle"></i> User</h5>
                  <h3 className="card-title pt-2 text-white"><strong>Customer</strong></h3>
                  <p>You can create this account if you want to buy or book your order.You can
                    buy item's from both home & shop section but you can book item's only
                    from shop section.They are the best deller's present in market.
                  </p>
                  <Link to="/user-register"className="btn btn-danger"><i className="fas fa-clone left"></i> Sign Up</Link>
                </div>
              </div>
                </div>
            </div>
              <div className="col mb-4">
          
            <div className="card card-image card-image-merchant-register">
            
             
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text" style={{fontFamily:"'Cinzel Decorative', cursive"}}><i className="fab fa-monero"></i> Merchant</h5>
                  <h3 className="card-title pt-2 text-white"><strong>Seller</strong></h3>
                  <p>You can create this account if you have any shop or warehouse.After creating
                    account you can introduce your product's to our customer.<br/>
                  <small className="font-weight-bold text-warning"> Waring: Must have shop or warehouse !
                    Our team can inspect any time.
                    </small>  
                  </p>
                  <Link to="/merchant-register"className="btn btn-primary"><i className="fas fa-clone left"></i> Sign Up</Link>
                </div>
              </div>
              </div>
              </div>
            </div>
            </React.Fragment>
              
        )
    }
}
