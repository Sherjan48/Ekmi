import React, { useEffect, useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("ru");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
      setTimeout(() => {
        setTranslateCookie(savedLang);
      }, 500); // задержка, чтобы сработал после инициализации
    }

    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ru",
          includedLanguages: "ru,en,uk",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  const setTranslateCookie = (lang) => {
    document.cookie = `googtrans=/ru/${lang}; path=/; domain=${window.location.hostname}`;
  };

  const handleChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setTranslateCookie(lang);
    window.location.reload();
  };

  return (
    <div>
      <select className="lang-select" value={language} onChange={handleChange}>
        <option value="ru">RU</option>
        <option value="uk">UK</option>
        <option value="en">EN</option>
      </select>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Language;
