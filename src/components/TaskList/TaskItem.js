import React, { Component } from 'react';
import './TaskList.css';

class TaskItem extends Component {
    render () {
        return (
            <>  
                <div className='list-group'>
                    <input className='item-input' type='text' defaultValue={this.props.user_task} onChange={(e) => {this.props.handleEditTask(e, this.props.user_id, this.props.user_task_id)}} />
                    <button className='r-btn' onClick={() => this.props.handleDeleteTask(this.props.user_task_id)}><i className="material-icons">delete</i></button>
                </div>    
            </>
        );
    };
};

export default TaskItem;