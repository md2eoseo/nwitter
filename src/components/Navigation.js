import { authService } from "fbase";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ userObj }) => {
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
            {userObj.displayName}'s profile
          </NavLink>
        </li>
        <button onClick={onLogout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navigation;
