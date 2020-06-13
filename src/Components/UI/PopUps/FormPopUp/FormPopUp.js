import React from 'react'
import classes from './FormPopUp.module.css'

const FormPopUp = (props) => {
    return (
        <div className={classes.Container}>
            {props.children}
        </div>
    )
}

export default FormPopUp