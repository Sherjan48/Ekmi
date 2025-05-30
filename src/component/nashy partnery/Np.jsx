import React from 'react'
import './Np.css'

function Np() {
  return (
    <div>
      <h2 class="partners-title">
              <span>Н</span>аши партнёры
            </h2>
      
            <section class="partners-section">
              <div class="partners-text-content">
                <p class="partners-description">
                  Компании сотрудничают с нами по всему миру
                </p>
                <p class="partners-descriptions">
                  На данный момент дилерская сетьфабрики «Эком-Мебель» насчитывает
                  более 30 салонов по всей Украине. Сейчас мы заинтересованы в
                  расширении сети и предлагаем выгодные условия для сотрудничества.
                </p>
                <p class="partners-descriptionss">
                  Основным преимуществом фабрики является изготовление любого
                  индивидуального изделия, мягкой мебели и аксессуаров из наших
                  основных коллекций. Также присутствует линейка оригинальных
                  интерьерных корпусных изделий.
                </p>
              </div>
              <div class="partners-image-box">
                <div class="partners-image-frame">
                  <img src={arni} alt="Мебель Эком" class="partners-image" />
                </div>
              </div>
            </section>
    </div>
  )
}

export default Np
