import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo-brainflix.svg";
import mohanMuruge from "../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <Link exact to="/">
        <img src={logo} alt="BrainFlix Logo" className="header__logo" />
      </Link>
      <input
        type="search"
        className="header__search-bar"
        placeholder="Search"
      ></input>
      <div className="header__button-img-container">
        <Link exact to="/upload">
          <input
            type="button"
            value="      UPLOAD"
            className="header__submit-btn"
          ></input>
        </Link>
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
