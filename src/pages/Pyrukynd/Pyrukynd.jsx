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
        <div className="pyrykynd__overview">

        </div>
      </div>
      <Footer />
    </section>
  );
}
