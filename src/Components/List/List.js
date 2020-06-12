import React, { useState } from 'react'

const List = () => {
    const [listItems, setListItems] = useState()
    let list;

    if (listItems) {
        list = listItems.map((item, index) => {
            return item
        })
    }

    return (
        <ul>
            {list}
        </ul>
    )
}

export default List