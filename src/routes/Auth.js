import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm error={error} setError={setError} />
      {error && <span className="authError">{error}</span>}
      <div className="authBtns">
        <button onClick={onSocialLogin} name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={onSocialLogin} name="github" className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
export default Auth;
