import { authService } from "fbase";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const onLogout = () => {
    authService.signOut();
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
        </li>
        <button onClick={onLogout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navigation;
