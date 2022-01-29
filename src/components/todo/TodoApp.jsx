import React, {Component} from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'




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

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/NuwroVighte" className="navbar-brand">My Github</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/droberts">Home</Link></li> {/*TODO: replace droberts with username var*/}
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
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
             {id: 1, description : 'Learn React', done: false, targetDate: new Date()},
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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Done?</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
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