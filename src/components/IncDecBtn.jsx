import React, { Component } from "react";
import styled from "styled-components"
import Buy from "./Howtodo/Buy"
import Book from "./Howtodo/Book"
import Subscribe from "./Howtodo/Subscribe"
export default class IncDecBtn extends Component {
 

  render() {
    return (
        <Wrapper>
      

 
  

      <div className="container my-5">



  <section>

    <h6 className="font-weight-normal text-uppercase font-small grey-text mb-4 text-center">FAQ</h6>
   
    <h3 className="font-weight-bold black-text mb-4 pb-2 text-center">Frequently Asked Questions</h3>
    <hr className="w-header"/>
 
    <p className="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">Got a question? We've got answers. If you have some other questions, see our support center.</p>

		<div className="row">
      <div className="col-md-12 col-lg-10 mx-auto mb-5">
      

        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  
          <div className="card border-top border-bottom-0 border-left border-right border-light">

       
            <div className="card-header border-bottom border-light" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 className="black-text font-weight-normal mb-0">
                 How To Buy Items? <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

        
            <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div className="card-body">
                <Buy/>
              </div>
            </div>

          </div>
     
          <div className="card border-bottom-0 border-left border-right border-light">

            
            <div className="card-header border-bottom border-light" role="tab" id="headingTwo2">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                aria-expanded="false" aria-controls="collapseTwo2">
                <h5 className="black-text font-weight-normal mb-0">
                  How to Book Items? <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

     
            <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
              data-parent="#accordionEx">
              <div className="card-body">
              <Book/>
              </div>
            </div>

          </div>
        
          <div className="card border-bottom-0 border-left border-right border-light">

   
            <div className="card-header border-bottom border-light" role="tab" id="headingThree3">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                aria-expanded="false" aria-controls="collapseThree3">
                <h5 className="black-text font-weight-normal mb-0">
                  I want to get your latest product details? <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

       
            <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
              data-parent="#accordionEx">
              <div className="card-body">
								<Subscribe/>
              </div>
            </div>

          </div>
       
          <div className="card border-left border-right border-light">

         
            <div className="card-header border-bottom border-light" role="tab" id="headingThree4">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4"
                aria-expanded="false" aria-controls="collapseThree4">
                <h5 className="black-text font-weight-normal mb-0">
                  Can I request refund? <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

      
            <div id="collapseThree4" className="collapse" role="tabpanel" aria-labelledby="headingThree4"
              data-parent="#accordionEx">
              <div className="card-body">
								Unfortunately, not. We do not issue full or partial refunds for any reason.    
              </div>
            </div>

          </div>
       

        </div>
    
        
      </div>
    </div>

	</section>
  
  
</div>
        </Wrapper>
      );
  }
}

const Wrapper=styled.div`


   
.input-grey .form-control {
    border-radius: .125rem;
  }
  
  .input-grey input::placeholder {
    color: #fff;
  }

  .input-grey.input-round {
    border-radius: 10em;
  }

  .input-grey.input-round.input-group>.input-group-append>.btn{
    border-top-left-radius: 10em;
    border-top-right-radius: 10em;
    border-bottom-left-radius: 10em;
    border-bottom-right-radius: 10em;
  }


`