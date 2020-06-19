import {types} from './Reducer'

export const useActions = (dispatch) => {
    const setCurrentUser = (item) => {
        dispatch({type: types.SET_USER, payload: item})
    }

    const setErrorState = (item) => {
        dispatch({type: types.SET_ERROR, payload: item})
    }

    const joinCurrentPoll = (item) => {
        dispatch({type: types.JOIN_CURRENT_POLL, payload: item})
    }

    const leaveCurrentPoll = (item) => {
        dispatch({type: types.LEAVE_CURRENT_POLL, payload: item})
    }

    return{
        setCurrentUser,
        setErrorState,
        joinCurrentPoll,
        leaveCurrentPoll
    }
}