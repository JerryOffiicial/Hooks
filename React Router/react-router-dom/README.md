🚦 React Router DOM — Full Detailed Explanation

React Router DOM allows you to create multi-page navigation inside a single-page React application.
It provides components like:

BrowserRouter

Routes

Route

Link

useParams

Your project demonstrates:

Basic routing

Dynamic routing (/user/:username)

Error / 404 handling

Navigation bar

Nested pages

📌 1. Setting Up the Router

Your main router setup:

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Users from "./Pages/Users"
import Navbar from "./Components/Navbar"
import User from "./Pages/User"
import Error from "./Pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:username" element={<User/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App

🧩 2. What Each Part Does
➤ <BrowserRouter>

This wraps your entire app and enables routing functionality.

➤ <Routes>

A wrapper that contains all your routes.

➤ <Route>

Defines a single route.

Example:

<Route path="/about" element={<About/>}/>


This means:

When user visits /about

Load the <About /> component

📑 3. Static Routes

Examples:

Path	Component
/	Home
/about	About
/contact	Contact
/users	Users

These load a simple page component.

🧭 4. Navigation Bar (Link)

Your navbar:

import{ Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between m-3 py-3 px-8 bg-blue-300 rounded-xl font-semibold '>
      <h1>Jerry</h1>
      <ul>
        <Link className="hover:underline px-3" to="/">Home</Link>
        <Link className="hover:underline px-3" to="/users">Users</Link>
        <Link className="hover:underline px-3" to="/About">About</Link>
        <Link className="hover:underline px-3" to="/Contact">Contact</Link>
      </ul>
    </nav>
  )
}

📝 Important:

Link prevents page reload

Keeps navigation smooth

Works inside BrowserRouter

👤 5. Dynamic Routing — /user/:username
<Route path="/user/:username" element={<User/>}/>


This matches URLs like:

/user/john

/user/jerry

/user/raj

Reading the dynamic value
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}


If user visits /user/jerry, then:

username = "jerry"


Dynamic routing helps when:

Viewing user profiles

Product pages

Blog article pages

❌ 6. 404 Route / Fallback Page
<Route path="*" element={<Error/>}/>


The * wildcard:

Matches any undefined route

Shows your 404 page

Your error page:

function Error() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>Please Check your route</p>
    </div>
  )
}


This ensures users see a friendly message instead of a blank screen.

🗂️ 7. Page Components

Each page like Home, About, Contact is simple:

function Home() {
  return <h1>Home</h1>;
}


React Router renders these components based on the URL.

🎯 React Router DOM Summary
Concept	Description
BrowserRouter	Enables routing in your React app
Routes	Contains all the route definitions
Route	Maps URL → Component
Link	Navigation without reload
useParams()	Reads dynamic URL values
* route	Error / fallback page