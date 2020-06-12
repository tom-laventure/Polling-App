import React, { useContext, useState, useEffect } from 'react'
import TheNav from '../../Components/TheNav/TheNav'
import Auth from '../../Components/Auth/Auth'
import {StoreContext} from '../../Store/StoreContext'
import classes from './HomePage.module.css'
import ErrorPopUp from '../../Components/PopUps/ErrorPopUp/ErrorPopUp'

const Homepage = () => {
    const {state, dispatch, actions, fire} = useContext(StoreContext)
    const [auth, setAuth] = useState(true)
    let authView;
    // useEffect(() => {
    //     console.log("state")
    // }, [auth])

    // fire.authStateChange((user) =>{
    //     if(!user){
    //         setAuth(true)
    //         console.log(user, "logged out")
    //     }
    //     else{
    //         setAuth(false)
    //         console.log(user, "logged in")
    //     }
    // })



    if(auth){
        authView = <Auth/>
    }

    return (
        <div className={classes.container}>
            <ErrorPopUp/>
            {authView}
            <TheNav/>
        </div>
    )
}

export default Homepage