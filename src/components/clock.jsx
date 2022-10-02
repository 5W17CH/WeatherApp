import React from "react";
import { useState, useEffect } from "react";

const styles = 
{
    fontSize:'4rem',
    marginTop:'0.5em',
    fontWeight:'bold',
    color:'rgba(255, 255, 255, 0.8)',
    transition:'ease-in-out 300ms'
}

function Clock() {
    const [setClock, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            setClockState(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return <div style={styles}>{setClock}</div>;

};

export default Clock;