import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Body from './hoc/Body/Body'
import Screen from './components/Screen/Screen'
import Keypad from './hoc/Keypad/Keypad'

import * as calc from './logic/calc'

export const Operators = "/x-+"

class App extends React.Component {
    state = {
        args: "",
        previousArg: "",
        currentArgs: ""
    }

    getAction = (a) => {
        console.log("action received", this.state.previousArg)
        if (Operators.includes(a) && this.state.currentArgs === "") {
            // TODO communicate to user that no number has been added yet
            return 
        }
        if (Operators.includes(this.state.previousArg) && this.state.previousArg !== "") {
            // TODO replace previous operation, update screen history, ensure all args is clean
            return
        }
        if (a === "+/-") {
            if (this.state.currentArgs[0] === "-") {
                let currentArgs = this.state.currentArgs.substr(1);
                this.setState({currentArgs: currentArgs})
                return
            }
            let currentArgs = "-" + this.state.currentArgs;
            this.setState({currentArgs: currentArgs})
            return
        }
        if (a === "c") {
            this.setState({args: ""})
            return
        }
        var numbers = /^[0-9]+$/;
        if (a.match(numbers) === null) {
            this.setState({
                args: "",
                previousArg: this.state.currentArgs + a,
                currentArgs: ""
            })
            return
        }
        let newArgs = calc.concatenateArgs(this.state.args, a)
        let currentArgs = calc.concatenateArgs(this.state.currentArgs, a)
        this.setState({args: newArgs, currentArgs: currentArgs})
    }

    render() {
        return (
            <div className="App">
                <Body>
                    <Screen 
                        currentArgs={this.state.currentArgs} 
                        previousArg={this.state.previousArg}
                    /> 
                    <Keypad getAction={this.getAction} />
                </Body>
            </div>
        );
    }
}

export default App;
