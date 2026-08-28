export interface HeroCarouselSlide {
  id: number;
  type: "video" | "image";
  src: string;
  alt: string;
}

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/play-like-its-personal.mp4",
    alt: "lululemon product motion clip for an immersive commerce carousel.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/game-set-unmatched-gear.jpg",
    alt: "lululemon tennis campaign image for product discovery.",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/slnsh-x-lululemon.mp4",
    alt: "Saul Nash x lululemon motion clip for product storytelling.",
  },
];
