import React, {Component} from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
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
                <nav>

                </nav>
            </header>

            // <div>
            //     Header <hr/>
            // </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr/> Footer
            </div>
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