import "./Footer.scss";
import dribble from "../../assets/icons/dribbble.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";
import ArrowTop from "../../assets/icons/arrow-top.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__icons--wrapper">
          <div className="footer__icons--container">
            <a
              className="footer__icon"
              href="https://dribbble.com/KateZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dribble} alt="dribble icon" />
            </a>
            <a
              className="footer__icon"
              href="https://github.com/z-kateryna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github icon" />
            </a>
            <a
              className="footer__icon"
              href="https://www.linkedin.com/in/kzabrodska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a
              className="footer__icon"
              href="mailto:zabrodskakateryna@gmail.com"
            >
              <img src={mail} alt="github icon" />
            </a>
          </div>
          <button
            className="footer__arrow--top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={ArrowTop} alt="Scroll to top" />
          </button>
        </div>
        <p className="footer__copy">
          &copy;&nbsp;2025 Designed and coded by yours truly.
        </p>
      </div>
    </section>
  );
}
