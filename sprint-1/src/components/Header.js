import React from "react";
import logo from "../assets/logo/Logo-brainflix.png";
import mohanMuruge from "../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="BrainFlix Logo" className="header__logo" />
      <input
        type="search"
        className="header__search-bar"
        placeholder="Search..."
      ></input>
      <div className="">
        <input
          type="button"
          value="+ UPLOAD"
          className="header__submit-btn"
        ></input>
        <img
          src={mohanMuruge}
          alt="current user"
          className="header__user-img"
        />
      </div>
    </header>
  );
};

export default Header;
