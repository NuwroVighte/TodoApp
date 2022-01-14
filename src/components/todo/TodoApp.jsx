import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
                <WelcomeComponent/>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome droberts.</div>
    }
}




class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'droberts',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )

    }

    loginClicked() {
        //droberts, password
        if (this.state.username==='droberts' && this.state.password==='password') {
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        //console.log(this.state)
        }

    }

    render () {
        return (
            <div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {/* <ShowValidLogin showSuccessMessage={this.state.showSuccessMessage} /> */}
            {/* easier way to say if this condition is true, it shows the second part. no method required: */}
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>} 
            {this.state.showSuccessMessage && <div>Login successful.</div>}

            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }


}

function ShowInvalidCredentials(props) {
        if (props.hasLoginFailed) {
            return <div>Invalid credentials.</div>
        }
        return null
}

function ShowValidLogin(props) {
    if (props.showSuccessMessage) {
        return <div>Login successful.</div>
    }
    return null
}


export default TodoApp