import React, { useMemo } from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    // Memorization 1
    return slowFunction(number);
  }, [number]);

  // const themeStyles ={
  //   backgroundColor: dark? "black":"white",
  //   color: dark? "white":"black",
  // }

  const themeStyles = useMemo(() => {
    //Memorization 2
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
  for (let i = 0; i < 10000000; i++) {
    /* empty */
  }
  return numb * 2;
}
