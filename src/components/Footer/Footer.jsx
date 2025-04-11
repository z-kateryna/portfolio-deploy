import "./Footer.scss";
import dribble from "../../assets/icons/dribbble.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";
import ArrowTop from "../../assets/icons/arrow-top.svg"

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__icons--wrapper">
        <div className="footer__icons--container">
        <a className="footer__icon" href="#">
          <img src={dribble} alt="github icon" />
        </a>
        <a className="footer__icon" href="#">
          <img src={github} alt="github icon" />
        </a>
        <a className="footer__icon" href="#">
          <img src={linkedin} alt="github icon" />
        </a>
        <a className="footer__icon" href="#">
          <img src={mail} alt="github icon" />
        </a>
        </div>
        <a href="" className="footer__arrow--top">
        <img src={ArrowTop} alt="" />
      </a>
      </div>
      <p className="footer__copy">
        &copy;&nbsp;2025 Designed and Coded by yours truly.
      </p>
    </section>
  );
}
