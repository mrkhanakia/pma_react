import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Auth} from '../../helpers'
import { API_URL_CHANGE_PWD } from '../../config.js'
import UserHelper from '../../helpers/helper_user.js'

import DropdownCountries from '../controls/DropdownCountries'


class ChangePasswordForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    static defaultProps = {
        onDataUpdate: function(org) { },

        popup_id: '',
        settings : {},
    }

    componentWillMount() {
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var valid = jQuery(this.refs.form).valid();
        if (!valid) { return false };

        let param = jQuery(this.refs.form).serialize();

        // let data1 = jQuery(this.refs.password1.value);
        // let confirm = jQuery(this.refs.confirm1.value);
        // console.log(data);
        // if (data!=confirm) {
        //     toastr.error('Please insert confirm password same as password.');
        //     return false
        // };
        UserHelper.changePassword(param).then(function(response){
            if (response.data.STATUS=="FAILED") {
                toastr.error(response.data.error_message.password);
            } else {
                toastr.success('Password changed successfully.')
                this.hidePopup()
            }
        }.bind(this));
    }


    hidePopup = () => {
        if (this.props.popup_id) {
            jQuery('#' + this.props.popup_id).popup('hide');
        }
    }


    render() {
        const data = this.props.data

        return (
            <div>
                <div className="modal-header">
                    <h4 className="modal-title">Change password</h4>
                </div>

                    <form className="form-horizontal control-label-left aaaaaaaaaa" ref='form' onSubmit={this.handleSubmit}>
                        <div className="content-area">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="essentials">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="col-sm-12 control-label">New Password</label>
                                                    <div className="col-sm-12 mt5">
                                                        <input type="password" className="form-control required" name="password" id="password" ref="password1" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-12 control-label">Confirm New Password</label>
                                                    <div className="col-sm-12 mt5">
                                                        <input type="password" className="form-control required updatePassword" name="password_confirmation" id="password_confirmation" equalTo='#password' ref="confirm1"  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        <div className="modal-footer text-right">
                            <button type="submit" className="btn btn-blue-link">Update Password</button>
                        </div>
                    </form>
            </div>
        );
    }
}


export default ChangePasswordForm;
