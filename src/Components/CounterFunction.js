import React, { useState } from "react";

function CounterFunction(){
    const [num, setNum] = useState(1);
    function Increment(){
        setNum(num + 1)
    }
    function Decrement(){
        num > 0 && setNum(num - 1)
    }
    return(
        <div
        style={{
                backgroundColor: 'lightskyblue',
                padding: '20px 40px',
                margin: '3rem',
                border: '4px solid black',
                borderRadius: '30px'
            }}
        >
            <h2>Counter using function component: </h2>
            <p style={{fontSize: '2rem'}}>{num}</p>
             <button style={{backgroundColor: 'green', color: 'whitesmoke', padding: '5px 25px', 
                borderRadius: '10px', fontSize: '1.5rem', marginRight: '10px'}} 
                onClick={() => Increment()}>+</button>
                <button style={{backgroundColor: 'red', color: 'whitesmoke', padding: '5px 25px', 
                borderRadius: '10px', fontSize: '1.5rem', marginLeft: '10px'}} 
                onClick={() => Decrement()}>-</button>
        </div>
    )
}
export default CounterFunction;