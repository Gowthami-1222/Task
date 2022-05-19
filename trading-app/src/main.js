import React from 'react'
import DataTable from 'react-data-table-component'
import DanpmtaTable from 'react-data-table-component'

export default function () {
    const columns = [
        {
            names: "Symbol",
            Selector: (row) => row.name,
        },
        {
            names: "Ask",
            Selector: (row) => row.name,
        },
        {
            names: "Bid",
            Selector: (row) => row.name,
        },
    ]
    return 
        <DataTable columns/>
    
}
