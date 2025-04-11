import "./Comments.scss";
import QuoteUp from "../../assets/icons/quote-up.svg";
import QuoteDown from "../../assets/icons/quote-down.svg";

export default function Comments() {
  return (
    <>
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
                <a className="comments__author--link">Akhmad Ghachin</a>
                &nbsp; Full Stack Developer
              </p>
            </div>
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
                <a className="comments__author--link">Akhmad Ghachin</a>
                &nbsp; Full Stack Developer
              </p>
            </div>
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
                <a className="comments__author--link">Akhmad Ghachin</a>
                &nbsp; Full Stack Developer
              </p>
            </div>
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
                <a className="comments__author--link">Akhmad Ghachin</a>
                &nbsp; Full Stack Developer
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
