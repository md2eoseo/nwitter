import { authService, firebaseInstance } from "fbase";
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
  const onSocialLogin = (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    authService.signInWithPopup(provider).catch((error) => {
      if (error.code === "auth/account-exists-with-different-credential") {
        setError(
          "The account already exists with same email. Try another login method."
        );
      }
    });
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
        <button onClick={onSocialLogin} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialLogin} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
