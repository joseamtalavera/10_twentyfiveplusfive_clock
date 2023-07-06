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


    const toggleTimer = () => setIsRunning((prevState) => !prevState);
    
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
            <BreakSessionDisplay breakLength={breakLength} />
            <BreakSessionAdjuster setBreakLength={setBreakLength} />
            <SessionLenghtDisplay sessionLength={sessionLength} />
            <SessionLenghtAdjuster setSessionLength={setSessionLength} />
            <Timer currentTime={currentTime} 
                    isSession={isSession} />
            <TimerControls 
                    toggleTimerr={toggleTimer} 
                    resetTimer={resetTimer} 
                    isRunning={isRunning} 
                    />

        </div>
    );
}


export default Pomodoro;