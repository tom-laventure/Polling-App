import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../../Store/StoreContext'
import GroupItem from '../GroupItem/GroupItem'
import classes from './GroupList.module.css'
import ListContainer from '../../../Section/SubContainer/SubContainer'
import Table from 'react-bootstrap/Table'
import TableHead from '../../../UI/Table/TableHead'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const GroupList = (props) => {
    const { state, actions, database } = useContext(StoreContext)
    const [groupsItems, setGroupsItems] = useState()
    const tableHeaders = ["Your Groups"]
    useEffect(() => {
        if (state.user) {
            database.ref('users/' + state.user.uid).on('value', (data) => {
                setGroups(data.val())
            })
            return () => {
                database.ref('users/' + state.user.uid).off('value')
            }
        }
    }, [state.user])

    const setGroups = (data) => {
        if (data.groups) {
            let temp = data.groups.map((g, i) => {
                return <GroupItem name={g.name} key={i} click={() => groupClicked(g.id)} />
            })
            setGroupsItems(temp)
        }
    }

    const groupClicked = (id) => {
        let pollId = encodeURIComponent(id);
        props.history.push({
            pathname: '/Poll',
            search: pollId
        })
    }

    const addGroup = () => {
        actions.createGroup(true)
    }
    return (
        <ListContainer>
            <Table size="sm" striped bordered>
                <thead>
                    <tr className="d-flex justify-content-between">
                        {tableHeaders}
                        <Button variant="secondary" onClick={() => addGroup()} className="p-0 mr-1">+</Button>
                    </tr>
                </thead>
                <tbody>
                    {groupsItems}
                </tbody>
            </Table>
        </ListContainer>
    )

}

export default withRouter(GroupList)