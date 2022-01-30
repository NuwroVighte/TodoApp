import React, {Component} from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'




class TodoApp extends Component {
    render() {

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/welcome/:name" element={<WelcomeComponent/>}/>
                        <Route path="/todos" element={<ListTodosComponent/>}/>
                        <Route path="/logout" element={<LogoutComponent/>}/>
                        <Route path="/ErrorPage/*" element={<ErrorComponent/>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}


class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 Deirdre Roberts</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out.</h1>
                <div className="container">
                    Thank you for using Todo App!
                </div>
            </>
        )
    }
}




class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [
             {id: 1, description : 'Update to function components', done: false, targetDate: new Date()},
             {id: 2, description : 'Refactor SQL queries', done: false, targetDate: new Date()},
             {id: 3, description : 'Practice leetcode', done: false, targetDate: new Date()},
             {id: 4, description : 'Pet dog', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>List of todos.</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
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


class ErrorComponent extends Component {
    render() {
        return(
            <div>Error: could not access page.</div>
        )
    }
}


function ErrorFunction() {
    let navigate = useNavigate()
    return(
        <>
            {navigate("/ErrorPage")}
        </>
    )
}



export default TodoApp