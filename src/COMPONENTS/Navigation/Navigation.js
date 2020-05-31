import React from "react";
import "./Navigation.css";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p onClick={() => onRouteChange("signin")} className="SignOutButton">
          {" "}
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p onClick={() => onRouteChange("signin")} className="SignOutButton">
          {" "}
          Sign in
        </p>
        <p onClick={() => onRouteChange("register")} className="SignOutButton">
          {" "}
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
