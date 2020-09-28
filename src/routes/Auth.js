import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [error, setError] = useState("");
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
      <AuthForm error={error} setError={setError} />
      {error}
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
