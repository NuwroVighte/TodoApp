import React, {Component} from 'react'
import {useParams, Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className='container'>
                You are logged in, {this.props.params.name}.
            </div>
            </>
        )
    }

}

function WithParams(props) {
    let name = useParams()
    return <WelcomeComponent {...props} params={name} />
}

export default WithParams