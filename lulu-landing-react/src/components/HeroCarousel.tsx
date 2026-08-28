import { useId, useState, useRef, useEffect } from "react";
import type { PointerEvent } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { heroCarouselSlides } from "../data/heroCarouselSlides";
import "./HeroCarousel.css";

const featuredProject = {
  href: "/projects/immersive-product-carousel",
  metadata: "LULULEMON · COMMERCE · MOTION",
  title: "Immersive Product Carousel",
  description: "Making product discovery feel fluid, tactile, and intentional.",
};

type HeroCarouselProps = {
  className?: string;
  showHeader?: boolean;
  showInfo?: boolean;
  variant?: "home" | "project-hero" | "project-demo";
};

const HeroCarousel = ({
  className = "",
  showHeader = true,
  showInfo = true,
  variant = "home",
}: HeroCarouselProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const previousActiveIndex = useRef<number>(0);
  const paginationId = useId().replace(/:/g, "");
  const paginationClass = `hero-pagination-${paginationId}`;

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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      const shouldReduce = mediaQuery.matches;
      setPrefersReducedMotion(shouldReduce);

      if (shouldReduce) {
        swiperRef.current?.autoplay?.stop();
        videoRefs.current.forEach((video) => video?.pause());
        setIsPlaying(false);
      }
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    // Sync video playback with initial state
    if (isPlaying && !prefersReducedMotion) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      });
    }
  }, [isPlaying, prefersReducedMotion]);

  return (
    <section
      className={`hero-showcase hero-showcase--${variant} ${className}`}
      aria-labelledby={showHeader ? "hero-showcase-title" : undefined}
      aria-label={showHeader ? undefined : "Immersive Product Carousel"}
    >
      {showHeader ? (
        <div className="hero-showcase-header">
          <p className="hero-showcase-label" id="hero-showcase-title">
            Featured Projects
          </p>
          <Link className="hero-showcase-link" to="/projects">
            <span className="cta-text">All Projects</span>
          </Link>
        </div>
      ) : null}
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
            el: `.${paginationClass}`,
            renderBullet: (index: number, className: string) => {
              return `<span class="${className}"><span class="bullet-inner">${
                index + 1
              }</span></span>`;
            },
          }}
          autoplay={
            prefersReducedMotion
              ? false
              : {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }
          }
          rewind={true}
          className="hero-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const currentIndex = swiper.realIndex;
            const prevIndex = previousActiveIndex.current;

            // Remove exiting class from all bullets
            const bullets = document.querySelectorAll(
              `.${paginationClass} .swiper-pagination-bullet`
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
          {heroCarouselSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide">
                {slide.type === "video" ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.src}
                    autoPlay={!prefersReducedMotion && isPlaying}
                    muted
                    loop
                    playsInline
                    className="hero-media"
                    aria-label={slide.alt}
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="hero-media"
                  />
                )}
                <div className="hero-overlay" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showInfo ? (
          <div className="hero-slide-info" aria-live="polite">
            <div className="hero-slide-info-panel">
              <div className="hero-slide-meta">{featuredProject.metadata}</div>
              <h3>
                <Link to={featuredProject.href}>{featuredProject.title}</Link>
              </h3>
              <p>{featuredProject.description}</p>
            </div>
          </div>
        ) : null}

        {/* Combined Controls: Pagination + Play/Pause Button */}
        <div className="hero-controls">
          {/* Custom Pagination Container */}
          <div className={`hero-pagination ${paginationClass}`}></div>

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
