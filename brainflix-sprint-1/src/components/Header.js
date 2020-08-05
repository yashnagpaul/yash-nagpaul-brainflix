import React from "react";
import logo from "../assets/logo/Logo-brainflix.png";
import mohanMuruge from "../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="">
      <img src={logo} alt="BrainFlix Logo" />
      <input type="search" className=""></input>
      <div className="">
        <input type="button" value="+ UPLOAD" className=""></input>
        <img src={mohanMuruge} alt="image of the current user" className="" />
      </div>
    </header>
  );
};

export default Header;
