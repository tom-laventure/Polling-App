import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    let theInput;

    switch (props.inputtype) {
        case "text":
            theInput = <input className={classes.input} {...props} onChange={props.onChange} />
            break;
        case "int":
            theInput = <input className={classes.input} {...props} onChange={props.onChange} />
            break;
        default:
            theInput = <input className={classes.input} {...props} onChange={props.onChange} />;
            break;
    }
    return (
        <div className={classes.container}>
            <label className={classes.label}>{props.label}</label>
            {theInput}
        </div>
    )
}

export default Input