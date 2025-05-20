import "./Coding.scss";
import CatStill from "../../assets/images/cat.gif";
import CatGif from "../../assets/gifs/cat.gif";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MockUpCandubai from "../../assets/images/mockupcandubai.jpg";
import MockUpAgustin from "../../assets/images/mockupagustin.jpg";
import MockUpCapstone from "../../assets/images/mockupbsmart.jpg";
import MockupInstock from "../../assets/images/mockupinstock.jpg";
import MockUpOsvitaTour from "../../assets/images/mockuposvitatour.jpg";
import MockUpBandsite from "../../assets/images/mockupbandsite.jpg";
import MockUpRilel from "../../assets/images/mockuprilel.jpg";
import MockUpMicrosoft from "../../assets/images/mockupmicrosoft.jpg";
import arrow from "../../assets/icons/arrow.svg";
import { useState } from "react";

export default function Coding() {
  const [isGifVisible, setIsGifVisible] = useState(true);

  const toggleCatImage = () => {
    setIsGifVisible((prev) => !prev);
  };

  return (
    <section className="coding">
      <Navigation />
      <div className="coding__wrapper">
        <div className="coding__hero-content-container">
          <div className="coding__hero-first-line">
            <p className="coding__hero-header">Oh, yes,</p>
          </div>
          <div className="coding__hero-copy">
            <div className="coding__first-line">
              <p className="coding__hero-header">I do like to get busy&nbsp;</p>
              <p className="coding__hero-header--bold">coding</p>
              <img
                className="coding__gif"
                src={isGifVisible ? CatGif : CatStill}
                alt="coding cat"
                onClick={toggleCatImage}
                style={{ cursor: "pointer" }}
              />
            </div>
            <p className="coding__hero-header">
              Check out some of my projects below. My skillset includes:
            </p>
          </div>
          <div className="coding__tags-container">
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
        <section className="coding__content">
          <div className="coding__content-wrapper">
            {[
              {
                img: MockUpAgustin,
                tags: [
                  "Front-End",
                  "Website",
                  "React",
                  "Vite",
                  "UI/UX Design",
                  "Sass",
                  "i18n",
                  "EmailJS",
                  "Netlify",
                  "GitHub",
                ],
                header: "Custom React website",
                copy: "This high-performance front-end project blends clean design, responsive development, and intuitive user experience. Built with React and Sass, it delivers fast load times, accessible interfaces, and modern visuals optimized for all devices.",
                link: "https://www.agustincalderon.com",
                linkText: "See live site",
              },
              {
                img: MockUpCapstone,
                tags: [
                  "Full-stack",
                  "Web app",
                  "OpenAI API",
                  "React",
                  "Node",
                  "Express",
                  "UI Design",
                  "GitHub",
                  "Prompt engineering",
                ],
                header: "b.smart app",
                copy: "An AI-powered micro-learning web app that replaces social media feeds with educational content. Built in just three weeks, it dynamically generates bite-sized learning prompts tailored to each user.",
                link: "https://drive.google.com/file/d/1WU-0WVSAu5Bx0WrOKpVDXYNoX6ajsdSo/view?usp=sharing",
                linkText: "See demo",
              },
              {
                img: MockUpCandubai,
                tags: [
                  "Webflow development",
                  "Website",
                  "UI/UX Design",
                  "Graphic Design",
                ],
                header: "Canada Dubai Business Network website",
                copy: "I created the brand identity from the ground up—including the logo, brandbook, and all graphic assets—and translated the vision into a responsive, modern website that reflects the organization’s values and professionalism.",
                link: "https://www.candubai.com",
                linkText: "See live site",
              },
              {
                img: MockupInstock,
                tags: [
                  "Full-stack",
                  "Web app",
                  "MySQL",
                  "React",
                  "Node",
                  "Express",
                  "Jira",
                  "GitHub",
                ],
                header: "Instock - Inventory Management System",
                copy: "An Inventory Management App designed to streamline stock tracking and warehouse operations through intuitive UI and CRUD functionalities.",
                link: "https://drive.google.com/file/d/1ANg1c8j8DgIymswkjoDPM0BJWgNb9mpz/view",
                linkText: "See demo",
              },
              {
                img: MockUpOsvitaTour,
                tags: [
                  "Framer development",
                  "Website",
                  "UI/UX Design",
                  "Graphic Design",
                ],
                header: "Osvita Tour website redesign",
                copy: "A complete rebrand and website redesign for Osvita Tour, an international education agency. I refreshed the logo, designed a new visual identity, and developed a modern, responsive website in Framer.",
                link: "https://www.osvitatour.com/",
                linkText: "See live site",
              },
              {
                img: MockUpBandsite,
                tags: [
                  "Full-stack",
                  "Website",
                  "Dynamic data",
                  "DOM",
                  "React",
                  "Github",
                ],
                header: "Bandsite website",
                copy: "A responsive website for a fictional music band, featuring media-rich content, dynamic events, and an interactive fan engagement section.",
                link: "https://drive.google.com/file/d/1GKP7JrQAiZ3U_qR1ricPlBDNiiWJHSdN/view",
                linkText: "See demo",
              },
              {
                img: MockUpRilel,
                tags: [
                  "Wordpress Development",
                  "Website",
                  "Elementor",
                  "UI/UX Design",
                  "Graphic Design",
                ],
                header: "Digital marketing agency website",
                copy: "From logo to layout, I crafted this WordPress site for a digital marketing agency — blending bold visuals with clean, user-friendly design in Elementor.",
                link: "https://rilel.ca/",
                linkText: "See live site",
              },
              {
                img: MockUpMicrosoft,
                tags: [
                  "24-Hour Hackathon",
                  "AI",
                  "OpenAI API",
                  "Full Stack",
                  "Website",
                ],
                header: "Microsoft Industry Project",
                copy: "Led a team brainstorming session to shape an AI-powered tool for small business owners using Microsoft products. I designed a brand-aligned mockup and led front-end development implementation, focusing on making AI more accessible and user-friendly.",
                link: "https://drive.google.com/file/d/1TiRzQfHMU_NG5v6uJvBfg6BY8HXfxc8g/view?usp=sharing",
                linkText: "See demo",
              },
            ].map((project) => (
              <div className="coding__content-card" key={project.header}>
                <img
                  className="coding__content-img"
                  src={project.img}
                  alt={`mock up of ${project.header}`}
                />
                <div className="coding__content-tags-container">
                  {project.tags.map((tag) => (
                    <div key={tag} className="coding__content-tag">
                      #{tag}
                    </div>
                  ))}
                </div>
                <h2 className="coding__content-header">{project.header}</h2>
                <p className="coding__content-copy">{project.copy}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding__content-button"
                >
                  {project.linkText}
                  <img src={arrow} alt="arrow up icon" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}
