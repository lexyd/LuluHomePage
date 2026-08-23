import Footer from "../components/Footer";
import { ExternalLinkIcon } from "../components/icons/StandardIcons";
import Navigation from "../components/Navigation";
import "./AboutPage.css";

const youtubeUrl = "https://www.youtube.com/@Designwithdestiny";

const values = [
  {
    title: "Craft",
    copy: "Taste, interaction, motion, and the details that make a product feel considered.",
  },
  {
    title: "Accessibility",
    copy: "Good products should work for more people, not fewer. I bring accessibility into my product and systems work, while continuing to deepen that expertise professionally.",
  },
  {
    title: "Teaching",
    copy: "I love teaching and mentoring. Through YouTube, I share what I've learned about design, systems, tools, and building products.",
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
                across design, technology, and systems. I care about how things
                look, how they work, and how they actually get built.
              </p>

              <p>
                Before product design, I spent years building software. But I
                kept finding myself wanting to change the experiences I was
                being asked to implement - the interactions, the details, and
                how the product actually felt.
              </p>

              <blockquote>
                <p>
                  Design should exist beyond the canvas. The best work holds up
                  in the product, in the code, and in the hands of the people
                  using it.
                </p>
              </blockquote>

              <p>
                So I started learning design. That became the intersection I
                work in today: shaping the experience, making the design
                decisions, and going into the code when I need to prototype,
                tweak, or bring an idea to life.
              </p>

              <h2>What matters to me</h2>

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

              <figure className="about-running-figure">
                <img
                  src="/images/about-running.jpg"
                  alt="Destiny running outdoors during training."
                  data-pin-nopin="true"
                />
              </figure>

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
              <p>I'm happiest when I'm making progress.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
