import moment from 'moment'
import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'


class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos : 
            [
            //  {id: 1, description : 'Update to function components', done: false, targetDate: new Date()},
            //  {id: 2, description : 'Refactor SQL queries', done: false, targetDate: new Date()},
            //  {id: 3, description : 'Practice leetcode', done: false, targetDate: new Date()},
            //  {id: 4, description : 'Pet dog', done: false, targetDate: new Date()}
            ]
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedInUserName
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                console.log(response)
                this.setState({
                    todos: response.data
                })
            }
        )
    }

    render() {
        console.log('render')
        return(
            <div>
                <h1>List of todos.</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('MMM DD, YYYY')}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent