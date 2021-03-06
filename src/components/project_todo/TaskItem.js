import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';


import TaskTitle from './TaskTitle'
import {TaskHelper, Localstore } from '../../helpers'
import PopupHelper from '../../helpers/helper_popup'


class TaskItem extends Component {
    constructor(props) {
        super(props);

      
    }

    static defaultProps = {
        className : '',
        is_pageSingleTask : false,
        showCompleted : false,

        onTaskDataUpdate: function(task) {},

        is_template : false,
    }
    componentWillMount() {
      
    }

    componentDidMount() {
        $('.takslist_tasks').sortable({
            connectWith:'.takslist_tasks',
            tolerance:'intersect',
            handle: ".dragHandle",
            // placeholder: "ph"
            placeholder: "ui-state-highlight",

            // revert: true,
            // start: function(e, ui ){
            //      ui.placeholder.height(ui.helper.outerHeight());
            // },
            stop: function(ev, ui) {
                
                var parent = ui.item.parent(".takslist_tasks");
                var taskId = ui.item.data('id');
                
                const parent_tasklist = ui.item.parents(".comp_tasklist_item");
                const tasklist_id = parent_tasklist.data('id')
                if(tasklist_id) {
                    TaskHelper.updateTasklistId(taskId, tasklist_id)
                }

                // var sortOrder = parent.sortable( "toArray" );
                var sortOrderData = parent.sortable( "serialize", { key: "t[]" } );
                TaskHelper.updateSortOrder(sortOrderData);

                // Update Task Parent
                // var currentParenttaskId = ui.item.data('parentid');
                var parentTaskId = parent.data('id');
                // console.log(taskId, currentParenttaskId, parentTaskId)
                // if(currentParenttaskId!==parentTaskId) {
                if(undefined!==parentTaskId) {
                    // console.log("HASPARENT")
                    TaskHelper.updateParent(taskId, parentTaskId);
                }
                
            }
        });

        // $('.tasks-list').disableSelection();

       
    }


    addSubTaskForm(e, data) {
        PopupHelper.showTaskForm({tasklist_id:data.tasklist_id, parent_id:data.id})
    }

    renderItems(items) {
        if(!items) return false;
        return items.map((item) => {
            if(!this.props.showCompleted && item.status=="completed") return false;
            return (
                <TaskItem key={item.id} data={item} onTaskDataUpdate={this.props.onTaskDataUpdate.bind(this)} is_template={this.props.is_template} />
            );
        });
    }


    render() {
        const data = this.props.data; // Get Task Object
        if (jQuery.isEmptyObject(data)) return false;

        const localStoreData = Localstore.getTaskLocalStore(data.id)
        // console.info(localStoreData)
        return (
            <div className="comp_task_item" id={'task_'+data.id} data-id={data.id}>
                <TaskTitle 
                    data={data} 
                    className={this.props.className} 
                    is_pageSingleTask={this.props.is_pageSingleTask} 
                    onTaskDataUpdate={this.props.onTaskDataUpdate.bind(this)} 
                    is_template={this.props.is_template} />
                <div className="takslist_tasks comp_task_item_children" data-id={data.id} style={{display: localStoreData.show_subtasks ? 'block' : 'none'}}>
                    {this.renderItems(data.childrens)}

                    <div>
                        {/*<button className="btn btn-link" title="Add SubTask" onClick={(e)=> this.addSubTaskForm(e, data)} ><i className="fa fa-indent"></i> Add Subtask</button>*/}
                    </div>
                </div>
            </div>
        );
    }
}


export default TaskItem;
