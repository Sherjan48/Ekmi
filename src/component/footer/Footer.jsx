import React from "react";
import "./footer.css";
import ek from "../../assets/ekmi.jpg";
// import log from "../../assets/logo-w-1 2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <img src={ek} className="ek" />
      <div className="container">
        <div className="box">
          {/* <img src={log} /> */}
          <div className="katalog">
            <a href="">Каталог</a>
            <a href="">О Компании</a>
            <a href="">Индивидуальная мебель</a>
            <a href="">Партнерам Дизайнерам</a>
            <a href="">2D,3D Модели</a>
            <a href="">Шоу-Румы</a>
            <a href="">Дилерам</a>
            <a href="">Контакты</a>
            <a href="">Конфигуратор</a>
          </div>
          <div className="soc">
            <a><FaInstagram/></a>
            <a className="icon"><FaFacebook/></a>
            <p>+38 (099)-638-45-37</p>
            <button className="btn">ПЕРСОНАЛЬНАЯ КОНСУЛЬТАЦИЯ</button>
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
