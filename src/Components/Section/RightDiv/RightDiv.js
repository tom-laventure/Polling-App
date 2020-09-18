import React from 'react'
import classes from './RightDiv.module.css'

const RightDiv = (props) => {
    return (
        <div className={"col-3 " + classes.rightDiv}>
            {props.children}
        </div>
    )
}

export default RightDiv