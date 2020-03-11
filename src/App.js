import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from "./components/Keypad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    calculate = () => { //calculate function will calculate result of expression. This is triggered when = button is pressed.
        try {
            this.setState({
                result: ((this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => { //this will clear all output. Triggers on C button
        this.setState({
            result: ""
        })
    };

    backspace = () => { // clear last charachter inputed. Triggers on CE button
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <Result result={this.state.result}/>  
                    {
                    // Can't use one-line comment here. Result variable will be passed to result component.
                    }
                    <Keypad onClick={this.onClick}/> 
                </div>
            </div>
        );
    }
}

export default App;