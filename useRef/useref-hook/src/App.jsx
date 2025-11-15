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
