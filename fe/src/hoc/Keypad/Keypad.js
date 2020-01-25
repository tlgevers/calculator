import React from 'react';
import './Keypad.css'
import Button from '../../components/Button/Button';

function Keypad(props) {
    console.log("Keypad props", props)
    const buttons = [
        {id: "clear", symbol: "c"},
        {id: "plusminus", symbol: "+/-"},
        {id: "percent", symbol: "%"},
        {id: "divide", symbol: "/", style: "orange"},
        {id: "seven", symbol: "7"},
        {id: "eight", symbol: "8"},
        {id: "nine", symbol: "9"},
        {id: "multiply", symbol: "x"},
        {id: "four", symbol: "4"},
        {id: "five", symbol: "5"},
        {id: "six", symbol: "6"},
        {id: "minus", symbol: "-"},
        {id: "one", symbol: "1"},
        {id: "two", symbol: "2"},
        {id: "three", symbol: "3"},
        {id: "plus", symbol: "+"},
        {id: "zero", symbol: "0"},
        {id: "decimal", symbol: "."},
        {id: "equals", symbol: "="},
    ]
    return(
        <div className="keypad-body">
            {buttons.map(
                b => {
                    return (<Button getAction={props.getAction} key={b.symbol} symbol={b.symbol} />)
                }
            )}
        </div>
    )
}

export default Keypad;
