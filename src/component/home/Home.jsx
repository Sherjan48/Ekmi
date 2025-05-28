import React from "react";
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

function Home() {
  return (
    <div className="cont">
      <div className="wrapper">
        <div className="left-block">
          <h1>
            <span>Л</span>УЧШАЯ ЖИЗНЬ , СОЗДАННАЯ ДЛЯ ВАС!
          </h1>
          <button className="catalog-button">ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>

        <div className="right-block">
          <h3 className="top-text">Основано в 1993 году</h3>
          <img src={divane} className="bbl" />
        </div>
      </div>

      <div className="stran">
        <img src={left} alt="left" className="arrow" />

        <div className="imgh">
          {data1.map((el, index) => (
            <div className="item" key={index}>
              <div className="image-box">
                <img src={el.image} alt={el.name} />
              </div>
              <h2>{el.name}</h2>
              <p>{el.price} </p>
            </div>
          ))}
        </div>

        <img src={right} alt="right" className="arrow" />
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
          <a href="#" className="btn_4k2">
            ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ
          </a>
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
        <p> sdsd </p>

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
          


      {/* <h2 class="partners-title">
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
      </section> */}

      <div className="immggss">
        <img src={vogue} className="vogue" />
        <img src={apple} className="apple" />
        <img src={zara} className="zara" />
        <img src={samsung} className="samsung" />
      </div>

      <div class="catalog-grid">
        <div class="catalog-card">
          <img src={ff} alt="" class="catalog-image" />
        </div>
        <div class="catalog-card">
          <img src={hh} alt="" class="catalog-image" />
        </div>
        <div class="catalog-card">
          <img src={gg} alt="" class="catalog-image" />
        </div>
        <div class="catalog-card">
          <img src={ss} alt="" class="catalog-image" />
        </div>
      </div>

      <div class="g5kqe">
        <div class="x1rwq">
          <div class="u3mzj">
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
        <div class="lk09d">
          <img src={hh} alt="Диван" />
        </div>
      </div>

      <div class="g5kqe">
        <div class="x1rwq">
          <div class="u3mzj">
            <span></span>Гарантия
          </div>
          <p>
            Компания «Экми-Мебель» первой из украинских производителей мягкой
            мебели обеспечила свою мебель полноценной гарантией и первой
            обоснованно заявила о лучшем качестве производимой мебели.
          </p>
        </div>
        <div class="lk09d">
          <img src={ss} alt="Диван" />
        </div>
      </div>

      <div class="g5kqe">
        <div class="x1rwq">
          <div class="u3mzj">
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
        <div class="lk09d">
          <img src={ff} alt="Диван" />
        </div>
      </div>
    </div>
  );
}

export default Home;
