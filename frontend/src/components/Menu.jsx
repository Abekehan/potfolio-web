import { useState, useEffect, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Menu = ({ setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (typeof setIsMenuOpen === "function") {
      setIsMenuOpen(next);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      if (typeof setIsMenuOpen === "function") {
        setIsMenuOpen(false);
      }
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
    return () => {
      if (typeof setIsMenuOpen === "function") {
        setIsMenuOpen(false);
      }
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <button className="mav-button" onClick={toggleMenu}>
        <FiAlignJustify size="20" color="black" />
      </button>

      <div ref={menuRef} className={`menu-popup ${isOpen ? "open" : ""}`}>
        <button className="menu-header-block" onClick={toggleMenu}>
          <div className="menu-header">
            <span>Menu</span>
            <FiAlignJustify size="20" color="black" />
          </div>
        </button>

        <div className="menu-dropdown-wrapper">
          <ul className="menu-dropdown-list">
            <li onClick={() => {
              toggleMenu();
              navigate("/inwork");
            }}>News</li>

            <li onClick={() => {
              toggleMenu();
              navigate("/contact");
            }}>About</li>

            <li onClick={() => {
              toggleMenu();
              navigate("/projects");
            }}>Projects</li>

            <li onClick={() => {
              toggleMenu();
              navigate("/inwork");
            }}>Expertise</li>

            <li onClick={() => {
              toggleMenu();
              navigate("/inwork");
            }}>Team</li>
            
            <li onClick={() => {
              toggleMenu();
              navigate("/inwork");
            }}>Careers</li>

            <li onClick={() => {
              toggleMenu();
              navigate("/contact");
            }}>Contact</li>
          </ul>
          <div className="menu-footer">DE</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;


// useRef — это хук, который позволяет получить ссылку (указатель) на DOM-элемент или хранить значение между рендерами, не вызывая повторную 
// отрисовку компонента. useRef даёт тебе "указатель" на меню → при любом клике ты сравниваешь: был ли кликнут элемент внутри этого меню →
// если нет, закрываешь.

