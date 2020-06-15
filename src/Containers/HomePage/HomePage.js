import React, { useContext, useState, useEffect } from 'react'
import TheNav from '../../Components/UI/Navigation/TheNav/TheNav'
import Auth from '../../Components/Auth/Auth'
import { StoreContext } from '../../Store/StoreContext'
import classes from './HomePage.module.css'
import Layout from '../../hoc/Layout/Layout'

const Homepage = () => {
    const { state, dispatch, actions, fire } = useContext(StoreContext)
    const [auth, setAuth] = useState(true)
    let authView;

    useEffect(() => {
        console.log("state")
    }, [state])

    fire.authStateChange((user) => {
        if (!user) {
            setAuth(true)
            console.log(state)
            console.log(user, "logged out")
        }
        else {
            setAuth(false)
            console.log(user, "logged in")
        }
    })



    if (auth) {
        authView = <Auth />
    }

    return (
        <Layout>
            {authView}
            
        </Layout>
    )
}

export default Homepage