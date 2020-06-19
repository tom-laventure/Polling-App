import React from 'react'
import classes from './PollItem.module.css'

const PollItem = (props) => {
    return (
        <div className={classes.item}>
            {props.name}
        </div>
    )
}

export default PollItem