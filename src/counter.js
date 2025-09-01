import react, { useState } from 'react';
function counter() {
    const [count,setCount] = useState(0);
    return (
    <div> 
        <p> count: {count}</p>
        <button onClick ={()=> setCount(count+1)}>+1</button>
        <button onClick ={()=> setCount(count-1)}>-1</button>
        <button onClick ={()=> setCount(0)}>Reset</button>
        <button onClick ={()=> setCount(count*2)}>x2</button>
    </div>
);
}