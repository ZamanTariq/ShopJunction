import React, { Component } from "react";
import "./custom.css";

class ClientMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="mar-top" id="message-container">
          {" "}
        </div>
        <form id="send-container">
          <input className="mar-lef" type="text" id="message-input"></input>
          <button type="submit" id="send-butoon">
            Send
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ClientMsg;
