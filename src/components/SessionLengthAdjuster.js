import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';


//we pass increseSessionLength and decreaseSessionLength so whenever 
//we click the arrows, it will afect the Timer component directly. 
//if we do in the way is done in BreakSessionAdjuster, it will not work as the variable is not 
//passed as prop from the parent

function SessionLengthAdjuster ({sessionLength, increaseSessionLength, decreaseSessionLength}) {

    // const increaseSessionLength = () => {
    //     setSessionLength((prevLength) => prevLength + 1);
    // };
    // const decreaseSessionLength = () => {
    //     setSessionLength ((preveLength) => (preveLength > 1 ? preveLength -1 : preveLength));   
    // };

    return (
        <div className='break-session-adjuster'>
            
            <div className='adjuster-controls'>
                <FontAwesomeIcon
                    id="session-decrement"
                    icon={faArrowDown}
                    //onClick={() => setSessionLength((prevSessionLength) => prevSessionLength -1)} 
                    onClick={decreaseSessionLength}
                    />
                <span>{sessionLength}</span>
                <FontAwesomeIcon
                    id="session-increment"
                    icon={faArrowUp}
                    onClick={increaseSessionLength}
                    //onClick={() => setSessionLength((prevSessionLength) => prevSessionLength +1)}
                    />
            </div>
        </div>
    );
};

export default SessionLengthAdjuster;