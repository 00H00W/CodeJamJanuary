import "./Footer.css";
import githubImage from "../../assets/git.png";
import linkedinImage from "../../assets/linkedin.png";

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
                src={githubImage}
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
                src={linkedinImage}
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
          <h4 className="footer__person-title">Gerard Ike</h4>
          <div className="footer__person-link-container">
            <a
              href="https://github.com/gerard415"
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
              href="https://www.linkedin.com/in/chinedum-ike/"
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
      </ul>
      <p className="footer__copyright">© Code Heroes 2025</p>
    </footer>
  );
}

export default Footer;
