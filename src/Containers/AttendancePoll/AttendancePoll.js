import React, { useContext, useEffect, useState } from 'react'
import PollItem from '../../Components/Poll/PollItems/PollItem'
import MainContainer from '../../hoc/MainContainer/MainContainer'
import { StoreContext } from '../../Store/StoreContext'
import classes from './AttendancePoll.module.css'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import SubContainer from '../../Components/Section/SubContainer/SubContainer'
import TableHead from '../../Components/UI/Table/TableHead'
import Table from 'react-bootstrap/Table'
import GroupList from '../../Components/Poll/Groups/GroupList/GroupList'
import Header from '../../Components/UI/Header/Header'
import LeftDiv from '../../Components/Section/LeftDiv/LeftDiv'
import CenterDiv from '../../Components/Section/CenterDiv/CenterDiv'
import RightDiv from '../../Components/Section/RightDiv/RightDiv'
import CreatePoll from '../../Components/Poll/CreatePoll/CreatePoll'

const AttendancePoll = (props) => {
    const { state, actions, fire, database } = useContext(StoreContext)
    const [flag, setFlag] = useState(false)
    const [pollItems, setPollItems] = useState()
    const [pollID, setPollID] = useState()
    const [pollData, setPollData] = useState()
    const tableHeaders = ["Attending"]
    let header;
    let options;

    useEffect(() => {
        if (pollData != null) {
            setPoll(pollData)
        }
        console.log(pollData)
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
        return () => {
            database.ref('polls/' + temp).off('value')
        }
    }, [props.location.search])


    const setPoll = (data) => {
        let temp;
        console.log(data)
        if (data.hasOwnProperty("members")) {
            temp = data.members.map((item, i) => {
                return <PollItem name={item.name} key={i} />
            })
        }
        else {
            temp = <PollItem name="No one has voted yet" />
        }
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
        header = pollData.name
        if (pollData.hasOwnProperty("members")) {
            let temp = pollData.members.filter(i => i.id === state.user.uid)
            if (temp.length === 0) {
                options = <Button variant="outline-primary" onClick={() => joinPoll()}>Join</Button>
            }
            else {
                options = <Button variant="outline-primary" onClick={() => leavePoll()}>Leave</Button>
            }
        }
        else {
            options = <Button variant="outline-primary" onClick={() => joinPoll()}>Join</Button>
        }
    }

    return (
        <MainContainer>
            <LeftDiv>
                <GroupList />
            </LeftDiv>
            <CenterDiv>
                <SubContainer>
                    <Header content={header} headerType="h3" />
                    <Table>
                        <TableHead headers={tableHeaders} size="sm" striped bordered />
                        <tbody>
                            {pollItems}
                        </tbody>
                    </Table>
                    <div>
                        {options}
                    </div>
                </SubContainer>
            </CenterDiv>
            <RightDiv>
                <CreatePoll />
            </RightDiv>
        </MainContainer>
    );
}

export default withRouter(AttendancePoll)