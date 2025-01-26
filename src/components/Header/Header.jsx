import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <a href="#nav-search-target" className="nav__link">
              Search
            </a>
          </li>
          <li>
            <a href="#nav-articles-target" className="nav__link">
              Articles
            </a>
          </li>
          <li>
            <a href="#nav-contact-target" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
