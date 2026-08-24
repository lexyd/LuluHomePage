import { Link } from "react-router-dom";
import "./IncomingDrops.css";

interface Drop {
  id: number;
  title: string;
  metadata: string;
  description: string;
  href: string;
  media?: string;
  type?: "image" | "video";
  visualLabel?: string;
}

const drops: Drop[] = [
  {
    id: 1,
    title: "Shop the Look",
    metadata: "LULULEMON · COMMERCE · INTERACTION",
    description:
      "Turning editorial inspiration into an intuitive path to purchase.",
    href: "/projects/shop-the-look",
    media: "/images/lululemon-soho-store-opening.png",
    type: "image",
  },
  {
    id: 2,
    title: "Symbiotique",
    metadata: "DESIGN SYSTEMS · AI · ENTERPRISE",
    description:
      "A design system built to scale AI-powered product experiences across teams and platforms.",
    href: "/projects/symbiotique",
    visualLabel: "System components",
  },
  {
    id: 3,
    title: "CalyPad",
    metadata: "PRODUCT · DESIGN + ENGINEERING",
    description:
      "A service-commerce platform for managing bookings and business operations.",
    href: "/projects/calypad",
    visualLabel: "Booking platform",
  },
  {
    id: 4,
    title: "Deska",
    metadata: "MARKETPLACE · PRODUCT · DESIGN + ENGINEERING",
    description:
      "A pre-owned device marketplace for buying quality used phones and selling devices with ease.",
    href: "/projects/deska",
    visualLabel: "Device marketplace",
  },
];

const IncomingDrops = () => {
  return (
    <section className="incoming-drops-section">
      <div className="drops-container">
        <div className="drops-grid">
          {drops.map((drop) => (
            <Link
              key={drop.id}
              className="drop-card"
              to={drop.href}
              aria-label={`View ${drop.title} project: ${drop.metadata}. ${drop.description}`}
            >
              <div className="drop-image">
                {drop.type === "video" && drop.media ? (
                  <video src={drop.media} autoPlay muted loop playsInline />
                ) : drop.media ? (
                  <img src={drop.media} alt={drop.title} />
                ) : (
                  <div
                    className="drop-placeholder"
                    role="img"
                    aria-label={`${drop.title} placeholder preview`}
                  >
                    <span className="drop-placeholder-bars">
                      <i />
                      <i />
                    </span>
                    <strong>{drop.visualLabel}</strong>
                  </div>
                )}
                <div className="drop-overlay" aria-hidden="true">
                  <div className="drop-overlay-panel">
                    <div className="drop-meta">{drop.metadata}</div>
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
