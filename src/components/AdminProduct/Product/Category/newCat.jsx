import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Title from "../../../Title";

export default class newCat extends Component {
    render() {
        return (
         <React.Fragment>
  {Title("Product", "Category")}
        
          
         

            <div className="row " style={{textAlign:"center",marginLeft:"120px",marginTop:"20px"}} >
                <div class="card text-white bg-primary mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">ELECTRONICS</div>
  <div class="card-body">
    <h5 class="card-title">Primary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-electronic"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-secondary mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">ELECTRONIC ACCESSORIES</div>
  <div class="card-body">
    <h5 class="card-title">Secondary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-electronic-accesories"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-success mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">MEN FASHION</div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-men"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-danger mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">WOMEN FASHION</div>
  <div class="card-body">
    <h5 class="card-title">Primary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-women"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-warning mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">TV & HOME APPLIANCES</div>
  <div class="card-body">
    <h5 class="card-title">Secondary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-tv-home-appliances"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-info mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">HEALTH & BEAUTY</div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-health-beauty"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-light mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">BABIES & TOYS</div>
  <div class="card-body">
    <h5 class="card-title">Primary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-babies-toys"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-dark mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">Home & Life Style</div>
  <div class="card-body">
    <h5 class="card-title">Secondary Panel title</h5>
    
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-home-life-style"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-success mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">Sports & Outdoor</div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-sports-outdoor"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-success mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">AutoMotive & MotorBike's</div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-auto-motive-motor-bike"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-success mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">Groceries & Pets</div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-groceries-pet"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
<div class="card text-white bg-secondary mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">WATCHES BAGS JEWLERY </div>
  <div class="card-body">
    <h5 class="card-title">Success Panel title</h5>
    
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category-watches-bags-jewlery"  class="btn btn-deep-purple">VISIT</Link>
  </div>
</div>
            </div>
            </React.Fragment>
        )
    }
}
