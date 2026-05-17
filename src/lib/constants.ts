// ─── Site Configuration ───
export const SITE_CONFIG = {
  name: "Rajinish",
  fullName: "Rajinish Pothakamuri",
  title: "Backend Developer & Machine Learning Enthusiast",
  description:
    "A digital portfolio showcasing my journey in Software Engineering, Machine Learning, Backend Development, and Data Engineering.",
  url: "https://github.com/Rajinshchowdary",
  email: "rajinish.pothakamuri@gmail.com",
  location: "Bremen, Germany",
  socials: {
    github: "https://github.com/Rajinshchowdary",
    linkedin: "https://www.linkedin.com/in/rajinish",
    twitter: "",
  },
} as const;

// ─── Navigation ───
export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Interests", href: "#interests" },
  { label: "Watchlist", href: "#watchlist" },
  { label: "Thoughts", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Projects ───
export const PROJECTS = [
  {
    id: "event-discovery",
    title: "Local Event Discovery Backend",
    subtitle: "FastAPI + Supabase Application",
    description:
      "A backend system for a local event discovery platform supporting user authentication, event creation, and social interactions with AI-based recommendations.",
    longDescription:
      "Designed and developed a backend system using FastAPI. Integrated Supabase (PostgreSQL + Auth) for secure user authentication and scalable database management. Built a JWT-based authentication and authorization system. Implemented location-based event discovery and integrated AI-based event recommendation logic.",
    tech: ["FastAPI", "Python", "Supabase", "PostgreSQL", "JWT", "REST APIs", "Pydantic"],
    challenges: [
      "Implementing secure JWT-based authentication",
      "Designing a modular backend architecture with service layers",
      "Integrating AI-based event recommendation logic",
    ],
    lessons: [
      "A modular architecture greatly improves maintainability",
      "Supabase provides an excellent balance of scalability and developer experience",
      "Environment-based configuration is crucial for smooth deployments",
    ],
    image: "",
    liveUrl: "#",
    githubUrl: "https://github.com/Rajinshchowdary",
    featured: true,
    year: "2024",
    category: "Backend",
  },
  {
    id: "oracle-integration",
    title: "Enterprise Integrations",
    subtitle: "Oracle Integration Cloud (OIC) & SOA",
    description:
      "Developed REST-based integrations using Oracle Fusion APIs across hybrid cloud environments, automating data pipelines.",
    longDescription:
      "During my 1 year as an SOA / OIC Developer, I developed REST-based integrations across hybrid cloud environments. Automated data pipelines using FTP, File, and Oracle DB adapters. Implemented Web Services Security, fault handling, and exception management in Linux-based deployment environments.",
    tech: ["Oracle Integration Cloud", "REST APIs", "SOAP", "JSON", "XML", "SQL", "Java"],
    challenges: [
      "Designing secure cloud-to-on-premise integration workflows",
      "Implementing robust fault handling and exception management",
      "Optimizing performance of middleware components",
    ],
    lessons: [
      "Security and fault handling are paramount in enterprise integrations",
      "Agile development cycles improve structured release processes",
    ],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2023",
    category: "Data Engineering",
  },
  {
    id: "purchase-prediction",
    title: "Purchase Intention Prediction",
    subtitle: "E-Commerce Machine Learning Pipeline",
    description:
      "A machine learning pipeline to predict whether an online website visitor would generate revenue based on browsing behavior and temporal data.",
    longDescription:
      "Conducted rigorous model selection, comparing Logistic Regression, Random Forest, XGBoost, SVM, and KNN. Implemented LightGBM as the top-performing model, utilizing Randomized SearchCV for hyperparameter optimization to minimize overfitting.",
    tech: ["Python", "LightGBM", "Scikit-learn", "Pandas", "NumPy"],
    challenges: [
      "Handling class imbalance in purchase prediction data",
      "Minimizing overfitting through hyperparameter optimization",
      "Comparing multiple models systematically",
    ],
    lessons: [
      "LightGBM provides excellent performance for tabular data",
      "Randomized SearchCV is efficient for hyperparameter tuning",
    ],
    image: "",
    liveUrl: "#",
    githubUrl: "https://github.com/Rajinshchowdary",
    featured: false,
    year: "2022",
    category: "Machine Learning",
  },
  {
    id: "life-expectancy",
    title: "Life Expectancy Classification",
    subtitle: "Deep Learning MLP Model",
    description:
      "A classification model to analyze and predict life expectancy categories based on demographic and health indicators.",
    longDescription:
      "Designed a Deep Learning architecture using a Multi-Layer Perceptron (MLPClassifier). Performed extensive hyperparameter tuning on hidden layer sizes and activation functions using Grid Search. Evaluated performance using Weighted F1-Score, Precision, and Recall to handle class imbalances.",
    tech: ["Python", "Neural Networks", "Scikit-learn", "Grid Search"],
    challenges: [
      "Handling class imbalances in demographic data",
      "Designing an effective neural network architecture",
      "Evaluating model performance comprehensively",
    ],
    lessons: [
      "Proper hyperparameter tuning is critical for neural networks",
      "Robust evaluation metrics like Weighted F1-Score are essential for imbalanced data",
    ],
    image: "",
    liveUrl: "#",
    githubUrl: "https://github.com/Rajinshchowdary",
    featured: false,
    year: "2022",
    category: "Deep Learning",
  },
];

// ─── Studies / Learning Journey ───
export const EDUCATION = [
  {
    degree: "Master of Science, Computer Science and Software Engineering",
    institution: "Constructor University",
    year: "Currently Studying",
    description:
      "Working as a backend developer in the college semester project. Vibe coding and exploring advanced computer science concepts.",
  },
  {
    degree: "Bachelor of Technology, Computer Science Engineering",
    institution: "Malla Reddy University",
    year: "Graduated",
    description:
      "Developed a strong foundation in computer science principles, machine learning, and software engineering.",
  },
];

export const LEARNING_TOPICS = [
  {
    topic: "Agentic AI Skills",
    status: "active",
    resources: ["Google Skills", "AI Research Papers"],
  },
  {
    topic: "German Language",
    status: "active",
    resources: ["Duolingo", "Language Practice"],
  },
  {
    topic: "Backend Architecture",
    status: "active",
    resources: ["FastAPI", "PostgreSQL", "Supabase"],
  },
];

export const CERTIFICATIONS = [
  { name: "SOA / OIC Developer", issuer: "Previous Experience", year: "1 Year" },
];

export const BOOKS = [
  { title: "Who Made Me a Princess", author: "Plutus", status: "read" },
  { title: "Solo Leveling", author: "Chugong", status: "read" },
  { title: "Damn Reincarnation", author: "Mokma", status: "reading" },
  { title: "SSS-Class Suicide Hunter", author: "Shin Noah", status: "reading" },
  { title: "The Greatest Estate Developer", author: "Lee Hyungmin", status: "queued" },
];

// ─── Interests ───
export const INTERESTS = [
  {
    category: "Machine Learning & AI",
    items: ["Deep Learning", "Random Forest", "XGBoost", "OpenCV"],
    icon: "🧠",
    color: "#7c5cfc",
  },
  {
    category: "Software Development",
    items: ["Backend Systems", "FastAPI", "Oracle Integration", "REST APIs"],
    icon: "⚙️",
    color: "#34d399",
  },
  {
    category: "Anime",
    items: ["Tokyo Revengers", "Demon Slayer", "Solo Leveling", "Horimiya"],
    icon: "🎬",
    color: "#f87171",
  },
  {
    category: "Sports & Games",
    items: ["Badminton", "Cricket", "Clash Royale", "Chess.com"],
    icon: "🎮",
    color: "#fbbf24",
  },
  {
    category: "Lifestyle & Reading",
    items: ["Fictional Series", "Web Surfing", "Shopping", "Tech News"],
    icon: "✨",
    color: "#a78bfa",
  },
  {
    category: "Favorites",
    items: ["Pokemon", "Shoes", "Hublot Watches", "Gadgets"],
    icon: "⭐",
    color: "#f472b6",
  },
];

// ─── Watchlist / Media ───
export const CURRENTLY_WATCHING = [
  { title: "Solo Leveling", type: "anime", rating: "★★★★★" },
  { title: "The Eminence in Shadow", type: "anime", rating: "★★★★★" },
  { title: "My Star (Oshi no Ko)", type: "anime", rating: "★★★★" },
];

export const FAVORITE_FILMS = [
  { title: "Horimiya", year: 2021, genre: "Romance / Slice of Life" },
  { title: "Tokyo Revengers", year: 2021, genre: "Action / Sci-Fi" },
  { title: "That Time I Got Reincarnated as a Slime", year: 2018, genre: "Fantasy / Isekai" },
  { title: "Demon Slayer", year: 2019, genre: "Action / Dark Fantasy" },
];

export const ANIME_WATCHLIST = [
  { title: "Horimiya", status: "completed", rating: "★★★★★" },
  { title: "Tokyo Revengers", status: "completed", rating: "★★★★★" },
  { title: "Demon Slayer", status: "completed", rating: "★★★★" },
  { title: "Solo Leveling", status: "watching", rating: "★★★★★" },
  { title: "The Eminence in Shadow", status: "watching", rating: "★★★★" },
];

export const MUSIC_ROTATION = [
  { artist: "Lo-fi Beats", genre: "Relaxing" },
  { artist: "Anime Soundtracks", genre: "Various" },
];

export const RECOMMENDED_BOOKS = [
  { title: "Who Made Me a Princess", author: "Plutus", topic: "Fantasy" },
  { title: "Solo Leveling", author: "Chugong", topic: "Action" },
  { title: "Damn Reincarnation", author: "Mokma", topic: "Fantasy" },
  { title: "SSS-Class Suicide Hunter", author: "Shin Noah", topic: "Action" },
];

// ─── Blog Posts ───
export const BLOG_POSTS = [
  {
    id: "building-second-brain",
    title: "Building a Second Brain — Why I Stopped Taking Notes and Started Building Systems",
    excerpt:
      "After years of scattered notes and abandoned notebooks, I discovered that the way we capture knowledge is fundamentally broken. Here's how I rebuilt my entire thinking process.",
    date: "2025-04-15",
    readTime: "8 min",
    tags: ["Productivity", "Knowledge Management", "Systems Thinking"],
    content: `The problem with most note-taking systems is that they optimize for capture, not retrieval. I spent years filling notebooks and apps with information I never accessed again.

The breakthrough came when I stopped thinking about notes as static records and started treating them as nodes in a living network. Each idea connects to others, forming patterns that emerge only when you let go of hierarchical thinking.

My system now has three layers: a quick-capture inbox, a processing pipeline that tags and links notes semi-automatically, and a synthesis layer where ideas converge into something new.

The key insight: your second brain should think differently than your first brain. It should surface connections you would never make on your own.`,
  },
  {
    id: "ai-creativity-paradox",
    title: "The AI Creativity Paradox — When Machines Make Art, What Makes Us Human?",
    excerpt:
      "Generative AI can produce stunning visuals, compose music, and write poetry. But does the ability to create make something creative? Exploring the boundary between generation and creation.",
    date: "2025-03-22",
    readTime: "12 min",
    tags: ["AI", "Philosophy", "Creativity"],
    content: `When I first used DALL-E 2, I felt a strange mix of excitement and existential dread. The images were beautiful. The process was effortless. But something was missing.

I've spent months thinking about what that something is. The answer, I believe, lies in the difference between generation and creation. Generation is the production of output from patterns. Creation is the intentional expression of meaning.

A machine can generate a painting that looks like a Monet. But it cannot decide to paint water lilies because it spent a summer in Giverny and felt something shift in the way it saw light on water.

This isn't to diminish AI-generated art — it's to clarify what makes human creativity irreplaceable: intentionality, context, and the weight of lived experience.`,
  },
  {
    id: "code-as-craft",
    title: "Code as Craft — Why I Treat Programming Like Woodworking",
    excerpt:
      "Software engineering has borrowed metaphors from architecture and manufacturing. But the metaphor that changed my approach was woodworking — a craft where you work with the grain, not against it.",
    date: "2025-02-10",
    readTime: "6 min",
    tags: ["Programming", "Philosophy", "Craft"],
    content: `There's a concept in Japanese woodworking called "reading the grain." Before making any cut, you study the wood — its history, its stress patterns, its natural tendencies. You work with it, not against it.

I've started applying this to code. Before refactoring, I study the codebase's grain — its conventions, its evolution, the decisions that shaped its current form. I ask: what does this code want to become?

This shift from engineering to craft has made me a better developer. Not because I write more sophisticated code, but because I write code that belongs. Code that fits its context like a dovetail joint — precise, intentional, and honest about what it's doing.`,
  },
  {
    id: "digital-minimalism",
    title: "Digital Minimalism in Practice — 30 Days of Intentional Tech Use",
    excerpt:
      "I spent a month being deliberate about every app I opened, every notification I allowed, and every minute I spent on screens. Here's what I learned about attention, technology, and myself.",
    date: "2025-01-05",
    readTime: "10 min",
    tags: ["Productivity", "Minimalism", "Technology"],
    content: `Day one was the hardest. Not because I was bored, but because I realized how many of my actions were automatic. Opening Twitter during a compile. Checking email every 15 minutes. Scrolling Instagram in line at the café.

By week two, something shifted. Without the constant input, my mind started generating. Ideas, connections, daydreams — the kind of quiet cognition that produces real creative work.

The biggest surprise: I didn't miss much. The important information found its way to me anyway. What I gained was two hours of focused work every day and a dramatic reduction in mental fatigue.

Digital minimalism isn't about rejecting technology. It's about choosing which technologies earn your attention. The ones that deserve a place in your life are fewer than you think.`,
  },
];

// ─── Command Palette ───
export const COMMAND_ITEMS = [
  { label: "Go to Home", action: "navigate", target: "#hero", icon: "🏠" },
  { label: "Go to About", action: "navigate", target: "#about", icon: "👤" },
  { label: "Go to Projects", action: "navigate", target: "#projects", icon: "🚀" },
  { label: "Go to Journey", action: "navigate", target: "#journey", icon: "📚" },
  { label: "Go to Interests", action: "navigate", target: "#interests", icon: "✨" },
  { label: "Go to Watchlist", action: "navigate", target: "#watchlist", icon: "🎬" },
  { label: "Go to Thoughts", action: "navigate", target: "#blog", icon: "✍️" },
  { label: "Go to Contact", action: "navigate", target: "#contact", icon: "📬" },
  { label: "Toggle Theme", action: "theme", target: "", icon: "🌗" },
  { label: "View GitHub", action: "link", target: "https://github.com/Rajinshchowdary", icon: "🐙" },
  { label: "View LinkedIn", action: "link", target: "https://www.linkedin.com/in/rajinish", icon: "💼" },
  { label: "Send Email", action: "link", target: "mailto:rajinish.pothakamuri@gmail.com", icon: "📧" },
];
