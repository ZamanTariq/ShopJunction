import React, { Component } from 'react'
import styled from "styled-components"
export default class ourServices extends Component {
    render() {
        return (
            <Wrapper>

<div className="container">
<h6 className="font-weight-bold text-center grey-text text-uppercase small mb-2">Services</h6>
    <h3 className="font-weight-bold text-center orange-text ">Our Services</h3>
    <hr className="w-header my-1"/>
    <p className="lead text-center text-muted pt-2 mb-5">We are serving our nation since 2020</p>
    <div className="row mb-5 ml-1">
     
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="serviceBox">
                <div className="service-icon">
                    <span><i className="fa fa-globe"></i></span>
                </div>
                <h3 className="title text-white">Web Design</h3>
                <p className="description text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="serviceBox orange">
                <div className="service-icon">
                    <span><i className="fas fa-database"></i></span>
                </div>
                <h3 className="title text-white">Back End</h3>
                <p className="description text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="serviceBox purple">
                <div className="service-icon">
                    <span><i className="fas fa-mobile-alt"></i></span>
                </div>
                <h3 className="title text-white">Mobile App</h3>
                <p className="description text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="serviceBox green">
                <div className="service-icon">
                    <span><i className="fas fa-bullhorn"></i></span>
                </div>
                <h3 className="title text-white">Marketing</h3>
                <p className="description text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
       
    </div>
</div>
          </Wrapper>
        )
    }
}
const Wrapper=styled.div`

                               //  1ST DIV
.serviceBox{
      background: #ff6b81;
      font-family: 'Raleway', sans-serif;
      text-align: center;
      padding: 0 15px 25px;
      margin: 10px;
      border: 2px solid #ff4757;
      border-radius: 50px 0;
      box-shadow: 0 0 8px rgba(0,0,0,0.3) inset;
      position: relative;
      transition: all 0.3s ease 0s;
  }
  .serviceBox:before,
  .serviceBox:after{
      content: "";
      width: 25px;
      height: 25px;
      border-top: 7px solid #ff6b81;
      border-right: 7px solid #ff4757;
      position: absolute;
      top: -7px;
      right: -7px;
  }
  .serviceBox:after{
      border-top: none;
      border-right: none;
      border-bottom: 7px solid #ff4757;
      border-left: 7px solid #ff6b81;
      top: auto;
      right: auto;
      bottom: -7px;
      left: -7px;
  }
  .serviceBox .service-icon{
      color: #fff;
      background: #ff6b81;
      font-size: 35px;
      width: 90px;
      padding: 0 0 5px;
      margin: 0 auto 30px;
      border-radius: 0 0 15px 15px;
      box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
      position: relative;
  }
  .serviceBox:hover .service-icon i{
      transform: rotateX(360deg);
      transition: all 0.3s;
  }
  .serviceBox .service-icon:before{
      content: "";
      background: #ff6b81;
      width: calc(100% + 14px);
      height: 10px;
      transform: translateX(-50%);
      position: absolute;
      top: -10px;
      left: 50%;
  }
  .serviceBox .service-icon span:before,
  .serviceBox .service-icon span:after{
      content: '';
      background-color: #ff4757;
      height: 10px;
      width: 15px;
      border-radius: 10px 10px 0 0;
      position: absolute;
      left: -15px;
      top: -10px;
  }
  .serviceBox .service-icon span:after{
      left: auto;
      right: -15px;
  }
  .serviceBox .title{
      color: #ff4757;
      font-size: 19px;
      font-weight: 600;
      text-transform: uppercase;
      margin: 0 0 10px;
  }
  .serviceBox .description{
      font-size: 15px;
      line-height: 25px;
  }

  //  2ND DIV
  
  .serviceBox.orange:after{
      border-left-color: #ff8d23;
      border-bottom-color: #f27100;
  }
  .serviceBox.orange .service-icon,
  .serviceBox.orange .service-icon:before{
      background-color: #ff8d23;
  }
  .serviceBox.orange .service-icon span:before,
  .serviceBox.orange .service-icon span:after{
      background-color: #f27100;
  }
  .serviceBox.orange .title{ color: #f27100; }
  .serviceBox.purple{ border-color: #5446A7; }
  .serviceBox.purple:before{
      border-top-color: #7161C4;
      border-right-color: #5446A7;
  }
  .serviceBox.orange{ border-color: #f27100; }
  .serviceBox.orange:before{
      border-top-color: #ff8d23;
      border-right-color: #f27100;
  }
            //  3RD DIV


  .serviceBox.purple:after{
      border-left-color: #7161C4;
      border-bottom-color: #5446A7;
  }
  .serviceBox.purple .service-icon,
  .serviceBox.purple .service-icon:before{
      background-color: #7161C4;
  }
  .serviceBox.purple .service-icon span:before,
  .serviceBox.purple .service-icon span:after{
      background-color: #5446A7;
  }
  .serviceBox.purple .title{ color: #5446A7; }
  .serviceBox.green{ border-color: #91c100; }
  .serviceBox.green:before{
      border-top-color: #a3d313;
      border-right-color: #91c100;
  }
  //  4TH DIV
  .serviceBox.green:after{
      border-left-color: #a3d313;
      border-bottom-color: #91c100;
  }
  .serviceBox.green .service-icon,
  .serviceBox.green .service-icon:before{
      background-color: #a3d313;
  }
  .serviceBox.green .service-icon span:before,
  .serviceBox.green .service-icon span:after{
      background-color: #91c100;
  }
  .serviceBox.green .title{ color: #91c100; }
  @media only screen and (max-width:990px){
      .serviceBox{ margin: 10px 10px 50px; }
  }

`