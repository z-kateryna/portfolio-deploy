import "./Pyrukynd.scss";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ScrollProgressBar from "../../ScrollProgressBar";

export default function Pyrukynd() {
  return (
    <section className="pyrukynd">
      <Navigation />
      <div className="pyrukynd__wrapper">
        < ScrollProgressBar />
        <article>
          <section id="overview">...</section>
          <section id="goal">...</section>
          <section id="challenge">...</section>
        </article>
      </div>
      <Footer />
    </section>
  );
}
