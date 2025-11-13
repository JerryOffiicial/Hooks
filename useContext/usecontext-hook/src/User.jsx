import React, { useContext } from 'react'
import { ThemeContext } from './App';


function User() {

    const {theme} = useContext(ThemeContext);//destructured to theme from contextValue  

    //console.log("contextValue", contextValue)

    const textStyle = {
        backgroundColor: theme==="light"? "white":"black",
        color: theme==="light"?"black":"white",
    };

  return (
    <div>
        <h1 style={textStyle}>User</h1> 
    </div>
  )
}

export default User