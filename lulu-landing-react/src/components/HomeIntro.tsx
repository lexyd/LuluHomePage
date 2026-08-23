import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons/StandardIcons";
import "./HomeIntro.css";

const HomeIntro = () => {
  return (
    <section className="home-intro" aria-labelledby="home-intro-title">
      <div className="home-intro-rail">
        <h1 id="home-intro-title">
          Designing and building digital products that feel as good as they
          work.
        </h1>

        <div className="home-intro-meta">
          <p>
            Product designer and design engineer working across systems,
            interfaces, and AI experiences.
          </p>
        </div>

        <div className="home-intro-today">
          <h2>Today</h2>
          <p>
            I care about how products look, how they behave, and how they hold
            up once they leave the canvas. I prototype in code, shape design
            systems, and close the gap between intended craft and shipped
            experience.
          </p>
          <Link to="/projects">
            View selected projects
            <ArrowRightIcon className="home-intro-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
