import React, { useState } from 'react'
import './voprosy.css'
import ffon from '../../assets/ffon.jpg'

function Voprosy() {
    const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className='voprosy'>
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
                <form className="form-fields" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваше имя" required />
                <input type="text" placeholder="Ваш номер телефона" required />
                  <input type="text" placeholder="Страна" required/>
                  <input placeholder="Комментарий" />
                  <button type="submit" className="form-button">ЗАПРОСИТЬ ЗВОНОК</button>
                  {isSubmitted && <p className="success-message">Заявка отправлена!</p>}
                </form>
              </div>
            </div>
    </div>
  )
}

export default Voprosy

