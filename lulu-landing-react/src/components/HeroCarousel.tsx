import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
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
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {slide.type === "video" ? (
                <video
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
    </section>
  );
};

export default HeroCarousel;
