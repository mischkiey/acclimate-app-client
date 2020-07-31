import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import TaskItem from './TaskItem';
import './TaskList.css';

class TaskList extends Component {
    state = {
        tasks: [],
        newUserTask: {},
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
                this.state.tasks.push(response);
                const newTasks = this.state.tasks;
                this.setState({tasks: newTasks});
                user_task.value = '';
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleEditTask = (e, user_id, user_task_id) => {
        this.setState({error: null});

        const newUserTask = {
            user_task_id,
            user_task: e.target.value,
        };
        const token = TokenService.getAuthToken();

        return APIService.patch(`/disaster/user/task/${user_task_id}`, newUserTask, token)
            .then(response => {
                const newUserTasks = this.state.tasks.filter(task => task.user_task_id !== newUserTask.user_task_id);
                newUserTask.user_id = user_id;
                newUserTasks.push(newUserTask);
                newUserTasks.sort((a, b) => {
                    if(a.user_task_id < b.user_task_id) {
                        return - 1;
                    } else {
                        return 1;
                    };
                });
                this.setState({tasks: newUserTasks})
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleDeleteTask = (user_task_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();
        return APIService.del(`/disaster/user/task/${user_task_id}`, token)
            .then(response => {
                const newUserTasks = this.state.tasks.filter(task => task.user_task_id !== user_task_id);
                this.setState({tasks: newUserTasks});
            })
            .catch(error => {
                this.setState({error: null})
            })
    }

    componentDidMount() {
        const token = TokenService.getAuthToken();
        return APIService.get('/disaster/user/task', token)
            .then(tasks => {
                this.setState({tasks});
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    render () {
        const tasks = this.state.tasks.map(task => <TaskItem key={task.user_task_id} handleDeleteTask={this.handleDeleteTask} handleEditTask={this.handleEditTask} {...task} />)

        return (
            <>
                <h2>Task List</h2>
                <form className='add-task-form-group' onSubmit={(e) => this.handleAddTask(e)} >
                    <input name='add_user_task' placeholder='Enter task' type='text' />
                    <button>Add Task</button>
                </form>
                {tasks}
            </>
        );
    };
};

export default TaskList;