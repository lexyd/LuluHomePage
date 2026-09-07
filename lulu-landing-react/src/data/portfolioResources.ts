export type PortfolioCaseStudy = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type WrittenResource = {
  title: string;
  source: "Medium";
  category: "Design Systems" | "Career";
  description: string;
  href: string;
};

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
  {
    title: "Sprout Design Systems - Branch International",
    eyebrow: "Design Systems",
    description:
      "A design-system case study for Branch International, covering foundations, component decisions, and the structure needed to support a growing product team.",
    image: "/images/portfolio-resources/design-system-presentation.png",
    imageAlt: "Sprout Design Systems case study cover.",
  },
  {
    title: "Chat Bot A.i",
    eyebrow: "AI Interaction",
    description:
      "An AI chat experience focused on patient analysis, conversational flow, and making suggested actions feel clear inside a compact mobile interface.",
    image: "/images/portfolio-resources/chatbot-case-study.png",
    imageAlt: "Chat Bot A.i case study cover.",
  },
  {
    title: "Invest",
    eyebrow: "Finance",
    description:
      "A mobile investment concept exploring how savings goals, fixed investments, and simple financial decisions can be presented with less friction.",
    image: "/images/portfolio-resources/investment-case-study.png",
    imageAlt: "Invest case study cover.",
  },
  {
    title: "Redefining Systems Spacing",
    eyebrow: "Design Systems",
    description:
      "A focused design-system study on spacing rules, rhythm, and how layout decisions can become more consistent across product surfaces.",
    image: "/images/portfolio-resources/design-system-extension.png",
    imageAlt: "Redefining Systems Spacing case study cover.",
  },
];

export const writtenResources: WrittenResource[] = [
  {
    title: "How to create an efficient design system",
    source: "Medium",
    category: "Design Systems",
    description:
      "A practical article about making design systems easier to maintain, scale, and use across product teams.",
    href: "https://medium.com/design-bootcamp/how-to-create-an-efficient-design-system-e1166144eded",
  },
  {
    title: "Dealing with burnout",
    source: "Medium",
    category: "Career",
    description:
      "A personal design-career article on recognizing burnout and building a healthier relationship with creative work.",
    href: "https://medium.com/@destinyihejirika",
  },
];
