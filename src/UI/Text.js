import React from 'react'
import '../styles/text.scss';
const Text = (props) => {
    return (
        <span className="textwrapper">
        <h1 style={{color:props.color}} className={props.class}>
            {props.children}
        </h1>
        </span>
    )
}

export default Text
