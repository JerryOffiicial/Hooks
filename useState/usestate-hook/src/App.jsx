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