import React, { Component } from 'react'
import FloatButton from "./FloatButton"
export default class FAQ extends Component {
    render() {
        return (
            <React.Fragment>
        
                <div className="container   my-5" id="faq" >
              


{/* <!--Section: Content--> */}
<section>

  <h6 className="font-weight-normal text-uppercase font-small grey-text mb-4 text-center">FAQ</h6>
  {/* <!-- Section heading --> */}
  <h3 className="font-weight-bold black-text mb-4 pb-2 text-center">Frequently Asked Questions</h3>
  <hr className="w-header"/>
  {/* <!-- Section description --> */}
  <p className="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">Got a question? We've got answers. If you have some other questions, see our support center.</p>

      <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">How can i sell my products?</h5>
      <p className="text-muted">Go to the Sign in tab at navbar and click on "Sign in" button in Merchant section.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">Is this a secure site for purchases?</h5>
      <p className="text-muted">Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">Can I cancel my subscription?</h5>
      <p className="text-muted">You cannot cancel your subscription.We are working on it.You will get this good news soon </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">How can i join you as a member?</h5>
      <p className="text-muted">You should go to the become a member tab at bottom and fill the form.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">Can I update my card details?</h5>
      <p className="text-muted">Yes. Go to the my product tab and click on "Update" button and update any field you want.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">Can I request refund?</h5>
      <p className="text-muted">Unfortunately, not. We do not issue full or partial refunds for any reason.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">Can I try your service for free?</h5>
      <p className="text-muted">Yes,but you can only have the option to view our product.You cannot buy them.</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h5 className="font-weight-normal mb-3">How can i join as a Merchant?</h5>
      <p className="text-muted">Go to the Sign in tab at navbar and click on "Sign in" button in Merchant section.</p>
    </div>



  </div>

  </section>
 
                     



</div>

<FloatButton/>
            </React.Fragment>
        )
    }
}
