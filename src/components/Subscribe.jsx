import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="container my-5 z-depth-1">


  
            <section className="dark-grey-text text-center px-md-5 py-5">
          
      
              <div className="row">
          
          
                <div className="col-lg-6 col-md-8 mx-auto">
          
             
                  <form className="" action="">
          
                  
                    <h3 className="font-weight-bold mb-4">SHOP INN</h3>
                    
                    <p className="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit, vitae fuga similique quos aperiam tenetur quo rerum debitis quibusdam.</p>
           
                    <div className="input-group mb-4 pb-3">
                      <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
                        aria-describedby="button-addon2"/>
                      <div className="input-group-append">
                        <button className="btn btn-md btn-info rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Submit</button>
                      </div>
                    </div>
                    
                    <ul className="list-unstyled d-flex justify-content-center mb-0 text-info">
                      <li>
                        <a className="mx-3" role="button"><i className="fab fa-lg fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a className="mx-3" role="button"><i className="fab fa-lg fa-twitter"></i></a>
                      </li>
                      <li>
                        <a className="mx-3" role="button"><i className="fab fa-lg fa-instagram" ></i></a>
                      </li>
                      <li>
                        <a className="mx-3" role="button"><i className="fab fa-lg fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a className="mx-3" role="button"><i className="fab fa-lg fa-pinterest"></i></a>
                      </li>
                    </ul>
                    
                  </form>
            
          
                </div>
          
          
              </div>
      
              
            </section>
   
          
          
          </div>
          </React.Fragment>
        )
    }
}
