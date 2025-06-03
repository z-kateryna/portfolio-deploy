import "./About.scss";
import Img from "../../assets/images/mypicture.jpg";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="about">
        <div className="about__wrapper">
          {/* <h1 className="about__header--big">
            Obsessions make{" "}
            <span className="about__header--it">my life worse </span>and{" "}
            <span className="about__header--green">my work better.</span>
          </h1> */}
          <div className="about__content-container">
            <img className="about__img" src={Img} alt="Kateryna presenting" />
            <div>
              <h2 className="about__header--small">
                Hi there, thanks for stopping by!
              </h2>
              <div className="about__copy-wrapper">
                <p className="about__copy">
                  I'm a Ukrainian native who first dove into UX/UI design in
                  2020, bringing with me a background in hospitality—and the
                  "guest is always right" mindset—to create thoughtful,
                  user-centered digital experiences. That's why I take a holistic approach to product design—specializing in patient-facing healthcare interfaces and high-conversion product marketing pages, where clarity, accessibility, and emotional impact all matter.
                </p>
                  <p className="about__copy">My philosophy is simple: the aesthetic–usability effect is real. That’s why I
                  strive to create inclusive, compliant, and visually compelling
                  interfaces that truly connect with users.
    
                </p>
                <p className="about__copy">
                  I'm currently open to freelance projects and full-time
                  opportunities. Don’t hesitate to reach out—I'm always up for a
                  good chat (and a coffee, of course).
                </p>
              </div>
            </div>
          </div>
          <div className="about__tags-wrapper">
            <h3 className="about__header--small">My toolkit</h3>
          <div className="about__tags-container">
            {[
              "HTML",
              "CSS",
              "Javascript",
              "Sass",
              "Tailwind",
              "React",
              "Node.js",
              "Express",
              "Mysql",
              "Bootstrap",
              "Github",
              "Postman",
              "Webflow",
              "Framer",
              "Wix",
              "Figma",
              "Miro",
              "Jira",
              "Photoshop",
              "Illustrator",
              "InDesign",
            ].map((skill) => (
              <div key={skill} className="coding__tag">
                {skill}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
