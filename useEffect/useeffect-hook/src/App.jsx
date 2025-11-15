import React, { useEffect, useState } from 'react'

function App() {

const [count, setCount] = useState(0);
const [text, setText] = useState("");


//useEffect without dependencies
useEffect(()=>{
  console.log("useEffect (NO dependency) - runs on every render")
});

//useEffect with empty dependency array
useEffect(()=>{
  console.log("useEffect ([] dependency) - runs only once on mount")
},[]);

//useEffect with dependency 
useEffect(()=>{
  console.log("useEffect ([count] dependency) - count changed: ", count)
},[count]);

  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      width: "50%",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <h1>useEffect Demo</h1>

      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <br /><br />

      <input type="text"
      placeholder='Type something....'
      value={text}
      onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default App