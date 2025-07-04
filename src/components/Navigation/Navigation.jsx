import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../../assets/icons/arrow.svg";
import dribble from "../../assets/icons/dribbble.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";
import HamburgerMenu from "../../assets/icons/hamburger_menu.svg";
import CloseIcon from "../../assets/icons/close.svg";

export default function Homepage() {
  const fullName = "Kateryna Zabrodska";
  const [displayed, setDisplayed] = useState("K");
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    let index = 1;
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setDisplayed(fullName.slice(0, index));
        index++;
        if (index > fullName.length) clearInterval(interval);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="nav" aria-label="Main navigation">
      <div className="nav__wrapper">
        <NavLink
          to="/"
          className="nav__logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            fontFamily: "DMSans",
            fontSize: "1.25rem",
            fontWeight: "400",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {displayed}
        </NavLink>
        <ul className="nav__menu-container">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/coding"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              Coding
            </NavLink>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1BMkniZ-K59fPmpBDy1iSE0BlenlfX8Bi/edit?usp=sharing&ouid=111396631844579547834&rtpof=true&sd=true"
            >
              Resume
            </a>
            <img className="nav__arrow" src={arrow} alt="" />
          </li>
        </ul>

        <div className="nav__icons-container">
          {/* <a
            className="nav__icon--link"
            href="https://dribbble.com/KateZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribble} alt="dribble icon" />
          </a> */}
          <a
            className="nav__icon--link"
            href="https://github.com/z-kateryna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
          </a>
          <a
            className="nav__icon--link"
            href="https://www.linkedin.com/in/kzabrodska"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a className="nav__icon" href="mailto:zabrodskakateryna@gmail.com">
            <img src={mail} alt="mail icon" />
          </a>
        </div>

                <img
          className="nav__hamburger--icon"
          src={menuOpen ? CloseIcon : HamburgerMenu}
          alt={menuOpen ? "close menu icon" : "open menu icon"}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        />

        <div
          className={`nav__hamburger--container ${
            menuOpen ? "open" : "closed"
          }`}
        >
          <ul className="nav__hamburger--ul">
            <li className="nav__hamburger--li">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav__hamburger--item nav__link--active"
                    : "nav__hamburger--item"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav__hamburger--li">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav__hamburger--item nav__link--active"
                    : "nav__hamburger--item"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav__hamburger--li">
              <NavLink
                to="/coding"
                className={({ isActive }) =>
                  isActive
                    ? "nav__hamburger--item nav__link--active"
                    : "nav__hamburger--item"
                }
              >
                Coding
              </NavLink>
              <img className="nav__arrow" src={arrow} alt="" />
            </li>
            <li className="nav__hamburger--li">
              <a
                className="nav__hamburger--item"
                href="https://docs.google.com/document/d/1BMkniZ-K59fPmpBDy1iSE0BlenlfX8Bi/edit?usp=sharing&ouid=111396631844579547834&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <img className="nav__arrow" src={arrow} alt="" />
            </li>
          </ul>
          <div className="nav__icons--hamburger">
            <a href="https://dribbble.com/KateZ">
              <img
                className="nav__icon--hamburger"
                src={dribble}
                alt="dribble icon"
              />
            </a>
            <a href="https://github.com/z-kateryna">
              <img
                className="nav__icon--hamburger"
                src={github}
                alt="github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/kzabrodska/">
              <img
                className="nav__icon--hamburger"
                src={linkedin}
                alt="linkedin icon"
              />
            </a>
            <a href="mailto:zabrodskakateryna@gmail.com">
              <img
                className="nav__icon--hamburger"
                src={mail}
                alt="mail icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
