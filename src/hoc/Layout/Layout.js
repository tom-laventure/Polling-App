import React from 'react'
import classes from './Layout.module.css'
import TheNav from '../../Components/UI/TheNav/TheNav'
import ErrorPopUp from '../../Components/PopUps/ErrorPopUp/ErrorPopUp'

const Layout = (props) => {
    return(
        <div className={classes.container}>
            <TheNav />
            <ErrorPopUp/>
            {props.children}
        </div>
    )
}

export default Layout