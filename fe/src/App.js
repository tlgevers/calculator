import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Body from './hoc/Body/Body'
import Screen from './components/Screen/Screen'
import Keypad from './hoc/Keypad/Keypad'

import * as calc from './logic/calc'

class App extends React.Component {
    state = {
        args: ""
    }

    getAction = (a) => {
        if (a === "c") {
            this.setState({args: ""})
            return
        }
        console.log("action received", a)
        let newArgs = calc.concatenateArgs(this.state.args, a)
        this.setState({args: newArgs})
        let screenInput = document.getElementById("screen-input")
        screenInput.scrollBy(1, screenInput.scrollHeight)
    }

    render() {
        return (
            <div className="App">
                <Body>
                    <Screen args={this.state.args} /> 
                    <Keypad getAction={this.getAction} />
                </Body>
            </div>
        );
    }
}

export default App;
