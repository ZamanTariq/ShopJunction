import React, { Component } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {ResetPasswordMail} from '../../notificationMessages'

export default class MerchantForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        // e.preventDefault();
        console.log(e.target.value);
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            NotificationManager.warning("Email is Required");
            return false;
        }
        const data = { email: this.state.email };
        axios
            .post("http://localhost:5000/newmerchant/reset", data)
            .then(result => {
                ResetPasswordMail()    
                    })
            .catch(err => {
                  if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                  else
                    NotificationManager.error("Something Went Wrong");
                  this.setState({ errors: err.response })
            });

    }
    render() {
        return (
            <div className="content">
                <NotificationContainer />
                <form onSubmit={this.handleForm}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-header text-center">Login</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" name="email" value={this.state.email} onChange={this.handleInput} className="form-control" />
                                    </div>
                                </div>
                                <input type="button" value="send Mail" onClick={this.handleForm} className="btn btn-primary" />
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </form>
            </div>
        )
    }
}
