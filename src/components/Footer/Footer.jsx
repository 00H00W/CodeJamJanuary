import "./Footer.css";
import githubImage from "../../assets/git.png";
import linkedinImage from "../../assets/linkedin.png";
import FooterCard from "../FooterCard/FooterCard";

function Footer() {
  return (
    <footer id="nav-contact-target" className="footer">
      <ul className="footer__list">
        <FooterCard
          name={"Jacob Burke"}
          github={"https://github.com/jakeburke1775"}
          linkedin={"https://www.linkedin.com/in/jake-burke-468b13143/"}
        />
        <FooterCard
          name={"Sam Branham"}
          github={"https://github.com/00H00W"}
          linkedin={"https://www.linkedin.com/in/sambranham/"}
        />
        <FooterCard
          name={"Juan Alcantara"}
          github={"https://github.com/jcalcan"}
          linkedin={"https://www.linkedin.com/in/juan-alcantara-9aa502301/"}
        />
        <FooterCard
          name={"Gerard Ike"}
          github={"https://github.com/gerard415"}
          linkedin={"https://www.linkedin.com/in/chinedum-ike/"}
        />
      </ul>
      <p className="footer__copyright">© Code Heroes 2025</p>
    </footer>
  );
}

export default Footer;
