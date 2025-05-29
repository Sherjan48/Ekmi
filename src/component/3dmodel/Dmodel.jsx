import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { mebel2 } from '../Mebel2';
import './dmodel.css'
import ffon from '../../assets/ffon.jpg'

function Dmodel() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
    
      const filteredMebeli = mebel2.filter(mebel =>
        mebel.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div>
            <div className='poisk'>
              <div
                className="vse-modeli"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <p>Все 2D-3D модели <SlArrowDown /></p>
                {menuOpen && (
                  <ul className="vse-modeli-menu">
                    <li>Все 2D-3D модели <SlArrowUp /></li>
                    <li>Диваны</li>
                    <li>Кресла</li>
                    <li>Стулья</li>
                    <li>Кровати</li>
                    <li>Матрацы</li>
                    <li>Пуфы</li>
                    <li>Эксклюзивная мебель</li>
                  </ul>
                )}
              </div>
      
              <div className="search">
                <div className="input-wrapper">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>


           <div className="grid-container">
      {filteredMebeli.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>





      
        {/* <div className="pagination">
          <span className="page active">1</span>
          <span className="page">2</span>
          <span className="page">3</span>
          <span className="page">4</span>
          <span className="page">{'>'}</span> 
        </div>


        <div className="button-wr">
          <button className="see-all-btn">СМОТРЕТЬ ВСЕ</button>
        </div> */}


                <div className="form-section">
        <div className="form-image-block">
          <img src={ffon} className="form-image" />
        </div>
        <div className="form-circle">O</div>
        <div className="form-content">
          <div className="form-header">
            <div>
              <p className="form-subtitle">Заполните форму</p>
              <h2 className="form-title">ОСТАЛИСЬ ВОПРОСЫ?</h2>
            </div>
          </div>
          <form className="form-fields">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваш номер телефона" />
            <input type="text" placeholder="Страна" />
            <textarea placeholder="Комментарий" />
            <button type="submit" className="form-button">ЗАПРОСИТЬ ЗВОНОК</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dmodel

