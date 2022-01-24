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
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/welcome/:name" element={<WelcomeComponent/>}/>
                        <Route path="/ErrorPage/*" element={<ErrorComponent/>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                </Router>


                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

// class WelcomeComponent extends Component {
//     render() {
//         return <div>Welcome, {this.props.params.name}.</div>
//     }
// }

class ErrorComponent extends Component {
    render() {
        return(
            <div>Error: could not access page.</div>
        )
    }
}



// function ShowInvalidCredentials(props) {
//         if (props.hasLoginFailed) {
//             return <div>Invalid credentials.</div>
//         }
//         return null
// }

// function ShowValidLogin(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login successful.</div>
//     }
//     return null
// }

// function LoginClicked() {
//     let navigate = useNavigate()
//     const [state, setstate] = useState({username:""})
//     return(
//         <>
//             {navigate('/welcome/${this.props.username}')} 
//         </>
//     )
// }

function ErrorFunction() {
    let navigate = useNavigate()
    return(
        <>
            {navigate("/ErrorPage")}
        </>
    )
}



export default TodoApp