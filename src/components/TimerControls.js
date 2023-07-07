import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";


function TimerControls({startTimer, pauseTimer, resetTimer}) {

    return (
        <div className="timer-controls">
            <FontAwesomeIcon icon={faPlay} onClick={startTimer} />
            <FontAwesomeIcon icon={faPause} onClick={pauseTimer} />
            <FontAwesomeIcon icon={faRedo} onClick={resetTimer} />

        </div>
    )
}

export default TimerControls;