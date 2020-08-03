import React from 'react'

export default function Title(name,title) {
    return (
      
         <div className="row">
          <div className="col-10 mx-auto my-2 text-center">
              <h1 className="text-capitalize font-weight-bold" style={{color:"red",fontFamily:'Righteous',fontSize:"1.6rem"}}>
    {name} <strong style={{fontFamily:'Righteous',color:'purple',fontSize:"1.6rem"}}>{title}</strong>
              </h1>
          </div>
        </div>
   
    )
}



