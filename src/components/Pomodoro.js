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
    const [currentTime, setCurrenTime] = useState(sessionLength * 60);
    const [isSession, setIsSession] = useState(true);
    const audio = new Audio(beep);

    useEffect(() => {
       let interval = null;
        if(currentTime === 0){
            audio.play();
            setIsSession((prevIsSession) => !prevIsSession);
            setCurrenTime ((prevIsSession) => prevIsSession ? breakLength*60 : sessionLength*60);
        }
        else if(isRunning) {
        interval = setInterval (() => {
                setCurrenTime((prevTime)=> prevTime -1 );
            }, 1000);
        
        return () => clearInterval(interval);
        }
    }, [isRunning, currentTime, breakLength, sessionLength]);


    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    }
    
    const resetTimer = () => {
        setIsRunning(false);
        setCurrenTime(sessionLength*60);
        setIsSession(true);
        setBreakLength(5);
        setSessionLength(25);
        audio.pause();
        audio.currentTime = 0;
    };




// how do play a beep when the session is finish?

    return (

        <div className="pomodoro">
            <div className="left-column">
                <BreakSessionDisplay breakLength={breakLength} />
                <BreakSessionAdjuster setBreakLength={setBreakLength} />
            </div>
            <div className="right-column">
                <SessionLenghtDisplay sessionLength={sessionLength} />
                <SessionLenghtAdjuster setSessionLength={setSessionLength} />
            </div>
            <Timer currentTime={currentTime} 
                    sessionLength={sessionLength} />
            <TimerControls 
                    startTimer={startTimer}
                    pauseTimer={pauseTimer}
                    resetTimer={resetTimer} 
                    />

        </div>
    );
}


export default Pomodoro;