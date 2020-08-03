import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class ourPartners extends Component {
    render() {
        return (
            
                <Wrapper>
                <div className="container-fluid unique-color-dark " style={{position:"sticky"}} >
                <h6 className="heading  ">
                 our partner
                 
                </h6>
               
               
   <section className="customer-logos slider container unique-color-dark ">
   
      <div className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKPaR2CRHpUcNGRQ9Zb1idPevB8JhE4gMpqv2rf5OScEBXTgWb&usqp=CAU"/></div>
      <div className="slide"><img src="data:image/jpeg;base64,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"/></div>
      <div className="slide"><img src="data:image/png;base64,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"/></div>
      <div className="slide"><img src="https://dotnetnuke.nl/Portals/16/EasyDNNnews/18/bootstrap-social-logo.png"/></div>
      <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
      <div className="slide"><img src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png"/></div>
      <div className="slide"><img src="data:image/png;base64,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"/></div>
      <div className="slide"><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
   </section>
   <div className="footer-copyright text-center text-white py-3">
            © 2020 Copyright:
            <Link to="/"> ShopInn.com</Link>
          </div>
</div>
                </Wrapper>
        
        )
    }
}
const Wrapper=styled.div`


    .heading{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight:bold;
        letter-spacing: 0.5px;
        margin-right: -3px;
        margin-bottom: 1rem;
        text-align: center;
        color: #fff;
        position: relative;
    }
    .heading::after{
        content: "";
        width: 7.5rem;
        height: .15rem;
        background-color: #f57c00;
        position: absolute;
        bottom: -.3rem;
        left: 50%;
        transform: translate(-50%);
        border-radius: 2rem;
       
    
  }
  /* Slider */
  
  .slick-slide {
      margin: 0px 20px;
  }
  
  .slick-slide img {
      width: 100%;
  }
  
  .slick-slider
  {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
              user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
          touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
  }
  
  .slick-list
  {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
  }
  .slick-list:focus
  {
      outline: none;
  }
  .slick-list.dragging
  {
      cursor: pointer;
      cursor: hand;
  }
  
  .slick-slider .slick-track,
  .slick-slider .slick-list
  {
      -webkit-transform: translate3d(0, 0, 0);
         -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
           -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
  }
  
  .slick-track
  {
      position: relative;
      top: 0;
      left: 0;
      display: block;
  }
  .slick-track:before,
  .slick-track:after
  {
      display: table;
      content: '';
  }
  .slick-track:after
  {
      clear: both;
  }
  .slick-loading .slick-track
  {
      visibility: hidden;
  }
  
  .slick-slide
  {
      display: none;
      float: left;
      height: 30%;
      min-height: 1px;
  }
  [dir='rtl'] .slick-slide
  {
      float: right;
  }
  .slick-slide img
  {
      display: block;
  }
  .slick-slide.slick-loading img
  {
      display: none;
  }
  .slick-slide.dragging img
  {
      pointer-events: none;
  }
  .slick-initialized .slick-slide
  {
      display: block;
  }
  .slick-loading .slick-slide
  {
      visibility: hidden;
  }
  .slick-vertical .slick-slide
  {
      display: block;
      height: auto;
      border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
      display: none;
  }



`