import "./Hero.scss";
import Picture from "../../assets/images/image.svg";
import AbbvieLogo from "../../assets/images/abbvie.svg";
import AgiosLogo from "../../assets/images/agios.svg";
import COB from "../../assets/images/COB.svg";
import GSK from "../../assets/images/GSK.svg";
import Novartis from "../../assets/images/novartis.svg";
import Sanofi from "../../assets/images/sanofi.svg";
import Nowsta from "../../assets/images/nowsta.svg";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__first-line">
          <p className="hero__header">Hi, I'm Kat</p>
          <img className="hero__picture" src={Picture} />
        </div>
        <div className="hero__copy">
          <p className="hero__header"><span className="hero__header--bold">UX/UI Designer</span> bridging Dev and Design to create <span className="hero__header--italic">thoughtful, beautiful, and impactful solutions</span>.</p>
        </div>
        <div className="hero__logo-wrapper">
            <img className="hero__brand-logo" src={AbbvieLogo}/>
            <img className="hero__brand-logo" src={AgiosLogo}/>
            <img className="hero__brand-logo" src={COB}/>
            <img className="hero__brand-logo" src={GSK}/>
            <img className="hero__brand-logo" src={Novartis}/>
            <img className="hero__brand-logo" src={Sanofi}/>
            <img className="hero__brand-logo" src={Nowsta}/>
        </div>
      </div>
    </>
  );
}
