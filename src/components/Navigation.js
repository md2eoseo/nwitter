import { authService } from "fbase";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {
  const onLogout = () => {
    authService.signOut();
  };
  return (
    <nav>
      <ul className="navigator">
        <li>
          <NavLink className="nav_home" exact to="/">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_profile" exact to="/profile">
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <span className="nav_profile_span">
              {userObj ? `${userObj.displayName}` : "Profile"}
            </span>
          </NavLink>
        </li>
        <li>
          <span className="formBtn cancelBtn logOut" onClick={onLogout}>
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
