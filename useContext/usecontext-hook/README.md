🌐 Understanding useContext in This Project

This project demonstrates how to use the useContext hook in React to share data between components without passing props manually through multiple levels (known as prop drilling).

🔍 What is useContext?

useContext is a React Hook that allows components to consume values provided by a Context created using createContext.

It helps manage global or shared state, such as themes, languages, authentication, or user preferences, across multiple components.

const MyContext = createContext();

const value = useContext(MyContext);

⚙️ How It’s Used in This Project

There are four main components in this example:

App → creates and provides the context

Container → acts as an intermediate wrapper

Users → a child of Container

User → consumes the context using useContext

🧩 Parent Component — App.js
import React, { createContext, useState } from "react";
import Container from "./Container";

// Create Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>App Component</h1>
      <Container />
    </ThemeContext.Provider>
  );
}

export default App;


✅ Explanation:

A context called ThemeContext is created using createContext().

The App component wraps all child components inside a ThemeContext.Provider.

The value prop of the provider holds data (theme) that will be shared across all nested components.

The theme can be toggled between light and dark modes.

🧩 Middle Components — Container.js and Users.js

These components don’t receive props — yet they still allow the context value to flow down to the child (User).

// Container.js
import React from "react";
import Users from "./Users";

function Container() {
  return (
    <div>
      <h1>Container</h1>
      <Users />
    </div>
  );
}

export default Container;

// Users.js
import React from "react";
import User from "./User";

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <User />
    </div>
  );
}

export default Users;

🧠 Consumer Component — User.js
import React, { useContext } from "react";
import { ThemeContext } from "./App";

function User() {
  // Access context value
  const { theme } = useContext(ThemeContext);

  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div>
      <h1 style={textStyle}>User Component</h1>
    </div>
  );
}

export default User;


✅ Explanation:

The useContext hook reads the value of ThemeContext.

Based on the current theme, background and text colors are applied.

No props were passed manually — yet the User component receives the theme data directly from the App.

🧩 Component Flow
App (provides context)
 └── Container
      └── Users
           └── User (consumes context)

🚀 Why Use useContext?
Problem Without useContext	Solution With useContext
Must pass props through every level manually	Components can access shared data directly
Code becomes repetitive and hard to maintain	Code stays cleaner and easier to manage
Prop drilling (too many intermediate props)	Centralized and reusable global context
Difficult to manage global state	Simple, consistent, and scalable
🧾 Summary Table
Hook	Purpose	Used In	Description
createContext	Creates a global context	App.js	Defines shared data container
useContext	Accesses context value	User.js	Reads values from provider
Provider	Supplies data to child components	App.js	Wraps components with shared value
💡 Key Takeaways

useContext allows you to share data globally without prop drilling.

Any component inside the provider tree can access the shared value directly.

Commonly used for themes, user data, language settings, authentication, and more.

Keep context small and focused — for large state management, consider combining it with useReducer or using external tools like Redux or Zustand.

✅ Summary

In this project:

App provides a ThemeContext with a theme value.

User consumes the theme to style its UI dynamically.

Intermediate components (Container, Users) don’t need to handle props, showing the power of React Context for clean, scalable data sharing.