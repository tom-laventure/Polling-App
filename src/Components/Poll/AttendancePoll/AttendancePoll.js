import React, { useContext, useEffect, useState } from 'react'
import PollItem from '../PollItems/PollItem'
import MainContainer from '../../../hoc/MainContainer/MainContainer'
import { StoreContext } from '../../../Store/StoreContext'
import classes from './AttendancePoll.module.css'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import ListContainer from '../../Section/ListContainer/ListContainer'

const AttendancePoll = (props) => {
    const { state, actions, fire, database } = useContext(StoreContext)
    const [flag, setFlag] = useState(false)
    const [pollItems, setPollItems] = useState()
    const [pollID, setPollID] = useState()
    const [pollData, setPollData] = useState()
    let options;


    useEffect(() => {
        if (pollData != null) {
            setPoll(pollData)
        }
    }, [pollData])

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        let temp;
        for (let param of query.entries()) {
            temp = param[0]
            setPollID(temp)
            console.log(temp)
        }

        database.ref('polls/' + temp).on('value', (snap) => {
            let data = snap.val()
            setPollData(data)
        })
    }, [])


    const setPoll = (data) => {
        console.log(data)
        let temp = data.members.map((item, i) => {
            return <PollItem name={item.name} key={i} />
        })
        setPollItems(temp)
    }

    const joinPoll = () => {
        let temp = {
            name: state.user.displayName,
            id: state.user.uid
        }

        fire.joinPoll(temp, pollID)
    }

    const leavePoll = () => {
        let temp = {
            name: state.user.displayName,
            id: state.user.uid
        }

        fire.leavePoll(temp, pollID)
    }

    if (state.user && pollData) {
        let temp = pollData.members.filter(i => i.id === state.user.uid)
        if (temp.length === 0) {
            options = <Button variant="outline-primary" onClick={() => joinPoll()}>Join</Button>
        }
        else {
            options = <Button variant="outline-primary" onClick={() => leavePoll()}>Leave</Button>
        }
    }
    return (
        <MainContainer>
            <div className={classes.poll}>
                <ListContainer>
                    {pollItems}
                </ListContainer>
                <div>
                    {options}
                </div>
            </div>
        </MainContainer>
    );
}

export default withRouter(AttendancePoll)