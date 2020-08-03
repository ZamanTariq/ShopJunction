import React, { Component } from "react";
import "./custom.css";

class AboutUS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <section className="text-center about">
          <h1>About US</h1>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <div className="card abt-btm">
                  <span className="fa fa-group"></span>
                  <h2>Find Best</h2>
                  <p className="lead">
                    We sell the best qualities of product by making one to ine
                    attraction between the shopkeepers and customers. We believe
                    we will and we can !!!
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <div className="card abt-btm">
                  <span className="fa fa-info"></span>
                  <h2>Post Best </h2>
                  <p className="lead">
                    We sell the best qualities of product by making one to ine
                    attraction between the shopkeepers and customers. We believe
                    we will and we can !!!
                  </p>
                </div>
              </div>
              <div className="clearfix visible-md-block visible-sm-block"></div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <div className="card abt-btm">
                  <span className="fa fa-file"></span>
                  <h2>Sell Best</h2>
                  <p className="lead">
                    We sell the best qualities of product by making one to ine
                    attraction between the shopkeepers and customers. We believe
                    we will and we can !!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUS;
