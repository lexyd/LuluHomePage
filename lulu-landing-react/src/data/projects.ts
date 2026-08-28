export type ProjectGroup =
  | "Systems & Design Engineering"
  | "Personal Projects"
  | "Coming Soon";

export type ProjectDetailMedia = {
  title?: string;
  component?:
    | "hero-carousel"
    | "carousel-transition-demo"
    | "carousel-pagination-demo"
    | "carousel-playback-demo"
    | "carousel-controls-demo";
  image?: string;
  video?: string;
  poster?: string;
  fit?: "cover" | "contain" | "phone-stage" | "phone-contain";
  imageAlt: string;
  visualLabel: string;
  caption?: string;
};

export type ProjectDetailSectionLayout =
  | "full"
  | "two-up"
  | "media-text"
  | "text-media"
  | "mobile-before-after"
  | "device-comparison"
  | "detail-crops";

export type ProjectDetailSection = {
  title: string;
  statement?: string;
  paragraphs?: string[];
  flow?: string[];
  layout: ProjectDetailSectionLayout;
  media: ProjectDetailMedia[];
};

export type ProjectDetail = {
  eyebrow: string;
  summary: string;
  role: string;
  company: string;
  scope: string;
  customMeta?: {
    label: string;
    value: string;
  }[];
  metaLabels?: {
    role?: string;
    company?: string;
    scope?: string;
    year?: string;
  };
  heroVisual: ProjectDetailMedia;
  proofPoints: {
    label: string;
    value?: string;
    description: string;
  }[];
  overview: {
    label?: string;
    heading?: string;
    paragraphs: string[];
  };
  ownership: string[];
  sections: ProjectDetailSection[];
  outcomes: {
    title: string;
    description: string;
  }[];
  reflection?: string;
  closingStatement?: string;
  nextProjectSlug?: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  company?: string;
  year: string;
  description: string;
  externalUrl?: string;
  image?: string;
  imageAlt: string;
  visualLabel?: string;
  featured?: boolean;
  comingSoon?: boolean;
  group: ProjectGroup;
  detail?: ProjectDetail;
};

export const activeCaseStudySlugs = [
  "flexible-group-booking",
  "contextual-booking-drawer",
  "immersive-product-carousel",
] as const;

