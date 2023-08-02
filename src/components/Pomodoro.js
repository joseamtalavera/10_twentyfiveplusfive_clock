import React, {useState, useEffect} from "react";
import Timer from './Timer';
import TimerControls from './TimerControls';
import BreakSessionDisplay from './BreakSessionDisplay';
import BreakSessionAdjuster from './BreakSessionAdjuster';
import SessionLenghtDisplay from './SessionLengthDisplay';
import SessionLenghtAdjuster from './SessionLengthAdjuster';
import beep from '../../src/beep.mp3';


function Pomodoro () {

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState(sessionLength * 60);
    const [isSession, setIsSession] = useState(true);
    const audio = new Audio(beep);
    const [sessionUpdated, setSessionUpdated] = useState(false);
    
    




    useEffect(() => {
    let interval = null;

    if(isRunning) {
        interval = setInterval(() => {
            setCurrentTime(prevTime => prevTime - 1);
        }, 1000);
    } else if (!isRunning && currentTime !== 0) {
        clearInterval(interval);
    }

    if(currentTime === 0) {
        setIsSession(prevIsSession => {
            const newIsSession = !prevIsSession;
            setCurrentTime(newIsSession ? sessionLength * 60 : breakLength * 60);
            return newIsSession;
        });
    }

    return () => clearInterval(interval);
}, [isRunning, currentTime, breakLength, sessionLength]);




 /* useEffect(() => {
     if (!isRunning && isSession && sessionUpdated) {
        setCurrentTime(sessionLength * 60);
        setSessionUpdated(false);
     }
}, [isRunning, isSession, sessionLength, sessionUpdated]); */




    const startTimer = () => {
        console.log("startime called");
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    const pauseTimer = () => {
        console.log("pausetimer called");
        //setIsRunning(false);
        setIsRunning(prevIsRunning => !prevIsRunning);
    }
    
    /* const resetTimer = () => {
        console.log("resetTimer called");
        setIsRunning(false);
        setCurrentTime(sessionLength * 60);
        setIsSession(true);
        setBreakLength(5);
        setSessionLength(25);
        audio.pause();
        audio.currentTime = 0;
    }; */

    const resetTimer = () => {
        console.log("resetTimer called")
        setIsRunning(false);
        setCurrentTime(sessionLength * 60); // Set the currentTime to the initial session length in seconds
        setIsSession(true);
        setBreakLength(5);
        setSessionLength(25);
        audio.pause();
        audio.currentTime = 0;
    };
    

    const increaseSessionLength = () => {
        setSessionLength((prevLength) => prevLength + 1);
        setSessionUpdated(true);
    };
    
    const decreaseSessionLength = () => {
        setSessionLength((prevLength) => (prevLength > 1 ? prevLength -1 : prevLength));
          
        setSessionUpdated(true);
        setCurrentTime((prevTime) => (prevTime > 60 ? prevTime - 60 : 60))
    };





    return (

        <div className="pomodoro">
            <div className="left-column">
                <BreakSessionDisplay 
                    breakLength={breakLength} 
                    />
                <BreakSessionAdjuster 
                    breakLength={breakLength}
                    setBreakLength={setBreakLength} />
            </div>
            <div className="right-column">
                <SessionLenghtDisplay 
                    sessionLength={sessionLength} 
                />
                <SessionLenghtAdjuster 
                    sessionLength={sessionLength}
                    //setSessionLength={setSessionLength}
                    increaseSessionLength={increaseSessionLength}
                    decreaseSessionLength={decreaseSessionLength}
                />
            </div>
            <Timer currentTime={currentTime} 
                    sessionLength={sessionLength}
                    isSession={isSession}
                />
            <TimerControls 
                    isRunning={isRunning}
                    startTimer={startTimer}
                    pauseTimer={pauseTimer}
                    resetTimer={resetTimer} 
                />

        </div>
    );
}


export default Pomodoro;












//https://fcc-pomodoro-clock-25-5.netlify.app/

/* 
import React, { useState, useEffect } from 'react';

function Pomodoro() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [currentTime, setCurrentTime] = useState(sessionLength * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isSession, setIsSession] = useState(true);

    useEffect(() => {
        let interval = null;
    
        if(isRunning) {
            interval = setInterval(() => {
                setCurrentTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isRunning && currentTime !== 0) {
            clearInterval(interval);
        }
    
        if(currentTime === 0) {
            setIsSession(prevIsSession => {
                const newIsSession = !prevIsSession;
                setCurrentTime(newIsSession ? sessionLength * 60 : breakLength * 60);
                return newIsSession;
            });
        }
    
        return () => clearInterval(interval);
    }, [isRunning, currentTime, breakLength, sessionLength]);
    

    const handleStartPause = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsSession(true);
        setSessionLength(25);
        setBreakLength(5);
        setCurrentTime(sessionLength * 60);
    };

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <div>
            <div>
                <h2>Session Length: {sessionLength}</h2>
                <button onClick={() => setSessionLength(sessionLength + 1)}>Increase</button>
                <button onClick={() => setSessionLength(sessionLength - 1)}>Decrease</button>
            </div>
            <div>
                <h2>Break Length: {breakLength}</h2>
                <button onClick={() => setBreakLength(breakLength + 1)}>Increase</button>
                <button onClick={() => setBreakLength(breakLength - 1)}>Decrease</button>
            </div>
            <h1>{isSession ? 'Session' : 'Break'}</h1>
            <h1>{formatTime(currentTime)}</h1>
            <button onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Pomodoro;
 */