import React from 'react'
import classes from './SubContainer.module.css'

const SubContainer = (props) => {
    let resp;

    switch(props.responsive){
        case "half":
            resp = "col-8 col-sm-4"
            break;
        default:
            resp = "col-8 col-sm-4"
            break
    }

    return (
        <div className={classes.container + " " + resp}>
            {props.children}
        </div>
    )
}

export default SubContainer