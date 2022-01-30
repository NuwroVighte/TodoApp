import React, { Component } from 'react'
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import TodoApp from './components/todo/TodoApp'
import './App.css'
import './bootstrap.css'

 
class App extends Component {
  render () {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    )
  }
}


//counter

//learning components
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Example Components
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


export default App;

