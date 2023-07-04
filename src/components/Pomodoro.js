import React, {useState, useEffect} from "react";
import Timer from './Timer';
import TimerControls from './TimerControls';
import BreakSessionDisplay from './BreakSessionDisplay';
import BreakSessionAdjuster from './BreakSessionAdjuster';
import SessionLenghtDisplay from './SessionLengthDisplay';
import SessionLenghtAdjuster from './SessionLengthAdjuster';



function Pomodoro () {

    const [breakLength, setBreaklength] = useState(5);
    const [sessionLength, setSesssionLength] = useState(25);
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentime] = useState(sessionLength * 60);
    const [isSession, setIsSession] = useState(true);

    useEffect(() => {
        let interval = null;
        if(isRunning) {
            interval = setInterval (() => {
                setCurrentime((prevTime)=> prevTime -1 );
            }, 1000);
        } else {
            clearInterval (interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, currentTime]);


    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setCurrentime(sessionLength*60);
        setIsSession(true);
        setBreaklength(5);
        setSesssionLength(25);
    };






    return (

        <div className="pomodoro">
            <BreakSessionDisplay breakLength={breakLength} />
            <BreakSessionAdjuster setBreaklength={setBreaklength} />
            <SessionLenghtDisplay sessionLength={sessionLength} />
            <SessionLenghtAdjuster setSesssionLength={setSesssionLength} />
            <Timer currentTime={currentTime} isSession={isSession} />
            <TimerControls startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer} />

        </div>
    );
}


export default Pomodoro;