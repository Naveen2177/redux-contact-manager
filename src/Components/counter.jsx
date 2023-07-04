import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const Counter = useSelector((state) => state.Counter);
    
    const show = useSelector((state) => state.toggle);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const handleToggle = () => {
        dispatch({ type: "TOGGLE" });
    };

    return (
        <div>
            {show && <h1>The value is: {Counter}</h1>}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleToggle}>Toggle</button>
            <br/><hr/>
            <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
            <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type:"Toggle"})}>Toggle</button>
        </div>
    );
};

export default Counter;
