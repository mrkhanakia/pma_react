import React, { Component } from 'react';
import { Link } from 'react-router';

import Sidebar from './Sidebar'
import PagePanel from './PagePanel'
// import OrganizationAdd from './OrganizationAdd'

import OrgForm from './org/OrgForm'
import DomainForm from './org/DomainSubdomainForm'

import * as Helper from '../helpers'

class OrganizationList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        // console.log(Auth.getOrgID());
        this.props.fetchOrgs();
        // let { dispatch } = this.props
        // dispatch({type: 'RESET_POSTS'});
        // this.props.dispatch({type: 'REMOVE'});
        // Helper.Auth.updateCurrentOrg()
    }


    editButton(org) {
        // console.log(org.permissions.is_admin || org.created_by_user_id==Auth.getUserID());
        // if(org.permissions.is_admin || org.created_by_user_id==Auth.getUserID()) {
        if(org.permissions.org_can_update) {
            return (
                <span>
                    <button className="btn btn-plain" title="Edit" onClick={(e)=> this.editOrg(org,e)} ><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-plain" title="Edit Domain" onClick={(e)=> this.addDomainInfo(org, e)}><i className="fa fa-link"></i></button>
                </span>
            )
        }
    }

    // defautlBadge(org) {
    //     if(org.is_default && org.created_by_user_id==Auth.getUserID()) {
    //         return (
    //             <span className="label label-success ml10">Default</span>
    //         )
    //     }
    // }

    // ownerBadge(org) {
    //     if(org.created_by_user_id==Auth.getUserID()) {
    //         return (
    //             <span className="label label-success ml10">Owner</span>
    //         )
    //     }
    // }

    // adminBadge(org) {
    //     if(org.permissions.is_admin) {
    //         return (
    //             <span className="label label-success ml10">Admin</span>
    //         )
    //     }
    // }

    renderPosts(orgs) {
        return orgs.map((org) => {
            return (
                <li className="list-group-item" key={org.id}>
                    <div className="d-table w100">
                        <div className="d-table-cell xs-d-block w80 xs-w100">
                            <h4 className="list-group-item-heading">
                                {org.name}
                            </h4>
                        </div>
                        <div className="d-table-cell xs-d-block w10 xs-w100">
                                {Helper.Util.badgetOwner((org.created_by_user_id==Helper.Auth.getUserID()))}
                                {Helper.Util.badgeIsAdmin(org.permissions.is_admin)}
                                {Helper.Util.badgetDefault(org)}
                        </div>
                        <div className="d-table-cell xs-d-block valign-middle text-right">
                            <span className="icons-group light">
                                {this.editButton(org)}
                                <a href={Helper.Org.getLoginURL(org)} className="btn btn-plain" title="Login in to this Organization"><i className="fa fa-sign-in"></i></a>
                            </span>
                        </div>
                    </div>
                </li>
            );
        });
    }

    onDataUpdate(data) {
        console.log('onDataUpdate', data);
    }

    editOrg(data, e) {
        OrgForm.showInPoup({data})
    }

    addDomainInfo(data, e) {
        DomainForm.showInPoup({data})
    }

    render() {
        const { data } = this.props.orgsList;

        
        return (
            <div>
                
                <PagePanel>
                    <div className="control-toolbar1">
                        <div className="left">
                            <span className="title">Organizations</span>
                        </div>
                        <div className="middle">
                        </div>
                        <div className="right">
                            <span className="pull-right">
                                <span className="col mr10">
                                    
                                </span>
                                <span className="col icons-group">
                                    <button className="btn btn-success" onClick={()=> OrgForm.showInPoup({}, {},this.props)}><i className="fa fa-plus"></i></button>
                                </span>
                            </span>    
                        </div>
                    </div>
                    <div className="mt20">
                        

                        <ul className="list-group style1">
                            {this.renderPosts(data)}
                        </ul>
                    </div>


                </PagePanel>
            </div>

        );
    }
}


export default OrganizationList;
