import React, {useState} from 'react';

const Counter = () =>
{
   const [count, setCount] = useState(0);
   
   const incrementfunc = () => {
       setCount(count+1);
   };

   const decrementfunc = () => {
    setCount(count-1);
    };

    const multiplyfunc = () => {
    setCount(count*2);
    };

    const dividefunc = () => {
        setCount(count/2);
        };

    const resetFunct = () =>{
        setCount(0);
    };

    return (
        <div id="counterDiv">
         <h1> Caoimhe's Counter!</h1>
         <h2>Welcome to Caoimhe's First React Counter App :)</h2>
         <button onClick={incrementfunc}>+ This is the increment button +</button>
         <button onClick={decrementfunc}>- This is the decrement button -</button>
         <button onClick={multiplyfunc}>x This is the double button x</button>  
         <button onClick={dividefunc}>/ This is the divide button /</button>  
         <h2>The current count is: {count} </h2>
         <button onClick={resetFunct}>Reset the counter here!</button>
         </div>
         
    );
};
  
export default Counter;