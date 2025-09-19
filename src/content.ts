/**
 * Central content config. Import these in your sections.
 * Usage in components: import { site, hero, projects, experience, leadership, skills, posts, about, contact } from "@/content"
 */
export type Metric = { label: string; value: string };
export type LinkBtn = { label: string; href: string; external?: boolean };
export type StackTag = string;

export type Project = {
  title: string;
  tagline: string;
  outcome: string;
  bullets: string[];
  stack: StackTag[];
  links: LinkBtn[];
};

export type Role = {
  org: string;
  title: string;
  period: string;
  bullets: string[];
  tools?: string[];
};

export const site = {
  name: "Bobby Wu",
  role: "Front-End & QA Automation Engineer",
  location: "Toronto, Canada",
  email: "Bobbywu042@gmail.com",
  resumePath: "/Bobby_Wu_Resume.pdf",  // put the file into /public
  socials: [
    { label: "GitHub", href: "https://github.com/BobbyWu-Git" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bobbywu" } // TODO: replace
  ],
};

export const hero = {
  headline: "Front-End & QA Automation Engineer — shipping AI-powered, accessible web apps",
  subline: "I build React/Next apps, automate testing at scale, and turn ideas into launchable products.",
  metrics: [
    { label: "Automated tests", value: "800+" },
    { label: "Team pass rate", value: "96%" },
    { label: "Member club ops", value: "3,000+" },
    { label: "Content views", value: "18k+" }
  ] as Metric[],
  ctas: [
    { label: "View Projects", href: "#projects" },
    { label: "Download Résumé (PDF)", href: "/Bobby_Wu_Resume.pdf", external: true },
    { label: "Email Me", href: "mailto:Bobbywu042@gmail.com", external: true }
  ] as LinkBtn[],
  logos: ["University of Waterloo", "Ansys", "Manulife"]
};

export const projects: Project[] = [
  {
    title: "Live Caption Generator",
    tagline: "Real-time captions in the browser with accessible controls.",
    outcome: "Reliable mic control, low latency, and keyboard-first UX for inclusive demos.",
    bullets: [
      "Stream parsing with robust error handling",
      "Clear state transitions & focus management",
      "Degrades gracefully on unsupported devices"
    ],
    stack: ["React", "Vite", "Web APIs"],
    links: [
      { label: "Demo", href: "https://github.com/BobbyWu-Git/Caption-translator" },
      { label: "Code", href: "https://github.com/BobbyWu-Git/Caption-translator" }
    ]
  },
  {
    title: "MoonBoard Coach (WIP)",
    tagline: "Pose-aware beta hints and session analytics for climbers.",
    outcome: "Highlights pathing and suggests improvements to increase send success.",
    bullets: [
      "Pose estimation pipeline (planned)",
      "Interactive overlay with feedback",
      "Session tracking + analytics"
    ],
    stack: ["React", "TF.js (planned)", "MediaPipe (planned)"],
    links: [{ label: "Notes", href: "#" }]
  },
  {
    title: "Resume Critique Assistant (WIP)",
    tagline: "Fast resume feedback with actionable bullet rewrites and ATS checks.",
    outcome: "Cut iteration time; standardized structure; single-click export to PDF/MD.",
    bullets: [
      "Prompt tooling with guardrails",
      "Consistency pass & phrasing suggestions",
      "Export helpers (PDF/Markdown)"
    ],
    stack: ["Next.js", "Serverless (future)"],
    links: [{ label: "Notes", href: "#" }]
  },
  {
    title: "Food Storage Expiry Tracker",
    tagline: "Reduce waste and eat better via pantry tracking + recipe suggestions.",
    outcome: "Tracks expiry and suggests recipes by goal (protein/fiber).",
    bullets: ["CRUD with filters", "Notifications", "Pantry analytics"],
    stack: ["React", "Supabase (optional)"],
    links: [{ label: "Notes", href: "#" }]
  }
];

export const experience: Role[] = [
  {
    org: "Ansys",
    title: "Software QA Automation Engineer",
    period: "2023–2024",
    bullets: [
      "Maintained and optimized 800+ regression tests across critical flows",
      "Prototyped GPT-assisted test generation & verification for faster coverage",
      "Integrated automation into CI, reducing manual verification and cycle time"
    ],
    tools: ["Python", "Pytest", "CI", "Azure DevOps", "Azure OpenAI"]
  },
  {
    org: "University of Waterloo",
    title: "Digital Learning Content Developer",
    period: "2022–2023",
    bullets: [
      "Built accessible econ/math learning modules for LEARN/Möbius",
      "Coordinated QA and releases with clear documentation",
      "Improved clarity and structure with instructional design patterns"
    ],
    tools: ["React", "LEARN", "Möbius", "Writing & Editing"]
  },
  {
    org: "Manulife (UW)",
    title: "Web Dev Team Lead",
    period: "2021–2022",
    bullets: [
      "Led 50+ co-ops; achieved a 96% project pass rate via code reviews & workshops",
      "Standardized project templates and onboarding for faster ramp-up",
      "Built a culture of constructive feedback and documentation"
    ],
    tools: ["JS/TS", "React", "Mentoring", "Workshops"]
  }
];

export const leadership: Role[] = [
  {
    org: "UW Badminton Club",
    title: "President of Operations",
    period: "2023–2025",
    bullets: [
      "Directed ops for 3,000+ members; budget up to $18k",
      "Capacity planning, scheduling, and sponsor partnerships",
      "Campaigns reached 10k+ views; 25% participation growth"
    ],
    tools: ["Ops", "Budgeting", "Analytics", "Community"]
  },
  {
    org: "UW Climbing Club",
    title: "Ambassador",
    period: "2024–2025",
    bullets: [
      "Organized workshops and socials for an inclusive community",
      "Supported onboarding and gear education for new climbers"
    ],
    tools: ["Community", "Operations", "Teaching"]
  }
];

export const skills = {
  frontend: {
    title: "Front-End",
    items: ["React", "Next.js 15", "Tailwind", "Framer Motion"],
    proof: "Production-ready UI with a11y-first patterns"
  },
  qa: {
    title: "QA & Tooling",
    items: ["Pytest", "CI", "Azure DevOps"],
    proof: "Scaled to 800+ tests; GPT-assisted generation"
  },
  ai: {
    title: "AI & Cloud",
    items: ["Azure OpenAI", "AWS (basic)"],
    proof: "Integrated LLMs into QA workflows (safely)"
  },
  id: {
    title: "Instructional Design",
    items: ["LEARN", "Möbius"],
    proof: "Higher clarity and accessibility in course builds"
  }
};

export const posts = [
  { title: "Wiring GPT into a regression test pipeline (safely)", href: "#" },
  { title: "Accessibility wins from a Live Caption web app", href: "#" },
  { title: "Scaling club ops: dashboards, capacity, sponsors", href: "#" },
  { title: "Teaching informs better UI copy and structure", href: "#" }
];

export const about = {
  now: [
    "Based in Toronto; building AI-assisted UX tools and training dashboards.",
    "Shipping a WaterlooWorks helper extension and polishing the Live Caption demo.",
    "Climbing & badminton keep me grounded; I like solving ops problems on and off the wall."
  ]
};

export const contact = {
  email: "Bobbywu042@gmail.com",
  note: "I read everything—reply within 48h.",
  links: [
    { label: "GitHub", href: "https://github.com/BobbyWu-Git" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bobbywu" } // TODO
  ]
};
