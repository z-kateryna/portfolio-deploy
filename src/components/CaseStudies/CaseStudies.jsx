import "./CaseStudies.scss";
import Arrow from "../../assets/icons/arrow-right.svg";
import PurykundMockUp from "../../assets/images/mock-up-test.jpg";
import MyAgiosMockUp from "../../assets/images/myagios-mock-up.jpg";
import NowstaMockUp from "../../assets/images/nowsta-mock-up.jpg";
import COBMockUp from "../../assets/images/cob-mock-up.jpg";

export default function CaseStudies() {
  return (
    <>
      <section className="case-studies">
        <a className="case-studies__pyrukynd" href="#">
          <img className="case-studies__pyrukynd--img" src={PurykundMockUp} />
          <div className="case-studies__tag-container">
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
            <div className="case-studies__tag">Visual Design</div>
          </div>
          <div className="case-studies__copy-container">
            <h2 className="case-studies__header">Designing for Impact: Launching Pyrukynd's Digital Presence</h2>
            <p className="case-studies__copy">This case study explores the design and development process behind the Pyrukynd website, focusing on creating an engaging, user-friendly digital resource for patients and healthcare providers, aimed at delivering crucial treatment information with clarity and ease.</p>
            {/* <button className="case-studies__btn">
              read case study
              <img src={Arrow} />
            </button> */}
          </div>
        </a>
        <a className="case-studies__myagios" href="#">
          <img className="case-studies__myagios--img" src={MyAgiosMockUp} />
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
      </section>
    </>
  );
}
