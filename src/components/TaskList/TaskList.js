import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import TaskItem from './TaskItem';
import { ExperimentalContext } from '../../contexts/ExperimentalContext';

class TaskList extends Component {
    static contextType = ExperimentalContext;

    state = {
        error: null,
    };
    
    handleAddTask = (e) => {
        e.preventDefault();

        this.setState({error: null})

        const user_task = e.target.add_user_task;
        const newUserTask = {
            user_task: user_task.value,
        };
        const token = TokenService.getAuthToken();

        return APIService.post('/disaster/user/task', newUserTask, token)
            .then(response => {
                this.context.tasks.push(response);
                const newTasks = this.context.tasks;
                this.context.setTasks(newTasks)
                user_task.value = '';
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleCheckTask = (e, user_id, user_task_id, user_task_completed) => {
        this.setState({error: null});
        const newUserTask = {
            user_task_id,
            user_task: e.target.value,
            user_task_completed: !user_task_completed,
        };
        const token = TokenService.getAuthToken();

        return APIService.patch(`/disaster/user/task/${user_task_id}`, newUserTask, token)
            .then(() => {
                const newUserTasks = this.context.tasks.filter(task => task.user_task_id !== newUserTask.user_task_id);
                newUserTask.user_id = user_id;
                newUserTasks.push(newUserTask);
                newUserTasks.sort((a, b) => {
                    if(a.user_task_id < b.user_task_id) {
                        return - 1;
                    } else {
                        return 1;
                    };
                });
                this.context.setTasks(newUserTasks);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleEditTask = (e, user_id, user_task_id, user_task_completed) => {
        this.setState({error: null});

        const newUserTask = {
            user_task_id,
            user_task: e.target.value,
            user_task_completed,
        };
        const token = TokenService.getAuthToken();

        return APIService.patch(`/disaster/user/task/${user_task_id}`, newUserTask, token)
            .then(() => {
                const newUserTasks = this.context.tasks.filter(task => task.user_task_id !== newUserTask.user_task_id);
                newUserTask.user_id = user_id;
                newUserTasks.push(newUserTask);
                newUserTasks.sort((a, b) => {
                    if(a.user_task_id < b.user_task_id) {
                        return - 1;
                    } else {
                        return 1;
                    };
                });
                this.context.setTasks(newUserTasks);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleDeleteTask = (user_task_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();
        return APIService.del(`/disaster/user/task/${user_task_id}`, token)
            .then(() => {
                const newUserTasks = this.context.tasks.filter(task => task.user_task_id !== user_task_id);
                this.context.setTasks(newUserTasks);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    componentDidMount() {
        const token = TokenService.getAuthToken();
        return APIService.get('/disaster/user/task', token)
            .then(tasks => {
                this.context.setTasks(tasks);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    render () {
        const tasks = this.context.tasks.map(task =>
            <TaskItem
                key={task.user_task_id}
                handleCheckTask={this.handleCheckTask}
                handleDeleteTask={this.handleDeleteTask}
                handleEditTask={this.handleEditTask}
                {...task}
            />
        )

        return (
            <>
                <h2 className='center'>Task List</h2>
                <form
                    className='list-group'
                    onSubmit={(e) => this.handleAddTask(e)}
                >
                    <input
                        className='item-input'
                        name='add_user_task'
                        placeholder='Enter task'
                        type='text'
                    />
                    <button className='tooltip y-btn'>
                        <i className="material-icons">add_circle</i>
                        <span className='long tooltiptext'>
                            Click to add to your task list
                        </span>
                    </button>
                </form>
                {tasks}
            </>
        );
    };
};

export default TaskList;