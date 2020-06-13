import React, { useState, useContext, useEffect } from 'react'
import classes from './Auth.module.css'
import Login from './Login/Login'
import AuxBackground from '../../hoc/AuxBackground/AuxBackground'
import Register from './Register/Register'
import { StoreContext } from '../../Store/StoreContext'
import ErrorPopUp from '../UI/PopUps/ErrorPopUp/ErrorPopUp'
import ResetPassword from './ResetPassword/ResetPassword'


const Auth = (props) => {
    const { state, dispatch, actions, fire, axiosInstance } = useContext(StoreContext)
    const [view, setView] = useState("login")
    let theView;
    let errorPopUp;

    const req = axiosInstance.setRequestInterceptor(req => {
        actions.setErrorState({error: null})
        return req;
    })

    const res = axiosInstance.setResponseInterceptor(error => {
        actions.setErrorState({error: null})
    })

    useEffect(() => {
        return () => {
            axiosInstance.removeReqInterceptor(req);
            axiosInstance.removeResInterceptor(res);
        }
    }, [req, res])

    const switchAuthView = (type, e) => {
        e.preventDefault()
        setView(type)
    }

    switch (view) {
        case "login":
            theView = <Login switch={switchAuthView} />;
            break;
        case "register":
            theView = <Register switch={switchAuthView} />
            break;
        case "reset":
            theView = <ResetPassword switch={switchAuthView} />
            break;
        default:
            theView = <Login switch={switchAuthView} />;
            break;
    }

    return (
        <AuxBackground zIndex="low">
            {errorPopUp}
            {theView}
        </AuxBackground>
    )
}

export default Auth