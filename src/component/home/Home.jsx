import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import divane from "../../assets/image.jpg";
import left from "../../assets/left.jpg";
import right from "../../assets/right.jpg";
import leon from "../../assets/leon.jpg";
import bos from "../../assets/bos.jpg";
import arni from "../../assets/Arni2.jpg";
import vogue from "../../assets/vogue.jpg";
import apple from "../../assets/apple.jpg";
import zara from "../../assets/zara.jpg";
import samsung from "../../assets/samsung.jpg";
import ff from "../../assets/ff.jpg";
import hh from "../../assets/hh.jpg";
import gg from "../../assets/gg.jpg";
import ss from "../../assets/ss.jpg";
import { data1 } from "../../data";
import { data2 } from "../../datas";
import { Link } from "react-router-dom";
import divane1 from '../../assets/leon.jpg'
import divane2 from '../../assets/ampir.jpg'

function Home() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector('.item').offsetWidth + 20; 
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  
    const images = [divane, divane1, divane2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="cont">
      <div className="wrapper">
        <div className="left-block">
          <h1><span>Л</span>УЧШАЯ ЖИЗНЬ , СОЗДАННАЯ ДЛЯ ВАС!</h1>
          <Link to="/2d-3d">
            <button className="catalog-button">ПЕРЕЙТИ В КАТАЛОГ</button>
          </Link> 
        </div>

        <div className="right-block">
          <h3 className="top-text">Основано в 1993 году</h3>
          <img src={images[currentIndex]} className="bbl" alt="divan" />
          <div className="dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
<div className="nov"><h1><span>Н</span>овинки</h1></div>
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

      <div className="block_92x">
        <div className="imgbox_n77">
          <img src={leon} alt="" />
          <div className="badge_mq3"></div>
        </div>
        <div className="textzone_p1y">
          <div className="label_v88">furniture</div>
          <h2>
            <span>И</span>ндивидуальная мебель
          </h2>
          <p>Полный цикл производства </p>
          <p>
            {" "}
            Качество мягкой мебели начинается <br />
            задолго до начала ее производства.
          </p>
          <Link to="ind" href="#" className="btn_4k2">
            ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ
          </Link>
        </div>
      </div>

      <header>
        <h1>
          <span className="orange">Н</span>аша история
        </h1>
      </header>

      <section className="history-section">
        <div className="text-box">
          <h2>Наработки длиной в 25 лет</h2>
          <p>
            Каждый производитель заявляет, что делает всё для своих покупателей,
            но не каждый производитель способен подтвердить свои заявления
            многолетней историей.
          </p>
        </div>
        <div className="image-boxx">
          <img src={bos} alt="Мебель" />
        </div>
      </section>

      <div className="furniture-slider-container">


        <div className="furniture-slider">
          {data2.map((el, index) => (
            <div className="furniture-item" key={index}>
              <div className="furniture-image-wrapper">
                <img src={el.image} alt={el.name} />
              </div>
              <h2 className="furniture-title">{el.name}</h2>
            </div>
          ))}
        </div>


      </div>

      <div className="taks">
        <div className="lpo">
          <p>
            Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в
            сертификацию своей продукции, убедительно подтверждают лидерство
            компании на украинском рынке высококачественной мягкой мебели.
          </p>
          <p>
            Фабрика «Экми-мебель» сертифицирована по системе менеджмента
            качества ISO 9001:2000 на соответствие международным стандартам,
            представительством «Бюро Веритас» в Украине.
          </p>
          <p>
            Компания «Экми-Мебель» первой из украинских производителей мягкой
            мебели обеспечила свою мебель полноценной гарантией и первой
            обоснованно заявила о лучшем качестве производимой мебели.
          </p>
        </div>
      </div>

      <div className="immggss">
        <img src={vogue} className="vogue" />
        <img src={apple} className="apple" />
        <img src={zara} className="zara" />
        <img src={samsung} className="samsung" />
      </div>

      <div className="catalog-grid">
        <div className="catalog-card">
          <img src={ff} alt="" className="catalog-image" />
        </div>
        <div className="catalog-card">
          <img src={hh} alt="" className="catalog-image" />
        </div>
        <div className="catalog-card">
          <img src={gg} alt="" className="catalog-image" />
        </div>
        <div className="catalog-card">
          <img src={ss} alt="" className="catalog-image" />
        </div>
      </div>

      <div className="g5kqe">
        <div className="x1rwq">
          <div className="u3mzj">
            <span></span>Качество
          </div>
          <p>
            Изучая качество мебели производства компании «Эжи-Мебель» важно
            понимать, что за этим словом стоят не только лучшие материалы и
            комплектующие, многолетний опыт, отработанные технологические
            процессы, все необходимые сертификаты соответствия и
            высокопрофессиональный персонал, но, прежде всего, философия
            компании, которой «Эжи-Мебель» следует с самого своего создания.
          </p>
        </div>
        <div className="lk09d">
          <img src={hh} alt="Диван" />
        </div>
      </div>

      <div className="g5kqe">
        <div className="x1rwq">
          <div className="u3mzj">
            <span></span>Гарантия
          </div>
          <p>
            Компания «Экми-Мебель» первой из украинских производителей мягкой
            мебели обеспечила свою мебель полноценной гарантией и первой
            обоснованно заявила о лучшем качестве производимой мебели.
          </p>
        </div>
        <div className="lk09d">
          <img src={ss} alt="Диван" />
        </div>
      </div>

      <div className="g5kqe">
        <div className="x1rwq">
          <div className="u3mzj">
            <span></span>Почему нам можно доверять?
          </div>
          <p>
            Вся продукция компании «Экми-Мебель» прошла государственную
            сертификацию системы УкрСЕПРО, осуществляемую органом по
            сертификации продукции ЗАО «Украинский Институт Мебели». Мягкая
            мебель производства компании «Экми-Мебель» соответствует
            санитарно-гигиеническим требованиям действующего законодательства
            Украины — что подтверждено заключениями санитарно-гигиенической
            экспертизы Министерства здравоохранения Украины, и требованиям ГОСТ
            19917-93 -«Мебель для сидения и лежания. Общие технические условия»,
            что подтверждено государственными сертификатами соответствия.
          </p>
        </div>
        <div className="lk09d">
          <img src={ff} alt="Диван" />
        </div>
      </div>
    </div>
  );
}

export default Home;
