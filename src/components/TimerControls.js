import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";


/* function TimerControls({isRunning, startTimer, pauseTimer, resetTimer}) {
    
    const handleStartPauseClick =() => {
    if(isRunning){
        pauseTimer();
    }else {
        startTimer();
    }
};

    return (
        <div className="timer-controls">
            <FontAwesomeIcon 
                icon={isRunning ? faPause : faPlay}  onClick={handleStartPauseClick} id="start_stop"/>
            
            <FontAwesomeIcon 
                icon={faRedo} onClick={resetTimer} id="reset"/>

        </div>
    )
} */



function TimerControls({isRunning, startTimer, pauseTimer, resetTimer}) {
    
    return (
        <div className="timer-controls">
            <button onClick={isRunning ? pauseTimer : startTimer} id="start_stop">
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer} id="reset">
                Reset
            </button>
        </div>
    );
}

export default TimerControls;
