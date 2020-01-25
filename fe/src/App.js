import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Body from './hoc/Body/Body'
import Screen from './components/Screen/Screen'
import Keypad from './hoc/Keypad/Keypad'

import * as calc from './logic/calc'

class App extends React.Component {
    state = {
        args: "",
        previousArg: "",
        currentArgs: ""
    }

    getAction = (a) => {
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

        console.log("action received", a)
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
