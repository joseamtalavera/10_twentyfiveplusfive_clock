import React from "react";

function Timer ({currentTime, sessionLength}) {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;



    return (
        <div className="timer">
            <h2 id="session-length">Session ({sessionLength})</h2>
            <p >{timeString}</p>
        </div>
    )
}
export default Timer;