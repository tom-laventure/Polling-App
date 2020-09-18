import React, { useContext, useState, useEffect } from 'react'
import Auth from '../../Components/Auth/Auth'
import { StoreContext } from '../../Store/StoreContext'
import classes from './HomePage.module.css'
import Layout from '../../hoc/Layout/Layout'
import CreatePoll from '../../Components/Poll/CreatePoll/CreatePoll'
import MainContainer from '../../hoc/MainContainer/MainContainer'
import GroupList from '../../Components/Poll/Groups/GroupList/GroupList'
import CenterDiv from '../../Components/Section/CenterDiv/CenterDiv'
import LeftDiv from '../../Components/Section/LeftDiv/LeftDiv'
import RightDiv from '../../Components/Section/RightDiv/RightDiv'

const Homepage = () => {
    const { state, dispatch, actions, fire } = useContext(StoreContext)

    return (
        <MainContainer>
            <LeftDiv>
                <GroupList />
            </LeftDiv>
            <CenterDiv>
                <CreatePoll />
            </CenterDiv>
            <RightDiv />
        </MainContainer>
    )
}

export default Homepage