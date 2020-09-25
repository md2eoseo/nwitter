import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
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
    let data;
    if (newAccount) {
      data = await authService
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          setError(error.message);
        });
    } else {
      data = await authService
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Pasword"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Sign up" : "Login"} />
      </form>
      {error}
      <button
        onClick={() => {
          setNewAccount(!newAccount);
          setError("");
        }}
      >
        {newAccount ? "I have a account" : "I don't have a account"}
      </button>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
