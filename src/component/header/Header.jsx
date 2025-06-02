import React, { useState } from "react";
import "./header.css";
import logo from '../../assets/Ekmi.jpg'
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("RU");

  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li
            className="dropdown"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            КАТАЛОГ
            {menuOpen && (
              <ul className="dropdown-menu">
                <li> <Link id="ool" to="divany">Диваны</Link> </li>
                <li> <Link id="ool" to="kresla">Кресла</Link></li>
                <li> <Link to="stulya" id="ool" >Стулья</Link> </li>
                {/* <li> <Link to="krovati" id="ool" >Кровати</Link> </li>
                <li> <Link to="matrasy" id="ool" >Матрасы</Link> </li>
                <li> <Link to="pufty" id="ool" >Пуфы</Link> </li>
                <li><Link to="eks" id="ool" >Эксклюзивная мебель</Link></li> */}
                <li><Link to="modeli" id="ool" >2D-3D модели</Link></li>

              </ul>
            )}
          </li>
          <Link to="/" id="ool" className="about-link">О КОМПАНИИ</Link>
          <Link to="ind" id="ool">ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ</Link>
                  


              
        </ul>

        <div className="right-side">
          <img src={logo} alt="Logo" className="logo" />
          <Link id="ool" to="show"> КОНТАКТЫ </Link> 
          <span className="phone">+38 (099)-638-45-37</span>
          <select
            className="lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="RU">RU</option>
            <option value="UA">UA</option>
            <option value="EN">EN</option>
          </select>

            <div className="language">
              
            </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;