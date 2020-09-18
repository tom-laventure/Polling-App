import React from 'react'
import classes from './CenterDiv.module.css'

const CenterDiv = (props) => {
    return (
        <div className={"col-6 " + classes.centerDiv}>
            {props.children}
        </div>
    )
}

export default CenterDiv