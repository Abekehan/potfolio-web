import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Nav.css";
import PortfolioTitle from "./PortfolioTitle";
import { FiSearch } from "react-icons/fi";
import Menu from "./Menu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="nav-flex">
        {/* Левая часть — Home */}
        <Link to="/">
          <button className="nav-text">Home</button>
        </Link>

        <div className="nav-right-group">
          {/* Центр — About и Search, сдвигается при открытии меню */}
          <div className={`nav-buttons ${isMenuOpen ? "shift-left" : ""}`}>
            <Link to="/contact" className="nav-text">
              About
            </Link>
            <button className="nav-button">
              <FiSearch size="20" color="black" />
            </button>
            <button
              className="nav-button"
              onClick={() => navigate("/auth")}
              title="Мой аккаунт"
            >
              👤
            </button>
          </div>

          {/* Правая часть — Menu (НЕ должна сдвигаться) */}
          <Menu setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>

      {/* <PortfolioTitle /> */}
    </div>
  );
};

export default Nav;
