import React from 'react'

function SessionLenghtDisplay ({sessionLength}) {

    return (
        <div className='break-session-display'>
            <h2 id="session-label">Session Length</h2>
            <p id="session-length">{sessionLength}</p>
        </div>
    )
}

export default SessionLenghtDisplay;