export const featuredProjects: Project[] = [
  {
    title: "AI Chat Input",
    slug: "symbiotique",
    category: "Publicis · AI · Interaction",
    company: "Publicis",
    year: "2026",
    description:
      "A compact AI input pattern for prompting, feedback, and response states.",
    imageAlt: "Placeholder AI chat input interaction composition for Publicis.",
    visualLabel: "AI chat input",
    featured: true,
    comingSoon: true,
    group: "Coming Soon",
    detail: {
      eyebrow: "Publicis · AI · Interaction",
      summary:
        "Designing an AI chat input that makes prompting feel clear, responsive, and usable.",
      role: "Product Design · Design Engineering",
      company: "Publicis",
      scope: "AI · Input States · Interaction",
      heroVisual: {
        imageAlt:
          "Placeholder showing the Publicis AI chat input and prompt states.",
        visualLabel: "AI chat input",
        caption: "Placeholder visual. Replace with the real Publicis input screens or recording.",
      },
      proofPoints: [
        {
          label: "Prompting surface",
          description:
            "A focused input pattern for the moment users ask the AI to do something.",
        },
        {
          label: "State feedback",
          description:
            "Visual and motion states communicate focus, readiness, and system activity.",
        },
        {
          label: "Buildable behaviour",
          description:
            "The interaction is shaped as implemented behaviour, not only a static mockup.",
        },
      ],
      overview: {
        heading:
          "The chat input is small, but it sets the tone for the entire AI experience.",
        paragraphs: [
          "For Publicis, the AI chat input became the place where product intent, system feedback, and user confidence had to meet.",
          "The work focused on making the input feel responsive without becoming decorative: clear focus states, readable prompt composition, restrained motion, and feedback that helps users understand what the AI is doing.",
        ],
      },
      ownership: [
        "Input interaction design",
        "Prompt states",
        "Motion behaviour",
        "Prototype implementation",
        "Accessibility",
        "Responsive behaviour",
      ],
      sections: [
        {
          title: "Designing the first moment of AI",
          statement:
            "The input needed to feel trustworthy before the AI ever returned an answer.",
          paragraphs: [
            "The prompt field is where users decide what to ask, how much context to provide, and whether the system feels ready. The design work centered on that moment of intent.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt:
                "Placeholder focused Publicis AI input state.",
              visualLabel: "Input focus",
              caption: "Placeholder visual. Replace with the real focused input state.",
            },
          ],
        },
        {
          title: "States that explain themselves",
          statement:
            "The interaction needed to show what was happening without asking the user to interpret too much UI.",
          paragraphs: [
            "Focus, active, loading, and response states were treated as part of one interaction language. The goal was to make the field feel alive enough to communicate state, but quiet enough to keep writing comfortable.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt:
                "Placeholder active Publicis AI input state.",
              visualLabel: "Active",
              caption: "Placeholder active input state.",
            },
            {
              imageAlt:
                "Placeholder thinking or loading Publicis AI input state.",
              visualLabel: "Thinking",
              caption: "Placeholder AI activity state.",
            },
          ],
        },
        {
          title: "Motion as feedback",
          statement:
            "Motion should explain state, not decorate the field.",
          paragraphs: [
            "Small changes in gradient, focus, and timing can make an AI surface feel more responsive. The restraint matters: the animation has to support the prompt task instead of competing with it.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt:
                "Placeholder Publicis chat input motion sequence.",
              visualLabel: "Motion states",
              caption: "Placeholder visual. Replace with the real input animation.",
            },
          ],
        },
        {
          title: "Keeping the input usable",
          statement:
            "A prompt field still has to behave like a strong form control.",
          paragraphs: [
            "The interaction has to preserve readability, clear affordances, keyboard access, and responsive behaviour while layering AI-specific feedback on top.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt:
                "Placeholder desktop Publicis AI chat input layout.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt:
                "Placeholder tablet Publicis AI chat input layout.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt:
                "Placeholder mobile Publicis AI chat input layout.",
              visualLabel: "Mobile",
            },
          ],
        },
        {
          title: "Designing it to survive implementation",
          statement:
            "The input needed to be specified as behaviour, not just appearance.",
          paragraphs: [
            "The design engineering work lives in the details: how the field responds to focus, how activity is communicated, how motion is reduced when needed, and how the component remains predictable across screen sizes.",
          ],
          layout: "full",
          flow: [
            "Prompt intent",
            "Input state",
            "System activity",
            "Response feedback",
            "Reduced motion",
          ],
          media: [
          ],
        },
      ],
      outcomes: [
        {
          title: "Clearer AI state",
          description:
            "The input gives users a better sense of when the system is ready, active, or responding.",
        },
        {
          title: "More usable prompt surface",
          description:
            "The field stays focused on writing while still carrying AI-specific feedback.",
        },
        {
          title: "Buildable interaction language",
          description:
            "The behaviour can inform other AI surfaces beyond this single input.",
        },
      ],
      reflection:
        "A prompt input is a small surface with a large responsibility. It shapes how confident the user feels before, during, and after asking the system for help.",
      nextProjectSlug: "flexible-group-booking",
    },
  },
  {
    title: "Flexible Group Booking",
    slug: "flexible-group-booking",
    category: "Product · Booking · Interaction",
    company: "CalyPad",
    year: "2026",
    description:
      "Making everyday booking interactions feel simple, even when the logic behind them isn't.",
    image: "/images/projects/calypad/flexible-group-booking-cover.png",
    imageAlt: "CalyPad group booking flow with a group option and four people selected.",
    visualLabel: "Booking platform",
    featured: true,
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Product · Booking · Interaction",
      summary:
        "Making group booking feel like a natural extension of choosing who the appointment is for.",
      role: "Product Design · Design Engineering",
      company: "CalyPad",
      scope: "",
      customMeta: [
        {
          label: "Product",
          value: "CalyPad",
        },
        {
          label: "Role",
          value: "Product Design · Design Engineering",
        },
        {
          label: "Date",
          value: "2026",
        },
      ],
      heroVisual: {
        image: "/images/projects/calypad/Flexible-group-phone.png",
        fit: "phone-stage",
        imageAlt:
          "Phone mockup showing the CalyPad flexible group booking service selection screen.",
        visualLabel: "Flexible group booking phone",
        caption:
          "The selected booking type and people counter stay connected as one interaction.",
      },
      proofPoints: [],
      overview: {
        label: "",
        paragraphs: [
          "CalyPad lets someone book a service for themselves or for a small group. Selecting \"A group\" reveals a people counter before the customer continues through the rest of the booking.",
          "The interaction worked, but the transition didn't feel connected. The counter appeared immediately and the card jumped to its new height.",
        ],
      },
      ownership: [],
      sections: [
        {
          title: "Revealing the counter without the jump",
          layout: "mobile-before-after",
          media: [
            {
              title: "Before",
              video: "/images/projects/calypad/flexible-group-booking-before.mov",
              poster: "/images/projects/calypad/flexible-group-booking-mobile.png",
              imageAlt:
                "Before video showing the group booking counter appearing immediately after A group is selected.",
              visualLabel: "Before",
            },
            {
              title: "After",
              video: "/images/projects/calypad/flexible-group-booking-after.mov",
              poster: "/images/projects/calypad/flexible-group-booking-cover.png",
              imageAlt:
                "After video showing the group booking counter revealing smoothly after A group is selected.",
              visualLabel: "After",
            },
          ],
        },
        {
          title: "Summary",
          paragraphs: [
            "The original component conditionally mounted the people counter as soon as \"A group\" was selected. The controls worked, but introducing them instantly caused the card height to jump and made the second state feel disconnected from the action that triggered it.",
            "I changed the reveal to a short expansion using layout, opacity, and a small vertical settle. Instead of popping into the layout, the counter now feels like it grows out of the selected booking state.",
            "The motion is deliberately small. It doesn't add another step or make the control more decorative. It simply makes the relationship between the two states easier to follow.",
          ],
          layout: "full",
          media: [],
        },
        {
          title: "A small interaction carrying real product logic",
          paragraphs: [
            "The control looks small, but the selected group size travels through the rest of the booking. It affects the time reserved for the appointment, the service total, and the duration used when CalyPad looks for availability.",
            "The final booking values are also derived and verified on the server rather than relying only on what the client sends.",
          ],
          layout: "media-text",
          media: [
            {
              image: "/images/projects/calypad/flexible-group-booking-summary.png",
              fit: "contain",
              imageAlt:
                "CalyPad booking summary showing booking details after time selection.",
              visualLabel: "Booking summary",
              caption:
                "The selected group size continues into the summary and booking calculations.",
            },
          ],
        },
        {
          title: "Motion and accessibility",
          paragraphs: [
            "The reveal respects reduced-motion preferences, removing the transition when motion has been reduced at the system level.",
          ],
          layout: "full",
          media: [],
        },
      ],
      outcomes: [],
      closingStatement:
        "The booking didn't gain a new capability. It simply stopped feeling like one state had been swapped abruptly for another.",
      nextProjectSlug: "contextual-booking-drawer",
    },
  },
  {
    title: "Deska",
    slug: "deska",
    category: "Marketplace · Product · Design + Engineering",
    company: "Deska",
    year: "2026",
    description:
      "A pre-owned device marketplace for buying quality used phones and selling devices with ease.",
    externalUrl: "https://deskatech.com/app",
    imageAlt: "Placeholder pre-owned device marketplace interface composition for Deska.",
    visualLabel: "Device marketplace",
    featured: true,
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Marketplace · Product · Design + Engineering",
      summary:
        "A pre-owned device marketplace for buying quality used phones and selling devices with ease.",
      role: "Product Designer + Design Engineer",
      company: "Deska",
      scope: "Marketplace · Commerce · Trust",
      heroVisual: {
        imageAlt: "Placeholder device marketplace interface for Deska.",
        visualLabel: "Device marketplace",
        caption: "Placeholder visual. Replace with real Deska product screens.",
      },
      proofPoints: [
        {
          label: "Buy pre-owned",
          description:
            "A product surface for finding quality pre-owned devices with clear condition and pricing details.",
        },
        {
          label: "Sell with ease",
          description:
            "A guided path for people to sell devices they no longer use.",
        },
        {
          label: "Trust signals",
          description:
            "Inspection, battery, and IMEI checks help make second-hand device buying feel safer.",
        },
      ],
      overview: {
        heading:
          "Deska turns second-hand device buying into a clearer, more trusted marketplace experience.",
        paragraphs: [
          "Deska helps people buy quality pre-owned phones or sell the devices they no longer use. The live page positions the product around clear listings, early access, and a guided process for buying and selling.",
          "The design challenge is trust. Second-hand commerce needs condition details, pricing clarity, device checks, and enough transparency for people to feel comfortable acting.",
        ],
      },
      ownership: [
        "Marketplace product direction",
        "Listing experience",
        "Trust and verification cues",
        "Buying and selling flows",
        "Responsive product structure",
        "Sustainability storytelling",
      ],
      sections: [
        {
          title: "Designing for device trust",
          statement:
            "A marketplace for used devices has to make quality visible before someone is ready to buy.",
          paragraphs: [
            "Deska emphasizes inspected devices, battery checks, and IMEI verification so trust is part of the product experience, not buried in policy text.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder Deska inspected device listing.",
              visualLabel: "Device checks",
            },
          ],
        },
        {
          title: "From listing to confidence",
          statement:
            "A good listing needs to answer the buyer's questions before they become objections.",
          paragraphs: [
            "The product story is built around clear device details, condition notes, storage and color, pricing, and sale status. The first drop being sold out gives the marketplace a useful proof point for demand.",
          ],
          layout: "detail-crops",
          media: [
            {
              imageAlt: "Placeholder Deska device condition detail.",
              visualLabel: "Condition",
            },
            {
              imageAlt: "Placeholder Deska battery health detail.",
              visualLabel: "Battery",
            },
            {
              imageAlt: "Placeholder Deska IMEI verification detail.",
              visualLabel: "IMEI",
            },
          ],
        },
        {
          title: "A second life for better devices",
          statement:
            "The sustainability story gives the marketplace a reason to exist beyond price.",
          paragraphs: [
            "The page frames pre-owned devices as devices worth keeping. Extending a device lifespan helps reduce unnecessary waste and connects the buying experience to a larger environmental message.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt: "Placeholder Deska sustainability proof point.",
              visualLabel: "Second life",
              caption: "Placeholder visual. Replace with real Deska sustainability or listing screens.",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Clearer marketplace positioning",
          description:
            "The product now reads as a trusted pre-owned device marketplace.",
        },
        {
          title: "Stronger trust model",
          description:
            "Inspection, battery, and IMEI checks give the experience concrete credibility cues.",
        },
        {
          title: "Better sustainability story",
          description:
            "The product connects second-hand commerce to reducing device waste.",
        },
      ],
      reflection:
        "Marketplace design is mostly trust design. The interface has to make condition, value, and risk legible before people feel ready to act.",
      nextProjectSlug: "ai-interaction-patterns",
    },
  },
];

