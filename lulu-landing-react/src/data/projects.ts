export type ProjectGroup =
  | "Systems & Design Engineering"
  | "Experiments";

export type ProjectDetailMedia = {
  title?: string;
  image?: string;
  imageAlt: string;
  visualLabel: string;
  caption?: string;
};

export type ProjectDetailSectionLayout =
  | "full"
  | "two-up"
  | "media-text"
  | "text-media"
  | "device-comparison"
  | "detail-crops";

export type ProjectDetailSection = {
  title: string;
  statement?: string;
  paragraphs?: string[];
  layout: ProjectDetailSectionLayout;
  media: ProjectDetailMedia[];
};

export type ProjectDetail = {
  eyebrow: string;
  summary: string;
  role: string;
  company: string;
  scope: string;
  heroVisual: ProjectDetailMedia;
  proofPoints: {
    label: string;
    value?: string;
    description: string;
  }[];
  overview: {
    heading: string;
    paragraphs: string[];
  };
  ownership: string[];
  sections: ProjectDetailSection[];
  outcomes: {
    title: string;
    description: string;
  }[];
  reflection?: string;
  nextProjectSlug?: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  image?: string;
  imageAlt: string;
  visualLabel?: string;
  featured?: boolean;
  group: ProjectGroup;
  detail?: ProjectDetail;
};

