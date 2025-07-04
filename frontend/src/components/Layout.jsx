import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import "../css/Home.css";

export default function Layout() {
  return (
    <div >
      <Nav />
      <div className="page-wrapper"></div>
      <Outlet />
    </div>
  );
}







//  Что делает margin-top у .page-title?
// Он отодвигает .page-title вниз от предыдущего нормального потока.

// Но Nav — вне потока (position: fixed) — значит, внутренние отступы margin никак не учитывают его.

// В результате: .page-title визуально "отталкивает" то, что под ним, а сам залезает под Nav, если нет padding-top.