import React, { useState } from 'react';
import './model.css';
import ffon from '../../assets/ffon.jpg'
import { data } from '../Data';
import { FaSearch } from 'react-icons/fa';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { mebeli as allMebeli } from '../Mebel';
import { Link } from 'react-router-dom';


function Model() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMebeli = allMebeli.filter(mebel =>
    mebel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };
  return (
    <div className="category-menu">
      {data.map((item, index) => (
        <Link to={item.Route} key={index} className="category-item">
          <img src={item.img} alt={item.name} className="category-image" />
            <p className='category-title'>{item.name}</p>
        </Link>
        ))}


      <div className='poisk'>
        <div
          className="vse-modeli"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <p>Все 2D-3D модели <SlArrowDown /></p>
          {menuOpen && (
            <ul className="vse-modeli-menu">
              {/* <li> <Link to='/2d-3d'> Все 2D-3D модели </Link>  <SlArrowUp /></li> */}
              <li><Link to='/divany' className='div1'> Диваны</Link></li>
              <li><Link to='kresla'className='div1' >Кресла</Link></li>
              <li>Стулья</li>
              {/* <li>Кровати</li>
              <li>Матрацы</li>
              <li>Пуфы</li>
              <li>Эксклюзивная мебель</li> */}
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


      <div className="mebel2">
        <div className="grid">
          {filteredMebeli.map((mebel, index) => (
            <div key={index} className="cardd">
              <img src={mebel.image} className="image" alt={mebel.name} />
              <p className="name">{mebel.name}</p>
            </div>
          ))}
        </div>


        <div className="pagination">
          <span className="page active">1</span>
          <span className="page">2</span>
          <span className="page">3</span>
          <span className="page">4</span>
          <span className="page">{'>'}</span>
        </div>


        <div className="button-wrapper">
          <Link to='/Dmodel' className="see-all-btn">СМОТРЕТЬ ВСЕ</Link>
        </div>
      </div>


          {/* <div className="form-section">
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
    <form className="form-fields" onSubmit={handleSubmit}>
      <input type="text" placeholder="Ваше имя" required/>
      <input type="text" placeholder="Ваш номер телефона" required/>
      <input type="text" placeholder="Страна" required />
      <textarea placeholder="Комментарий" />
      <button type="submit" className="form-button">ЗАПРОСИТЬ ЗВОНОК</button>
      {isSubmitted && <p className="success-message">Заявка отправлена!</p>}
    </form>
  </div>
</div> */}


    </div>
  );
}

export default Model;
