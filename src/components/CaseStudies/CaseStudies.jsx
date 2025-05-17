import "./CaseStudies.scss";
import Arrow from "../../assets/icons/arrow-right.svg";
import PurykundMockUp from "../../assets/images/mock-up-test.jpg";
import MyAgiosMockUp from "../../assets/images/myagios-mock-up.jpg";
import NowstaMockUp from "../../assets/images/nowsta-mock-up.jpg";
import COBMockUp from "../../assets/images/cob-mock-up.jpg";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-studies__wrapper">
        <a
          href="https://www.figma.com/proto/QZjsDHcGvM8pUWDZnYCatP/Portfolio-pages?node-id=1-49&t=edFKBDwqSf2kH8md-1"
          className="case-studies__pyrukynd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="case-studies__pyrukynd--img" src={PurykundMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">UX/UI Design</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Websites launch</div>
            <div className="case-studies__tag">Agency</div>
            <div className="case-studies__tag">Pharma</div>
            <div className="case-studies__tag">
              Cross-department collaboration
            </div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">
              Designing for impact: PYRUKYND® websites launch driving awareness
              and engagement in a niche market
            </h2>
            <p className="case-studies__copy">
              Launched 4 PYRUKYND® websites for patients and healthcare
              professionals, creating clear, compliant, and user-focused digital
              experiences that attracted a higher-than-projected number of
              visitors during the first 6 months after launch.
            </p>
            <button className="case-studies__btn">
              Read case study
              <img src={Arrow} className="case-studies__arrow-left" />
            </button>
          </div>
        </a>

        <Link className="case-studies__myagios" to="/my-agios">
          <img className="case-studies__myagios--img" src={MyAgiosMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">UX/UI Design</div>
            <div className="case-studies__tag">Information Architecture</div>
            <div className="case-studies__tag">Accessibility</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Websites launch</div>
            <div className="case-studies__tag">Agency</div>
            <div className="case-studies__tag">Pharma</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">Redesigning and repurposing myAgios.com to support a new patient-centered architecture and seamless redirect to Pyrukynd.com</h2>
            <p className="case-studies__copy">Overview</p>
            <button className="case-studies__btn">
              Read case study
              <img src={Arrow} className="case-studies__arrow-left" />
            </button>
          </div>
        </Link>
        <a className="case-studies__nowsta" href="#">
          <img className="case-studies__nowsta--img" src={NowstaMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">Title</h2>
            <p className="case-studies__copy">Overview</p>
            {/* <button className="case-studies__btn">
              Read Case Study
              <img src={Arrow} />
            </button> */}
          </div>
        </a>
        <a className="case-studies__cob" href="#">
          <img className="case-studies__cob--img" src={COBMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">Title</h2>
            <p className="case-studies__copy">Overview</p>
            {/* <button className="case-studies__btn">
              Read Case Study
              <img src={Arrow} />
            </button> */}
          </div>
        </a>
      </div>
    </section>
  );
}
