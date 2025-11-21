🔐 Protected Routes with React Router DOM + Redux (Full Explanation)

Protected Routes (also called Private Routes) are routes that are only accessible when the user is logged in.
If the user is not logged in, they are redirected to the login page.

In your project:

Redux stores the logged-in user

PrivateRoute checks if the user exists

If user is null → redirect to /login

If user exists → show the protected page (Settings)

Below is a full breakdown.

🏛️ 1. Redux Setup (Authentication State)

You use a simple Redux slice to store the authenticated user.

✔ userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

What this slice does:
Action	Purpose
setUser()	Logs the user in (stores user data)
removeUser()	Logs the user out (clears user data)
state.user	Holds the authenticated user (null if logged out)
🏢 2. Configuring Redux Store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default store;


Redux state now looks like:

state.userInfo.user

🚦 3. Setting Up PrivateRoute (The Key Part)
✔ PrivateRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const user = useSelector((state) => state.userInfo.user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateRoute;

🔍 How this works:

useSelector() checks if a user is logged in.

If user = null → Redirect to /login

If user exists → Allow access

<Outlet /> renders whatever protected component you put inside this route.

🗺️ 4. Setting Up Routes in App.jsx
✔ You wrap protected routes like this:
<Route element={<PrivateRoute />}>
  <Route path="/settings" element={<Settings />} />
</Route>


Full App.jsx:

import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import { Provider } from "react-redux";
import store from "./App/store";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

What the protected route means:
Only logged-in users can open /settings
Anyone else gets redirected to /login

🔑 5. Login Page — Setting the User in Redux
✔ Login.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    dispatch(
      setUser({
        name: "Anton",
        email: "anton@gmail.com",
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

Key Points:

✔ When login button is clicked, Redux stores user data
✔ User is considered "authenticated"
✔ navigate("/") sends user to home page
✔ Now the user can open /settings

🚪 6. Navbar with Logout
✔ Navbar.jsx
import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Slices/userSlice";

function Navbar() {
  const user = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <nav>
      <h1>React</h1>
      <ul>
        {!user && (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
        {user && (
          <>
            <Link to="/settings">
              <li>Settings</li>
            </Link>
            <li onClick={logout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

How this works:

If user is NOT logged in → show Login button

If user IS logged in → show Settings + Logout

Logout clears Redux → user is logged out

Protected pages become locked again

🎯 Final Flow Summary
1. Login → setUser() → user stored in Redux
2. ProtectedRoute checks if state.user exists
3. If yes → allow access
4. If no → redirect to /login
5. Logout → removeUser() → clear authentication
