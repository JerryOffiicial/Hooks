🧠 Understanding useMemo in This Project

This project demonstrates how to use the React useMemo hook to optimize performance by memoizing expensive calculations and preventing unnecessary re-renders.

🔍 What is useMemo?

useMemo is a React Hook that returns a memoized (cached) value.
It only recalculates that value when one of its dependencies changes.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


This means:

React runs the function inside useMemo only when dependencies change.

Otherwise, it reuses the last computed value to save time and improve performance.

⚙️ How It’s Used in This Project

There are two uses of useMemo in this example:

1. 🧩 Memoizing an Expensive Calculation
const doubleNumber = useMemo(() => {
  return slowFunction(number);
}, [number]);


The function slowFunction simulates a heavy or slow calculation using a long loop.

Without useMemo, this function would run every time the component re-renders, even if only the theme (dark/light mode) changes.

By using useMemo, this function only re-runs when the number state changes.

This ensures the slow operation runs only when needed, improving performance.

2. 🎨 Memoizing Theme Styles
const themeStyles = useMemo(() => {
  return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
}, [dark]);


Objects in JavaScript are reference-based, meaning a new object is created on every render.

Even if the object’s content is identical, React treats it as a new object.

By using useMemo, the same object reference is reused unless the dark value changes.

This prevents unnecessary re-renders or re-executions of components or effects that depend on that object.

🚀 Why useMemo is Important

Without useMemo:

slowFunction runs on every render (causing lag).

A new style object is created each time (causing extra re-renders).

With useMemo:

The heavy computation runs only when necessary.

The same style object is reused for better efficiency.

The app remains faster and smoother.

🧩 Full Example
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    // Memorization 1
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    // Memorization 2
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App;

function slowFunction(numb) {
  console.log("running slow");
  for (let i = 0; i < 10000000; i++) {}
  return numb * 2;
}

🧾 Summary Table
Purpose	Code Example	Dependency	Benefit
Optimize heavy calculation	useMemo(() => slowFunction(number), [number])	number	Avoids re-running slow code unnecessarily
Prevent new object creation	useMemo(() => ({ backgroundColor, color }), [dark])	dark	Prevents extra re-renders and object recreation
💡 Key Takeaways

useMemo helps improve performance by memoizing values.

Only use it for expensive calculations or stable object references.

Overusing useMemo can make code harder to read — use it strategically.