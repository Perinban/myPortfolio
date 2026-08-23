import {
    atos,
    lti,
    kcg,
    ue,
} from "../assets";

export const navLinks = [
    { id: "about", title: "About" },
    { id: "journey", title: "Journey" },
    { id: "technology", title: "Technology" },
    { id: "projects", title: "Projects" },
    { id: "linkedin", title: "Updates" },
    { id: "contact", title: "Contact" },
];

const focus_areas = [
    {
        symbol: "DE",
        title: "Data Engineering",
        description: "Ab Initio, ETL/ELT, SQL, data quality, production pipelines, and operational reliability.",
    },
    {
        symbol: "DIST",
        title: "Distributed Systems",
        description: "Kafka, Airflow, Ray, AsyncIO, parallel processing, and scalable data-flow architecture.",
    },
    {
        symbol: "SYS",
        title: "Systems & Performance",
        description: "Rust, C/C++, runtime behavior, memory, concurrency, mmap, and performance-oriented engineering.",
    },
    {
        symbol: "GPU",
        title: "GPU & AI Infrastructure",
        description: "CUDA, Metal, Apple Silicon, Vulkan, local inference, and resource-efficient AI systems.",
    },
];

const technology_groups = [
    {
        title: "Data Engineering",
        technologies: ["Ab Initio", "ETL / ELT", "Oracle SQL", "PostgreSQL", "Data Quality", "Batch Processing"],
    },
    {
        title: "Programming",
        technologies: ["Python", "Rust", "C / C++", "Shell / KornShell", "JavaScript"],
    },
    {
        title: "Distributed & Pipelines",
        technologies: ["Kafka", "Airflow", "Ray", "AsyncIO", "GitHub Actions", "Terraform"],
    },
    {
        title: "Systems & Compute",
        technologies: ["CUDA", "Metal", "Vulkan", "Apple Silicon", "Linux", "macOS", "Docker"],
    },
    {
        title: "Analytics & AI",
        technologies: ["Pandas", "scikit-learn", "XGBoost", "SHAP", "Tableau", "LLM Inference"],
    },
];

const journeys = [
    {
        type: "Experience",
        title: "Data Engineer",
        name: "Entual GmbH",
        icon: null,
        initials: "E",
        iconBg: "#0f172a",
        date: "Aug 2026 - Present",
        points: [
            "Ab Initio and enterprise data-integration engineering in Germany.",
            "Production reliability, maintainability, and performance-focused delivery.",
        ],
    },
    {
        type: "Experience",
        title: "Research Assistant",
        name: "Helmholtz Centre for Environmental Research (UFZ)",
        icon: null,
        initials: "UFZ",
        iconBg: "#0f3d2e",
        date: "2026 · 3-month research appointment",
        points: [
            "Async data collection with recovery, browser automation, geocoding, and enrichment.",
            "PRISMA review automation, OCR correction, PDF digitization, and metadata cleanup.",
            "CropYield ML with XGBoost, SHAP, statistical models, and automated reports.",
            "20,000+ lines of Python delivered across research data and ML pipelines.",
        ],
    },
    {
        type: "Education",
        title: "M.Sc. Data Science",
        name: "University of Europe for Applied Sciences",
        icon: ue,
        initials: "UE",
        iconBg: "#ffffff",
        date: "Mar 2024 - Jun 2026",
        points: [
            "M.Sc. Data Science completed in Germany with 90.74% final result.",
            "MetaXuda thesis: CUDA-style execution mapped to Metal on Apple Silicon.",
            "Distributed data systems with Kafka, Airflow, Ray, AsyncIO, PostgreSQL, and Terraform.",
        ],
    },
    {
        type: "Experience",
        title: "Senior Data Engineer / Module Lead",
        name: "LTIMindtree",
        icon: lti,
        initials: "LTI",
        iconBg: "#ffffff",
        date: "Oct 2021 - Feb 2024",
        points: [
            "Ab Initio ETL/ELT for UK PRA and Turkey regulatory reporting.",
            "~40% faster report generation through workflow automation.",
            "Production/BRE resolution, reconciliation, testing, and data-quality controls.",
            "Module leadership, technical guidance, and delivery mentoring.",
        ],
    },
    {
        type: "Experience",
        title: "Associate Consultant",
        name: "Atos Syntel",
        icon: atos,
        initials: "ATOS",
        iconBg: "#ffffff",
        date: "May 2018 - Oct 2021",
        points: [
            "35+ Ab Initio interfaces across global HR and payroll data flows.",
            "Payroll logic, reconciliation, scheduling, and production issue resolution.",
            "~60% reduction in manual testing through workflow automation.",
            "Oracle SQL, KornShell, metadata, release, Agile, and Waterfall delivery.",
        ],
    },
    {
        type: "Education",
        title: "B.Tech. Information Technology",
        name: "KCG College of Technology",
        icon: kcg,
        initials: "KCG",
        iconBg: "#ffffff",
        date: "2014 - 2018",
        points: [
            "B.Tech. in Information Technology.",
            "Published work on a 3D indoor-navigation and location-aware system in 2018.",
        ],
    },
];

