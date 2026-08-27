// ─────────────────────────────────────────────────────────
// IAIF — Single source of truth for all website content
// All copy is verbatim from the organization document.
// ─────────────────────────────────────────────────────────

export const SITE = {
  name: "IAIF",
  fullName: "Industry-Academia Interaction Forum",
  tagline: "Bridging Industry and Research Experts with Academia",
  heroSubline:
    "Empowering students for Entrepreneurship and Research — a collective of distinguished professionals volunteering expertise to skill students to be industry ready.",
  editorialQuote:
    "While the world's leading economies thrive on a rigorous interaction between industrial capital and intellectual capital, this synergy is still evolving in Bharat. We are here to bridge that gap.",
  address: {
    line1: "House of Hiranandani Hebbal",
    line2: "Kodigehalli Main Road",
    line3: "Devinagar, Bengaluru - 560094",
  },
  social: {
    whatsapp: "#",
    instagram: "#",
    linkedin: "#",
    email: "contact@iaif.org",
  },
};

export const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    description: "Our mission, values, and the people behind IAIF",
    children: [
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "The IAIF Code", href: "/about#values" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    description: "Bridging classroom learning with industry expectations",
    children: [
      { label: "Hackathons", href: "/programs#hackathons" },
      { label: "Project-Based Learning", href: "/programs#pbl" },
      { label: "Expert Lecture Series", href: "/programs#lectures" },
      { label: "All Programs", href: "/programs" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    description: "Measurable outcomes and our methodology",
    children: [
      { label: "Value Proposition", href: "/impact#value-proposition" },
      { label: "Execution Strategy", href: "/impact#strategy" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    description: "Join as a volunteer expert or partner institution",
    children: [
      { label: "Volunteer Expert", href: "/get-involved#volunteer" },
      { label: "Register Institution", href: "/get-involved#partner" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Reach out to our Bengaluru team",
    children: [],
  },
];

export const MISSION = {
  statement:
    "To create a common platform where industry experts, faculty, and students converge to align expectations, foster industrial skills, and evolve academic standards.",
  subtext:
    "Create a healthy environment for the development of industrial skills and academic courses.",
};

export const VISION = {
  statement:
    "To facilitate the transformation of Bharat into a self-sufficient and capable nation by empowering its greatest asset — the student.",
  subtext:
    "Fostering a culture of integrity, innovation, and technical excellence, we aim to transform every student into a socially responsible, industry-ready leader.",
};

export const CORE_VALUES = [
  {
    title: "Volunteerism",
    description:
      "We are driven by a passion to serve and share our experiences, not by profit.",
    icon: "heart",
  },
  {
    title: "Integrity",
    description:
      "We instill high ethical standards and professional honesty in every student and young professional we mentor.",
    icon: "shield",
  },
  {
    title: "Innovation",
    description:
      "Driving entrepreneurship and research excellence to build a self-sufficient nation that leads the global technological and social landscape.",
    icon: "flag",
  },
  {
    title: "Excellence",
    description:
      "Leveraging our background and experiences to provide nothing but the best guidance to achieve industry-ready professional standards.",
    icon: "star",
  },
  {
    title: "Sustainable Development",
    description:
      "To promote and work towards SDGs for Bharat & the world — making industry, society, and human lives better for a better world.",
    icon: "leaf",
  },
];

export const PROGRAMS = [
  {
    id: "ideathons",
    title: "Ideathons",
    image: "/images/program-ideathon.jpg",
    summary:
      "Rapid brainstorming sessions where students tackle pressing social and national challenges.",
    description:
      "Students work on real-world problem statements drawn from industry and society, exploring solution options, refining their pitch competence, and building creation skills. The format fosters soft-skill improvements including teamwork, time management, and structured ideation — preparing students to think like innovators and communicate like professionals.",
    category: "terracotta",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    image: "/images/program-hackathon.png",
    summary:
      "Intensive coding and hardware sprints to build functional prototypes under expert mentorship.",
    description:
      "Our intensive and time-bound coding and hardware sprints challenge students to build functional prototypes under the mentorship of our experts. These events prioritize ethical design and data privacy, ensuring technology serves the common good.",
    category: "terracotta",
  },
  {
    id: "pbl",
    title: "Project-Based Learning",
    image: "/images/program-pbl.png",
    summary:
      "Real-world industry problems under joint mentorship of faculty and corporate leaders.",
    description:
      "Moving beyond the textbook, we help students work on real-world industry problems, acting as external guides for Masters and PhD scholars, and providing industry-relevant projects for undergraduates.",
    category: "sage",
  },
  {
    id: "lectures",
    title: "Expert Lecture Series",
    image: "/images/program-lecture.png",
    summary:
      "Industry experts discussing emerging trends, corporate ethics, and professional integrity.",
    description:
      "Regular sessions featuring industry experts who discuss emerging trends, corporate ethics, and the importance of integrity in professional life. Guest lectures focusing on emerging technologies and social sectors.",
    category: "sage",
  },
  {
    id: "curriculum",
    title: "Curriculum Alignment",
    image: "/images/program-circulum.jpg",
    summary:
      "Ensuring course content is functionally relevant to current job markets.",
    description:
      "We actively support academic boards by serving as industry representatives to align course syllabi with current market skill requirements. Our outcomes include: functional-prototype creation, character-driven student qualities, improved skill-match scores for campus recruitment, higher internship-to-conversion rates, and stronger certificate-pass-rate outcomes. Industry tools, frameworks, case studies, datasets, and practical projects are embedded directly into the academic framework.",
    category: "terracotta",
  },
  {
    id: "faculty",
    title: "Faculty Development",
    image: "/images/faculty-development-image.png",
    summary:
      "On demand education workshops for faculty members to help them stay abreast of the latest industrial processes.",
    description:
      "On demand education workshops for faculty members to help them stay abreast of the latest industrial processes.",
    category: "sage",
  },
  {
    id: "ethics",
    title: "Ethics & Professional Development",
    image: "/images/program-ethics.png",
    summary:
      "Modules instilling professional integrity and ethical conduct for the global marketplace.",
    description:
      "Our integrated modules drive measurable improvements in ethical reasoning, decision-making, civic engagement, moral judgment, empathy, and integrity. Students develop a principled professional identity rooted in accountability and national purpose — emerging as leaders who not only excel technically but conduct themselves with uncompromising ethical standards in every professional context.",
    category: "terracotta",
  },
  {
    id: "reading",
    title: "Culture of Reading",
    image: "/images/program-culture-reading.png",
    summary:
      "Building a vibrant, active community of readers and converting reading into tangible community learning.",
    description:
      "Our program fosters a structured reading environment that translates into improved analytical capacity, expanded worldview, and enhanced professional communication. By collaborating with renowned libraries and knowledge repositories, we facilitate community-led discussions that turn individual reading into collective intellectual growth, fostering the critical thinking skills required to lead in a complex world.",
    category: "sage",
  },
  {
    id: "club",
    title: "IAIF Club",
    image: "/images/IAIF-club.png",
    summary:
      "Campus clubs in colleges and universities fostering industry-academia collaboration.",
    description:
      "IAIF Clubs established across university, institute, and college campuses drive measurable outcomes: improved placement conversion rates, higher live-project completion rates, growing hackathon and competition wins, and expanding professional-network growth for members. These clubs create a self-sustaining local loop of industry-academia collaboration, entrepreneurship, and applied research — building the next generation of Atmanirbhar Bharat leaders.",
    category: "terracotta",
  },
];

export const STAKEHOLDERS = {
  students: {
    title: "For Undergraduate Students",
    subtitle:
      "Acquire high-value skills, ethical grounding, and patriotic purpose",
    benefits: [
      {
        title: "Industry Readiness",
        description:
          'Acquire the "soft" and "hard" skills recruiters look for but textbooks often miss — specifically demanded by top-tier MNCs and Govt bodies.',
      },
      {
        title: "Ethical Foundation",
        description:
          "Learn the importance of professional integrity and national duty, developing a character-driven identity based on integrity and national pride.",
      },
      {
        title: "Patriotic Purpose",
        description:
          "Develop a sense of visible Nationalism by understanding and expressing pride in how your success contributes to the Indian economy, society, and humanity.",
      },
      {
        title: "Career Guidance & Mentorship",
        description:
          'Direct access to mentors who have "been there and done that" in premier global, national, and regional leadership roles.',
      },
      {
        title: "Portfolio Building & Skill Mastery",
        description:
          "Gain access to real-world problem statements, projects, and certifications that add co-curricular strength to your CV while mastering latest tools.",
      },
      {
        title: "Enhanced Employability",
        description:
          "Build a portfolio of real-world projects that make you stand out to top corporate recruiters.",
      },
    ],
  },
  institutions: {
    title: "For Academic Institutions",
    subtitle:
      "Elevate institution brand, curriculum relevance, and placement records",
    benefits: [
      {
        title: "Curriculum Alignment",
        description:
          "Stay updated with latest industry requirements and tech stacks with support from industry veterans in formulating program structures.",
      },
      {
        title: "Faculty Development",
        description:
          "Specialized workshops, training courses, and content for faculty members to bridge the knowledge-practice gap.",
      },
      {
        title: "Enhanced Employability",
        description:
          "Improve campus placement records and institutional rankings through high-impact industry engagements and direct exposure.",
      },
      {
        title: "Resource Sharing",
        description:
          "Access industry best practices and mentorship for more meaningful applied research, development, and innovation.",
      },
      {
        title: "Curriculum Relevance",
        description:
          "Align teaching modules with the fast-evolving needs of the industry.",
      },
      {
        title: "Research Opportunities",
        description:
          "Open doors for collaborative research and consultancy projects with corporate partners and experts.",
      },
      {
        title: "Institutional Prestige",
        description:
          "Elevate your brand as a recognized hub for innovation and nation-building.",
      },
    ],
  },
  experts: {
    title: "For Industry Experts",
    subtitle: "Shape the next generation for a Samartha & Atmanirbhar Bharat",
    benefits: [
      {
        title: "Giving Back",
        description:
          "A platform to impart your hard-earned knowledge and experience to the next generation of Indian talent and young professionals.",
      },
      {
        title: "Fresh Perspectives",
        description:
          "Access fresh, innovative perspectives of young minds and engage resources for exploratory, uncertain tasks quickly and economically.",
      },
      {
        title: "Nation Building",
        description:
          "Play a tangible role in creating a Samartha Bharat (Capable Bharat) and Atmanirbhar Bharat (Self-Reliant Bharat) by shaping future workers.",
      },
      {
        title: "Talent Discovery & Scouting",
        description:
          "Identify, nurture, and mentor high-potential, bright minds long before the formal recruitment season begins.",
      },
    ],
  },
};

export const IMPACT_STATS = [];
// [
//   { value: 9, suffix: "+", label: "Active Programs" },
//   { value: 5, suffix: "", label: "Core Values" },
//   { value: 3, suffix: "", label: "Stakeholder Groups" },
//   { value: 100, suffix: "%", label: "Volunteer-Driven" },
// ];

export const CHALLENGES = [
  {
    challenge: "Mismatched Timelines",
    issue: "Academic inertia vs. Industry agility",
    solution:
      "Modular Micro-credentials: 4-week industry-led modules parallel to the degree.",
    outcome:
      'Rapid deployment of "Industry 4.0" skills without waiting for official curriculum changes.',
    kpi: "Number of industry modules launched; % student completion rate",
  },
  {
    challenge: "Learning Gap",
    issue: '"Marks" culture vs. "Skills" culture',
    solution:
      "Credit-Equivalence Frameworks: Map projects and hackathons to assessment or elective credits.",
    outcome:
      "Increased student motivation to focus on applied projects over rote memorization.",
    kpi: "% of colleges adopting credit mapping; Average project quality score",
  },
  {
    challenge: "Scalability",
    issue: "Resource constraints; Mentor fatigue",
    solution:
      "Train-the-Trainer / Faculty Development Programs: Industry experts train faculty to create a self-sustaining local loop.",
    outcome:
      "Exponential reach of industry knowledge to Tier 2/3 cities via local faculty.",
    kpi: "Ratio of students reached per mentor; Number of faculty certified",
  },
  {
    challenge: "Faculty Buy-In",
    issue: "Resistance to change; Heavy teaching workloads",
    solution:
      "Joint Recognition: Include faculty as Co-Mentors and provide professional appreciation certificates.",
    outcome:
      "Enhanced faculty motivation and alignment with modern industrial processes.",
    kpi: "Faculty satisfaction score; Number of joint publications",
  },
];

export const EXECUTION_STRATEGY = [
  {
    title: "Trust Building",
    description:
      "Start with low-friction guest lectures before moving to Board of Studies involvement to ensure long-term curriculum influence.",
  },
  {
    title: "Policy Integration",
    description:
      "Partner with autonomous colleges and universities to ensure industry activities carry formal academic weight.",
  },
  {
    title: "Hybrid Delivery",
    description:
      "Leverage digital platforms for global experts while maintaining high-impact, hands-on local workshops for skill-building.",
  },
  {
    title: "Industry Impact",
    description:
      "Every activity is tied back to creating measurable outcomes — ensuring students develop entrepreneurial skills and research capabilities.",
  },
];

export const JOIN_PATHS = [
  {
    id: "volunteer",
    title: "Join as a Volunteer Expert",
    description:
      "Are you a professional looking to render your knowledge, experience, and skills for the future generation — bridging the gap between industry and academia?",
    cta: "Volunteer Now",
  },
  {
    id: "partner",
    title: "Register as an Institution",
    description:
      "Want to bring IAIF's expertise to your campus and leverage it for the benefit of students, researchers, and faculty members?",
    cta: "Register Your Institute",
  },
];

export const CAROUSEL_ITEMS = [
  {
    tag: "Initiative",
    title: "Ideathons for Bharat",
    description:
      "Students brainstorm solutions to pressing social and national challenges with a Bharat-First approach.",
  },
  {
    tag: "Program",
    title: "IAIF Campus Clubs",
    description:
      "Establishing IAIF clubs across college and university campuses for industry-academia collaboration.",
  },
  {
    tag: "Collaboration",
    title: "RBCL Partnership",
    description:
      "Promoting reading culture through collaboration with Rashtriya Book Circulating Library.",
  },
  {
    tag: "Workshop",
    title: "Faculty Development Programs",
    description:
      "On Demand education workshops keeping faculty current with modern industry trends, emerging technologies, and evolving market skill requirements.",
  },
  {
    tag: "Strategy",
    title: "Train-the-Trainer Model",
    description:
      "Industry experts training faculty to create self-sustaining knowledge loops reaching Tier 2/3 cities.",
  },
];

export const TESTIMONIAL = {
  quote:
    "IAIF gave me more than skills — it gave me a sense of purpose. Working on real industry problems under expert mentorship showed me how my career can contribute to building a stronger Bharat.",
  name: "IAIF Program Participant",
  context: "Undergraduate Student, Engineering",
  image: "/images/testimonial-portrait.png",
};
