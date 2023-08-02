import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

function BreakSessionAdjuster ({breakLength, setBreakLength}) {

    //declaring these two constant and recive it as prop from the parent will not affect 
    //another component
    
    const increaseBreakLength = () => {
        setBreakLength((prevLength) => prevLength + 1);
    };
    const decreaseBreakLength = () => {
        setBreakLength ((preveLength) => (preveLength > 1 ? preveLength -1 : preveLength));   
    };

    return (
        <div className='break-session-adjuster'>
            
            <div className='adjuster-controls'>
                <FontAwesomeIcon
                    id="break-decrement"
                    icon={faArrowDown}
                    onClick={decreaseBreakLength}
                    />
                <span>{breakLength}</span>
                <FontAwesomeIcon
                    id="break-increment"
                    icon={faArrowUp}
                    onClick={increaseBreakLength}
                    />
            </div>
        </div>
    );
};

export default BreakSessionAdjuster;

//onClick={() => setBreakLength((prevBreakLength) => prevBreakLength -1)}
//onClick={() => setBreakLength((prevBreakLength) => prevBreakLength +1)}