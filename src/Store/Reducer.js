const it = "hello"

const initialState = {
    user: null,
    error: null,
    createGroup: false,
    polls: {
        currentPoll: [
        ]
    }
}

const types = {
    SET_USER: "SET_USER",
    SET_ERROR: "SET_ERROR",
    JOIN_CURRENT_POLL: "JOIN_CURRENT_POLL",
    LEAVE_CURRENT_POLL: "LEAVE_CURRENT_POLL",
    CREATE_GROUP: "CREATE_GROUP"
}

const Reducer = (state = initialState, action) => {
    let currentPoll;
    let polls;
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
        case types.JOIN_CURRENT_POLL:
            currentPoll = [...state.polls.currentPoll]
            currentPoll.push(action.payload)
            polls = { ...state.polls }
            polls.currentPoll = currentPoll
            return {
                ...state,
                polls
            }
        case types.LEAVE_CURRENT_POLL:
            currentPoll = [...state.polls.currentPoll]
            const newPoll = currentPoll.filter((val) => {
                console.log(action.payload.id == val.id)
                return action.payload.id != val.id
            })
            polls = { ...state.polls }
            polls.currentPoll = newPoll
            return {
                ...state,
                polls
            }
        case types.CREATE_GROUP:
            return {
                ...state,
                createGroup: action.payload
            }
    }
    return state;
}

export { Reducer, initialState, types }