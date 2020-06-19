import React, { useContext, useState, useEffect } from 'react'
import Auth from '../../Components/Auth/Auth'
import { StoreContext } from '../../Store/StoreContext'
import classes from './HomePage.module.css'
import Layout from '../../hoc/Layout/Layout'
import CreatePoll from '../../Components/Poll/CreatePoll/CreatePoll'
import MainContainer from '../../hoc/MainContainer/MainContainer'

const Homepage = () => {
    const { state, dispatch, actions, fire } = useContext(StoreContext)

    return (
        <MainContainer>
            <CreatePoll />
        </MainContainer>
    )
}

export default Homepage