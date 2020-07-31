import React, { Component } from 'react';
import './TaskList.css';

class TaskItem extends Component {
    render () {
        return (
            <>
                <input type='text' defaultValue={this.props.user_task} onChange={(e) => {this.props.handleEditTask(e, this.props.user_id, this.props.user_task_id)}} />
                <button onClick={() => this.props.handleDeleteTask(this.props.user_task_id)}>Delete</button>
            </>
        );
    };
};

export default TaskItem;