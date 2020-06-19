const it = "hello"

const initialState = {
    user: null,
    error: null,
    polls: {
        currentPoll: [
            { name: "tom" },
            { name: "kim" },
            { name: "jake" },
            { name: "tim" },
            { name: "sam" }
        ]
    }
}

const types = {
    SET_USER: "SET_USER",
    SET_ERROR: "SET_ERROR",
    JOIN_CURRENT_POLL: "JOIN_CURRENT_POLL",
    LEAVE_CURRENT_POLL: "LEAVE_CURRENT_POLL"
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
            polls = {...state.polls}
            polls.currentPoll = currentPoll
            return{
                ...state,
                polls
            }
        case types.LEAVE_CURRENT_POLL:
            currentPoll = [...state.polls.currentPoll]
            console.log(currentPoll, action.payload)
            const newPoll = currentPoll.filter((val) => {
                console.log(action.payload.id == val.id)
                return action.payload.id != val.id
            })
            polls = {...state.polls}
            polls.currentPoll = newPoll
        return{
            ...state,
            polls
        }
    }
    return state;
}

export { Reducer, initialState, types }