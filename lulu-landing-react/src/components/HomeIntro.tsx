import "./HomeIntro.css";

const HomeIntro = () => {
  return (
    <section className="home-intro" aria-labelledby="home-intro-title">
      <div className="home-intro-rail">
        <h1 id="home-intro-title">
          Designing and Building digital experiences that feel human.
        </h1>

        <div className="home-intro-today">
          <h2>Today</h2>
          <p>
            I care about how products look, how they behave, and how they hold
            up once they leave the canvas. I prototype in code, shape design
            systems, and close the gap between intended craft and shipped
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
