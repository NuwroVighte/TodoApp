import React, {Component} from 'react'
import {useNavigate} from 'react-router-dom'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'droberts',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }



    handleChange(event) {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )

    }

    loginClicked() {


        //droberts, password
        

        if (this.state.username==='droberts' && this.state.password==='password') {
            this.props.navigate(`/welcome/${this.state.username}`)
            //need the ticks `` (NOT '' )in this.props.navigate for the javascript $ to work!!!!!!! 

            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            console.log(this.state)
        }

    }

    render () {
        return (
            <div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {/* <ShowValidLogin showSuccessMessage={this.state.showSuccessMessage} /> */}
            {/* easier way to say if this condition is true, show the second part. no method required: */}
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>} 
            {this.state.showSuccessMessage && <div>Login successful.</div>}

            {/* {this.state.lClicked ? this.state.username==='droberts' && this.state.password==='password' ? (
                <LoginClicked username={this.state.username}/>
                ): <ErrorFunction/> :null
            } */}

            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate()
    return <LoginComponent {...props} navigate={navigate} />
}

export default WithNavigate