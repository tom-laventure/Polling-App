import {types} from './Reducer'

export const useActions = (dispatch) => {
    const setLoginState = (item) => {
        dispatch({type: types.SET_USER, payload: item})
    }

    const setErrorState = (item) => {
        dispatch({type: types.SET_ERROR, payload: item})
    }

    return{
        setLoginState,
        setErrorState
    }
}