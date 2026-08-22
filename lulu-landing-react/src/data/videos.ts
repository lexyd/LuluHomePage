export type VideoCategory =
  | "Design Systems"
  | "Figma"
  | "AI"
  | "Product Design"
  | "Career";

export type PortfolioVideo = {
  title: string;
  youtubeId: string;
  category: VideoCategory;
  featured?: boolean;
};

export const youtubeChannelUrl = "https://www.youtube.com/@Designwithdestiny";

export const getYoutubeUrl = (youtubeId: string) =>
  `https://www.youtube.com/watch?v=${youtubeId}`;

export const getYoutubeThumbnail = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

export const videos: PortfolioVideo[] = [
  {
    title: "How to Get Into UX Design in 2026 / 2027",
    youtubeId: "RMQtBvrxecU",
    category: "Career",
    featured: true,
  },
  {
    title: "The AI Stack Separating Top 1% Designers From Everyone Else",
    youtubeId: "rKd8y-jNoPw",
    category: "AI",
  },
  {
    title: "My AI Stack as a Senior Product Designer & Design Engineer",
    youtubeId: "T7xF3VX9Bvk",
    category: "Product Design",
  },
  {
    title:
      "How to NOT Get Replaced by AI in 2026 | The New Skillset Every Designer & Engineer Needs",
    youtubeId: "hSR6yuTYMLM",
    category: "Career",
  },
  {
    title: "How to Install Claude Code as a Designer (Beginner Guide)",
    youtubeId: "RNthGo9gWQE",
    category: "AI",
  },
  {
    title: "Figma Slots: The Feature Every Designer Has Been Waiting For",
    youtubeId: "5qMRKpuCwmk",
    category: "Figma",
  },
  {
    title:
      "Master Figma's New Grid Update in 5 Minutes - Hug, FR Units & True Responsive Layouts!",
    youtubeId: "iwkmyaQ3o4w",
    category: "Figma",
  },
  {
    title:
      "Everything New in Figma Schema 2025 - Extended Collections, Slots & Design System Updates Explained!",
    youtubeId: "d9FU9YFZ2Io",
    category: "Design Systems",
  },
  {
    title: "Design Tokens and Variables - here's the truth no one told you.",
    youtubeId: "0-460NCcbHs",
    category: "Design Systems",
  },
  {
    title:
      "3 Silent Killers That Are Destroying Your Design System (And How to Fight Back)",
    youtubeId: "IA82joRUNOg",
    category: "Design Systems",
  },
  {
    title: "Your Design System Is Dying - (And You Don't Even Know It) !!",
    youtubeId: "fkQGHyCNP0Q",
    category: "Design Systems",
  },
  {
    title: "Figma Tutorial 2025: Full Walkthrough",
    youtubeId: "DznQbsqG9oU",
    category: "Figma",
  },
];

export const videoCategories: ("All" | VideoCategory)[] = [
  "All",
  "Design Systems",
  "Figma",
  "AI",
  "Product Design",
  "Career",
];
