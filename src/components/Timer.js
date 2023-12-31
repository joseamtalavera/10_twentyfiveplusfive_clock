import React from "react";

function Timer ({currentTime, isSession, sessionLength}) {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log("Formatted Time:", timeString)


    return (
        <div className="timer">
            <h2 id="timer-label">{isSession ? 'Session' : 'Break' } </h2>
            <p id="time-left">{timeString}</p>
        </div>
    )}
export default Timer;