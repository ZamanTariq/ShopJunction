import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "../../../Deal/View"

const Deal = props => (
  <React.Fragment >
  <div className="container col-lg-2 col-md-3 col-sm-3 col-xs-3 mb-1 ml-0">


  <section  >
      <div className="mb-2 ">
        <div className="card card-ecommerce">
        <Link to={"/admin-product-detail/" + props.deal._id}>
          <div className="view overlay my-1 " >
       
            <img src={"upload/" + props.deal.image}  width="120vw" height="120" alt="Sample image" style={{position:"relative",overflow:"hidden",margin:"auto"}}/>
         
            <span>
              <div className="mask rgba-white-slight"></div>
            </span>
          </div>
          </Link>
          <div className="card-body">
            <h5 className="card-title mb-1 text-uppercase"><strong style={{fontSize:"0.8rem"}}><Link to={"/admin-product-detail/" + props.deal._id} className="dark-grey-text">{props.deal.title}</Link></strong></h5>
            <ProductWrapper>
            <span className="badge badge-danger mb-2">{props.deal.rating}</span>
         
    
   
            <div className="card-footer pb-0">
              <div className="row mb-0">
                <h5 className="mb-0 pb-0 mt-1 font-weight-bold" style={{fontSize:"1rem"}}>  <span className="grey-text" style={{fontSize:"1rem"}}><small className="mr-1"><s>{props.deal.oldprice}</s></small></span><span className="orange-text"><strong>{props.deal.price}</strong></span>
                
                </h5>
                <span className="float-right" >
                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                </span>
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
export default class between45000to50000 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/adminproduct/category/price/between/45000-50000")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("Error" + err);
      });
  }
  ProductList() {
    return this.state.products.map(currentDeal => {
      return <Deal deal={currentDeal} key={currentDeal._id} />;
    });
  }
  render() {
    return (
      <React.Fragment>
   
        <div className="container-fluid">
          <div className="row">{this.ProductList()}</div>
        </div>
      </React.Fragment>
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

.float-right{
  position: absolute;
  right:0;
  top: 150px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;

  color: grey;
  
}

.float-right:hover{
  position: absolute;
  right:0;
  top: 150px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;

  color: red;
  
}






`;