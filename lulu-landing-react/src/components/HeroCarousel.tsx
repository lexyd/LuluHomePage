import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "./HeroCarousel.css";

interface Slide {
  id: number;
  type: "video" | "image";
  src: string;
  heading: string;
  subheading?: string;
  cta: {
    label: string;
    url: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/play-like-its-personal.mp4",
    heading: "Play like it's personal",
    cta: { label: "Shop Women's What's New", url: "#" },
  },
  {
    id: 2,
    type: "image",
    src: "/images/game-set-unmatched-gear.jpg",
    heading: "Game. Set. Unmatched gear.",
    cta: { label: "Explore Tennis", url: "#" },
  },
  {
    id: 3,
    type: "video",
    src: "/videos/slnsh-x-lululemon.mp4",
    heading: "Saul Nash x lululemon",
    subheading: "Movement, evolved.",
    cta: { label: "Shop the Collection", url: "#" },
  },
];

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const previousActiveIndex = useRef<number>(0);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      const newPlayingState = !isPlaying;

      if (newPlayingState) {
        swiperRef.current.autoplay.start();
        // Play all videos
        videoRefs.current.forEach((video) => {
          if (video) {
            video.play().catch(() => {
              // Ignore autoplay errors
            });
          }
        });
      } else {
        swiperRef.current.autoplay.stop();
        // Pause all videos
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
          }
        });
      }

      setIsPlaying(newPlayingState);
    }
  };

  useEffect(() => {
    // Sync video playback with initial state
    if (isPlaying) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      });
    }
  }, [isPlaying]);

  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".hero-pagination",
          renderBullet: (index: number, className: string) => {
            return `<span class="${className}"><span class="bullet-inner">${
              index + 1
            }</span></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop
        className="hero-swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          // Add exiting class to previous active bullet
          const bullets = document.querySelectorAll(
            ".hero-pagination .swiper-pagination-bullet"
          );
          const prevBullet = bullets[previousActiveIndex.current];

          if (prevBullet && previousActiveIndex.current !== swiper.realIndex) {
            prevBullet.classList.add("bullet-exiting");

            // Remove class after animation completes
            setTimeout(() => {
              prevBullet.classList.remove("bullet-exiting");
            }, 350);
          }

          previousActiveIndex.current = swiper.realIndex;
        }}
        onAutoplayStart={() => setIsPlaying(true)}
        onAutoplayStop={() => setIsPlaying(false)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-media"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.heading}
                  className="hero-media"
                />
              )}
              <div className="hero-overlay" />
              <div className="hero-content">
                {slide.subheading && (
                  <p className="hero-subheading">{slide.subheading}</p>
                )}
                <h1 className="hero-heading">{slide.heading}</h1>
                <a href={slide.cta.url} className="hero-cta">
                  {slide.cta.label}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Combined Controls: Pagination + Play/Pause Button */}
      <div className="hero-controls">
        {/* Custom Pagination Container */}
        <div className="hero-pagination"></div>

        {/* Play/Pause Button */}
        <button
          className="hero-play-pause"
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
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
              className={`progress-ring-progress ${
                isPlaying ? "animating" : "paused"
              }`}
              strokeWidth="2"
              fill="transparent"
              r="22.5"
              cx="24"
              cy="24"
            />
          </svg>
          <span className="play-pause-icon">
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                <rect x="14" y="5" width="4" height="14" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
