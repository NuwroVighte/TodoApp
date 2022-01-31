import React, {Component} from 'react'
import {useParams, Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
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
            </>
        )
    }

    retrieveWelcomeMessage() {
        console.log('regrieve clicked')
    }
}

function WithParams(props) {
    let name = useParams()
    return <WelcomeComponent {...props} params={name} />
}

export default WithParams