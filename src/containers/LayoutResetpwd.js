import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'

import {ROOT_URL, RESET_PWD_AJAX} from '../config.js'
import OrgHelper from '../helpers/helper_org.js'
import Auth from '../helpers/auth.js'
import Localstore from '../helpers/localstore.js'


export default class LayoutResetpwd extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        var resetpwdFormEl = jQuery(".resetpwdForm");
        var valid = jQuery(".resetpwdForm").valid();
        if (!valid) {
            return false 
        }

        var formdata = resetpwdFormEl.serialize();
        var password = jQuery("#password").val();
        var ajaxObj =  axios.post(RESET_PWD_AJAX, {
            password: password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    render() {
        return (
            <div>
                <div className="main">
                    <div className="main_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-md-offset-4">
                                    <div className="formstyle1Ct">
                                        <h1>New Password</h1>
                                        <form onSubmit={this.handleSubmit} className="formstyle1 resetpwdForm" role="form" method="POST">
                                            <div className="form-group">
                                                <input type="password" className="form-control required" name="password" id="password" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control required" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" equalTo="#password"/>
                                            </div>
                                            <button type="submit" className="btn btn-success formstyle1SubmitBtn">Submit Here</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
