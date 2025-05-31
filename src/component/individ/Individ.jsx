import React, { useRef } from 'react'
import './individ.css'
import ss from '../../assets/ss.jpg'
import gg from '../../assets/gg.jpg'
import hh from '../../assets/hh.jpg'
import arni from '../../assets/Arni2.jpg'
import vogue from '../../assets/vogue.jpg'
import apple from '../../assets/apple.jpg'
import zara from '../../assets/zara.jpg'
import samsung from '../../assets/samsung.jpg'
import ff from '../../assets/ff.jpg'
import tt from '../../assets/tt.jpg'
import { Link } from "react-router-dom";
import { data1 } from '../../data'
import left from "../../assets/left.jpg";
import right from "../../assets/right.jpg";

function Individ() {
  const scrollRef = useRef(null);

    const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector('.item').offsetWidth + 20; 
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className='qweqwe'>
      <div class="xkq34">
    <div class="vnb32">
      <h2>П <span>олный цикл производства</span></h2>
      <p>Качество мягкой мебели начинается задолго до начала её производства.</p>
      <Link to="show" href="#" class="btnf9">Связаться с менеджером</Link>
    </div>
    <div class="asf67">
      <div class="imgbox92">
        <img  src={ ss } alt="" />
        <div class="tag74">furniture</div>
      </div>
    </div>
    </div>




      <div class="a4g1wr">
    <div class="p02mdf">
      <img src={ gg } alt="" />
    </div>
    <div class="r9vs11">
      <div class="a1z9t2">brand</div>
      <div class="d84kln">
        <h2>Наработки длиной в 25 лет</h2>
        <p>Очень важным фактором является системность, упорядоченность и чёткое регламентирование сроков при производстве.</p>
        <p>В компании «Экми-Мебель» это достигается за счёт применения современных компьютерных программных систем автоматизации производственной деятельности, разработанных специально под технологическую цепочку.</p>
        <p>От приёма каждого, по своему индивидуального, заказа до отгрузки готовой продукции потребителю.</p>
      </div>
    </div>
  </div>




  <div class="f2h0yz">
    <div class="b9u3ap">
      <div class="j6x8vn">
        <h2>Почему индивидуальная мебель, является ключевым преимуществом компании?</h2>
        <p>Многолетний опыт специалистов цеха разработки позволяет компании «Экми-Мебель» воплотить любую фантазию заказчика, касающуюся мягкой мебели — естественно, по индивидуальному заказу.</p>
      </div>
    </div>
    <div class="g5r1le">
      <img src={ hh } alt="" />
    </div>
  </div>


    <h2 class="partners-title"><span>Н</span>овинки</h2>

  <div className="stran-slider">
          <button onClick={() => scroll("left")} className="scroll-btn left">
            <img src={left}  />
          </button>
  
          <div className="imgh" ref={scrollRef}>
            {data1.map((el, index) => (
              <div className="item" key={index}>
                <div className="image-box">
                  <img src={el.image} alt={el.name} />
                </div>
                <h2>{el.name}</h2>
                <p>{el.price}</p>
              </div>
            ))}
          </div>
  
          <button onClick={() => scroll("right")} className="scroll-btn right">
            <img src={right} className="rightrrr" />
          </button>
        </div>



    <div className='wer12'>
      <div className="qwe123">
        <div className="imk">
          <img src={ tt } alt="" />
        </div>
        <div className="kak">
          <div className='ssss'>
          <h2>Как устроена работа на производстве</h2>
          <p>Производство компании и центральный офис объединены <br />в единую компьютерную сеть, и мастер каждого цеха получает <br /> наряды на работу и отмечает их исполнение в единой информационной среде компании.</p>
          </div>
        </div>
      </div>
    </div>
        

        
          <div class="g5kqe">
            < div class="x1rwq">
              <div class="u3mzj">
                <span></span>Качество
              </div>
              <p>
                Изучая качество мебели производства компании «Эжи-Мебель» важно понимать, что за этим словом
                стоят не только лучшие материалы и комплектующие, многолетний опыт, отработанные технологические
                процессы, все необходимые сертификаты соответствия и высокопрофессиональный персонал, но, прежде
                всего, философия компании, которой «Эжи-Мебель» следует с самого своего создания.
              </p>
            </div>
            <div class="lk09d">
              <img src={ hh } alt="Диван" />
            </div>
          </div>
        
        
        
            <div class="g5kqe">
            < div class="x1rwq">
              <div class="u3mzj">
                <span></span>Гарантия
              </div>
              <p>
               Компания «Экми-Мебель» первой из украинских производителей мягкой мебели обеспечила свою мебель полноценной  гарантией и первой обоснованно заявила о лучшем качестве производимой мебели.
              </p>
            </div>
            <div class="lk09d">
              <img src={ ss } alt="Диван" />
            </div>
          </div>
        
        
             <div class="g5kqe">
            < div class="x1rwq">
              <div class="u3mzj">
                <span></span>Почему нам можно доверять?
              </div>
              <p>
               Вся продукция компании «Экми-Мебель» прошла государственную сертификацию системы УкрСЕПРО, осуществляемую органом по сертификации продукции ЗАО «Украинский Институт Мебели». Мягкая мебель производства компании «Экми-Мебель» соответствует санитарно-гигиеническим требованиям действующего законодательства Украины — что подтверждено заключениями санитарно-гигиенической экспертизы Министерства здравоохранения Украины, и требованиям ГОСТ 19917-93 -«Мебель для сидения и лежания. Общие технические условия», что подтверждено государственными сертификатами соответствия.
              </p>
            </div>
            <div class="lk09d">
              <img src={ ff } alt="Диван" />
            </div>
          </div>



   <h2 class="partners-title"><span>Н</span>аши партнёры</h2>

        <section class="partners-section">

    <div class="partners-text-content">

      <p class="partners-description">Компании сотрудничают с нами по всему миру</p>
      <p class="partners-descriptions">На данный момент дилерская сеть фабрики «Эком-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас мы заинтересованы в расширении сети и предлагаем выгодные условия для сотрудничества.</p>
      <p class="partners-descriptionss">Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных изделий.</p>
    </div>
    <div class="partners-image-box">
      <div class="partners-image-frame">
        <img src={ arni } alt="Мебель Эком" class="partners-image" />
      </div>
    </div>
  </section>


    

          <div className='immggss'>
            <img src={ vogue } className='vogue' />
            <img src={ apple  } className='apple' />
            <img src={ zara } className='zara' />
            <img src={ samsung } className='samsung' />
          </div>


          <div class="catalog-grid">
    <div class="catalog-card">
      <img src={ ff } alt="" class="catalog-image" />
    </div>
    <div class="catalog-card">
      <img src={ hh } alt="" class="catalog-image" />
    </div>
    <div class="catalog-card">
      <img src={ gg } alt="" class="catalog-image" />
    </div>
    <div class="catalog-card">
      <img src={ ss } alt="" class="catalog-image" />
    </div>
  </div>

  </div>
  
  

 
  )
}

export default Individ