const projects = [
    {
        name: "MetaXuda",
        description: "Experimental CUDA-compatible runtime shim for Apple Silicon that maps core CUDA/Numba execution paths onto Metal, enabling CUDA-style workloads on Macs without NVIDIA hardware.",
        tags: [
            { name: "rust", color: "text-orange-400" },
            { name: "cuda", color: "text-green-400" },
            { name: "metal", color: "text-sky-400" },
            { name: "apple-silicon", color: "text-violet-300" },
            { name: "gpu-runtime", color: "text-cyan-300" },
        ],
        source_code_link: "https://github.com/Perinban/MetaXuda",
        demo_link: null,
        category: "Systems Engineering, GPU Computing, AI Infrastructure",
    },
    {
        name: "Clounar",
        description: "Rust bridge that routes Claude Code model requests to Perplexity Sonar while keeping file, shell, Git, and other tool execution local and deterministic.",
        tags: [
            { name: "rust", color: "text-orange-400" },
            { name: "claude-code", color: "text-amber-300" },
            { name: "perplexity", color: "text-cyan-300" },
            { name: "local-tools", color: "text-emerald-300" },
            { name: "ai-infrastructure", color: "text-violet-300" },
        ],
        source_code_link: "https://github.com/Perinban/Clounar",
        demo_link: null,
        category: "Systems Engineering, AI Infrastructure, Developer Tooling",
    },
    {
        name: "llama.cpp / AXON",
        description: "Development branch on llama.cpp with persistent and file-backed KV-cache work, mmap memory optimizations, Vulkan/zero-copy improvements, system-prompt caching, and server/runtime extensions.",
        tags: [
            { name: "c++", color: "text-blue-300" },
            { name: "llama.cpp", color: "text-slate-200" },
            { name: "kv-cache", color: "text-violet-300" },
            { name: "mmap", color: "text-cyan-300" },
            { name: "vulkan", color: "text-rose-300" },
        ],
        source_code_link: "https://github.com/Perinban/llama.cpp/tree/axon-dev",
        demo_link: null,
        category: "Systems Engineering, AI Infrastructure, Open Source",
    },
    {
        name: "TalentBliss",
        description: "Self-hosted job platform combining a React frontend, Express API, PostgreSQL persistence, Python ingestion pipelines, automated scraping/discovery, CI/CD, and deployment tooling.",
        tags: [
            { name: "react", color: "text-sky-300" },
            { name: "express", color: "text-emerald-300" },
            { name: "postgresql", color: "text-blue-300" },
            { name: "python", color: "text-yellow-300" },
            { name: "ci-cd", color: "text-violet-300" },
        ],
        source_code_link: "https://github.com/Perinban/TalentBliss",
        demo_link: null,
        status_note: "Live demo temporarily unavailable",
        category: "Data Engineering, Full-stack Engineering",
    },
    {
        name: "ReviewXtract",
        description: "End-to-end Flipkart review analytics workflow covering Selenium scraping, text preprocessing, NLP feature engineering, TF-IDF, topic modeling, clustering, and machine-learning sentiment analysis.",
        tags: [
            { name: "python", color: "text-yellow-300" },
            { name: "web-scraping", color: "text-orange-300" },
            { name: "nlp", color: "text-emerald-300" },
            { name: "topic-modeling", color: "text-violet-300" },
            { name: "scikit-learn", color: "text-cyan-300" },
        ],
        source_code_link: "https://github.com/Perinban/ReviewXtract",
        demo_link: null,
        category: "Data Engineering, Machine Learning, NLP",
    },
    {
        name: "BRICS Gold Trade Analysis",
        description: "Data engineering and exploratory analysis of gold trade involving BRICS members and selected African reporting countries using UN Comtrade, World Bank reference data, Oracle, and Tableau.",
        tags: [
            { name: "python", color: "text-sky-300" },
            { name: "un-comtrade", color: "text-rose-300" },
            { name: "oracle", color: "text-yellow-300" },
            { name: "tableau", color: "text-indigo-300" },
        ],
        source_code_link: "https://github.com/Perinban/brics-gold-trade-analysis",
        demo_link: "https://public.tableau.com/app/profile/perinban.parameshwaran/viz/SignificanceofGoldTradeonBRICSvsOtherCountries/PartnersList",
        category: "Data Engineering, Data Analysis, Data Visualisation",
    },
    {
        name: "India Weather ML Analysis",
        description: "Weather-data analysis combining relational modeling, statistical testing, machine-learning models, and Tableau to study relationships among temperature, humidity, wind, pressure, and air-quality indicators.",
        tags: [
            { name: "python", color: "text-sky-300" },
            { name: "scikit-learn", color: "text-emerald-300" },
            { name: "xgboost", color: "text-lime-300" },
            { name: "oracle", color: "text-yellow-300" },
            { name: "tableau", color: "text-indigo-300" },
        ],
        source_code_link: "https://github.com/Perinban/india-weather-ml-analysis",
        demo_link: "https://public.tableau.com/app/profile/perinban.parameshwaran/viz/EDAAnalysisonIndianWeather/Myth1",
        category: "Data Analysis, Machine Learning, Data Visualisation",
    },
    {
        name: "T20 Best XI Analysis",
        description: "Role-aware T20 cricket analysis that transforms source JSON data into analysis-ready datasets and evaluates player performance for a balanced best XI with Power BI-ready metrics.",
        tags: [
            { name: "python", color: "text-sky-300" },
            { name: "pandas", color: "text-emerald-300" },
            { name: "power-bi", color: "text-yellow-300" },
            { name: "sports-analytics", color: "text-orange-300" },
        ],
        source_code_link: "https://github.com/Perinban/t20-best-xi-analysis",
        demo_link: "https://app.powerbi.com/reportEmbed?reportId=ee1d329c-33ae-4c3c-a441-4584b5e37d1b&autoAuth=true&ctid=b4b62109-b5e5-499a-a5da-97f68d962343",
        category: "Data Analysis, Data Visualisation",
    },
];

