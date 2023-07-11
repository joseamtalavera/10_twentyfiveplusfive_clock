import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

function SessionLengthAdjuster ({setSessionLength}) {

    const increaseSessionLength = () => {
        setSessionLength((prevLength) => prevLength + 1);
    };
    const decreaseSessionLength = () => {
        setSessionLength ((preveLength) => (preveLength > 1 ? preveLength -1 : preveLength));   
    };

    return (
        <div className='break-session-adjuster'>
            
            <div className='adjuster-controls'>
                <FontAwesomeIcon
                    id="session-decrement"
                    icon={faArrowDown}
                    onClick={() => setSessionLength((prevSessionLength) => prevSessionLength -1)} 
                    />
                <span>{setSessionLength}</span>
                <FontAwesomeIcon
                    id="session-increment"
                    icon={faArrowUp}
                    onClick={() => setSessionLength((prevSessionLength) => prevSessionLength +1)}
                    />
            </div>
        </div>
    );
};

export default SessionLengthAdjuster;