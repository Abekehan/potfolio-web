import React from "react";
import PageTitle from "../components/Pagetitle"; // создай этот файл
import Footer from "../components/Footer";

const Inwork = () => {
  return (
    <div>
      <PageTitle />
      {/* Здесь остальная разметка страницы */}
      <div className="section-divider" />
      <div className="inwork">
        <h2>We're currently working on this page. Stay tuned for updates!</h2>
        <img
          src="https://m.media-amazon.com/images/I/41nCQs-IBgL._AC_.jpg"
          alt="Under Maintenance"
          className="maintenance-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Inwork;