export const additionalProjects: Project[] = [
  {
    title: "Contextual Booking Drawer",
    slug: "contextual-booking-drawer",
    category: "CalyPad · Calendar · Operations",
    company: "CalyPad",
    year: "2026",
    description:
      "Opening booking details without taking staff away from the calendar.",
    image: "/images/projects/calypad/contextual-booking-drawer-cover.png",
    imageAlt:
      "CalyPad booking drawer open over the calendar context.",
    visualLabel: "Booking drawer",
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "CalyPad · Calendar · Operations",
      summary:
        "Keeping booking details in context — all the way through the exit.",
      role: "Product Design · Design Engineering",
      company: "CalyPad",
      scope: "",
      customMeta: [
        {
          label: "Product",
          value: "CalyPad",
        },
        {
          label: "Role",
          value: "Product Design · Design Engineering",
        },
        {
          label: "Date",
          value: "2026",
        },
      ],
      heroVisual: {
        image: "/images/projects/calypad/contextual-booking-drawer-calendar.png",
        fit: "contain",
        imageAlt:
          "CalyPad calendar view used as the contextual booking drawer starting point.",
        visualLabel: "Calendar context",
        caption: "The drawer starts from the calendar rather than replacing it.",
      },
      proofPoints: [],
      overview: {
        label: "",
        paragraphs: [
          "CalyPad staff manage appointments from a calendar, so booking details open in a drawer rather than replacing the page. The surrounding schedule stays visible while the booking's information and actions come into view.",
          "The drawer already animated when opening and closing. The issue showed up at the very end of the interaction.",
        ],
      },
      ownership: [],
      sections: [
        {
          title: "Letting the whole drawer leave together",
          layout: "mobile-before-after",
          media: [
            {
              title: "Before",
              video: "/images/projects/calypad/contextual-booking-drawer-before.mov",
              poster: "/images/projects/calypad/contextual-booking-drawer-mobile.png",
              imageAlt:
                "Before video showing the booking drawer contents disappearing before the panel finishes closing.",
              visualLabel: "Before",
            },
            {
              title: "After",
              video: "/images/projects/calypad/contextual-booking-drawer-after.mov",
              poster: "/images/projects/calypad/contextual-booking-drawer-cover.png",
              imageAlt:
                "After video showing the booking drawer contents and panel closing together.",
              visualLabel: "After",
            },
          ],
        },
        {
          title: "Summary",
          paragraphs: [
            "Originally, the backdrop faded and the drawer slid from the right, but closing it immediately cleared the selected booking. The container continued its exit animation after the contents had already disappeared, leaving an empty panel sliding away.",
            "The issue wasn't that the drawer needed more animation. The visual transition and the lifecycle of the content weren't finishing together.",
            "I kept the booking content mounted through the closing state and retuned the drawer to a smoother slide and fade with a softer easing curve. The content and container now leave together, so the drawer reads as one object from the moment it enters until the moment it disappears.",
          ],
          layout: "full",
          media: [],
        },
        {
          title: "Keeping the calendar in view",
          paragraphs: [
            "The drawer exists to preserve context. Staff can inspect a booking's status, customer, service, team member, location, time, payment information, and notes without navigating away from the calendar.",
            "Closing it returns them to the same working surface they started from.",
          ],
          layout: "media-text",
          media: [
            {
              image: "/images/projects/calypad/contextual-booking-drawer-calendar.png",
              fit: "contain",
              imageAlt:
                "CalyPad calendar and schedule page before opening the booking drawer.",
              visualLabel: "Calendar context",
              caption:
                "The drawer starts from a calendar view, not a separate detail destination.",
            },
          ],
        },
        {
          title: "Actions follow the booking",
          paragraphs: [
            "The drawer also responds to the booking itself. Open bookings can expose actions such as completing or cancelling the appointment, while completed, cancelled, and no-show bookings don't present those same actions.",
            "Those states are tied to shared booking logic rather than being defined independently inside the drawer.",
          ],
          layout: "two-up",
          media: [
            {
              image: "/images/projects/calypad/contextual-booking-drawer-actions.png",
              fit: "contain",
              imageAlt:
                "CalyPad booking drawer showing booking details and available actions.",
              visualLabel: "Drawer actions",
              caption:
                "Booking details and actions live in the panel while the calendar remains close by.",
            },
            {
              image: "/images/projects/calypad/contextual-booking-drawer-mobile.png",
              fit: "phone-contain",
              imageAlt:
                "Mobile responsive CalyPad booking drawer detail view.",
              visualLabel: "Mobile drawer",
              caption:
                "On mobile, the drawer pattern becomes a focused booking detail surface.",
            },
          ],
        },
        {
          title: "Motion and accessibility",
          paragraphs: [
            "The updated drawer respects reduced-motion preferences and includes basic dialog semantics. The motion remains an enhancement rather than the only way the opening and closing state is communicated.",
          ],
          layout: "full",
          media: [],
        },
      ],
      outcomes: [],
      closingStatement:
        "Opening the drawer was never the interesting bug. Closing it revealed the disconnect. Keeping the content and container alive through the same transition made the interaction feel complete without changing what the feature actually does.",
      nextProjectSlug: "immersive-product-carousel",
    },
  },
  {
    title: "Immersive Product Carousel",
    slug: "immersive-product-carousel",
    category: "Lululemon · Commerce · Motion",
    company: "lululemon",
    year: "2026",
    description:
      "Making product discovery feel fluid, tactile, and intentional.",
    image: "/images/game-set-unmatched-gear.jpg",
    imageAlt: "lululemon tennis campaign image used for an immersive product carousel.",
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Lululemon · Commerce · Motion",
      summary:
        "Making product discovery feel fluid, tactile, and intentional.",
      role: "Product Design · Interaction Design",
      company: "lululemon",
      scope: "Commerce · Interaction · Motion",
      customMeta: [
        {
          label: "Company",
          value: "lululemon",
        },
        {
          label: "Role",
          value: "Product Design · Interaction Design",
        },
        {
          label: "Scope",
          value: "Commerce · Interaction · Motion",
        },
        {
          label: "Year",
          value: "2026",
        },
      ],
      heroVisual: {
        component: "hero-carousel",
        imageAlt:
          "Live immersive product carousel with lululemon campaign imagery, numbered pagination, and pause/play control.",
        visualLabel: "Product carousel",
        caption:
          "The same carousel component and assets used on the homepage.",
      },
      proofPoints: [],
      overview: {
        label: "",
        paragraphs: [
          "Carousels are familiar, but familiarity doesn't automatically make them feel good.",
          "For this lululemon feature, I wanted the campaign imagery to stay expressive while the interaction remained easy to understand and control. The work focused on the transitions between slides, clear position in the sequence, and controls that never compete with navigation around them.",
        ],
      },
      ownership: [],
      sections: [
        {
          title: "Moving between stories",
          paragraphs: [
            "The transition needed to carry the energy of the campaign without becoming the thing people noticed first.",
            "I kept the movement restrained so one story flows into the next while the imagery stays in control. The motion connects the slides, but the photography remains the focus.",
          ],
          layout: "media-text",
          media: [
            {
              component: "carousel-transition-demo",
              imageAlt:
                "Focused demo showing movement between lululemon carousel slides.",
              visualLabel: "Slide motion",
            },
          ],
        },
        {
          title: "Knowing where you are",
          paragraphs: [
            "The numbered pagination makes position explicit without adding a heavy navigation layer.",
            "Each state shows where you are in the sequence while keeping the control compact enough to sit quietly over the imagery.",
          ],
          layout: "media-text",
          media: [
            {
              component: "carousel-pagination-demo",
              imageAlt:
                "Focused demo showing numbered carousel pagination states one, two, and three.",
              visualLabel: "1 2 3",
            },
          ],
        },
        {
          title: "Staying in control",
          paragraphs: [
            "Because the carousel can move on its own, stopping that motion needs to be as obvious as moving between slides.",
            "Pause and play sit as a separate control so playback and navigation remain two distinct actions.",
          ],
          layout: "media-text",
          media: [
            {
              component: "carousel-playback-demo",
              imageAlt:
                "Focused demo showing carousel pause and play control states.",
              visualLabel: "Pause and play",
            },
          ],
        },
        {
          title: "Working together without competing",
          paragraphs: [
            "The controls are designed to work together without collapsing into one interaction.",
            "Pagination changes position in the sequence. Pause and play control motion. Keeping them visually grouped but functionally separate makes the carousel easier to understand and easier to use.",
          ],
          layout: "media-text",
          media: [
            {
              component: "carousel-controls-demo",
              imageAlt:
                "Focused demo showing carousel pagination and pause/play controls grouped together.",
              visualLabel: "Carousel controls",
            },
          ],
        },
        {
          title: "Summary",
          paragraphs: [
            "The work here wasn't about inventing a new carousel pattern. It was about refining a familiar one until movement, orientation, and control felt like parts of the same experience.",
            "The imagery carries the brand expression. The motion connects the stories. The controls give people enough information to move through it on their own terms.",
          ],
          layout: "full",
          media: [],
        },
        {
          title: "Familiar pattern. Better feel.",
          paragraphs: [
            "The carousel still does what a carousel has always done: move between pieces of content.",
            "What changed is how that movement feels: more connected, easier to control, and quiet enough to let the campaign remain the reason you stop and look.",
          ],
          layout: "full",
          media: [],
        },
      ],
      outcomes: [],
      nextProjectSlug: "flexible-group-booking",
    },
  },
  {
    title: "Shop the Look",
    slug: "shop-the-look",
    category: "Lululemon · Commerce · Interaction",
    company: "lululemon",
    year: "2026",
    description:
      "Turning editorial inspiration into an intuitive path to purchase.",
    image: "/images/lululemon-soho-store-opening.png",
    imageAlt: "lululemon retail experience image used for Shop the Look.",
    comingSoon: true,
    group: "Coming Soon",
    detail: {
      eyebrow: "Lululemon · Commerce · Interaction",
      summary:
        "Turning editorial inspiration into an intuitive path to purchase.",
      role: "Product Design / Interaction Design",
      company: "lululemon",
      scope: "Commerce · UI Craft · Interaction",
      heroVisual: {
        image: "/images/lululemon-soho-store-opening.png",
        imageAlt: "lululemon retail experience image used for Shop the Look.",
        visualLabel: "Shop the Look",
        caption:
          "Existing lululemon imagery used as the current portfolio visual.",
      },
      proofPoints: [
        {
          label: "Editorial to purchase",
          description:
            "The pattern connects inspiration-led browsing to a clear next step.",
        },
        {
          label: "Reduced friction",
          description:
            "The interaction is designed to make product context easier to act on.",
        },
        {
          label: "Responsive behaviour",
          description:
            "The idea preserves product hierarchy across desktop and touch layouts.",
        },
      ],
      overview: {
        heading:
          "The best commerce interactions reduce the distance between inspiration and action.",
        paragraphs: [
          "Shop the Look is a focused interaction study around turning editorial imagery into a practical path to purchase.",
          "The work is less about adding more UI and more about deciding what should appear, when it should appear, and how quickly a shopper can understand the next step.",
        ],
      },
      ownership: [
        "Commerce interaction",
        "Hover reveal",
        "Product context",
        "Responsive behaviour",
        "Visual hierarchy",
        "Interaction QA",
      ],
      sections: [
        {
          title: "Making inspiration actionable",
          statement:
            "The image should still feel editorial, but the product path needs to be obvious.",
          paragraphs: [
            "The interaction balances visual taste with practical commerce cues so the interface can support discovery without becoming cluttered.",
          ],
          layout: "media-text",
          media: [
            {
              image: "/images/lululemon-soho-store-opening.png",
              imageAlt: "lululemon editorial commerce image.",
              visualLabel: "Editorial commerce",
            },
          ],
        },
        {
          title: "Revealing just enough",
          statement:
            "Hover and focus states should clarify interaction, not cover the work.",
          paragraphs: [
            "The reveal pattern keeps the image-first default and introduces only the context needed to understand the project.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder default Shop the Look card.",
              visualLabel: "Default",
            },
            {
              imageAlt: "Placeholder Shop the Look hover reveal.",
              visualLabel: "Reveal",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Clearer product path",
          description:
            "The interaction gives editorial content a direct commerce purpose.",
        },
        {
          title: "Less visual noise",
          description:
            "The default state stays image-led while interaction details remain discoverable.",
        },
        {
          title: "Reusable reveal logic",
          description:
            "The pattern can extend to other commerce cards and campaign surfaces.",
        },
      ],
      reflection:
        "Commerce craft often lives in the smallest transitions between wanting something and knowing what to do next.",
      nextProjectSlug: "floating-entity-navigation",
    },
  },
  {
    title: "Floating Entity Navigation",
    slug: "floating-entity-navigation",
    category: "Navigation · Prototype",
    company: "Interaction Study",
    year: "2026",
    description:
      "A floating navigation pattern for keeping entity context close to action.",
    imageAlt: "Placeholder floating entity navigation interaction preview.",
    visualLabel: "Entity nav",
    comingSoon: true,
    group: "Coming Soon",
    detail: {
      eyebrow: "Navigation · Prototype",
      summary:
        "A floating navigation pattern for keeping entity context close to action.",
      role: "Design Engineer",
      company: "Interaction study",
      scope: "Navigation · Context · Responsive UI",
      heroVisual: {
        imageAlt: "Placeholder floating entity navigation interaction preview.",
        visualLabel: "Entity nav",
        caption: "Placeholder visual. Replace with the real navigation prototype.",
      },
      proofPoints: [
        {
          label: "Context retention",
          description:
            "The pattern keeps the current entity visible while users move through related actions.",
        },
        {
          label: "Responsive control",
          description:
            "The navigation adapts between larger product surfaces and constrained mobile layouts.",
        },
        {
          label: "Interaction clarity",
          description:
            "Active states and motion help users understand where they are without heavy chrome.",
        },
      ],
      overview: {
        heading:
          "Navigation is strongest when it preserves context instead of just moving people around.",
        paragraphs: [
          "Floating Entity Navigation explores how product navigation can stay close to the object a user is working on.",
          "The study focuses on active state, progressive disclosure, responsive behaviour, and the line between helpful persistence and visual clutter.",
        ],
      },
      ownership: [
        "Navigation model",
        "Active states",
        "Responsive behaviour",
        "Motion affordances",
        "Prototype build",
        "Accessibility checks",
      ],
      sections: [
        {
          title: "Keeping the object in view",
          statement:
            "The navigation needed to follow the user's context without stealing focus from the task.",
          paragraphs: [
            "The pattern treats the active entity as the anchor, then exposes related actions around it in a compact, persistent surface.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder floating entity navigation default state.",
              visualLabel: "Context",
            },
          ],
        },
        {
          title: "Adapting across screens",
          statement:
            "The same navigation idea needed to survive different screen sizes and input types.",
          paragraphs: [
            "Responsive behaviour focuses on preserving priority, tap targets, and orientation as the available space changes.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt: "Placeholder desktop entity navigation.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt: "Placeholder tablet entity navigation.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt: "Placeholder mobile entity navigation.",
              visualLabel: "Mobile",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Stronger wayfinding",
          description:
            "The pattern makes current context easier to understand at a glance.",
        },
        {
          title: "Cleaner action access",
          description:
            "Related actions stay nearby without requiring a heavy sidebar.",
        },
        {
          title: "Responsive navigation logic",
          description:
            "The model can adapt to constrained layouts while keeping orientation intact.",
        },
      ],
      reflection:
        "Good navigation is not only about destinations. It is about helping people keep their place while they work.",
      nextProjectSlug: "symbiotique",
    },
  },
  {
    title: "AI Interaction Patterns",
    slug: "ai-interaction-patterns",
    category: "AI · Systems",
    company: "AI Systems",
    year: "2026",
    description:
      "Reusable patterns for AI interaction, review, artifacts, and human handoff.",
    imageAlt: "Placeholder AI interaction pattern preview.",
    visualLabel: "AI states",
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "AI · Systems",
      summary:
        "Reusable interaction patterns for AI states, artifacts, review, and handoff.",
      role: "Design Engineer",
      company: "Independent study",
      scope: "AI · Interaction · Systems",
      heroVisual: {
        imageAlt: "Placeholder AI interaction pattern board.",
        visualLabel: "AI patterns",
        caption: "Placeholder visual. Replace with real pattern studies.",
      },
      proofPoints: [
        {
          label: "Interaction States",
          description:
            "Patterns for waiting, streaming, reviewing, editing, and resolving.",
        },
        {
          label: "Artifact Behaviour",
          description:
            "Structures for generated content that can be inspected and revised.",
        },
        {
          label: "Human Handoff",
          description:
            "Moments where the interface makes control and responsibility clear.",
        },
      ],
      overview: {
        heading:
          "AI products need reusable behaviour as much as they need reusable components.",
        paragraphs: [
          "This study explores the recurring interaction decisions that show up when AI becomes part of a product workflow.",
          "The focus is on states and patterns that can travel across products: prompt entry, response display, artifact review, revision, and handoff.",
        ],
      },
      ownership: [
        "Pattern taxonomy",
        "State modelling",
        "Interaction writing",
        "Prototype sketches",
        "Accessibility notes",
        "Design-system mapping",
      ],
      sections: [
        {
          title: "Mapping the recurring states",
          statement:
            "The first layer was naming the moments that repeat across AI workflows.",
          paragraphs: [
            "By treating loading, streaming, uncertainty, review, and completion as shared states, the patterns become easier to reuse across different product contexts.",
          ],
          layout: "full",
          media: [
            {
              imageAlt: "Placeholder AI state taxonomy map.",
              visualLabel: "State taxonomy",
            },
          ],
        },
        {
          title: "Designing artifact review",
          statement:
            "Generated outputs need review surfaces that are clear without becoming heavy.",
          paragraphs: [
            "The pattern work explored how artifacts should present source context, edits, confidence, and next actions when a user needs to make a decision.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder generated artifact review pattern.",
              visualLabel: "Artifact",
            },
            {
              imageAlt: "Placeholder source and edit controls pattern.",
              visualLabel: "Review tools",
            },
          ],
        },
        {
          title: "Making handoff explicit",
          statement:
            "A good AI interface knows when to stop acting and start asking.",
          paragraphs: [
            "The handoff patterns focus on moments where the system needs more input, needs confirmation, or should expose the decision back to the user.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder AI human handoff interaction.",
              visualLabel: "Handoff",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Reusable state language",
          description:
            "A practical vocabulary for describing AI interaction states.",
        },
        {
          title: "Review-first artifacts",
          description:
            "Patterns that make generated content easier to inspect and revise.",
        },
        {
          title: "Clearer control moments",
          description:
            "Handoff models that help users understand when they need to act.",
        },
      ],
      reflection:
        "The interface around AI is often where trust is won or lost. Small state decisions carry a lot of weight.",
      nextProjectSlug: "responsive-system",
    },
  },
  {
    title: "Responsive System",
    slug: "responsive-system",
    category: "Design Systems · Accessibility",
    company: "Design Systems",
    year: "2026",
    description:
      "Responsive foundations for consistent product experiences across desktop, tablet, and mobile.",
    imageAlt: "Placeholder responsive system preview.",
    visualLabel: "Responsive UI",
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Design Systems · Accessibility",
      summary:
        "Responsive foundations for consistent product experiences across screen sizes.",
      role: "Design Engineer",
      company: "System study",
      scope: "Responsive · Layout · Accessibility",
      heroVisual: {
        imageAlt: "Placeholder responsive system layout board.",
        visualLabel: "Responsive system",
        caption: "Placeholder visual. Replace with real responsive specs.",
      },
      proofPoints: [
        {
          label: "Layout Rules",
          description:
            "Reusable decisions for spacing, stacking, density, and priority.",
        },
        {
          label: "Breakpoint Behaviour",
          description:
            "Patterns that describe how product surfaces adapt, not only resize.",
        },
        {
          label: "Accessible Structure",
          description:
            "Responsive decisions that preserve focus order and content hierarchy.",
        },
      ],
      overview: {
        heading:
          "Responsive design becomes stronger when behaviour is documented as a system.",
        paragraphs: [
          "This work looks at responsive design as a set of durable product rules, not a collection of breakpoint fixes.",
          "The goal is to help product surfaces adapt across desktop, tablet, and mobile while preserving hierarchy, accessibility, and interaction clarity.",
        ],
      },
      ownership: [
        "Breakpoint rules",
        "Layout patterns",
        "Density decisions",
        "Mobile stacking",
        "Accessibility review",
        "Implementation guidance",
      ],
      sections: [
        {
          title: "Defining layout behaviour",
          statement:
            "The system needed rules for what changes, what stays stable, and what becomes priority.",
          paragraphs: [
            "Instead of designing separate screens in isolation, the work defined how content regions shift as space changes.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt: "Placeholder responsive desktop layout.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt: "Placeholder responsive tablet layout.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt: "Placeholder responsive mobile layout.",
              visualLabel: "Mobile",
            },
          ],
        },
        {
          title: "Preserving hierarchy",
          statement:
            "Smaller screens should not flatten the product into a stack of equal things.",
          paragraphs: [
            "The patterns define which elements lead, which collapse, and which controls need to stay close to their related content.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt: "Placeholder responsive hierarchy diagram.",
              visualLabel: "Hierarchy",
            },
          ],
        },
        {
          title: "Designing for focus order",
          statement:
            "Responsive layout changes need to preserve how people move through the interface.",
          paragraphs: [
            "Accessibility guidance was treated as part of the layout system, especially around keyboard navigation, reading order, and touch target spacing.",
          ],
          layout: "detail-crops",
          media: [
            {
              imageAlt: "Placeholder focus order detail.",
              visualLabel: "Focus order",
            },
            {
              imageAlt: "Placeholder touch target detail.",
              visualLabel: "Touch targets",
            },
            {
              imageAlt: "Placeholder content order detail.",
              visualLabel: "Content order",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Reusable breakpoint rules",
          description:
            "A foundation for describing responsive changes across surfaces.",
        },
        {
          title: "Stronger mobile hierarchy",
          description:
            "Stacking patterns that keep priority and context intact.",
        },
        {
          title: "Accessibility built into layout",
          description:
            "Guidance for focus order, reading order, and touch targets.",
        },
      ],
      reflection:
        "Responsive systems are not only about width. They are about keeping intent intact when the canvas changes.",
      nextProjectSlug: "premium-product-homepage",
    },
  },
  {
    title: "Premium Product Homepage",
    slug: "premium-product-homepage",
    category: "Prototype · Motion",
    company: "Prototype Study",
    year: "2026",
    description:
      "A motion-rich prototype for editorial media and product discovery.",
    image: "/images/smash-hits.png",
    imageAlt: "Campaign image for a product homepage motion experiment.",
    group: "Personal Projects",
    detail: {
      eyebrow: "Prototype · Motion",
      summary:
        "A motion-rich product homepage study for editorial media and discovery.",
      role: "Design Engineer",
      company: "Prototype study",
      scope: "Motion · Front-End · Editorial",
      heroVisual: {
        image: "/images/smash-hits.png",
        imageAlt: "Campaign image for a product homepage motion experiment.",
        visualLabel: "Homepage prototype",
        caption: "Prototype image used in the current project listing.",
      },
      proofPoints: [
        {
          label: "Motion Direction",
          description:
            "A study in transitions, pacing, and product discovery moments.",
        },
        {
          label: "Editorial System",
          description:
            "A layout direction that blends campaign storytelling with browsing.",
        },
        {
          label: "Front-End Prototype",
          description:
            "A code-first exploration of interaction and page behaviour.",
        },
      ],
      overview: {
        heading:
          "The prototype explored how motion can make product discovery feel more intentional.",
        paragraphs: [
          "This experiment treats the homepage as a product surface where editorial pacing, campaign imagery, and browsing behaviour work together.",
          "The design engineering focus was on timing, transitions, visual rhythm, and responsive layout decisions that keep the page usable.",
        ],
      },
      ownership: [
        "Interaction direction",
        "Motion prototyping",
        "Responsive composition",
        "Visual pacing",
        "Front-end build",
        "Hover states",
      ],
      sections: [
        {
          title: "Building editorial rhythm",
          statement:
            "The page needed to feel premium without becoming a static campaign poster.",
          paragraphs: [
            "The composition uses imagery, spacing, and movement to guide attention while keeping browsing paths available.",
          ],
          layout: "full",
          media: [
            {
              image: "/images/smash-hits.png",
              imageAlt: "Editorial homepage prototype image.",
              visualLabel: "Editorial rhythm",
            },
          ],
        },
        {
          title: "Testing motion as behaviour",
          statement:
            "Motion was used to clarify state and attention rather than decorate the page.",
          paragraphs: [
            "Hover, reveal, and transition studies helped define where movement adds clarity and where the interface should stay quiet.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder homepage hover motion state.",
              visualLabel: "Hover state",
            },
            {
              imageAlt: "Placeholder homepage reveal motion state.",
              visualLabel: "Reveal state",
            },
          ],
        },
        {
          title: "Keeping the layout responsive",
          statement:
            "The motion system had to survive smaller screens and touch interaction.",
          paragraphs: [
            "Responsive layouts were considered alongside interaction rules so the prototype could scale down without depending on hover-only behaviours.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt: "Placeholder desktop homepage prototype.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt: "Placeholder tablet homepage prototype.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt: "Placeholder mobile homepage prototype.",
              visualLabel: "Mobile",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Clear motion language",
          description:
            "Defined moments where transitions support discovery and hierarchy.",
        },
        {
          title: "Responsive prototype",
          description:
            "A product homepage direction that adapts beyond desktop.",
        },
        {
          title: "Reusable interaction lessons",
          description:
            "Hover and reveal patterns that can inform future product surfaces.",
        },
      ],
      reflection:
        "Motion is most useful when it helps the product explain itself. The quiet details matter more than spectacle.",
      nextProjectSlug: "agentic-workflow-studies",
    },
  },
  {
    title: "Agentic Workflow Studies",
    slug: "agentic-workflow-studies",
    category: "AI · Experiment",
    company: "Workflow Study",
    year: "2026",
    description:
      "Studies for AI-assisted design execution and project workflows.",
    imageAlt: "Placeholder agentic workflow study preview.",
    visualLabel: "Agent workflow",
    group: "Personal Projects",
    detail: {
      eyebrow: "AI · Experiment",
      summary:
        "Studies for applying agentic workflows to design execution and project management.",
      role: "Design Engineer",
      company: "Workflow study",
      scope: "AI · Process · Prototyping",
      heroVisual: {
        imageAlt: "Placeholder agentic workflow system map.",
        visualLabel: "Agentic workflow",
        caption: "Placeholder visual. Replace with real workflow artifacts.",
      },
      proofPoints: [
        {
          label: "Workflow Mapping",
          description:
            "A structured look at how design tasks move from brief to execution.",
        },
        {
          label: "Agent Collaboration",
          description:
            "Patterns for assigning, reviewing, and integrating AI-assisted work.",
        },
        {
          label: "Quality Control",
          description:
            "Checkpoints for keeping speed from lowering design or code quality.",
        },
      ],
      overview: {
        heading:
          "Agentic workflows are only useful when they make ownership clearer, not fuzzier.",
        paragraphs: [
          "This study explores how AI can support design engineering work without turning the process into a black box.",
          "The focus is on briefs, task decomposition, review loops, acceptance criteria, and the handoff between human judgement and automated execution.",
        ],
      },
      ownership: [
        "Workflow design",
        "Prompt structure",
        "Review criteria",
        "Task sequencing",
        "Prototype process",
        "Quality checks",
      ],
      sections: [
        {
          title: "From brief to executable tasks",
          statement:
            "The process needed a way to turn vague project intent into traceable work.",
          paragraphs: [
            "The workflow breaks a design engineering project into planning, content, interface, implementation, and QA steps while keeping the original goal visible.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt: "Placeholder brief-to-task workflow.",
              visualLabel: "Task flow",
            },
          ],
        },
        {
          title: "Designing review loops",
          statement:
            "Agent-assisted speed only matters if the output can be evaluated clearly.",
          paragraphs: [
            "The review patterns define what should be checked by the system, what needs human approval, and how to make changes traceable.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder automated review checklist.",
              visualLabel: "Checks",
            },
            {
              imageAlt: "Placeholder human review checkpoint.",
              visualLabel: "Review",
            },
          ],
        },
        {
          title: "Keeping quality visible",
          statement:
            "The workflow treats verification as part of execution, not a cleanup step.",
          paragraphs: [
            "Build checks, responsive QA, accessibility review, and content review are positioned as recurring checkpoints in the project flow.",
          ],
          layout: "detail-crops",
          media: [
            {
              imageAlt: "Placeholder build verification detail.",
              visualLabel: "Build",
            },
            {
              imageAlt: "Placeholder responsive QA detail.",
              visualLabel: "Responsive",
            },
            {
              imageAlt: "Placeholder accessibility QA detail.",
              visualLabel: "A11y",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Clearer task structure",
          description:
            "A workflow for turning design intent into scoped execution steps.",
        },
        {
          title: "Better review checkpoints",
          description:
            "Defined moments for checking quality, accuracy, and fit.",
        },
        {
          title: "More transparent AI use",
          description:
            "A process where agentic support stays visible and reviewable.",
        },
      ],
      reflection:
        "The value of agentic work is not that it removes judgement. It gives judgement more surface area to operate on.",
      nextProjectSlug: "motion-system-sketches",
    },
  },
  {
    title: "Motion System Sketches",
    slug: "motion-system-sketches",
    category: "Motion · Prototype",
    company: "Motion Study",
    year: "2025",
    description:
      "Timing, easing, hover affordances, and transition studies.",
    image: "/images/up-the-energy.jpg",
    imageAlt: "Editorial image for motion system sketches.",
    group: "Personal Projects",
    detail: {
      eyebrow: "Motion · Prototype",
      summary:
        "Timing, easing, hover affordances, and transition studies for interface motion.",
      role: "Design Engineer",
      company: "Motion study",
      scope: "Motion · Interaction · Front-End",
      heroVisual: {
        image: "/images/up-the-energy.jpg",
        imageAlt: "Editorial image for motion system sketches.",
        visualLabel: "Motion study",
        caption: "Prototype image used in the current project listing.",
      },
      proofPoints: [
        {
          label: "Timing",
          description:
            "Studies in duration, delay, and pacing across interface moments.",
        },
        {
          label: "Easing",
          description:
            "Exploration of motion curves that feel responsive without feeling abrupt.",
        },
        {
          label: "Affordance",
          description:
            "Hover and transition patterns that clarify what is interactive.",
        },
      ],
      overview: {
        heading:
          "Motion becomes a system when it gives repeated interactions the same sense of intent.",
        paragraphs: [
          "This study collects motion decisions around hover states, reveals, transitions, and feedback moments.",
          "The goal is to make motion feel consistent, responsive, and grounded in the interface rather than added after the fact.",
        ],
      },
      ownership: [
        "Motion direction",
        "Easing studies",
        "Hover affordances",
        "Transition states",
        "Prototype implementation",
        "Reduced-motion checks",
      ],
      sections: [
        {
          title: "Finding the right tempo",
          statement:
            "The motion needed to feel quick enough for tools and polished enough for a portfolio surface.",
          paragraphs: [
            "Timing studies focused on small movements: card lifts, arrow movement, text reveals, and image scaling.",
          ],
          layout: "full",
          media: [
            {
              image: "/images/up-the-energy.jpg",
              imageAlt: "Editorial motion study image.",
              visualLabel: "Tempo",
            },
          ],
        },
        {
          title: "Making hover useful",
          statement:
            "Hover states should confirm interactivity without changing layout or stealing attention.",
          paragraphs: [
            "The sketches explore restrained transforms, opacity changes, and arrow movement that support navigation while preserving the page rhythm.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder hover affordance sketch.",
              visualLabel: "Hover",
            },
            {
              imageAlt: "Placeholder arrow transition sketch.",
              visualLabel: "Arrow",
            },
          ],
        },
        {
          title: "Respecting reduced motion",
          statement:
            "The motion system needs an intentional quiet mode for people who prefer less movement.",
          paragraphs: [
            "Reduced-motion behaviour keeps the interface usable by removing decorative transitions while preserving state and hierarchy.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder reduced motion behaviour sketch.",
              visualLabel: "Reduced motion",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Consistent motion feel",
          description:
            "A clearer direction for timing, easing, and small interface transitions.",
        },
        {
          title: "Sharper affordances",
          description:
            "Hover and navigation states that communicate interactivity quietly.",
        },
        {
          title: "Accessible motion defaults",
          description:
            "Reduced-motion support built into the interaction language.",
        },
      ],
      reflection:
        "Good motion often disappears into the feeling of quality. It should make the interface easier to understand, not louder.",
      nextProjectSlug: "symbiotique",
    },
  },
];

export const projectGroups: ProjectGroup[] = [
  "Systems & Design Engineering",
  "Personal Projects",
  "Coming Soon",
];

export const allProjects = [...featuredProjects, ...additionalProjects];
