import React from 'react';
import './Button.css'
import Aux from '../../hoc/Aux/Aux';

function Button(props) {
    let button = null;
    switch(props.symbol) {
        case "/":
            button = <div 
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-orange">{props.symbol}
            </div>
                break;
        case "x":
            button = <div
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-orange">{props.symbol}
            </div>
                break;
        case "-":
            button = <div 
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-orange">{props.symbol}
            </div>
                break;
        case "+":
            button = <div 
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-orange">{props.symbol}
            </div>
                break;
        case "=":
            button = <div 
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-white">{props.symbol}
            </div>
                break;
        default:
            button = <div 
                onClick={() => props.getAction(props.symbol)} 
                className="button-body button-color-grey">{props.symbol}
            </div>
    }
    return(
        <Aux>
            {button}
        </Aux>
    )
} 

export default Button
