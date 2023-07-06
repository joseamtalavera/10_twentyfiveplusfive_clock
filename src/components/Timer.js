import React from "react";

function Timer ({currentTime, isSession}) {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;



    return (
        <div className="timer">
            <h2>{isSession ? "Sesion" : "Break"}</h2>
            <p>{timeString}</p>
        </div>
    )
}
export default Timer;