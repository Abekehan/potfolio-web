import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2025 My Portfolio</p>
      <ul className="footer-links">
        <button>
          <Link to= "/inwork" className="custom-link">Privacy Policy</Link>
          </button>

        <button>
          <Link to= "/inwork" className="custom-link">Terms</Link>
          </button>

        <button>
          <Link to= "/contact" className="custom-link">Contact</Link>
          </button>
      </ul>
    </div>
  </footer>
);

export default Footer;


// ul, li??