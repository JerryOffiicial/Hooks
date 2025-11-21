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
