import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container padding">
        <h4>Page Not Found</h4>
        <br />
        <h3>Error:404!</h3>
        <ul style={{ margin: "2vw 0 0 0" }}>
          <li>
            <h5>Check Your Internet Connection</h5>
          </li>
          <li>
            <h5>Please check Your URL</h5>
          </li>
        </ul>
      </div>
    );
  }
}
