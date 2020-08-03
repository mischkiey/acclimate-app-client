import React from 'react';

function TaskItem(props) {
    return (
        <>  
            <div className='list-group'>
                <button
                    className='y-btn'
                    onClick={(e) => props.handleCheckTask(e, props.user_id, props.user_task_id, props.user_task_completed)}
                >
                    <i className="material-icons">check</i>
                </button>
                <input
                    className=
                        {
                            (props.user_task_completed)
                                ? 'completed item-input' 
                                : 'item-input'
                        }
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