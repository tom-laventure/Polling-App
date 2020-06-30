import React from 'react'
import classes from './MainContainer.module.css'

const MainContainer = (props) => {
    return (
        <div className={classes.container + " flex-column flex-sm-row"}>
            {props.children}
        </div>
    )
}

export default MainContainer