import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

function BreakSessionAdjuster ({setBreakLength}) {

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
                    onClick={() => setBreakLength((prevBreakLength) => prevBreakLength -1)} 
                    />
                <span>{setBreakLength}</span>
                <FontAwesomeIcon
                    id="break-increment"
                    icon={faArrowUp}
                    onClick={() => setBreakLength((prevBreakLength) => prevBreakLength +1)}
                    />
            </div>
        </div>
    );
};

export default BreakSessionAdjuster;