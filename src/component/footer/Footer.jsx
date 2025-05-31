import React from "react";
import "./footer.css";
import ek from "../../assets/ekmi.png";
import log from "../../assets/logo-w-1 2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <img src={ek} className="ek" />
      <div className="container">
        <div className="box">
          <img src={log} />
          <div className="katalog">
            <Link to="/2d-3d">Каталог</Link>
            <Link to="/">О Компании</Link>
            <Link to="ind">Индивидуальная мебель</Link>
            <Link to="modeli">2D,3D Модели</Link>
            <Link to="show">Шоу-Румы</Link>
            <Link to="show">Контакты</Link>
          </div>
          <div className="soc">
            <a href="https://www.instagram.com/ekmi.com.ua/"><FaInstagram/></a>
            <a href="https://www.facebook.com/ekmimebel.mos/" className="icon" ><FaFacebook/></a>
            <p>+38 (099)-638-45-37</p>
            <Link to='/voprosy'>
            <button className="btn">ПЕРСОНАЛЬНАЯ КОНСУЛЬТАЦИЯ</button></Link>
          </div>
        </div>
        <div className="text">
            <p>© 1993–2025 Интернет-магазин «EKMI™» — мебели</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
