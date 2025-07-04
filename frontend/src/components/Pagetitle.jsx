import { useLocation } from "react-router-dom";
import "../css/Home.css";

const routeToTitle = {
  "/projects": "Projects",
  "/about": "About",
  "/expertise": "Expertise",
  "/team": "Team",
  "/careers": "Careers",
  "/contact": "Contact"
};

const PageTitle = () => {
  const location = useLocation();
  const title = routeToTitle[location.pathname];

  if (!title) return null; // Ничего не выводим на Home или неизвестных страницах

  return <h1 className="page-title">{title}</h1>;
};

export default PageTitle;
