import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

export default  class FloatButton extends Component {
    render() {
        return (
           
            <React.Fragment >
               <CssWrapper>

             
           

    

               <div   className="fab-wrapper " title="Want to Ask" >
  <input id="fabCheckbox" type="checkbox"   className="fab-checkbox " />
  <label  className="fab  " htmlFor="fabCheckbox">
    <span   className="fab-dots fab-dots-1"></span>
    <span   className="fab-dots fab-dots-2"></span>
    <span   className="fab-dots fab-dots-3"></span>
  </label>
  <div  className="fab-wheel " >
    <Link to="/contact-us"  className="fab-action fab-action-1" title="Question">
      <i  className="fas fa-question" ></i>
    </Link>
    <Link to="/"  className="fab-action fab-action-2" title="Manual">
      <i  className="fas fa-book"></i>
    </Link>
        <Link to="/"  className="fab-action fab-action-3" title="More FAQ">
      <i  className="fas fa-address-book"></i>
    </Link>
        <Link to="/"  className="fab-action fab-action-4" title="Instruction about FAQ">
      <i  className="fas fa-info"></i>
    </Link>
  </div>
</div>


            
</CssWrapper>
            </React.Fragment>
        )
    }
}
const CssWrapper=styled.div`



* {
  box-sizing: border-box;
}

.fab-wrapper {
 
  position: sticky;
 
}
.fab-checkbox {
  display: none;
 
}
.fab {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 50%;
  background:#f57c00;
  box-shadow: 0px 2px 6px #ffa600b9;
  transition: all 0.3s ease;
  z-index: 1;
  border-bottom-right-radius: 6px;
  border: 1px solid #ffbb33;
}

.fab:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
 
  left: 0;
  top: 0;
  border-radius: 50%;
  background-color:#FF8800;
}
.fab-checkbox:checked ~ .fab:before {
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  background-color: rgba(255, 255, 255, 0.2);
}
.fab:hover {
  background: #f57c00;
  box-shadow: 0px 2px 6px 2px #ffa600b9;
}

.fab-dots {
  position: absolute;
  height: 8px;
  width: 8px;
  background-color: white;
  border-radius: 50%;
  top: 50%;
  transform: translateX(0%) translateY(-50%) rotate(0deg);
  opacity: 1;
  animation: blink 3s ease infinite;
  transition: all 0.3s ease;
}

.fab-dots-1 {
  left: 15px;
  animation-delay: 0s;
}
.fab-dots-2 {
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation-delay: 0.4s;
}
.fab-dots-3 {
  right: 15px;
  animation-delay: 0.8s;
}

.fab-checkbox:checked ~ .fab .fab-dots {
  height: 3px;
}

.fab .fab-dots-2 {
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
}

.fab-checkbox:checked ~ .fab .fab-dots-1 {
  width: 32px;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.fab-checkbox:checked ~ .fab .fab-dots-3 {
  width: 32px;
  border-radius: 10px;
  right: 50%;
  transform: translateX(50%) translateY(-50%) rotate(-45deg);
}

@keyframes blink {
  50% {
    opacity: 0.25;
  }
}

.fab-checkbox:checked ~ .fab .fab-dots {
  animation: none;
}

.fab-wheel {
  position: absolute;
  bottom: 50px;
  right: 50px;
  border: 1px solid #;
  width: 10rem;
  height: 10rem;
  transition: all 0.3s ease;
  transform-origin: bottom right;
  transform: scale(0);
}

.fab-checkbox:checked ~ .fab-wheel {
  transform: scale(1);
}
.fab-action {
  position: absolute;
  background: #f57c00;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0px 2px 6px 2px #ffa600b9;
  transition: all 1s ease;

  opacity: 0;
}

.fab-checkbox:checked ~ .fab-wheel .fab-action {
  opacity: 1;
}

.fab-action:hover {
  background-color: #f16100;
  
}

.fab-wheel .fab-action-1 {
  right: -1rem;
  top: 0;
}

.fab-wheel .fab-action-2 {
  right: 3.4rem;
  top: 0.5rem;
}
.fab-wheel .fab-action-3 {
  left: 0.5rem;
  bottom: 3.4rem;
}
.fab-wheel .fab-action-4 {
  left: 0;
  bottom: -1rem;
}


`;