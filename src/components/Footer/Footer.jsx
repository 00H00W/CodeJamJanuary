import "./Footer.css";

function Footer() {
  return (
    <footer id="nav-contact-target" className="footer">
      <ul className="footer__person-container">
        <li className="footer__person">
          <h4 className="footer__person-title">Jacob Burke</h4>
          <div className="footer__person-link-container">
            <a
              href="https://github.com/jakeburke1775"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="GitHubImg"
                className="footer__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="footer__person-link-container">
            <a
              href="https://www.linkedin.com/in/jake-burke-468b13143/"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="LinkedInImg"
                className="footer__person-link-img"
              />
              LinkedIn
            </a>
          </div>
        </li>
        <li className="footer__person">
          <h4 className="footer__person-title">Sam Branham</h4>
          <div className="footer__person-link-container">
            <a
              href="https://github.com/00H00W"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="GitHubImg"
                className="footer__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="footer__person-link-container">
            <a
              href="https://www.linkedin.com/in/sambranham/"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="LinkedInImg"
                className="footer__person-link-img"
              />
              LinkedIn
            </a>
          </div>
        </li>
        <li className="footer__person">
          <h4 className="footer__person-title">Juan Alcantara</h4>
          <div className="footer__person-link-container">
            <a
              href="https://github.com/jcalcan"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="GitHubImg"
                className="footer__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="footer__person-link-container">
            <a
              href="https://www.linkedin.com/in/juan-alcantara-9aa502301/"
              className="footer__person-link text-link"
            >
              <img
                src="/src/assets/3.jpeg"
                alt="LinkedInImg"
                className="footer__person-link-img"
              />
              LinkedIn
            </a>
          </div>
        </li>
        <li className="footer__person">
          <h4 className="footer__person-title">Person</h4>
          <div className="footer__person-link-container">
            <a href="" className="footer__person-link text-link">
              <img
                src="/src/assets/3.jpeg"
                alt="GitHubImg"
                className="footer__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="footer__person-link-container">
            <a href="" className="footer__person-link text-link">
              <img
                src="/src/assets/3.jpeg"
                alt="LinkedInImg"
                className="footer__person-link-img"
              />
              LinkedIn
            </a>
          </div>
        </li>
      </ul>
      <p className="footer__copyright">© Code Heroes 2025</p>
    </footer>
  );
}

export default Footer;
