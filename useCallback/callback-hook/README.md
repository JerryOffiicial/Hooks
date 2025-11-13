⚡ Understanding useCallback in This Project

This project demonstrates how to use the React useCallback hook to optimize performance and prevent unnecessary re-creations of functions during component re-renders.

🔍 What is useCallback?

useCallback is a React Hook that returns a memoized version of a function, which means the function reference remains the same between re-renders unless one of its dependencies changes.

const memoizedFunction = useCallback(() => {
  // your logic
}, [dependencies]);


It is especially useful when passing callback functions as props to child components that depend on React.memo or useEffect.
Without useCallback, a new function is created on every render, causing the child to re-render even if the logic hasn’t changed.

⚙️ How It’s Used in This Project

There are two components in this example:

App — the parent component

List — the child component receiving a function as a prop

🧩 Parent Component (App.js)
import React, { useCallback, useState } from "react";
import List from "./List";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]); // Only changes when 'number' changes

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;

🧩 Child Component (List.js)
import React, { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Items updated");
  }, [getItems]); // Runs only when the function reference changes

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default List;

🔁 What Happens Without useCallback

If useCallback was not used, then on every render:

A new getItems function would be created.

The child component (List) would detect that the prop (getItems) changed.

The useEffect inside List would run again unnecessarily.

The list would reset or re-render every time you toggle the theme — even though the list data didn’t change.

This causes unnecessary side effects and performance waste.

🧠 How useCallback Fixes This

By using:

const getItems = useCallback(() => {
  return [number + 1, number + 2, number + 3];
}, [number]);


The function reference stays the same between renders unless number changes.

The List component’s useEffect runs only when necessary.

Toggling the theme (dark state) won’t cause the List to re-render unnecessarily.

This results in better performance and cleaner render behavior.

🚀 Why Use useCallback
Problem Without useCallback	Solution With useCallback
Function recreated on every render	Function reused (same reference)
Unnecessary child component re-renders	Child re-renders only when needed
Inefficient useEffect triggers	useEffect triggers only on dependency change
Poor performance for large components	Optimized rendering flow
🧩 Full Example Overview
Hook	Purpose	Used In	Dependency
useCallback	Memoizes functions to avoid re-creation	App.js	[number]
useEffect	Responds to function change	List.js	[getItems]
💡 Key Takeaways

useCallback is mainly used to optimize function references passed to child components.

It pairs well with React.memo and useEffect to avoid unwanted re-renders.

Use it when:

You pass functions as props.

The function is stable unless dependencies change.

Don’t overuse it — use it only when performance issues are noticeable.

✅ Summary

useCallback helps React remember functions across renders — ensuring components only update when necessary.
In this project, it prevents the List component from re-rendering every time the theme toggles, keeping the app fast and efficient.