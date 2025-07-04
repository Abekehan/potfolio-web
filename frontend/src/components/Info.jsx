import { motion } from "framer-motion";
import "../css/Info.css";

const Info = () => {
  return (
    <div className="info-wrapper">
      {/* Первый блок */}
      <motion.section
        className="info-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="info-photo">
          <img src="/icons/Photo.png" alt="Photo" />
        </div>

        <div className="info-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            width="40"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            alt="Python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
          />
        </div>

        <div className="info-text">
          <h2>Programming as a path to understanding the essence of things.</h2>
          <p>
            Although I'm still at the beginning of this journey, I study and
            practice the tools below to eventually bring ideas to life.
          </p>
        </div>
        <div className="info-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt="Figma"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            alt="Vs.code"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            alt="NoSQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg"
            alt="PyQt5"
          />
        </div>
      </motion.section>

      {/* Второй блок */}
      <motion.section
        className="info-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="info-photo">
          <img src="/icons/Architecture.png" alt="Photo" />
        </div>

        <div className="info-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
            alt="Adobe"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg"
            alt="3dsmax"
          />
          <img src="/icons/autocad-icon.svg" alt="Autocad"  />
          <img src="/icons/revit.png" alt="Revit" />
          <img src="/icons/archicad.png" alt="Archicad" />
        </div>

        <div className="info-text">
          <h2>
            Architecture - as a path to understanding the essence of things
          </h2>
          <p>
            As a holder of a Master of Science degree in this field, I am
            interested in three fundamental aspects: Beauty, Sustainability, and
            Functionality.
          </p>
        </div>

        <div className="info-icons">
          <img src="/icons/Allplan.png" alt="Adobe" />
          <img src="/icons/Sketchup.png" alt="3dsmax" />
          <img src="/icons/Corona.png" alt="Archicad" />
          <img src="/icons/Office.png" alt="Revit" />
          <img src="/icons/Indesign.png" alt="Autocad" />
        </div>
      </motion.section>
    </div>
  );
};

export default Info;
