import React, { useState } from "react";
import { authService } from "fbase";

const AuthForm = ({ error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (newAccount) {
      await authService
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          setError(error.message);
        });
    } else {
      await authService
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  const toggleAuth = () => {
    setNewAccount(!newAccount);
    setError("");
  };
  return (
    <form className="container" onSubmit={onSubmit}>
      <input
        className="authInput"
        name="email"
        type="text"
        placeholder="Email"
        required
        value={email}
        onChange={onChange}
      />
      <input
        className="authInput"
        name="password"
        type="password"
        placeholder="Pasword"
        required
        value={password}
        onChange={onChange}
      />
      <input
        className="authInput authSubmit"
        type="submit"
        value={newAccount ? "Sign up" : "Login"}
      />
      <span className="authSwitch" onClick={toggleAuth}>
        {newAccount ? "I have a account" : "I don't have a account"}
      </span>
    </form>
  );
};

export default AuthForm;
