import React from "react";
import PageTitle from "../components/Pagetitle"; // создай этот файл
import Footer from "../components/Footer";
import FlipBook from "../components/flipbook";

const Projects = () => {
  return (
    <div>
      <PageTitle />
      {/* Здесь остальная разметка страницы */}
      <div className="section-divider" />
      <FlipBook />
      <Footer />
    </div>
  );
};

export default Projects;