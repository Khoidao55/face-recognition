import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return ( <
    div className = "logo" >
    <
    Tilt className = "Tilt"
    options = {
      {
        max: 55
      }
    }
    style = {
      {
        height: 150,
        width: 150
      }
    } >
    <
    div className = "Tilt-inner" >
    <
    img style = {
      {
        paddingTop: "5px",
        width: "100px",
        height: "100px",
        padding: "30px",
      }
    }
    alt = "logo"
    src = {
      brain
    }
    /> <
    /div> <
    /Tilt> <
    /div>
  );
};

export default Logo;