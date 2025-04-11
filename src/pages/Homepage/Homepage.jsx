import "./Homepage.scss";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import Comments from "../../components/Comments/Comments";
import Footer from "../../components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
        <Hero />
      </header>
      <main>
        <CaseStudies />
        <Comments />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
