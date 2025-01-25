import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="" alt="" className="header__logo" />
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <a href="#" className="nav__link">
              Search
            </a>
          </li>
          <li>
            <a href="#" className="nav__link">
              Articles
            </a>
          </li>
          <li>
            <a href="#" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
