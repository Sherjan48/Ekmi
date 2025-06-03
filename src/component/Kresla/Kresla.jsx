import React , { useState } from 'react'
import { data } from '../Data';
import { FaSearch } from 'react-icons/fa';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
// import { mebeli as allMebeli } from '../Mebel';
import { Link } from 'react-router-dom';
// import { divany } from '../Divany1';
import { kresla } from '../Kresla';

function Kresla() {
   const [menuOpen, setMenuOpen] = useState(false);
          const [searchTerm, setSearchTerm] = useState('');
  
          const filteredMebeli = kresla.filter(mebel =>
          mebel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
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
                      <p>Кресла <SlArrowDown /></p>
                      {menuOpen && (
                        <ul className="vse-modeli-menu">
                            {/* <li> <Link to='/2d-3d'> Все 2D-3D модели </Link>  <SlArrowUp /></li> */}
                            <li><Link to='/modeli' className='div1'> Все 2D-3D модели </Link></li>
                            <li> <Link id="ool" to="/divani">Диваны</Link> </li>
                            <li><Link to='/stulya' className='div1'>Стулья </Link> </li>
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
                      {filteredMebeli.map((kresla, index) => (
                        <div key={index} className="cardd">
                          <img src={kresla.image} className="image" alt={kresla.name} />
                          <p className="name">{kresla.name}</p>
                        </div>
                      ))}
                    </div>
        </div>
        </div>
    </div>
  )
}

export default Kresla
