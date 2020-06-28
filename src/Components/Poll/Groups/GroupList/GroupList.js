import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../../Store/StoreContext'
import GroupItem from '../GroupItem/GroupItem'
import classes from './GroupList.module.css'
import ListContainer from '../../../Section/ListContainer/ListContainer'

const GroupList = () => {
    const { state, database } = useContext(StoreContext)
    const [groupsItems, setGroupsItems] = useState()
    useEffect(() => {
        if (state.user) {
            database.ref('users/' + state.user.uid).on('value', (data) => {
                setGroups(data.val())
            })
        }
    }, [state.user])

    const setGroups = (data) => {
        if (data.groups) {
            let temp = data.groups.map((g, i) => {
                return <GroupItem name={g.name} key={i} />
            })
            setGroupsItems(temp)
        }
    }

    return (
        <ListContainer>
            {groupsItems}
        </ListContainer>
    )

}

export default GroupList