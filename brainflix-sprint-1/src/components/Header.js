import React from "react";
import logo from "../assets/logo/Logo-brainflix.png";
import mohanMuruge from "../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="BrainFlix Logo" />
      <input type="search"></input>
      <div>
        <input type="button" value="+ UPLOAD"></input>
        <img src={mohanMuruge} alt="" />
      </div>
    </header>
  );
};

export default Header;
