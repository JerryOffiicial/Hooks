⚛️ Understanding useLayoutEffect in React (Full Detailed Explanation)

useLayoutEffect is very similar to useEffect, but it runs earlier in the render cycle, before the browser paints the screen.

This makes it useful for:

Reading layout (width, height, position)

Preventing visual flicker

Synchronously applying DOM changes before the user sees anything

✅ Your Code
import React, { useLayoutEffect, useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  useLayoutEffect(()=>{
    console.log("count",count)
  },[count]);

  console.log("rendered")
  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={()=>setCount((curr)=>curr+1)}>Add</button>
    </div>
  )
}

export default App

🧠 How This Works — Step by Step

Every time you click Add, this happens:

setCount() triggers re-render

Component prints → "rendered"

Before browser paints the updated UI, React runs:

useLayoutEffect(() => console.log("count", count), [count])


After useLayoutEffect completes, the browser updates the screen

User sees the final UI

🔍 What You Will See in Console

Example after clicking "Add":

rendered
count 1   ← from useLayoutEffect


This proves:

console.log("rendered") runs first

useLayoutEffect runs before the screen updates

🔥 useEffect vs useLayoutEffect (Clear Difference)
Feature	useEffect	useLayoutEffect
Runs timing	After the screen is painted	Before the screen is painted
Blocks browser paint?	❌ No	✅ Yes
Used for	API calls, timers, subscriptions	Layout reads/writes, preventing flicker
Slower or faster?	Faster (non-blocking)	Slightly slower (blocking)
Can user see flicker?	Sometimes yes	No flicker (UI updated before paint)
🎯 When to Use Which?
✔ Use useEffect for:

Fetching data

Logging

Event listeners

Updating document title

Anything that does not affect layout

This is the default hook you should use.

✔ Use useLayoutEffect only when needed:

Measure element height/width before display

Adjust scroll position

Fix UI flicker

Animation calculations

Synchronous updates required before paint

Example:

const height = divRef.current.getBoundingClientRect().height;


This must be done in useLayoutEffect to get accurate measurements.

🧪 Simple Summary

useEffect runs after paint → async

useLayoutEffect runs before paint → sync

Use useLayoutEffect only for layout-sensitive operations

For everything else → using useEffect is better and faster