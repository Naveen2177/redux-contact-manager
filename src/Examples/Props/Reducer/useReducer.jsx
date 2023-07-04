import React, { useReducer } from 'react'

const initialState = {count: 0};

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {count: state.count + 1 };
        case 'decrement':
            return {count: state.count - 1 };
        case 'reset':
            return {count: 0}
        default:
            throw Error('error');   
    }
};

const Counter1 = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter1;