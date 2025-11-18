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