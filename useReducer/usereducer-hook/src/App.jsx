import React, { useReducer } from "react";
//import { useState } from "react";

const ACTIONS ={
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

function reducerFn(state, action) {
  //return { count: state.count + 1 };
  switch(action.type){
    // case "increment":
    case ACTIONS.INCREMENT:
      return {count: state.count+1};
    // case "decrement":
    case ACTIONS.DECREMENT:
      return {count: state.count-1};
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });
  //const [count, setCount] = useState(1);

  const increment = () => {
    // setCount((curr) => curr + 1);
    // dispatch({type: "increment"});
    dispatch({type: ACTIONS.INCREMENT});
  };

  const decrement = () => {
    // setCount((curr) => curr - 1);
    // dispatch({type: "decrement"});
    dispatch({type: ACTIONS.DECREMENT});


  };

  console.log(state);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={decrement}>-</button>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
