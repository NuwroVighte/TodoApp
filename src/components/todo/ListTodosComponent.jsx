import moment from 'moment'
import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'


class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos : [], 
            message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
        
    }

    render() {
        console.log('render')
        return(
            <div>
                <h1>List of todos.</h1>
                {this.state.message && <div className="alart alert-success">{this.state.message}</div>} {/*only shows message div if message isn't null*/}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
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
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> {/* arrow function required for it to work because deleteTodoClicked passes a parameter*/}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
        .then (
            response => {
                this.setState({message: `Successfully deleted todo #${id}`})
                this.refreshTodos()
            }
        )
    }

    refreshTodos() {
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

}

export default ListTodosComponent