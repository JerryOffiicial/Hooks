📌 Understanding useRef in React (Full Detailed Explanation)

useRef is a powerful hook that serves three major purposes:

Accessing and controlling DOM elements

Storing mutable values that don’t cause re-renders

Remembering previous values across renders

Your code demonstrates all three, making it an excellent learning example.

✅ Your Code:
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 1. useRef to access DOM element
  const inputRef = useRef(null);

  // 2. useRef to store a mutable value (won't re-render)
  const renderCount = useRef(1);

  // 3. useRef to keep previous count
  const previousCount = useRef(0);
  
  useEffect(() => {
    // update previous count
    previousCount.current = count;
    console.log("useEffect")
    // increase render count
    renderCount.current++;
  });

  const focusInput = () => {
    inputRef.current.focus(); // accessing DOM element
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Demo</h1>

      {/* DOM Access */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>

      <br /><br />

      {/* Tracking state */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <p>Previous Count: {previousCount.current}</p>
      <p>Component Rendered: {renderCount.current} times</p>
    </div>
  );
}

export default App;

🧠 useRef Explained in Detail
🔹 1. Accessing DOM Elements
const inputRef = useRef(null);


inputRef.current holds the actual DOM element.

You can perform direct DOM actions (like .focus()).

When user clicks the button:
inputRef.current.focus();


✔ Focuses the input box
✔ No re-render
✔ Works like document.querySelector() but React-safe

🔹 2. Storing Mutable Values Without Re-rendering
const renderCount = useRef(1);


This value persists between renders

But changing it does NOT cause a re-render

Why?

Because .current is just a normal JavaScript property.

Inside useEffect:

renderCount.current++;


Meaning the component knows how many times it rendered,
but updating this value will not update the UI unless you manually trigger a re-render (which you don’t).

This is perfect for:

tracking renders

storing timers

storing intervals

storing values you don’t want to trigger a rerender

🔹 3. Storing Previous State Without Re-rendering
const previousCount = useRef(0);


Inside useEffect (runs on every render):

previousCount.current = count;


So:

previousCount.current always keeps the last count value

Does not trigger a re-render

Updates silently in the background

Displayed in UI as:

<p>Previous Count: {previousCount.current}</p>

🔄 Render Cycle Example:

Let’s say your count goes like this:

Action	count	previousCount.current	renderCount.current
Initial load	0	0	1
Click +1	1	0	2
Click +1	2	1	3
Click +1	3	2	4

This shows:

count changes cause re-renders

refs update without causing re-renders

🎯 When To Use useRef
✔ When you need to access the DOM

focusing input

scrolling

playing/pausing video

measuring elements

✔ When you need a value that survives renders

BUT you don’t want updates to cause re-renders.

✔ When you need to store previous state values

without using useEffect + useState combos.