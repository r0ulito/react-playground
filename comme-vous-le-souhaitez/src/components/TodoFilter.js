import React from 'react'

export default function TodoFilter({OnFilterChange}) {
    return (
        <>
            <span onClick={() => OnFilterChange('all')}>All </span>
            <span onClick={() => OnFilterChange(true)}>Completed </span>
            <span onClick={() => OnFilterChange(false)}>Actives</span>
        </>
    )
}
