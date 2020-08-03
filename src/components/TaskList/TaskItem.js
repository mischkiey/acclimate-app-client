import React from 'react';

function TaskItem(props) {
    return (
        <>  
            <div className='list-group'>
                <input
                    className='item-input'
                    defaultValue={props.user_task}
                    onChange={(e) => {props.handleEditTask(e, props.user_id, props.user_task_id)}}
                    type='text'
                />
                <button
                    className='r-btn'
                    onClick={() => props.handleDeleteTask(props.user_task_id)}
                >
                    <i className="material-icons">delete</i>
                </button>
            </div>    
        </>
    );

};

export default TaskItem;