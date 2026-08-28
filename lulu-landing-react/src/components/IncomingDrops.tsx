import { Link } from "react-router-dom";
import ProjectPlaceholderIcon from "./icons/ProjectPlaceholderIcon";
import "./IncomingDrops.css";

interface Drop {
  id: number;
  title: string;
  metadata: string;
  description: string;
  href: string;
  external?: boolean;
  media?: string;
  type?: "image" | "video";
  fit?: "phone-stage" | "contain";
  visualLabel?: string;
}

const drops: Drop[] = [
  {
    id: 3,
    title: "Flexible Group Booking",
    metadata: "PRODUCT · DESIGN + ENGINEERING",
    description:
      "A service-commerce platform for managing bookings and business operations.",
    href: "/projects/flexible-group-booking",
    media: "/images/projects/calypad/Flexible-group-phone.png",
    type: "image",
    fit: "phone-stage",
    visualLabel: "Booking platform",
  },
  {
    id: 4,
    title: "Contextual Booking Drawer",
    metadata: "CALYPAD · CALENDAR · OPERATIONS",
    description:
      "Keeping booking details in context all the way through the exit.",
    href: "/projects/contextual-booking-drawer",
    media: "/images/projects/calypad/contextual-booking-drawer-calendar.png",
    type: "image",
    fit: "contain",
    visualLabel: "Booking drawer",
  },
];

const DropCard = ({ drop }: { drop: Drop }) => {
  const content = (
    <>
      <div className={`drop-image${drop.fit ? ` drop-image--${drop.fit}` : ""}`}>
        {drop.type === "video" && drop.media ? (
          <video
            className={drop.fit ? `drop-media--${drop.fit}` : undefined}
            src={drop.media}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : drop.media ? (
          <img
            className={drop.fit ? `drop-media--${drop.fit}` : undefined}
            src={drop.media}
            alt={drop.title}
          />
        ) : (
          <div
            className="drop-placeholder"
            role="img"
            aria-label={`${drop.title} placeholder preview`}
          >
            <span className="drop-placeholder-symbol">
              <ProjectPlaceholderIcon />
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
    </>
  );

  if (drop.external) {
    return (
      <a
        className="drop-card"
        href={drop.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${drop.title}: ${drop.metadata}. ${drop.description}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      className="drop-card"
      to={drop.href}
      aria-label={`View ${drop.title} project: ${drop.metadata}. ${drop.description}`}
    >
      {content}
    </Link>
  );
};

const IncomingDrops = () => {
  return (
    <section className="incoming-drops-section">
      <div className="drops-container">
        <div className="drops-grid">
          {drops.map((drop) => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomingDrops;
