export type SocialPlatform =
  | "Instagram"
  | "TikTok"
  | "LinkedIn"
  | "Facebook"
  | "YouTube"
  | "Twitch"
  | "X";

export type SpeakingType = "Talk" | "Panel" | "Podcast";

export type SpeakingItem = {
  type: SpeakingType;
  title: string;
  event: string;
  date: string; // ISO date string
  location?: string;
  link?: string;
  role?: string;
  description?: string;
  tags?: string[];
};

export type SpeakingTopic = {
  title: string;
  outcome: string;
  bullets?: string[];
};

export type CredibilityLogo = {
  name: string;
  imagePath?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type Service = {
  title: string;
  outcome: string;
  whoFor: string;
  bullets: string[];
};

export type PartnershipOffer = {
  title: string;
  outcome: string;
  typicalDuration: string;
  idealFor: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type PartnershipFaq = {
  q: string;
  a: string;
};

export type PartnershipTimelineStep = {
  step: string;
  title: string;
  description: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type PressPhoto = {
  src: string;
  alt: string;
};

export type NavItem = {
  label: string;
  href: string;
  shortLabel?: string;
};

export const siteConfig = {
  name: "Massi Mapani",
  title: "Massi Mapani",
  siteUrl: "https://massinmapani.com",
  domain: "https://massinmapani.com",
  description:
    "Software Engineer & Technology Consultant building resilient, compliant systems and products across Africa and beyond.",
  businessEmail: "bookings@massinmapani.com",
  bookingsEmail: "bookings@massinmapani.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Speaking", href: "/speaking" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Digital products and interests", shortLabel: "Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" }
  ] as const satisfies readonly NavItem[],
  primaryCta: {
    label: "Start a conversation",
    href: "mailto:bookings@massinmapani.com"
  },
  footer: {
    blurb:
      "Engineering leadership, architecture, and program oversight for institutions building resilient, high-trust digital systems.",
    email: "bookings@massinmapani.com",
    calendarUrl: ""
  },

  /* ================= SOCIAL LINKS ================= */

  socialLinks: [
    {
      platform: "Instagram" as SocialPlatform,
      url: "https://www.instagram.com/massi_n_m/",
      handle: "@massi_n_m"
    },
    // {
    //   platform: "TikTok" as SocialPlatform,
    //   url: "https://www.tiktok.com/@zedscareerfirst",
    //   handle: "@zedscareerfirst"
    // },
    {
      platform: "LinkedIn" as SocialPlatform,
      url: "https://www.linkedin.com/in/massi-mapani/",
      handle: "Massi Mapani"
    },
    {
      platform: "Facebook" as SocialPlatform,
      url: "https://web.facebook.com/massi.mwah/",
      handle: "Massi Mwah"
    },
    {
      platform: "YouTube" as SocialPlatform,
      url: "https://www.youtube.com/@massimapani8951",
      handle: "@massimapani8951"
    },
    {
      platform: "Twitch" as SocialPlatform,
      url: "https://www.twitch.tv/massinmapani",
      handle: "massinmapani"
    },
    {
      platform: "X" as SocialPlatform,
      url: "https://x.com/mas_mapani",
      handle: "@mas_mapani"
    }
  ],

  /* ================= SOCIAL STATS ================= */

  socialStats: [
    { platform: "Instagram" as SocialPlatform, label: "Instagram", value: "841" },
    { platform: "TikTok" as SocialPlatform, label: "TikTok", value: "51" },
    { platform: "LinkedIn" as SocialPlatform, label: "LinkedIn", value: "845" },
    { platform: "Facebook" as SocialPlatform, label: "Facebook", value: "904" },
    { platform: "YouTube" as SocialPlatform, label: "YouTube", value: "8 subscribers" },
    { platform: "Twitch" as SocialPlatform, label: "Twitch", value: "0" },
    { platform: "X" as SocialPlatform, label: "X", value: "116" }
  ],

  /* ================= CREDIBILITY ================= */

  credibility: {
    logoStrip: {
      title: "Trusted by teams and communities across sectors",
      logos: [
        { name: "Atlas Telecom", imagePath: "/images/logo-atlas-telecom.svg" },
        { name: "Northbridge Finance", imagePath: "/images/logo-northbridge-finance.svg" },
        { name: "Aster Energy", imagePath: "/images/logo-aster-energy.svg" },
        { name: "Civic Enterprise", imagePath: "/images/logo-civic-enterprise.svg" },
        { name: "Identity Mentoring", imagePath: "/images/logo-identity-mentoring.svg" },
        { name: "Women Build Systems", imagePath: "/images/logo-women-build-systems.svg" }
      ] as const satisfies readonly CredibilityLogo[]
    },
    testimonials: [
      {
        name: "A. Ndlovu",
        role: "Program Director, Enterprise Transformation",
        quote:
          "Massi brought structure to a high-pressure program and aligned delivery, governance, and reliability in a way the whole team could trust."
      },
      {
        name: "C. Moyo",
        role: "Head of Digital Operations",
        quote:
          "Her approach made complex systems practical for our teams and improved execution quality without introducing unnecessary process overhead."
      },
      {
        name: "R. Banda",
        role: "Engineering Lead, Platform Services",
        quote:
          "She combines strong technical judgment with calm stakeholder leadership, which helped us move faster while improving compliance readiness."
      }
    ] as const satisfies readonly Testimonial[]
  },
  pressPhotos: {
    title: "Press / Speaker",
    items: [
      { src: "/images/press/press-1.webp", alt: "Massi Mapani — speaker portrait" },
      { src: "/images/press/press-2.webp", alt: "Massi Mapani — press headshot" },
      { src: "/images/press/press-3.webp", alt: "Massi Mapani — studio portrait" },
      { src: "/images/press/press-4.webp", alt: "Massi Mapani — professional photo" }
    ] as const satisfies readonly PressPhoto[]
  },

  services: [
    {
      title: "Systems Strategy and Delivery",
      outcome:
        "Helping organisations plan and execute complex digital programs with clarity.",
      whoFor: "Leadership teams modernizing critical digital operations.",
      bullets: [
        "Technology strategy aligned to institutional goals",
        "Stronger execution across teams"
      ]
    },
    {
      title: "Workflow Automation and Compliance",
      outcome:
        "Designing systems that improve efficiency while maintaining strong oversight.",
      whoFor: "Organizations in regulated or high-accountability environments.",
      bullets: [
        "Automate high-friction processes",
        "Build clear approval and decision flows"
      ]
    },
    {
      title: "Technical Leadership Enablement",
      outcome:
        "Helping engineering teams operate at a higher level.",
      whoFor: "Growing teams building durable internal capability.",
      bullets: [
        "Strong engineering practices and standards",
        "Systems thinking embedded into delivery culture"
      ]
    }
  ] as const satisfies readonly Service[],

  /* ================= HERO ================= */

  hero: {
    kicker: "Systems leadership with measurable outcomes",
    title: "Massi Mapani",
    subtitle:
      "I design and deliver resilient digital systems that help institutions scale performance, governance, and trust.",
    mission:
      "From Zambia to the UK and South Africa, my work blends engineering rigor, responsible automation, and leadership that builds long-term capacity.",
    quote:
      "Great systems are not loud. They are dependable, accountable, and built to last."
  },
  pageHeroes: {
    home: {
      eyebrow: "Systems leadership with measurable outcomes",
      title: "Build resilient digital systems with measurable outcomes.",
      subtitle:
        "I design and deliver resilient digital systems that help institutions scale performance, governance, and trust.",
      proof:
        "Led modernization programs across telecom, finance, energy, and institutional environments with measurable performance outcomes.",
      primaryCta: {
        label: "Start a conversation",
        href: "mailto:bookings@massinmapani.com"
      },
      secondaryCta: {
        label: "View work",
        href: "/work"
      },
      image: {
        src: "/images/massi-hero.webp",
        alt: "Massi Mapani"
      }
    },
    speaking: {
      eyebrow: "Speaking & Media",
      title: "Practical conversations for high-stakes technology teams.",
      subtitle: "Conversations on building institutions through better technology decisions.",
      primaryCta: {
        label: "Book for speaking",
        href: "mailto:bookings@massinmapani.com"
      },
      secondaryCta: {
        label: "Download press kit",
        href: "/press/massi-mapani-press-kit.pdf"
      }
    },
    press: {
      eyebrow: "Press Kit",
      title: "Media resources for events, interviews, and speaking features.",
      subtitle: "Download approved materials and speaker information for Massi Mapani.",
      primaryCta: {
        label: "Download press kit",
        href: "/press/massi-mapani-press-kit.pdf"
      }
    },
    partnerships: {
      eyebrow: "Partnerships",
      title: "Collaborations for ambitious institutions that need dependable, measurable delivery.",
      subtitle:
        "Strategic advisory, collaboration, and capability partnerships designed to improve execution quality, governance confidence, and long-term team performance.",
      primaryCta: {
        label: "Explore collaboration",
        href: "mailto:bookings@massinmapani.com"
      }
    }
  },

  homeTiles: [
    {
      label: "ABOUT",
      href: "/about",
      title: "Leadership rooted in engineering discipline",
      image: "/images/massi-portrait.webp",
      className: "col-span-12 md:col-span-7 row-span-2"
    },
    {
      label: "PROJECTS",
      href: "/work",
      title: "Scalable architecture with compliance built in",
      image: "/images/placeholder-architecture.svg",
      className: "col-span-12 md:col-span-5 row-span-1"
    },
    {
      label: "SPEAKING",
      href: "/speaking",
      title: "Panels, talks, and practical technology guidance",
      image: "/images/placeholder-speaking.svg",
      className: "col-span-12 md:col-span-6 row-span-1"
    },
    {
      label: "PARTNERSHIPS",
      href: "/partnerships",
      title: "Advisory and strategic collaborations",
      image: "/images/placeholder-partnerships.svg",
      className: "col-span-12 md:col-span-6 row-span-1"
    },
    {
      label: "PRODUCTS",
      href: "/products",
      title: "Digital products for intentional travel",
      image: "/images/placeholder-product.svg",
      className: "col-span-12 md:col-span-6 row-span-1"
    },
    {
      label: "COMMUNITY",
      href: "/community",
      title: "Mentorship, pathways, and community impact",
      image: "/images/placeholder-community.svg",
      className: "col-span-12 md:col-span-6 row-span-1"
    },
    {
      label: "CONTACT",
      href: "/contact",
      title: "Open for leadership, consulting, and speaking",
      image: "/images/placeholder-contact.svg",
      className: "col-span-12 md:col-span-12 row-span-1"
    }
  ],

  /* ================= ABOUT ================= */

  about: {
    intro:
      "Massi Mapani is a Software Engineer and technology consultant with international experience delivering scalable, compliant digital systems across telecommunications, finance, energy, and enterprise environments in Zambia, the United Kingdom, and South Africa.",
    body: [
      "Her work centers on systems that improve institutional performance, increase reliability, and support long-term growth. She helps organizations move from fragmented manual operations to structured digital services with clearer governance and stronger decision intelligence.",
      "She combines cloud engineering, full-stack delivery, automation, and reliability thinking with stakeholder-led execution. The priority is durable adoption, not short-term feature volume.",
      "Massi champions responsible automation and AI-adjacent tooling that improves service delivery in emerging markets while keeping accountability, context, and human oversight in view.",
      "She also mentors and builds pathways for women in technical and leadership roles, expanding access to high-impact careers in technology."
    ],
    principles: ["Resilient", "Inclusive", "Measurable impact", "Long-term adoption"],
    toolbox: [
      "Cloud Architecture",
      "Full-stack Engineering",
      "Reliability",
      "Compliance by Design",
      "Workflow Automation",
      "AI-adjacent Tooling",
      "Technical Strategy",
      "Governance"
    ]
  },

  /* ================= WORK ================= */

  work: {
    intro:
      "Case studies focused on execution quality, operational resilience, and measurable impact across regulated and growth-stage environments.",
    projects: [
      {
        slug: "telecom-reliability-program",
        title: "Telecom Reliability Program",
        summary:
          "Reduced incident recovery time while modernizing core service workflows.",
        role: "Technical Lead, Reliability & Platform Modernization",
        scope: "Service reliability uplift across incident response, observability, and operational governance.",
        timeline: "9 months",
        teamSize: "4 engineering squads + 2 operations teams",
        constraints:
          "Legacy tooling, cross-team escalation gaps, and strict uptime requirements during migration.",
        resultsBullets: [
          "Reduced mean time to recovery through standardized response workflows.",
          "Introduced shared ownership model across platform and operations teams.",
          "Improved incident consistency with automated runbooks and class-based routing."
        ],
        links: [
          { label: "Program summary", href: "/work/telecom-reliability-program" }
        ] as const satisfies readonly ProjectLink[],
        image: "/images/placeholder-architecture.svg",
        tags: ["Cloud", "Reliability", "Compliance"],
        problem:
          "Critical services were constrained by fragmented operational tooling and unclear escalation pathways.",
        approach:
          "Introduced observability standards, service ownership boundaries, and automated runbooks tied to incident classes.",
        impact:
          "Improved fault resolution speed and reduced repeat incidents while aligning controls to audit requirements.",
        stack: ["TypeScript", "Node.js", "AWS", "Terraform", "Grafana"],
        metrics: [
          "MTTR down 38%",
          "SLA adherence up 17%",
          "Escalation clarity across 4 teams"
        ]
      },
      {
        slug: "finance-control-layer",
        title: "Finance Control Layer Modernization",
        summary:
          "Implemented compliant workflow orchestration for high-volume approvals.",
        role: "Lead Full-stack Engineer",
        scope: "Design and delivery of policy-aware approval services and control instrumentation.",
        timeline: "7 months",
        teamSize: "5 engineers + product and compliance stakeholders",
        constraints:
          "Regulatory traceability, strict approval sequencing, and integration with existing finance systems.",
        resultsBullets: [
          "Accelerated approval cycles while preserving governance checks.",
          "Enabled audit-ready event logging for every high-risk decision path.",
          "Reduced manual review overhead through role-aware workflow automation."
        ],
        links: [
          { label: "Program summary", href: "/work/finance-control-layer" }
        ] as const satisfies readonly ProjectLink[],
        image: "/images/placeholder-product.svg",
        tags: ["Automation", "Compliance", "Full-stack"],
        problem:
          "Manual controls and disconnected systems slowed approval cycles and limited traceability.",
        approach:
          "Built policy-aware workflow services with event logging and role-based approvals.",
        impact:
          "Increased throughput and audit-readiness while reducing manual bottlenecks.",
        stack: ["Next.js", "PostgreSQL", "Redis", "Docker"],
        metrics: [
          "Cycle time down 42%",
          "Audit response prep down 55%",
          "Error rate down 29%"
        ]
      },
      {
        slug: "energy-platform-rollout",
        title: "Energy Operations Platform Rollout",
        summary:
          "Scaled operational reporting across regional teams with governance controls.",
        role: "Solutions Engineer, Operations Intelligence",
        scope: "Regional reporting modernization with data quality enforcement and governance controls.",
        timeline: "8 months",
        teamSize: "3 engineers + regional operations leads",
        constraints:
          "Inconsistent source data, uneven regional processes, and limited reporting confidence.",
        resultsBullets: [
          "Improved data reliability for planning and field operations decisions.",
          "Reduced reporting delays through unified ingestion and validation pipelines.",
          "Increased platform adoption by aligning dashboards to real operator workflows."
        ],
        links: [
          { label: "Program summary", href: "/work/energy-platform-rollout" }
        ] as const satisfies readonly ProjectLink[],
        image: "/images/placeholder-community.svg",
        tags: ["Cloud", "Automation", "Reliability"],
        problem:
          "Reporting inconsistencies and delayed field updates impacted planning and service quality.",
        approach:
          "Designed unified data ingestion, quality checks, and operator dashboards with clear accountability.",
        impact:
          "Improved reporting confidence and supported faster, evidence-based decisions.",
        stack: ["React", "Node.js", "Azure", "Power BI"],
        metrics: [
          "Reporting latency down 46%",
          "Data quality score up 31%",
          "Adoption in 3 regions"
        ]
      }
    ]
  },

  /* ================= SPEAKING ================= */

  speaking: {
    intro:
      "Conversations on building institutions through better technology decisions.",
    topics: [
      {
        title: "Reliability by Design",
        outcome: "Help teams move from reactive firefighting to predictable service reliability.",
        bullets: [
          "Building dependable services under real-world constraints",
          "Operational readiness for high-impact systems",
          "Turning reliability into a measurable leadership metric"
        ]
      },
      {
        title: "Compliance as Product Strategy",
        outcome: "Show how governance can accelerate delivery instead of blocking it.",
        bullets: [
          "Embedding governance into delivery workflows",
          "Practical controls that do not slow teams down",
          "Designing for auditability from day one"
        ]
      },
      {
        title: "Leadership for Technical Teams",
        outcome: "Equip engineering leaders with clearer decision and execution frameworks.",
        bullets: [
          "Operating models that improve execution quality",
          "Stakeholder alignment in complex programs",
          "Decision frameworks for engineering leaders"
        ]
      },
      {
        title: "Pathways in Technology",
        outcome: "Create scalable mentorship pathways that improve inclusion and retention.",
        bullets: [
          "Mentorship structures that scale",
          "Inclusive pipelines for emerging talent",
          "Career growth strategies for underrepresented groups"
        ]
      },
      {
        title: "Operational Excellence in Regulated Environments",
        outcome: "Improve quality and speed while maintaining strict accountability requirements."
      },
      {
        title: "AI-Adjacent Adoption with Governance",
        outcome: "Adopt automation responsibly with controls, transparency, and measurable value."
      }
    ] as const satisfies readonly SpeakingTopic[],
    featured: [
      {
        type: "Talk",
        title: "Community Computing: Technology and your space",
        event: "Girls Into Coding",
        date: "2022-04-10",
        location: "London, UK",
        link: "https://www.girlsintocoding.com/our-speakers/",
        role: "Guest Speaker",
        description:
          "Session for young learners on practical pathways into technology and community-driven growth.",
        tags: ["STEM", "Youth", "Community"]
      },
      {
        type: "Panel",
        title: "YouGotThisConf community feature",
        event: "YouGotThisConf",
        date: "2022-11-01",
        link: "https://x.com/YouGotThisConf/status/0000000000000000000",
        role: "Community Guest",
        description:
          "Placeholder metadata pending the exact event title/date details from the original post.",
        tags: ["Conference", "Community"]
      }
    ] as const satisfies readonly SpeakingItem[],
    all: [
      {
        type: "Panel",
        title: "Designing Reliable Digital Services",
        event: "Tech Leadership Forum",
        date: "2025-07-18",
        location: "Johannesburg, South Africa",
        role: "Panelist",
        tags: ["Reliability", "Leadership"]
      },
      {
        type: "Talk",
        title: "Compliance as a Product Feature",
        event: "Engineering Governance Summit",
        date: "2024-09-20",
        location: "London, UK",
        role: "Speaker",
        tags: ["Compliance", "Product"]
      },
      {
        type: "Podcast",
        title: "Mentorship Pathways for Women in Engineering",
        event: "Women Build Systems",
        date: "2024-03-12",
        role: "Guest",
        tags: ["Mentorship", "Women in Tech"]
      },
      {
        type: "Talk",
        title: "Community Computing: Technology and your space",
        event: "Girls Into Coding",
        date: "2022-04-10",
        location: "London, UK",
        link: "https://www.girlsintocoding.com/our-speakers/",
        role: "Guest Speaker",
        tags: ["STEM", "Youth", "Community"]
      },
      {
        type: "Panel",
        title: "YouGotThisConf community feature",
        event: "YouGotThisConf",
        date: "2022-11-01",
        link: "https://x.com/YouGotThisConf/status/0000000000000000000",
        role: "Community Guest",
        tags: ["Conference", "Community"]
      }
    ] as const satisfies readonly SpeakingItem[],
    engagements: [
      {
        title: "Designing Reliable Digital Services",
        type: "Panel",
        org: "Tech Leadership Forum",
        year: "2025"
      },
      {
        title: "Compliance as a Product Feature",
        type: "Talk",
        org: "Engineering Governance Summit",
        year: "2024"
      },
      {
        title: "Mentorship Pathways for Women in Engineering",
        type: "Podcast",
        org: "Women Build Systems",
        year: "2024"
      }
    ],
    cta: "Invite Massi to speak"
  },

  /*
   * TODO(press-kit): Replace /public/press/massi-mapani-press-kit.pdf with the final press kit.
   * The current file is treated as a placeholder by the /press page check.
   */
  pressKit: {
    enabled: true,
    pdfPath: "/press/massi-mapani-press-kit.pdf",
    label: "Download press kit"
  },

  /* ================= PARTNERSHIPS ================= */

  partnerships: {
    intro:
      "Strategic collaborations for organizations building high-trust digital products and services.",
    logos: ["Atlas Telecom", "Northbridge Finance", "Aster Energy", "Civic Enterprise"],
    offers: [
      {
        title: "Executive Advisory",
        outcome: "Sharper executive decisions and a de-risked roadmap for complex digital initiatives.",
        typicalDuration: "4-8 weeks",
        idealFor: "Leadership teams planning transformation programs or platform resets.",
        bullets: [
          "Current-state delivery and risk diagnosis",
          "Target operating model and governance recommendations",
          "Prioritized execution roadmap"
        ],
        ctaLabel: "Discuss advisory",
        ctaHref: "/contact?reason=advisory"
      },
      {
        title: "Brand Collaborations",
        outcome: "Credible, outcome-linked collaborations that align brand goals with technical leadership value.",
        typicalDuration: "4-12 weeks",
        idealFor: "Mission-aligned brands seeking strategic campaigns, panels, or co-created initiatives.",
        bullets: [
          "Collaboration brief and audience alignment",
          "Content and campaign direction",
          "Execution support and post-campaign review"
        ],
        ctaLabel: "Discuss collaboration",
        ctaHref: "/contact?reason=collaboration"
      },
      {
        title: "Capability and Leadership Program",
        outcome: "Stronger internal capability through structured mentorship and leadership enablement.",
        typicalDuration: "8-12 weeks",
        idealFor: "Teams building long-term technical depth and leadership pipelines.",
        bullets: [
          "Mentorship structures and growth plans",
          "Leadership rituals for high-performing engineering teams",
          "Progress checkpoints and capability metrics"
        ],
        ctaLabel: "Plan a capability program",
        ctaHref: "/contact?reason=advisory"
      }
    ] as const satisfies readonly PartnershipOffer[],
    timeline: [
      {
        step: "Week 1",
        title: "Diagnose context and priorities",
        description:
          "Align on business goals, constraints, and decision criteria to define a realistic engagement scope."
      },
      {
        step: "Week 2",
        title: "Map risks and opportunities",
        description:
          "Assess current delivery posture, uncover blockers, and identify high-impact intervention points."
      },
      {
        step: "Week 3",
        title: "Design execution approach",
        description:
          "Agree practical workstreams, ownership, and governance rhythms that fit your operating reality."
      },
      {
        step: "Week 4",
        title: "Launch and measure",
        description:
          "Start delivery with clear milestones and measurable outcomes to maintain momentum and accountability."
      }
    ] as const satisfies readonly PartnershipTimelineStep[],
    faq: [
      {
        q: "What scope is included in a typical partnership?",
        a: "Scope is defined around outcomes and may include strategy, execution support, stakeholder alignment, and delivery governance."
      },
      {
        q: "How is confidentiality handled?",
        a: "Confidentiality is handled through formal NDAs, controlled information-sharing, and engagement boundaries agreed upfront."
      },
      {
        q: "Do you work remotely, on-site, or hybrid?",
        a: "Engagements can be remote, on-site, or hybrid depending on team needs, geography, and the nature of the delivery work."
      },
      {
        q: "What timelines should we expect?",
        a: "Most partnerships begin with a 30-day foundation phase, followed by a scoped delivery cycle based on agreed outcomes."
      },
      {
        q: "How are fees structured?",
        a: "Fees are scoped by engagement type, complexity, and duration. Ranges are available on request."
      }
    ] as const satisfies readonly PartnershipFaq[],
    cards: [
      {
        title: "Brand Collaborations",
        description:
          "Selective collaborations with mission-aligned brands in technology, education, and leadership development."
      },
      {
        title: "Executive Advisory",
        description:
          "Guidance on platform strategy, operating models, and delivery systems for regulated or complex environments."
      },
      {
        title: "Capability Programs",
        description:
          "Mentorship and workforce pathway initiatives to strengthen technical leadership pipelines."
      }
    ]
  },

  /* ================= PRODUCTS ================= */

  productCategories: [
    "Education and Skills transfer",
    "Travel",
    "Fashion",
    "Beauty",
    "Media",
    "Photography",
    "Sports and Fitness"
  ],

  products: [
    {
      slug: "travel-plan-through-the-beauty-of-namibia",
      name: "Travel Plan: Through the Beauty of Namibia",
      category: "Travel",
      status: "Available",
      price: "$49",
      coverImage: "/images/Namibiathumbnail.png",
      gumroadUrl:
        "https://massinachombemapani.gumroad.com/l/zhisbf",
      paypalUrl: "https://www.paypal.com/ncp/payment/UX83SWELWFY9E",
      description:
        "A refined travel planning guide for first-time and returning travelers exploring Namibia with structure and confidence.",
      whatYouGet: [
        "Route planning templates",
        "Budget and logistics checklist",
        "Cultural etiquette notes",
        "Safety and timing guidance"
      ],
      whoItsFor:
        "Travelers who value clear itineraries, practical advice, and premium planning support.",
      format: "Digital PDF + checklist bundle"
    },
    {
      slug: "namibia-travel-contact-list-first-time-traveler-warnings",
      name: "Namibia Travel Contact List + First-Time Traveler Warnings",
      category: "Travel",
      status: "Coming Soon",
      price: "$79",
      coverImage: "/images/placeholder-product-2.svg",
      gumroadUrl:
        "https://massinachombemapani.gumroad.com/l/zhisbf",
      paypalUrl: "", // Add PayPal link when ready
      description:
        "A paid directory of vetted contacts and practical warnings for smoother travel operations.",
      whatYouGet: [
        "Curated contact list",
        "Regional warning notes",
        "Transport and communication tips",
        "Arrival-readiness checklist"
      ],
      whoItsFor:
        "First-time visitors, independent professionals, and small groups planning with limited local network access.",
      format: "Digital directory + field notes"
    }
  ],

  productIpNote:
    "All digital products are issued under a personal-use license. Redistribution, resale, or public sharing is prohibited.",

  /* ================= COMMUNITY ================= */

  community: {
    intro:
      "Community impact through mentorship, practical education, and platform-building for women in technical leadership.",
    mentorship:
      "Massi mentors emerging engineers and future technology leaders through structured guidance on career strategy, technical depth, and leadership confidence.",
    highlights: [
      "Built mentorship pathways for women transitioning into software and cloud roles",
      "Supported community workshops on practical automation and system reliability",
      "Advised teams on responsible AI-adjacent adoption grounded in governance"
    ]
  },

  /* ================= CONTACT ================= */

  contact: {
    heading: "Let’s build something that lasts.",
    description:
      "For consulting, advisory, speaking, and partnerships, share your context and goals. You will receive a response via email.",
    newsletterHeading: "Join the newsletter",
    newsletterDescription:
      "Periodic insights on systems strategy, reliability, and career pathways."
  }
} as const;

export type SiteConfig = typeof siteConfig;
