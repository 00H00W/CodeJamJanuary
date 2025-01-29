import "./Footer.css";

function Footer() {
  return (
    <footer id="nav-contact-target" className="footer">
      <ul className="people">
        <li className="people__person">
          <h4 className="people__person-name">Jacob Burke</h4>
          <div className="people__person-link-container">
            <a
              href="https://github.com/jakeburke1775"
              className="people__person-link text-link"
            >
              <img
                src="/src/assets/git.png"
                alt="GitHubImg"
                className="people__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="people__person-link-container">
            <a
              href="https://www.linkedin.com/in/jake-burke-468b13143/"
              className="people__person-link text-link"
            >
              <img
                src="/src/assets/linkedin.png"
                alt="LinkedInImg"
                className="people__person-link-img"
              />
              LinkedIn
            </a>
          </div>
        </li>
        <li className="people__person">
          <h4 className="people__person-name">Sam Branham</h4>
          <div className="people__person-link-container">
            <a
              href="https://github.com/00H00W"
              className="people__person-link text-link"
            >
              <img
                src="/src/assets/git.png"
                alt="GitHubImg"
                className="people__person-link-img"
              />
              GitHub
            </a>
          </div>
          <div className="people__person-link-container">
            <a
              href="https://www.linkedin.com/in/sambranham/"
              className="people__person-link text-link"
            >
              <img
                src="/src/assets/linkedin.png"
                alt="LinkedInImg"
                className="people__person-link-img"
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
