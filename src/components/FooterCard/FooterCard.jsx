import "./FooterCard.css";
import githubImage from "../../assets/git.png";
import linkedinImage from "../../assets/linkedin.png";

function FooterCard({ name, github, linkedin }) {
  return (
    <li className="footer-card">
      <h4 className="footer-card__person-name">{name}</h4>
      <div className="footer-card__person-link-container">
        <a href={github} className="footer-card__person-link text-link">
          <img
            src={githubImage}
            alt="GitHubImg"
            className="footer-card__person-link-img"
          />
          GitHub
        </a>
      </div>
      <div className="footer-card__person-link-container">
        <a href={linkedin} className="footer-card__person-link text-link">
          <img
            src={linkedinImage}
            alt="LinkedInImg"
            className="footer-card__person-link-img"
          />
          LinkedIn
        </a>
      </div>
    </li>
  );
}

export default FooterCard;
