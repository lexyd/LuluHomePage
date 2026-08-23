import { useState, useRef, useEffect } from "react";
import type { PointerEvent } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "./HeroCarousel.css";

interface Slide {
  id: number;
  type: "video" | "image";
  src: string;
  heading: string;
  category: string;
  role: string;
  year: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/play-like-its-personal.mp4",
    heading: "Chargefeel 3",
    category: "Product",
    role: "Design + Engineering",
    year: "2026",
    description: "A performance launch surface shaped around motion and clarity.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/game-set-unmatched-gear.jpg",
    heading: "Game Set Unmatched",
    category: "Campaign",
    role: "Interaction Design",
    year: "2026",
    description: "A tennis-led editorial moment built for fast visual impact.",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/slnsh-x-lululemon.mp4",
    heading: "Saul Nash x lululemon",
    category: "Brand",
    role: "Product Storytelling",
    year: "2026",
    description: "A motion-rich collaboration surface with a premium editorial feel.",
  },
];

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const previousActiveIndex = useRef<number>(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
    event.currentTarget.style.setProperty("--spotlight-opacity", "1");
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  };

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
    <section className="hero-showcase" aria-labelledby="hero-showcase-title">
      <div className="hero-showcase-header">
        <p className="hero-showcase-label" id="hero-showcase-title">
          Featured Projects
        </p>
        <Link className="hero-showcase-link" to="/projects">
          <span className="cta-text">All Projects</span>
        </Link>
      </div>
      <div
        className="hero-carousel"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          effect="slide"
          speed={800}
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
          rewind={true}
          className="hero-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const currentIndex = swiper.realIndex;
            const prevIndex = previousActiveIndex.current;
            setActiveIndex(currentIndex);

            // Remove exiting class from all bullets
            const bullets = document.querySelectorAll(
              ".swiper-pagination-bullet"
            );
            bullets.forEach((bullet) => {
              bullet.classList.remove("bullet-exiting");
            });

            // Add exiting class to the previous bullet
            if (bullets[prevIndex]) {
              bullets[prevIndex].classList.add("bullet-exiting");
              // Remove the class after animation completes
              setTimeout(() => {
                bullets[prevIndex]?.classList.remove("bullet-exiting");
              }, 350);
            }

            previousActiveIndex.current = currentIndex;
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-slide-info" aria-live="polite">
          <div className="hero-slide-info-panel">
            <div className="hero-slide-meta">
              <span>{activeSlide.category}</span>
              <span className="hero-slide-role-separator">·</span>
              <span className="hero-slide-role">{activeSlide.role}</span>
              <span aria-hidden="true">·</span>
              <span>{activeSlide.year}</span>
            </div>
            <h3>{activeSlide.heading}</h3>
            <p>{activeSlide.description}</p>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default HeroCarousel;
