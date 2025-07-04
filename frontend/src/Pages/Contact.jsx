import React from "react";
import PageTitle from "../components/Pagetitle"; // создай этот файл
import Footer from "../components/Footer";


const Contact = () => {
  return (
    <div>
      <PageTitle />
      {/* Здесь остальная разметка страницы */}
      <div className="section-divider" />
      <div className="context">
        <h2>General 
        </h2>
        <p> 
        {/* <br /> — это HTML-тег, который означает перенос строки (break).
        Он используется, когда тебе нужно вставить новую строку внутри одного и того же блока текста, но не хочешь создавать новый HTML-элемент 
        (например, новый <p> или <div>). */}
        <a href="mailto:Karapin@gmail.com" className="email-link">Karapin4@gmail.com</a>
        </p>
        <br />
        <h2>Press</h2>
        <p>Abylay Sarsek</p>
        <p>T +49 (0) 833 855 78</p>
        <p>
        <a href="mailto: sarsek.framevisual@gmail.com" className="email-link"> sarsek.framevisual@gmail.com</a>
            </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;