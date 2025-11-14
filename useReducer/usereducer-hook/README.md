🔧 Understanding useReducer in This Project

This project demonstrates how to use the useReducer hook in React to manage more structured or complex state logic.
useReducer is an alternative to useState, especially useful when:

You have multiple related state updates

The logic for updating state is more complex

You want a predictable way to manage state transitions (like Redux-style reducers)

This example also includes commented-out lines showing the equivalent code using useState, to help compare both approaches.

🔍 What is useReducer?

useReducer allows you to manage state using:

A state object

A reducer function

A dispatch function for sending actions

const [state, dispatch] = useReducer(reducerFn, initialState);


It works like Redux:

You dispatch actions

The reducer decides how the state should update

🗂 The Reducer Function
function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}


What it does:

Receives the current state and an action

Uses switch to determine how to update state

Returns a new state object (never mutates the old one)

⚙️ Full Component — App.js
import React, { useReducer } from "react";
// import { useState } from "react";  // Alternative useState code

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  // Using useReducer
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });

  // Using useState (alternative)
  // const [count, setCount] = useState(1);

  const increment = () => {
    // setCount(curr => curr + 1); // useState version
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    // setCount(curr => curr - 1); // useState version
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={decrement}>-</button>

      {/* <h1>{count}</h1>   // useState version */}
      <h1>{state.count}</h1>

      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

🆚 useReducer vs useState (from your code)

Your commented lines show the equivalent logic using useState, which is an excellent way to compare:

✔️ useState version
const [count, setCount] = useState(1);

setCount(curr => curr + 1);
setCount(curr => curr - 1);

✔️ useReducer version
const [state, dispatch] = useReducer(reducerFn, { count: 1 });

dispatch({ type: ACTIONS.INCREMENT });
dispatch({ type: ACTIONS.DECREMENT });

📌 Why Use useReducer?
When to Use useState	When to Use useReducer
Simple state values	Complex, multi-step logic
Few state updates	Action-based updates
Single variable	Multiple related values
Easy components	Large/structured components
Beginners	Redux-like structure, scalable apps
💡 Key Advantages of useReducer

Clear and predictable state transitions

Keeps logic in one consistent reducer function

Makes big components more organized

Easier to test than multiple useState calls

Similar pattern to Redux (great for learning)

🧾 Summary Table
Hook	Purpose	Where Used	Notes
useState	Simple state updates	(Commented)	Shorter, direct
useReducer	Structured updates via actions	Main Component	Best for complex state
✅ Summary

This example demonstrates how useReducer can replace useState when state logic becomes more complex or action-driven. The reducer pattern helps keep code clean, predictable, and scalable — especially useful in large applications.