import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'droberts',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }

    handleUsernameChange(event) {
        console.log(event.target.value)
        this.setState({ username: event.target.value })

    }

    render () {
        return (
            <div>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password: <input type="password" name="password" value={this.state.password}/>
            <button>Login</button>
            </div>
        )
    }
}


export default TodoApp