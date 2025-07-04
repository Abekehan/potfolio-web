import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
import PortfolioTitle from "../components/PortfolioTitle";
import Info from "../components/Info";
import { Link } from "react-router-dom";

const images = ["/images/bg1.jpg", "/images/bg2.jpg", "/images/bg3.jpg"];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    /* Вариант 1
        <div
      className="home-background"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >*/
    <div>
      <div className="home-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`bg-layer ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* Контент переносим внутрь каждого слайда, CSS не может сам по себе "запустить таймер" на исчезновение — он реагирует только на изменение 
      классов или состояний. Поэтому, чтобы что-то исчезло после показа, нужен JavaScript, как выше с юзэффект. */}
            <div
              className={`content-layer ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <h1 key={currentIndex} className="typing">
                {"ARCHITECTURE".split("").map((char, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.1 + 0.6}s` }}>
                    {char}
                  </span>
                ))}
              </h1>
              {/* <div className="rahmen">Твой текст или рамка</div> */}
            </div>
          </div>
        ))}
        {/* Тёмный фильтр - один, поверх всех слайдов */}
        <div className="darken-layer"></div>
      </div>
      <div className="section-divider" />
      <div className="home-text">
        <h2>A summary of my academic and professional progression</h2>
        <p>
          With a background in architecture and a growing passion for
          programming, I am exploring the intersection of design and technology.
        </p>
      </div>
      <Info />
      <div className="section-divider" />
      <div className="home-text">
        {/* <a href="/projects">About</a> в HTML */}
        <h2>The <Link to= "/projects" className="custom-link">Portfolio</Link> consists of several of my works</h2>
        <p>
          In addition to my group work from the university, it will also be complemented by work from real projects.
        </p>
      </div>
      <Card />
      <div className="section-divider" />
      {/* <Info/> */}
      <Footer />
    </div>
  );
};

export default HomePage;

/* 
useEffect(() => {
  // Это выполняется после рендера компонента
  return () => {
    // Это cleanup — выполняется при размонтировании или перед следующим вызовом

useEffect(() => { ... }, []) - [] — значит только один раз, при монтировании
В квадратных скобках пишется набор переменных, при изменении которых эффект срабатывает
setInterval, clearInterval	- JS (браузер)	встроенный таймер

currentIndex — текущий индекс изображения (0, 1, 2).
setCurrentIndex — функция для обновления этого индекса.

setCurrentIndex(prev => (prev + 1) % images.length)- Это просто обход по кругу — когда ты достигаешь конца массива, возвращаешься к началу.
Когда prev = 2: (2 + 1) % 3 = 3 % 3 = 0, → возвращаемся на bg1

prev — это временная переменная, которую ты не задаёшь сам. Её передаёт React внутрь функции автоматически. Это значение текущего индекса,
то есть currentIndex.

DOM структура это что

*/
