import React from 'react'
import classes from './LeftDiv.module.css'

const LeftDiv = (props) => {
    return (
        <div className={"col-3 " + classes.leftDiv}>
            {props.children}
        </div>
    )
}

export default LeftDiv