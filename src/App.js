import React, { useState } from "react";
import "./App.css";

import Input from "./Input";

import login from "./Login";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowSignup, setShouldShowSignup] = useState(true);

  const onHandleEmailChange = (val) => {
    setEmail(val);
  };

  const onHandlePasswordChange = (val) => {
    setPassword(val);
  };

  const onHandleNameChange = (val) => {
    setName(val);
  };

  const handleOnClick = () => {
    setShouldShowSignup(!shouldShowSignup);
  };

  const onSubmitClick = async () => {
    setError(null);
    try {
      await login({ email, password });
      await alert("Login Successful");
    } catch (error) {
      setError(error);
      alert(error);
    }
    setIsLoading(false);
    setEmail("");
    setName("");
    setPassword("");
  };

  const isButtonDisabled = !email || password.length < 6 || isLoading;

  return (
    <div className="App">
      <div className="form-wrap">
        {shouldShowSignup && (
          <div>
            <h1>Sign up!</h1>
            <div>
              <Input
                type="text"
                value={name}
                onChange={(e) => onHandleNameChange(e.target.value)}
                id="name"
                label="Enter name: "
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => onHandleEmailChange(e.target.value)}
                label="Enter email: "
                id="email"
              />
              <Input
                type="password"
                value={password}
                id="pw"
                label="Enter password: "
                onChange={(e) => onHandlePasswordChange(e.target.value)}
              />
            </div>
            <div>
              <button
                disabled={isButtonDisabled}
                type="submit"
                onClick={onSubmitClick}
              >
                Submit
              </button>
            </div>
            <div>
              <h4>Already have an account?</h4>
              <button type="button" onClick={handleOnClick}>
                Sign in
              </button>
            </div>
          </div>
        )}
        <div>
          {!shouldShowSignup && (
            <div>
              <h1>Sign in!</h1>
              <Input
                type="email"
                value={email}
                onChange={(e) => onHandleEmailChange(e.target.value)}
                label="Enter email: "
                id="name-2"
              />
              <Input
                type="password"
                value={password}
                id="pw-2"
                label="Enter password: "
                onChange={(e) => onHandlePasswordChange(e.target.value)}
              />
              <div>
                <h4>Don't have an account?</h4>
                <button type="button" onClick={handleOnClick}>
                  {shouldShowSignup ? "Sign in" : "Sign up"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
