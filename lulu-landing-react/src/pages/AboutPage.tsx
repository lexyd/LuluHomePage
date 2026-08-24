import Footer from "../components/Footer";
import { ExternalLinkIcon } from "../components/icons/StandardIcons";
import Navigation from "../components/Navigation";
import "./AboutPage.css";

const youtubeUrl = "https://www.youtube.com/@Designwithdestiny";

const values = [
  {
    title: "Craft",
    copy: "Taste, interaction, motion, and the small details that make an experience feel considered.",
  },
  {
    title: "Accessibility",
    copy: "Good products should work for more people, not fewer. I try to build accessibility into the product from the start, not add it at the end.",
  },
  {
    title: "Teaching",
    copy: "I love sharing what I learn. Through mentoring and YouTube, I help other designers understand the tools, systems, and thinking behind the work.",
    link: youtubeUrl,
  },
];

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main className="about-page">
        <section className="about-essay" aria-labelledby="about-title">
          <div className="about-rail">
            <h1 id="about-title">About</h1>

            <div className="about-copy">
              <p>
                I'm Destiny, a product designer and design engineer working
                across design, technology, and systems. I care about how
                things are made, how they feel to use, and the details that
                turn something functional into something people actually enjoy.
              </p>

              <p>
                I started on the technical side, spending years building
                software. But the more I built, the more I found myself wanting
                to change the experiences I was being asked to implement - the
                interactions, the details, and how the product actually felt.
              </p>

              <blockquote>
                <p>
                  Design should exist beyond the canvas. The best work holds up
                  in the product, in the code, and in the hands of the people
                  using it.
                </p>
              </blockquote>

              <p>
                So I learned design. Today, that intersection is where I'm most
                comfortable: shaping the experience, making the design
                decisions, and going into the code when I need to prototype,
                tweak, or bring an idea to life.
              </p>

              <p className="about-bridge">
                That way of working has shaped what I care about most.
              </p>

              <section
                className="about-values"
                aria-labelledby="about-values-title"
              >
                <h2 id="about-values-title">What matters to me</h2>
                <div className="about-values-grid">
                  {values.map((value) => (
                    <section className="about-note" key={value.title}>
                      <h3>{value.title}</h3>
                      <p>{value.copy}</p>
                      {value.link ? (
                        <a href={value.link} target="_blank" rel="noreferrer">
                          Watch on YouTube
                          <ExternalLinkIcon className="about-link-icon" />
                        </a>
                      ) : null}
                    </section>
                  ))}
                </div>
              </section>

              <p className="about-bridge">
                That curiosity doesn't really switch off when I close the
                laptop.
              </p>

              <h2>Away from the screen</h2>

              <p>I'm usually behind a camera or moving.</p>

              <p>
                Videography scratches the same itch as motion design for me:
                timing, composition, storytelling, and making something feel
                right.
              </p>

              <p>
                I also run and train regularly. I'm working toward my first half
                marathon, with an Ironman as the longer-term goal. I like having
                something difficult to work toward.
              </p>

              <h2>Always learning. Always building.</h2>

              <p>
                Whether it's a product, a skill, a story, or the next finish
                line, I'm happiest when I'm making something better than it was
                yesterday.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
