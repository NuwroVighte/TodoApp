import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ListTodosComponent from './ListTodosComponent'
import TodoComponent from './TodoComponent'
import ErrorComponent from './ErrorComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponent/></AuthenticatedRoute>}/>
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>}/>
                        <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponent/></AuthenticatedRoute>}/>
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                        <Route path="/ErrorPage/*" element={<ErrorComponent/>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}


export default TodoApp