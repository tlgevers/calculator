import React from 'react';
import './Screen.css';

function Screen(props) {
    return(
        <div className="screen-body">
            <p id="screen-history">{props.previousArg}</p>
            <p id="screen-input">{props.currentArgs}</p>
        </div>
    )
}

export default Screen;