export const featuredProjects: Project[] = [
  {
    title: "Symbiotique",
    slug: "symbiotique",
    category: "Design Systems · AI · Enterprise",
    year: "2026",
    description:
      "A design system built to scale AI-powered product experiences across teams and platforms.",
    imageAlt: "Placeholder UI composition for Symbiotique.",
    visualLabel: "System components",
    featured: true,
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Design Systems · AI",
      summary:
        "Scaling AI-powered product experiences across teams and platforms.",
      role: "Design Systems Lead",
      company: "MRCL / Nurun",
      scope: "AI · Systems · Design Engineering",
      heroVisual: {
        imageAlt:
          "Placeholder system board showing Symbiotique AI product foundations.",
        visualLabel: "Symbiotique system",
        caption: "Placeholder visual. Replace with real system screens.",
      },
      proofPoints: [
        {
          label: "System Coverage",
          description: "Shared foundations across core product surfaces.",
        },
        {
          label: "Responsive Foundation",
          description:
            "Patterns supporting desktop, tablet, and mobile behaviours.",
        },
        {
          label: "Cross-Team Adoption",
          description:
            "A governance model supporting design and engineering alignment.",
        },
      ],
      overview: {
        heading:
          "Building a design system for a product wasn't the challenge. Building one for an evolving AI platform was.",
        paragraphs: [
          "Symbiotique needed a foundation that could support product teams moving through ambiguity without turning every new AI interaction into a one-off interface.",
          "The work focused on the connective tissue between design intent and shipped behaviour: reusable patterns, responsive rules, accessibility expectations, and governance that could survive real product pressure.",
        ],
      },
      ownership: [
        "Design system direction",
        "AI interaction patterns",
        "Responsive architecture",
        "Governance",
        "Accessibility",
        "Design-engineering collaboration",
      ],
      sections: [
        {
          title: "Designing a system for AI",
          statement:
            "The system needed to account for uncertain outputs, review states, and human handoff without feeling fragmented.",
          paragraphs: [
            "Instead of treating AI moments as isolated product features, the work framed them as reusable interaction patterns with clear states, constraints, and escalation paths.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt:
                "Placeholder AI interaction state map for Symbiotique.",
              visualLabel: "AI state map",
              caption: "Placeholder visual. Replace with AI flow artifacts.",
            },
          ],
        },
        {
          title: "From components to product patterns",
          statement:
            "The system moved beyond component inventory into repeatable product decisions.",
          paragraphs: [
            "Components handled the surface. Patterns handled the judgement: how prompts appear, how generated content is reviewed, and how users recover when the system needs more context.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt:
                "Placeholder component foundations panel for Symbiotique.",
              visualLabel: "Foundations",
              caption: "Placeholder component overview.",
            },
            {
              imageAlt:
                "Placeholder product pattern panel for Symbiotique.",
              visualLabel: "Patterns",
              caption: "Placeholder pattern overview.",
            },
          ],
        },
        {
          title: "Making responsive behaviour systematic",
          statement:
            "Responsive decisions were treated as product rules, not screen-by-screen fixes.",
          paragraphs: [
            "The detail work defined how AI panels, review surfaces, and dense product controls should adapt across breakpoints while keeping priority actions clear.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt: "Placeholder desktop layout for Symbiotique.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt: "Placeholder tablet layout for Symbiotique.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt: "Placeholder mobile layout for Symbiotique.",
              visualLabel: "Mobile",
            },
          ],
        },
        {
          title: "Governance that scales beyond one team",
          statement:
            "The system needed a contribution model that made quality easier to maintain.",
          paragraphs: [
            "Design and engineering collaboration centered on clear ownership, review rituals, and implementation notes that reduced interpretation gaps between design files and production code.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt:
                "Placeholder governance workflow diagram for Symbiotique.",
              visualLabel: "Governance flow",
              caption: "Placeholder governance model.",
            },
          ],
        },
        {
          title: "Accessibility as infrastructure",
          statement:
            "Accessibility decisions belonged inside the system, not at the edge of QA.",
          paragraphs: [
            "Interaction states, focus paths, contrast expectations, and semantic patterns were documented as part of the foundation so teams could build with accessibility from the start.",
          ],
          layout: "detail-crops",
          media: [
            {
              imageAlt:
                "Placeholder focus state detail crop for Symbiotique.",
              visualLabel: "Focus states",
            },
            {
              imageAlt:
                "Placeholder semantic structure detail crop for Symbiotique.",
              visualLabel: "Semantics",
            },
            {
              imageAlt:
                "Placeholder contrast rule detail crop for Symbiotique.",
              visualLabel: "Contrast",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "One responsive foundation",
          description:
            "A shared structure supporting desktop, tablet, and mobile experiences.",
        },
        {
          title: "Clearer contribution model",
          description:
            "A defined workflow between design, product, and engineering.",
        },
        {
          title: "Reusable AI patterns",
          description:
            "Common interaction models for prompts, outputs, review, and human handoff.",
        },
      ],
      reflection:
        "The strongest systems do more than organize components. They make the next product decision clearer, especially when the product space is still changing.",
      nextProjectSlug: "calypad",
    },
  },
  {
    title: "CalyPad",
    slug: "calypad",
    category: "Product · Design + Engineering",
    year: "2026",
    description:
      "A service-commerce platform for managing services, availability, bookings, customers, and operations.",
    imageAlt: "Placeholder product interface composition for CalyPad.",
    visualLabel: "Booking platform",
    featured: true,
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "Product · Design + Engineering",
      summary:
        "Designing and building a service-commerce platform for everyday operations.",
      role: "Product Designer + Front-End Engineer",
      company: "CalyPad",
      scope: "Product · Booking · Operations",
      heroVisual: {
        imageAlt:
          "Placeholder service-commerce dashboard and booking flow for CalyPad.",
        visualLabel: "CalyPad product",
        caption: "Placeholder visual. Replace with real CalyPad screens.",
      },
      proofPoints: [
        {
          label: "Service Management",
          description:
            "A product surface for managing services, availability, and booking rules.",
        },
        {
          label: "Customer Flow",
          description:
            "A clearer path from discovery to scheduling and confirmation.",
        },
        {
          label: "Operations Layer",
          description:
            "Interfaces for the behind-the-scenes work that keeps bookings moving.",
        },
      ],
      overview: {
        heading:
          "The product had to make selling time feel as structured as selling inventory.",
        paragraphs: [
          "CalyPad brings together the customer-facing booking experience and the operational tools needed to manage service commerce.",
          "The design engineering work focused on shaping reusable flows, interface states, and responsive product surfaces that could support both business owners and customers.",
        ],
      },
      ownership: [
        "Product structure",
        "Booking flow design",
        "Interface prototyping",
        "Responsive layouts",
        "Front-end implementation",
        "Operational states",
      ],
      sections: [
        {
          title: "Structuring service commerce",
          statement:
            "The core product challenge was making services, schedules, and customer decisions feel connected.",
          paragraphs: [
            "The interface needed to support browsing, selecting, scheduling, and managing services without forcing each step into a separate mental model.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder CalyPad service management interface.",
              visualLabel: "Service setup",
              caption: "Placeholder service management screen.",
            },
          ],
        },
        {
          title: "Designing the booking path",
          statement:
            "Booking needed to stay focused even when availability, duration, and customer details changed.",
          paragraphs: [
            "The flow was shaped around progressive decisions, clear confirmation states, and reusable UI patterns that could adapt to different service types.",
          ],
          layout: "two-up",
          media: [
            {
              imageAlt: "Placeholder CalyPad booking selection state.",
              visualLabel: "Selection",
            },
            {
              imageAlt: "Placeholder CalyPad booking confirmation state.",
              visualLabel: "Confirmation",
            },
          ],
        },
        {
          title: "Making operations visible",
          statement:
            "The admin experience needed to surface what mattered without overwhelming the operator.",
          paragraphs: [
            "Dashboards, lists, and detail states were organized around recurring work: seeing what is booked, understanding customer context, and making updates quickly.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt: "Placeholder CalyPad operations dashboard.",
              visualLabel: "Operations",
              caption: "Placeholder operations surface.",
            },
          ],
        },
        {
          title: "Responsive from the start",
          statement:
            "Service businesses are often managed in motion, so the product could not be desktop-only.",
          paragraphs: [
            "The system supports compact booking surfaces and operational views that can stack cleanly across desktop, tablet, and mobile.",
          ],
          layout: "device-comparison",
          media: [
            {
              title: "Desktop",
              imageAlt: "Placeholder desktop CalyPad layout.",
              visualLabel: "Desktop",
            },
            {
              title: "Tablet",
              imageAlt: "Placeholder tablet CalyPad layout.",
              visualLabel: "Tablet",
            },
            {
              title: "Mobile",
              imageAlt: "Placeholder mobile CalyPad layout.",
              visualLabel: "Mobile",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Reusable booking structure",
          description:
            "A shared flow model for service selection, scheduling, and confirmation.",
        },
        {
          title: "Connected operations",
          description:
            "Admin surfaces organized around availability, customers, and bookings.",
        },
        {
          title: "Responsive product foundation",
          description:
            "Layouts that support customer and operator tasks across screen sizes.",
        },
      ],
      reflection:
        "The useful detail in this kind of product is often operational. The interface has to make the business logic legible without making the product feel heavy.",
      nextProjectSlug: "deska",
    },
  },
  {
    title: "Deska",
    slug: "deska",
    category: "AI · Product · Design + Engineering",
    year: "2026",
    description:
      "An AI product designed and built from zero to one.",
    imageAlt: "Placeholder AI product interface composition for Deska.",
    visualLabel: "AI workspace",
    featured: true,
    group: "Systems & Design Engineering",
    detail: {
      eyebrow: "AI · Product · Design + Engineering",
      summary: "Taking an AI product from early concept into a usable product system.",
      role: "Product Designer + Design Engineer",
      company: "Deska",
      scope: "AI · Product · Prototyping",
      heroVisual: {
        imageAlt: "Placeholder AI workspace interface for Deska.",
        visualLabel: "Deska workspace",
        caption: "Placeholder visual. Replace with real Deska product screens.",
      },
      proofPoints: [
        {
          label: "Zero To One",
          description:
            "Early product structure, interaction model, and interface direction.",
        },
        {
          label: "AI Workspace",
          description:
            "Patterns for prompting, outputs, review, and continued work.",
        },
        {
          label: "Buildable Prototype",
          description:
            "Code-driven exploration to test the product experience quickly.",
        },
      ],
      overview: {
        heading:
          "The work was less about adding AI and more about giving it a useful workspace.",
        paragraphs: [
          "Deska started from the question of how an AI product should help someone move from intent to structured output without losing control of the work.",
          "The design engineering effort focused on translating product ideas into interactive surfaces, visible system states, and reusable behaviours.",
        ],
      },
      ownership: [
        "Product concepting",
        "AI interaction model",
        "Prototype implementation",
        "Interface states",
        "Responsive structure",
        "Product storytelling",
      ],
      sections: [
        {
          title: "Defining the AI workspace",
          statement:
            "The product needed a place where input, output, and iteration could live together.",
          paragraphs: [
            "The interface model centered on keeping prompts, generated artifacts, and user decisions visible enough to support continued refinement.",
          ],
          layout: "media-text",
          media: [
            {
              imageAlt: "Placeholder Deska workspace structure.",
              visualLabel: "Workspace",
            },
          ],
        },
        {
          title: "Designing for review",
          statement:
            "Generated work becomes useful when people can inspect, adjust, and trust it.",
          paragraphs: [
            "The product patterns support review states, editable outputs, and clear handoff between automated suggestions and human judgement.",
          ],
          layout: "detail-crops",
          media: [
            {
              imageAlt: "Placeholder Deska review state.",
              visualLabel: "Review",
            },
            {
              imageAlt: "Placeholder Deska edit state.",
              visualLabel: "Edit",
            },
            {
              imageAlt: "Placeholder Deska handoff state.",
              visualLabel: "Handoff",
            },
          ],
        },
        {
          title: "Prototyping the behaviour",
          statement:
            "The design had to be felt in motion, not only described in static frames.",
          paragraphs: [
            "Interaction timing, loading states, and response transitions were explored directly in code so the product could be evaluated under more realistic conditions.",
          ],
          layout: "text-media",
          media: [
            {
              imageAlt: "Placeholder Deska interactive prototype state.",
              visualLabel: "Prototype",
              caption: "Placeholder prototype visual.",
            },
          ],
        },
      ],
      outcomes: [
        {
          title: "Clearer product shape",
          description:
            "A defined workspace model for AI-assisted creation and review.",
        },
        {
          title: "Testable interactions",
          description:
            "Prototype behaviours that made product decisions easier to evaluate.",
        },
        {
          title: "Reusable AI states",
          description:
            "Patterns for loading, response, review, editing, and handoff.",
        },
      ],
      reflection:
        "AI interfaces need restraint. The more capable the system feels, the more important it becomes to show state, control, and context clearly.",
      nextProjectSlug: "ai-interaction-patterns",
    },
  },
];

export const additionalProjects: Project[] = [
  {
    title: "AI Interaction Patterns",
    slug: "ai-interaction-patterns",
    category: "AI · Systems",
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
    year: "2026",
    description:
      "A motion-rich prototype for editorial media and product discovery.",
    image: "/images/smash-hits.png",
    imageAlt: "Campaign image for a product homepage motion experiment.",
    group: "Experiments",
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
    year: "2026",
    description:
      "Studies for AI-assisted design execution and project workflows.",
    imageAlt: "Placeholder agentic workflow study preview.",
    visualLabel: "Agent workflow",
    group: "Experiments",
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
    year: "2025",
    description:
      "Timing, easing, hover affordances, and transition studies.",
    image: "/images/up-the-energy.jpg",
    imageAlt: "Editorial image for motion system sketches.",
    group: "Experiments",
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
  "Experiments",
];

export const allProjects = [...featuredProjects, ...additionalProjects];
