import React from 'react'
import classes from './AuxBackground.module.css'

const AuxBackground = (props) => {
    let zIndex;
    let assignedClasses= [classes.background]
    switch (props.zIndex) {
        case ("high"):
            assignedClasses.push(classes.zHigh)
            break;
        case ("medium"):
            assignedClasses.push(classes.zMedium)
            break;
        default:
            assignedClasses.push(classes.zLow)
            break;
    }

    if(props.hide){
        assignedClasses.push(classes.hide)
    }

    return (
        <div className={assignedClasses.join(' ')} onClick={props.click}>
            {props.children}
        </div>
    )
}

export default AuxBackground