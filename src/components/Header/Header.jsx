import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const customClassName = ({ isActive }) =>
    "text-link nav__link" + (isActive ? " nav__link_active" : "");

  return (
    <header className="header">
      <NavLink className="header__logo" to={"/"}></NavLink>
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <NavLink className={customClassName} to={"/search"}>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={customClassName} to={"/articles"}>
              Articles
            </NavLink>
          </li>
          {/* link to element id is broken */}
          {/* <li>
            <a href="#nav-contact-target" className="nav__link text-link">
              Contact Us
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
