const initialState = {
    user: null,
    error: null
}

const types = {
    SET_USER: "SET_USER",
    SET_ERROR: "SET_ERROR"
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}

export { Reducer, initialState, types }