export const brandColors = {
    linkedin: "#0A66C2",
    github: "#24292e",
    gmail: "#EA4335",
};

export const engineering_updates = [
    {
        contribution: "Built",
        title: "Clounar — local AI tooling in Rust",
        description: "Why I built a Rust bridge that keeps shell, file, Git, and other tool execution local while routing model requests to Perplexity Sonar.",
        href: "https://www.linkedin.com/feed/update/urn:li:share:7465428378284777472",
        tags: ["Rust", "Claude Code", "Perplexity"],
    },
    {
        contribution: "Master's thesis",
        title: "MetaXuda — CUDA-style execution on Apple Silicon",
        description: "A look at the runtime problem behind mapping core Numba CUDA execution paths onto Metal for Apple Silicon.",
        href: "https://www.linkedin.com/feed/update/urn:li:share:7430531431480627200",
        tags: ["Rust", "Metal", "CUDA"],
    },
    {
        contribution: "Research work",
        title: "UFZ — scientific data pipelines and machine learning",
        description: "Notes from my UFZ work on asynchronous data collection, systematic-review automation, PDF digitization, XGBoost, and SHAP analysis.",
        href: "https://www.linkedin.com/posts/perinban-parameshwaran_machinelearning-webscraping-python-activity-7467228710895599618-onYH",
        tags: ["Python", "AsyncIO", "XGBoost"],
    },
];

export { focus_areas, technology_groups, journeys, projects };
