import React from 'react'
import classes from './PollItem.module.css'

const PollItem = (props) => {
    return (
        <tr className={classes.item}>
            <td>{props.name}</td>
        </tr>
    )
}

export default PollItem