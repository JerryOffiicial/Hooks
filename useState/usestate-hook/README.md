📌 Understanding useState in React (Detailed Explanation)

useState is the simplest state management hook in React.
It is used when you want to store and update a single value (or a small set of values) inside a component.

Your code:

import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(1);

  const increment = ()=>{
      setCount(count+1);
  }

  const decrement = ()=>{
    setCount(count-1);
  }

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:"20px"
    }}>
      <button onClick={decrement}>Remove 1</button>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Add 1</button>

    </div>
  )
}

export default App

🧠 How useState Works Here
✔️ 1. Declaring State
const [count, setCount] = useState(1);


count → the actual value of the state (initially 1)

setCount → the function that updates the state

Every time setCount is called, React re-renders the component with the new value.

➕ ➖ 2. Updating State
Increment Function
const increment = () => {
  setCount(count + 1);
}


When the “Add 1” button is clicked:

setCount updates the state

React rerenders

count increases by 1

Decrement Function
const decrement = () => {
  setCount(count - 1);
}


When “Remove 1” is clicked:

count decreases by 1

🖥️ 3. Rendering the UI

The UI is a simple layout:

<div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"20px" }}>


Then:

A minus button

The count

A plus button

The count updates instantly because React re-renders the component when setCount is called.

🎯 When to Use useState

Use useState when:

Your state is simple

Each update is straightforward

You don’t need complex action types

You don’t need advanced state logic

Example cases:

Counters

Toggling values

Form inputs

Showing/hiding components