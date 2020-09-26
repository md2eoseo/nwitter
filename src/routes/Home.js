import { authService } from "fbase";
import React from "react";

const Home = () => {
  const onLogout = () => {
    authService.signOut();
  };
  return (
    <>
      <span>Home</span>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};
export default Home;
