import "./IncomingDrops.css";

interface Drop {
  id: number;
  title: string;
  media: string;
  type: "image" | "video";
  cta: {
    label: string;
    url: string;
  };
}

const drops: Drop[] = [
  {
    id: 1,
    title: "Chargefeel 3",
    media: "/videos/play-like-its-personal.mp4",
    type: "video",
    cta: { label: "Shop", url: "/chargefeel-3" },
  },
  {
    id: 2,
    title: "lululemon SoHo store opening",
    media: "/images/lululemon-soho-store-opening.png",
    type: "image",
    cta: { label: "Learn more", url: "/soho-opening" },
  },
  {
    id: 3,
    title: "Summer Bags Drop",
    media: "/images/summer-bags-drop.png",
    type: "image",
    cta: { label: "Shop", url: "/summer-bags" },
  },
  {
    id: 4,
    title: "Spring Lookbook",
    media: "/images/spring-lookbook.png",
    type: "image",
    cta: { label: "Shop", url: "/spring-lookbook" },
  },
  {
    id: 5,
    title: "ABC Collection",
    media: "/images/abc-collection.png",
    type: "image",
    cta: { label: "Shop", url: "/abc-collection" },
  },
  {
    id: 6,
    title: "Team Canada Kit",
    media: "/images/team-canada-kit.png",
    type: "image",
    cta: { label: "Shop", url: "/team-canada" },
  },
];

const IncomingDrops = () => {
  return (
    <section className="incoming-drops-section">
      <div className="drops-container">
        <h2 className="drops-title">Incoming: New drops</h2>
        <div className="drops-grid">
          {drops.map((drop) => (
            <div key={drop.id} className="drop-card">
              <div className="drop-image">
                {drop.type === "video" ? (
                  <video
                    src={drop.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={drop.media} alt={drop.title} />
                )}
              </div>
              <div className="drop-content">
                <h3 className="drop-title">{drop.title}</h3>
                <a href={drop.cta.url} className="drop-cta">
                  {drop.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncomingDrops;
