import React from 'react'
import classes from './Header.module.css'
import AuxDiv from '../../../hoc/AuxDiv/AuxDiv';


const Header = (props) => {
    let header;

    switch (props.headerType) {
        case 'h3':
            header = <h3 className={classes.header}>{props.content}</h3>
            break;
        case 'h4':
            header = <h4 className={classes.header}>{props.content}</h4>
            break;
        default:
            header = <h1>{props.content}</h1>
            break;
    }
    return (
        <AuxDiv>
            {header}
        </AuxDiv>
    )
}

export default Header