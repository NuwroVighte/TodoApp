import { render } from '@testing-library/react'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super(); //make sure to call super() first
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(by) {
        //this.state.counter++ is bad practice
        //console.log(`increment from child - ${by}`)

        this.setState(
           (prevState) => { return {counter : prevState.counter + by} } 
         );

    }

    decrement(by) {
        //this.state.counter++ is bad practice
        //console.log(`increment from child - ${by}`)

        this.setState(
           (prevState) => { return {counter : prevState.counter - by} } 
         );

    }

    reset() {
        this.setState( {counter : 0} );
    }



    render () {
        return (
          <div className="counter">
                    
                        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <div>
                            <button className="reset" onClick = {this.reset}>Reset</button>
                        </div>
                        <span className="count">{this.state.counter}</span>

          </div>
        )
      }



}

class CounterButton extends Component {
    //When adding states:
    //Define the initial state in a constructor
    //State => counter 0

    constructor() {
        super(); //make sure to call super() first
        // this.state = {
        //     counter : 0
        // }

        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }

    render() {
        //have to put 'this' in front of this.increment because the method (increment) is defined inside the class
        //const style = {fontSize: "50px", padding : "15px 30px"};
        //let sign = '+'
        //if (this.props.by > 0) {
        //    sign = '+'
        //} else {sign = ''}

        //MUST use a () => to pass this.props.by variable through the method, otherwise it will auto call the method when you use it
        return (
            <div className="counter">
                <button onClick={ () => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={ () => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>  
            </div>
        )
    }

    // increment() {
    //     //this.state.counter++ is bad practice

    //     this.setState(
    //         (prevState) => {return {counter: prevState.counter + this.props.by}}
    //     );

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement() {
    //     //this.state.counter++ is bad practice

    //     this.setState(
    //         (prevState) => {return {counter: prevState.counter - this.props.by}}
    //     );

    //     this.props.decrementMethod(this.props.by);
    // }



}

//sets default property of "by" to 1.
CounterButton.defaultProps = {
    by : 1
}

//sets default prop type of "by" as a number so if you try to enter a string or something in App.js as by, it will give an error in the console.
//need to import PropTypes from 'prop-types' in order to do this
CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter