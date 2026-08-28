import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroCarouselSlides } from "../../data/heroCarouselSlides";

const ProjectCarouselPreview = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      const shouldReduce = mediaQuery.matches;
      setPrefersReducedMotion(shouldReduce);

      videoRefs.current.forEach((video) => {
        if (shouldReduce) {
          video?.pause();
        } else {
          video?.play().catch(() => {
            // Ignore autoplay restrictions; the image slides still carry the preview.
          });
        }
      });
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  return (
    <div
      className="project-carousel-preview"
      role="img"
      aria-label="Autoplaying preview of the immersive product carousel."
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={800}
        pagination={{ clickable: false }}
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
        }
        rewind
        className="project-carousel-preview-swiper"
      >
        {heroCarouselSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="project-carousel-preview-slide">
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.src}
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  aria-label={slide.alt}
                />
              ) : (
                <img src={slide.src} alt={slide.alt} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarouselPreview;
