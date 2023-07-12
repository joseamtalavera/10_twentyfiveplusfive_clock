import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";


function TimerControls({startTimer, pauseTimer, resetTimer}) {

    return (
        <div className="timer-controls">
            <FontAwesomeIcon icon={faPlay}  onClick={startTimer} id="start_stop"/>
            <FontAwesomeIcon icon={faPause} onClick={pauseTimer} id="start_stop"/>
            <FontAwesomeIcon icon={faRedo} onClick={resetTimer} id="reset"/>

        </div>
    )
}

export default TimerControls;