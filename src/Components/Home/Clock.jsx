import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures useEffect runs only once (on mount)

    return (
        <div>
            <div className ="font-semibold mt-5 text-3xl">{currentTime.toLocaleTimeString()}</div>
        </div>
    );
};

export default Clock;
