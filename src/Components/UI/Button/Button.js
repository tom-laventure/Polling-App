import React from 'react'
import classes from './Button.module.css'



const Button = (props) => {
    return (
        <input className={classes.button} {...props}/>
    )
}

export default Button