import React, { createContext } from 'react'
import Container from './Container'
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=>{
    setTheme((curr)=>(curr ==="light" ? "dark": "light"));
  }; 

  return (
    <ThemeContext.Provider value={{
      theme, //theme:theme,
      }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>App Comp</h1>
      <Container/>
    </ThemeContext.Provider>
  )
}

export default App