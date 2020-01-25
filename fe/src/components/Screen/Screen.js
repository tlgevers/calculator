import React from 'react';
import './Screen.css';

function Screen(props) {
    return(
        <div className="screen-body">
            <p id="screen-input">{props.args}</p>
        </div>
    )
}

export default Screen;
