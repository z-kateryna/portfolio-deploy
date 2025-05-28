import "./Hero.scss";
import AbbvieLogo from "../../assets/images/abbvie.svg";
import AgiosLogo from "../../assets/images/agios.svg";
import COB from "../../assets/images/COB.svg";
import GSK from "../../assets/images/GSK.svg";
import Novartis from "../../assets/images/novartis.svg";
import Sanofi from "../../assets/images/sanofi.svg";
import Nowsta from "../../assets/images/nowsta.svg";
import Portrait from "../../assets/images/picture.png";

const icons = [AbbvieLogo, AgiosLogo, COB, GSK, Novartis, Sanofi, Nowsta];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content-container">
          <div className="hero__first-line">
            <p className="hero__header">Hi, I'm Kat</p>
            <img className="hero__picture" src={Portrait} />
          </div>
          <div className="hero__copy">
            <p className="hero__header">
              <span className="hero__header--bold">UX/UI Designer</span>{" "}
              specializing in {" "}
              <span className="hero__header--italic">
                compliant, accessible, and beautiful 
              </span>
              &nbsp;digital experiences for patients and healthcare providers.
            </p>
          </div>
        </div>
        <div className="hero__icons-scroll">
          <div className="hero__icons-track">
            {[...icons, ...icons].map((icon, index) => (
              <img
                key={index}
                src={icon}
                className="hero__icon"
                alt="tech icon"
              />
            ))}
          </div>
        </div>
      </div>
        </section>
  );
}
