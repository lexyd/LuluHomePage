import { Link } from "react-router-dom";
import "./IncomingDrops.css";

interface Drop {
  id: number;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  href: string;
  media: string;
  type: "image" | "video";
}

const drops: Drop[] = [
  {
    id: 1,
    title: "Chargefeel 3",
    category: "Product",
    role: "Design + Engineering",
    year: "2026",
    description: "A performance launch surface shaped around motion and clarity.",
    href: "/projects",
    media: "/videos/play-like-its-personal.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "lululemon SoHo store opening",
    category: "Retail",
    role: "Experience Design",
    year: "2026",
    description: "A premium retail moment translated into a digital story.",
    href: "/projects",
    media: "/images/lululemon-soho-store-opening.png",
    type: "image",
  },
  {
    id: 3,
    title: "Summer Bags Drop",
    category: "Commerce",
    role: "Product Storytelling",
    year: "2026",
    description: "A seasonal product drop with image-led browsing rhythm.",
    href: "/projects",
    media: "/images/summer-bags-drop.png",
    type: "image",
  },
  {
    id: 4,
    title: "Spring Lookbook",
    category: "Editorial",
    role: "Interaction Design",
    year: "2026",
    description: "A lookbook concept balancing product, pace, and atmosphere.",
    href: "/projects",
    media: "/images/spring-lookbook.png",
    type: "image",
  },
  {
    id: 5,
    title: "ABC Collection",
    category: "Product",
    role: "Design Systems",
    year: "2026",
    description: "A collection surface structured for fast scanning and intent.",
    href: "/projects",
    media: "/images/abc-collection.png",
    type: "image",
  },
  {
    id: 6,
    title: "Team Canada Kit",
    category: "Brand",
    role: "Visual Systems",
    year: "2026",
    description: "A campaign card system for national-kit storytelling.",
    href: "/projects",
    media: "/images/team-canada-kit.png",
    type: "image",
  },
];

const IncomingDrops = () => {
  const featuredDrops = drops
    .filter((drop) => drop.title !== "Chargefeel 3")
    .slice(0, 4);

  return (
    <section className="incoming-drops-section">
      <div className="drops-container">
        <div className="drops-grid">
          {featuredDrops.map((drop) => (
            <Link
              key={drop.id}
              className="drop-card"
              to={drop.href}
              aria-label={`View ${drop.title} project: ${drop.category}, ${drop.role}, ${drop.year}. ${drop.description}`}
            >
              <div className="drop-image">
                {drop.type === "video" ? (
                  <video src={drop.media} autoPlay muted loop playsInline />
                ) : (
                  <img src={drop.media} alt={drop.title} />
                )}
                <div className="drop-overlay" aria-hidden="true">
                  <div className="drop-overlay-panel">
                    <div className="drop-meta">
                      <span>{drop.category}</span>
                      <span className="drop-role-separator">·</span>
                      <span className="drop-role">{drop.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{drop.year}</span>
                    </div>
                    <h3>{drop.title}</h3>
                    <p>{drop.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomingDrops;
