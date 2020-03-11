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