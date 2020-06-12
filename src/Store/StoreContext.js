import React, { createContext, useReducer, useEffect, useState } from 'react'
import { Reducer, initialState } from './Reducer'
import { useActions } from './Actions'
import Firebase from './Firebase'
import axios from './Axios'

const StoreContext = createContext(initialState);


const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const actions = useActions(dispatch)
    const fire = new Firebase();
    const axiosInstance = new axios();

    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <StoreContext.Provider value={{ state, dispatch, actions, fire, axiosInstance }}>
            {children}
        </StoreContext.Provider >
    )
}

export { StoreProvider, StoreContext } 