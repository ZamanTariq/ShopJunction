import React, { Component } from 'react';
import { Route, Switch,Link,BrowserRouter as Router,withRouter } from "react-router-dom";
import Men from "./menFashion";
import Electronic from "./electronics";
import ElectronicAccesories from "./electronicAccessories";
import TvHomeAppliances from "./tvHomeAppliances";
import WatchesBagsJewlery from "./watchesBagsJewleries";
import HealthBeauty from "./healthBeauty";
import Women from "./womenFashion";
import BabiesToys from "./babiesToys";
import HomeLifeStyle from "./homeLifeStyle";
import SportsOutdoor from "./sportsOutdoor";
import AutoMotiveMotorBike from "./automotiveMotorBike";
import GroceriesPet from "./groceriesPets";
import Title from "../../../Title";
import styled from "styled-components";


export default class mainCategory extends Component {
   
    render() {
        
        return (
            <React.Fragment>
                <Wrapper>
                <div class="card text-white bg-primary mb-3 mr-2 col-sm-3 col-md-4" style={{maxWidth: "20rem"}}>
  <div class="card-header">ELECTRONICS</div>
  <div class="card-body">
    <h5 class="card-title">Primary Panel title</h5>
    <p class="card-text text-white">Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
    <Link to="/category/electronic"  class="btn btn-deep-purple">Deep-purple</Link>
  </div>
</div>
</Wrapper>
                  {Title("Product", "Category")}
               
                
 <div>
 <div className="col-sm-12 mt-1 mb-2 btn btn-warning" style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> ELECTRONIC  </div> 
                <Electronic/>
            </div>


            <div>
 <div className="col-sm-12 mt-1 mb-2 btn btn-success" style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> ELECTRONIC ACCESORIES </div> 
                <ElectronicAccesories/>
            </div>


            <div>
 <div className="col-sm-12 mt-1 mb-2 btn btn-info" style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> TV & HOME APPLIANCES </div> 
                <TvHomeAppliances/>
            </div>


            <div>
            <div className="col-sm-12 mb-2 btn btn-primary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> MEN FASHION </div> 
                <Men/>
            </div>


            <div>
            <div className="col-sm-12 mb-2 btn btn-secondary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> WOMEN FASHION </div> 
                <Women/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-dark"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> HEALTH & BEAUTY </div> 
                <HealthBeauty/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-secondary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> BABIES & TOYS </div> 
                <BabiesToys/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-secondary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> Home & Life Style </div> 
                <HomeLifeStyle/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-secondary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> Sports & Outdoor </div> 
                <SportsOutdoor/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-danger"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> AutoMotive & MotorBike's </div> 
                <AutoMotiveMotorBike/>
            </div>

            <div>
            <div className="col-sm-12 mb-2 btn btn-secondary"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> Groceries & Pets </div> 
                <GroceriesPet/>
            </div>



            



            <div>
            <div className="col-sm-12 mb-2 btn btn-info"style={{fontFamily: 'Lalezar',fontSize:"1.2rem"}}> WATCHES BAGS JEWLERY </div> 
                <WatchesBagsJewlery/>
            </div>

         
         
          
            </React.Fragment>
           
        )
    }
}

const Wrapper= styled.div`

.select2-container .select2-selection--single{
    height:34px !important;
   
   
}
.select2-container--default .select2-selection--single{
         border: 1px solid #ccc !important; 
     border-radius: 0px !important; 
}
`