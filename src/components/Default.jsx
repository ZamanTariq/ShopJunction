import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { Nav } from "react-bootstrap";
import WarningIcon from "@material-ui/icons/Warning";
import 'antd/dist/antd.css';

import { Result, Button } from 'antd';
class Default extends Component {
  render() {
    return (
<div className="text-center container">
<div className="d-flex justify-content-left ml-2">
<Button type="danger" onClick={this.props.history.goBack}>Back</Button>
</div>
<Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist.
              "/>

</div>
    
    );
  }
}
export default withRouter(Default)