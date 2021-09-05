import React from 'react'

export default function TodoFilter({OnFilterChange}) {
    return (
        <>
            <span onClick={() => OnFilterChange('all')}>All </span>
            <span onClick={() => OnFilterChange('completed')}>Completed </span>
            <span onClick={() => OnFilterChange('uncompleted')}>Actives</span>
        </>
    )
}
