import React, {Component} from 'react'
import {useParams, Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)

        this.state = {
            welcomeMessage: ''
        }
    }


    render() {

        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
                You are logged in, {this.props.params.name}. Manage your todos <Link to="/todos">here</Link>.
            </div>
            <div className="container">
                Click here to be double welcomed!
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get EXTRA welcomed!</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})
    }
}

function WithParams(props) {
    let name = useParams()
    return <WelcomeComponent {...props} params={name} />
}

export default WithParams