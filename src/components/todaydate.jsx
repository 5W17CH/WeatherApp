import React from "react";

const styles = 
{
    marginTop:'0.5em',
    fontWeight:'bold',
    color:'rgba(255, 255, 255, 0.8)',
    transition:'ease-in-out 300ms'
}

function Today() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div style={styles}>{date}</div>
    );
};

export default Today;