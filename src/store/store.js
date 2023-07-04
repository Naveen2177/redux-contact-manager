import { createStore } from "redux";

const initialState = {
  Counter: 0,
  toggle: false,

  Users : [],
    currentItem : {
      id : 0,
      name : "",
      email : "",
    }
};

const counterReducer = (state = initialState, action) => {
  
  if (action.type === "INCREMENT") {
    return {
      ...state,
      Counter: state.Counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      Counter: state.Counter - 1,
    };
  } else if (action.type === "TOGGLE") {
    return {
      ...state,
      toggle:!state.toggle
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
