import { heroCarouselSlides } from "../../data/heroCarouselSlides";

type CarouselInteractionDemoProps = {
  type: "transition" | "pagination" | "playback" | "controls";
};

const PaginationState = ({ active }: { active: number }) => (
  <div className="hero-pagination carousel-demo-pagination">
    {[1, 2, 3].map((item) => (
      <span
        key={item}
        className={`swiper-pagination-bullet ${
          item === active ? "swiper-pagination-bullet-active" : ""
        }`}
      >
        <span className="bullet-inner">{item}</span>
      </span>
    ))}
  </div>
);

const PlaybackButton = ({ paused = false }: { paused?: boolean }) => (
  <button
    className="hero-play-pause carousel-demo-play-pause"
    type="button"
    aria-label={paused ? "Play carousel" : "Pause carousel"}
  >
    <svg className="progress-ring" width="48" height="48">
      <circle
        className="progress-ring-circle"
        strokeWidth="2"
        fill="transparent"
        r="22.5"
        cx="24"
        cy="24"
      />
      <circle
        className={`progress-ring-progress ${paused ? "paused" : "animating"}`}
        strokeWidth="2"
        fill="transparent"
        r="22.5"
        cx="24"
        cy="24"
      />
    </svg>
    <span className="play-pause-icon">
      {paused ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="5" width="4" height="14" fill="currentColor" />
          <rect x="14" y="5" width="4" height="14" fill="currentColor" />
        </svg>
      )}
    </span>
  </button>
);

const CarouselInteractionDemo = ({ type }: CarouselInteractionDemoProps) => {
  return (
    <div className={`carousel-interaction-demo carousel-interaction-demo--${type}`}>
      {type === "transition" ? (
        <div className="carousel-transition-track" aria-hidden="true">
          {heroCarouselSlides.map((slide) => (
            <div className="carousel-transition-panel" key={slide.id}>
              {slide.type === "video" ? (
                <video src={slide.src} autoPlay muted loop playsInline />
              ) : (
                <img src={slide.src} alt="" />
              )}
            </div>
          ))}
        </div>
      ) : null}

      {type === "pagination" ? (
        <div className="carousel-demo-state-stack" aria-label="Pagination states">
          <PaginationState active={1} />
          <PaginationState active={2} />
          <PaginationState active={3} />
        </div>
      ) : null}

      {type === "playback" ? (
        <div className="carousel-demo-playback-row" aria-label="Playback states">
          <PlaybackButton />
          <PlaybackButton paused />
        </div>
      ) : null}

      {type === "controls" ? (
        <div className="carousel-demo-controls-row" aria-label="Carousel controls">
          <PaginationState active={2} />
          <PlaybackButton />
        </div>
      ) : null}
    </div>
  );
};

export default CarouselInteractionDemo;
