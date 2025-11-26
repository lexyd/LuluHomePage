import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    heading: "Engineering Design. At Scale",
    cta: { label: "View Case Studies", url: "#" },
  },
  {
    id: 2,
    type: "image",
    src: "/images/game-set-unmatched-gear.jpg",
    heading: "Design Meets Engineering.",
    cta: { label: "Explore Components", url: "#" },
  },
  {
    id: 3,
    type: "video",
    src: "/videos/slnsh-x-lululemon.mp4",
    heading: "Design Engineer",
    cta: { label: "About Me", url: "#" },
  },
];

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const previousActiveIndex = useRef<number>(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setCursorPos(newPos);
      
      if (isHovering) {
        setTrail((prevTrail) => [
          ...prevTrail,
          { ...newPos, id: Date.now() },
        ].slice(-15)); // Keep last 15 trail points
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  useEffect(() => {
    if (!isHovering) {
      setTrail([]);
    }
  }, [isHovering]);

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
    <section
      className="hero-carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

          // Update active slide index for content display
          setActiveSlideIndex(currentIndex);

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

      {/* Fixed Content Overlay */}
      <div className="hero-content">
        {slides[activeSlideIndex].subheading && (
          <p key={`sub-${activeSlideIndex}`} className="hero-subheading">
            {slides[activeSlideIndex].subheading}
          </p>
        )}
        <h1
          key={`heading-${activeSlideIndex}`}
          className={`hero-heading ${
            slides[activeSlideIndex].id === 2 ? "hero-heading--multiline" : ""
          }`}
        >
          {slides[activeSlideIndex].heading.split(/\s+/).map((word, i) => (
            <span
              key={i}
              className="hero-heading-word"
              style={{ animationDelay: `${150 + i * 80}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <a
          key={`cta-${activeSlideIndex}`}
          href={slides[activeSlideIndex].cta.url}
          className="hero-cta"
        >
          <span className="cta-text">{slides[activeSlideIndex].cta.label}</span>
        </a>
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

      {/* Custom Cursor with Trail */}
      {isHovering && (
        <>
          {trail.map((point, index) => (
            <div
              key={point.id}
              className="cursor-trail"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                opacity: (index / trail.length) * 0.6,
                transform: `translate(-50%, -50%) scale(${0.3 + (index / trail.length) * 0.7})`,
              }}
            />
          ))}
          <div
            className="custom-cursor"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          >
            <div className="cursor-dot"></div>
            <div className="cursor-ring"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;
