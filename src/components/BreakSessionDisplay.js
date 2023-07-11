import React from 'react'

function BreakSessionDisplay ({breakLength}) {

    return (
        <div className='break-session-display'>
            <h2 id="break-label">Break Length</h2>
            <p id="break-length">{breakLength}</p>
        </div>
    )
}

export default BreakSessionDisplay;