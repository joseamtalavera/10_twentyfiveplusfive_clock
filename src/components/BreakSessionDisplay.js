import React from 'react'

function BreakSessionDisplay ({breakLength}) {

    return (
        <div className='break-session-display'>
            <h2>Break Length</h2>
            <p>{breakLength}</p>
        </div>
    )
}

export default BreakSessionDisplay;