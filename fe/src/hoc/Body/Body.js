import React from 'react';
import './Body.css'

function Body(props) {
    return (
        <div className="calc-body">{props.children}</div>
    )
}

export default Body
