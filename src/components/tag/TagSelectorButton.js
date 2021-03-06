import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

import {store} from '../../store/index.js';

import {connectWithStore} from '../../store/index.js';

import { Auth,  TagItemHelper } from '../../helpers'
import PopupHelper from '../../helpers/helper_popup'

import { ROOT_URL, API_URL } from '../../config'

import TagSelector from './TagSelectorContainer'

class TagSelectorButton extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        fetchData: function() { },

        object_type : '',
        object_id : '',
        strip_tags : []
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.addTagButtonClick();
    }

    componentDidUpdate() {
        // console.log("Comp TagSelectorButton componentDidUpdate" )
    }

    addTagButtonClick() {
        var _this = this;
        // $(document).on('click', '.a-addtags', function (event) {
        jQuery(this.refs.tagbutton).click(function(event){

            $(this).qtip({
                overwrite: false, // Don't overwrite tooltips already bound
              

                content: {
                    text: function(event, api) {
                        // var tooltip = api.elements.tooltip
                        // var id = api.elements.target.data('id');
                        // console.log(tooltip);
                        // api.elements.content.html('Loading...');
                        // Task.renderTagSelector(tooltip.attr('id'))
                        return '';
                    }
                },
                position: {
                    my: 'top right',
                    at: 'top right',
                    // container: $('div#main_layout')
                },

                show: {
                     event: event.type, // Use the same event type as above
                    ready: true, // Show immediately - important!
                     solo: true
                },
                hide: 'unfocus',
                style: 'qtip-light',
                events: {
                    show: function(event, api) {
                        console.log("shows");
                        var tooltip = api.elements.tooltip
                        var tooltip_id = tooltip.attr('id');
                        var object_id = api.elements.target.data('id');

                        _this.renderTagSelector(tooltip_id, object_id)

                    }.bind(this),
                    hide: function(event, api) {
                        var tooltip = api.elements.tooltip
                        var tooltip_id = tooltip.attr('id');
                        ReactDom.unmountComponentAtNode(document.getElementById(tooltip_id))
                        api.destroy(true);
                    }
                }



            });
        });
    }

    renderTagSelector(id,object_id) {
        // document.getElementById(id).innerHTML = '';
        ReactDom.render(
                <Provider store={store} key="provider">
                    <TagSelector {...this.props}/>
                </Provider>,
                document.getElementById(id));
    }


    render() {
        const data = this.props.data
        return (
            <span className="comp_tag_add_button">
                <button type="button" className="btn btn-plain" title="Tags" ref="tagbutton" ><i className="fa fa-tags"></i></button>
            </span>
        );
    }
}


export default TagSelectorButton;