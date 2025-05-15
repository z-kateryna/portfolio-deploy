import "./Comments.scss";
import QuoteUp from "../../assets/icons/quote-up.svg";
import QuoteDown from "../../assets/icons/quote-down.svg";

export default function Comments() {
  return (
     <section className="comments">
        <div className="comments__container">
          <h2 className="comments__header">Don't take my word for it!</h2>
          <div className="comments__wrapper">
            <div className="comments__comment">
              <div className="comments__comment-wrapper">
                <span className="comments__quote--up">"</span>
                <p className="comments__copy">
                  Kat seamlessly blends strong UX design with technical
                  development skills, making her a rare unicorn in our field.
                  Kat's creative problem-solving and collaborative spirit
                  consistently elevated our project, and I'm confident she'll be
                  a fantastic addition to any team...
                  <span className="comments__quote--down">"</span>
                </p>
              </div>
              <p className="comments__author">
                <a
                  className="comments__author--link"
                  href="https://www.linkedin.com/in/ahmadghachim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Akhmad Ghachin
                </a>
                &nbsp; Full Stack Developer
              </p>
            </div>
            <div className="comments__comment">
              <div className="comments__comment-wrapper">
                <span className="comments__quote--up">"</span>
                <p className="comments__copy">
                  Kateryna is an amazing designer! She not only redesigned and
                  built my company's website but also reinvented my brand’s
                  visual identity, giving it a fresh new look that brought my
                  vision to life and attracted new customers. I highly recommend
                  her as a passionate, knowledgeable designer and a fantastic
                  person to work with!
                  <span className="comments__quote--down">"</span>
                </p>
              </div>

              <p className="comments__author">
                <a
                  className="comments__author--link"
                  href="https://www.linkedin.com/in/olena-p-5b8b5971"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elena Pshegorskaya
                </a>
                &nbsp; Director, Osvita Tour
              </p>
            </div>
            <div className="comments__comment">
              <div className="comments__comment-wrapper">
                <span className="comments__quote--up">"</span>
                <p className="comments__copy">
                  I had the pleasure of studying Software Engineering alongside
                  Kateryna at BrainStation and collaborating with her on our
                  team project. She is an exceptional team player—always eager
                  to share her expertise in UX/UI Design and tackle challenges
                  head-on. Kateryna is highly results-driven, with a talent for
                  breaking down complex tasks into manageable steps, ensuring
                  efficient work distribution and team success. Her enthusiasm
                  and ability to motivate those around her create a positive,
                  dynamic work environment. Kateryna is not only a valuable
                  asset to any team but also a joy to work with.
                  <span className="comments__quote--down">"</span>
                </p>
              </div>
              <p className="comments__author">
                <a
                  className="comments__author--link"
                  href="https://www.linkedin.com/in/vanessa-lebrun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vanessa Lebrun
                </a>
                &nbsp; Full Stack Developer
              </p>
            </div>
            <div className="comments__comment">
              <div className="comments__comment-wrapper">
                <span className="comments__quote--up">"</span>
                <p className="comments__copy">
                  Working with Kateryna on our website was an absolute pleasure.
                  She took the time to understand our vision and brand, and
                  brought it to life with clarity, elegance, and impact. Her
                  design sensibility, attention to detail, and technical skills
                  were exceptional—and she delivered everything on a tight
                  deadline without compromising quality. The end result reflects
                  our organization’s professionalism and values perfectly.
                  <span className="comments__quote--down">"</span>
                </p>
              </div>
              <p className="comments__author">
                <a
                  className="comments__author--link"
                  href="mailto:jay@candubai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jay Rana
                </a>
                &nbsp; Managing Director, CanDubai
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
