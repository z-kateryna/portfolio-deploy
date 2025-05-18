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
            <h2 className="case-studies__header">
              Redesigning and repurposing myAgios.com to support a new
              patient-centered architecture
            </h2>
            <p className="case-studies__copy">
              Shifting myAgios.com from a provider-focused platform to a
              patient-centered experience by restructuring the site architecture
              and prioritizing accessible, patient-relevant content resulted in
              significantly improved engagement and reduced bounce rates.
            </p>
            <button className="case-studies__btn">
              Read case study
              <img src={Arrow} className="case-studies__arrow-left" />
            </button>
          </div>
        </Link>
        <a className="case-studies__nowsta" href="#">
          <img className="case-studies__nowsta--img" src={NowstaMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">UX/UI Design</div>
            <div className="case-studies__tag">Research</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">SaaS</div>
            <div className="case-studies__tag">Native app</div>
            <div className="case-studies__tag">Agile</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">
              Timeclock App redesign for Nowsta to enhance UX and ensure UI
              consistency across all products
            </h2>
            <p className="case-studies__copy">
              Redesigned the Timeclock app to streamline the clock-in process,
              reducing user interaction time from over 15 seconds to under 7
              seconds. The new design features a simplified experience built
              with the Nowsta design system, improving speed and usability.
            </p>
            <button className="case-studies__btn">
              Case study coming soon
              {/* <img src={Arrow} className="case-studies__arrow-left" /> */}
            </button>
          </div>
        </a>
        <a className="case-studies__cob" href="#">
          <img className="case-studies__cob--img" src={COBMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">Newsletter template</div>
            <div className="case-studies__tag">UX/UI Design</div>
            <div className="case-studies__tag">UX/UI Design</div>
            <div className="case-studies__tag">Research</div>
            <div className="case-studies__tag">Government</div>
            <div className="case-studies__tag">Accessibility</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">Redesigning city of Boston’s e-newsletter: enhancing usability and streamlining creation</h2>
            <p className="case-studies__copy">Driven by thorough research, the redesign not only elevated reader engagement and improved accessibility but also streamlined the newsletter creation process, delivering a more efficient and user-friendly solution for city employees.</p>
           <button className="case-studies__btn">
              Case study coming soon
              {/* <img src={Arrow} className="case-studies__arrow-left" /> */}
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}
