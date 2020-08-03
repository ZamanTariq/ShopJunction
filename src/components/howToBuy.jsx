import React, { Component } from "react";
import "./custom.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class HowToBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="conatiner">
        <div className="">
          <h1 className="head-buy">HOW TO BUY</h1>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#c6c6c6" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#c6c6c6" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Create Account</h3>
            <h4 className="vertical-timeline-element-subtitle">Process</h4>
            <p>
              Simply go for Sign-Up and create account and then Sign-In for
              acess your dashboard.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(246, 122, 0)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(246, 122, 0)", color: "#c6c6c6" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Product Detail</h3>
            <h4 className="vertical-timeline-element-subtitle">Process</h4>
            <p>
              You can add the product to cart and you see Admin products in home
              page for access Merchant products click on Shop tab.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 243, 69)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(33, 243, 69)", color: "#c6c6c6" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Favourite</h3>
            <h4 className="vertical-timeline-element-subtitle">Process</h4>
            <p>
              You can add the item simply in your favorite by click on heart
              icon.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(243, 33, 217)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(243, 33, 217)", color: "#c6c6c6" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Booking</h3>
            <h4 className="vertical-timeline-element-subtitle">Process</h4>
            <p>
              You can Book the products in bulk by visit the shop or see shop
              detail and also see shops products.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#c6c6c6" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Merchant</h3>
            <h4 className="vertical-timeline-element-subtitle">Dashboard</h4>
            <p>
              After sign-in merchant account you can Add, View, Delete or Edit
              you product
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(221, 233, 30)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(221, 233, 30)", color: "#c6c6c6" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Manage Orders</h3>
            <h4 className="vertical-timeline-element-subtitle">Process</h4>
            <p>
              When customer book order or add product to their cart you can see
              detail in your merchant dashboard.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(245, 124, 0)", color: "#c6c6c6" }}
            date="Shop Junction"
            iconStyle={{ background: "rgb(245, 124, 0)", color: "#c6c6c6" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Admin</h3>
            <h4 className="vertical-timeline-element-subtitle">Description</h4>
            <p>
              If you not understand anything then chat with our Bot and Access
              the admin.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default HowToBuy;
