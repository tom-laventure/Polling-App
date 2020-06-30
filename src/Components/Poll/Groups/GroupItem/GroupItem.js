import React from 'react'
import classes from './GroupItem.module.css'

const GroupItem = (props) => {

    return (
        <tr onClick={props.click}>
            <td>
                {props.name}
            </td>
        </tr>
    )
}

export default GroupItem