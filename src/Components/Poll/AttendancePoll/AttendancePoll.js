import React, { useContext, useEffect, useState } from 'react'
import PollItem from '../PollItems/PollItem'
import MainContainer from '../../../hoc/MainContainer/MainContainer'
import { StoreContext } from '../../../Store/StoreContext'
import classes from './AttendancePoll.module.css'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase'


const AttendancePoll = () => {
    const { state, dispatch, actions, fire, axiosInstance } = useContext(StoreContext)
    const [flag, setFlag] = useState(true)
    let options;

    useEffect(() => {
        if (state.user != null) {
            if (state.polls.currentPoll.find((element) => element.id == state.user.uid) == null) {
                setFlag(true)
            }
            else{
                setFlag(false)
            }
        }
    }, [ state.polls, state.user])



    let pollItems = state.polls.currentPoll.map((item, i) => {
        return <PollItem name={item.name} key={i} />
    })



    const joinPoll = () => {
        let temp = {
            name: state.user.displayName,
            id: state.user.uid
        }

        if (state.polls.currentPoll.find((element) => element.id == temp.id) == null) {
            actions.joinCurrentPoll(temp)
        }
    }

    const leavePoll = () => {
        let temp = {
            name: state.user.displayName,
            id: state.user.uid
        }

        if (state.polls.currentPoll.find((element) => element.id == temp.id) != null) {
            actions.leaveCurrentPoll(temp)
        }
    }

    if(flag){
        options = <Button variant="outline-primary" onClick={() => joinPoll()}>Join</Button>
    }
    else{
        options = <Button variant="outline-primary" onClick={() => leavePoll()}>Leave</Button>
    }
    return (
        <MainContainer>
            <div className={classes.poll}>
                {pollItems}
                <div>
                    {options}
                </div>
            </div>
        </MainContainer>
    );
}

export default AttendancePoll