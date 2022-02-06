import React, {Component} from 'react'
import {useParams} from 'react-router-dom'


class TodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id
        }
    }


    // onSubmit(values) {
    //     if (this.state.id === -1) {
    //         TodoDataService.createTodo(username, todo)
    //         .then(() => this.props.navigate('/todos'))
    //     }
    //     else {
    //         TodoDataService.updateTodo(username, this.state.id, todo)
    //         .then(() => this.props.navigate('/todos'))
    //     }
    // }


    render() {
        return <div>Todo Component for todo id #{this.props.params.id}</div>
    }
}

function WithParams(props) {
    let id = useParams()
    return <TodoComponent {...props} params={id}/>
}

export default WithParams