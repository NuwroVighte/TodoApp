import React, {Component} from 'react'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import {useNavigate} from 'react-router-dom'


class TodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')

        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
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

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState({description: response.data.description, targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')}))
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
            .then(() => this.props.navigate('/todos'))
        }
        else {
            TodoDataService.updateTodo(username, this.state.id, todo)
            .then(() => this.props.navigate('/todos'))
        }

        console.log(values)

    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Please enter a description.'
        }
        else if (values.description.length<3) {
            errors.description = 'Please enter at least 3 characters in the description.'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Please enter a valid target date.'
        }
        return errors
    }


    render() {

        // let description = this.state.description
        // let targetDate = this.state.targetDate
        //able to condense since the variables have the same name in this.state
        let {description,targetDate} = this.state


        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    {/**JS short form for description: description, targetDate: targetDate. only works if variables are exact same name*/}
                    <Formik 
                    initialValues={{description, targetDate}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                    > 
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

function WithParamsAndNavigate(props) {
    let id = useParams()
    let navigate = useNavigate()
    return <TodoComponent {...props} params={id} navigate={navigate}/>
}

export default WithParamsAndNavigate