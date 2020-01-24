import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './hoc/Body/Body'
import Screen from './components/Screen/Screen'
import Keypad from './hoc/Keypad/Keypad'

function App() {
    return (
        <div className="App">
            <Body>
                <Screen /> 
                <Keypad />
            </Body>
        </div>
    );
}

export default App;
