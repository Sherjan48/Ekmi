import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/Ekmi.jpg";
import { Link } from "react-router-dom";
import Language from "../Language";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-side">
          {burgerOpen && (
            <button className="close-btn" onClick={() => setBurgerOpen(false)}>
              &times;
            </button>
          )}

          <ul className={`menu ${burgerOpen ? "menu-mobile-open" : ""}`}>
            {burgerOpen ? (
              <div className="bmenu">
                <li className="burg">
                  <Link
                    to="divany"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Диваны
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="kresla"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Кресла
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="stulya"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Стулья
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="krovati"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Кровати
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="matrasy"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Матрасы
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="pufty"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Пуфы
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="eks"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Эксклюзивная мебель
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="modeli"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    2D-3D модели
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="/"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    О компании
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="ind"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Индивидуальная мебель
                  </Link>
                </li>
                <li className="burg">
                  <Link
                    to="show"
                    className="bur"
                    onClick={() => setBurgerOpen(false)}
                  >
                    Контакты
                  </Link>
                </li>
              </div>
            ) : (
              <>
                <li
                  className="dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  КАТАЛОГ
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="divany" id="ool">
                          Диваны
                        </Link>
                      </li>
                      <li>
                        <Link to="kresla" id="ool">
                          Кресла
                        </Link>
                      </li>
                      <li>
                        <Link to="stulya" id="ool">
                          Стулья
                        </Link>
                      </li>
                      <li>
                        <Link to="krovati" id="ool">
                          Кровати
                        </Link>
                      </li>
                      <li>
                        <Link to="matrasy" id="ool">
                          Матрасы
                        </Link>
                      </li>
                      <li>
                        <Link to="pufty" id="ool">
                          Пуфы
                        </Link>
                      </li>
                      <li>
                        <Link to="eks" id="ool">
                          Эксклюзивная мебель
                        </Link>
                      </li>
                      <li>
                        <Link to="modeli" id="ool">
                          2D-3D модели
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="ind" id="ool">
                    ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ
                  </Link>
                </li>
                <li>
                  <Link to="show" id="ool">
                    КОНТАКТЫ
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="right-side">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
          <Link to="/" className="da">
            О компании
          </Link>

          <span className="phone">+38 (099)-638-45-37</span>
          <Language />

          <div
            className={`burger ${burgerOpen ? "open" : ""}`}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
