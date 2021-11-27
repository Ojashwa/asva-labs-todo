import React from "react";
import { login } from "../utils";
import "../App.css";

const SignIn = (props) => {
  const handleLogin = () => {
    login();
    props.history.push("/dashboard");
  };

  return (
    <div className="wrapper">
      <h1 className="text">Sign in</h1>
      <button className="button" onClick={() => handleLogin()}>
        Click here to log in
      </button>
    </div>
  );
};

export default SignIn;
