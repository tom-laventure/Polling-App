import React from 'react'


const TableHead = (props) => {
    let headers = props.headers.map((i, k) => {
        return <th key={k}>{i}</th>
    })

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    )
}

export default TableHead