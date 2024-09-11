import {
        atos,
        lti,
        kcg,
        ue,
        abinitio,
        alm,
        bitbucket,
        confluence,
        css,
        docker,
        ecc,
        html,
        javascript,
        jenkins,
        jira,
        kornshell,
        msoffice,
        oraclesql,
        python,
        reactjs,
        rlm,
        tailwind,
        azure,
        tableau,
        best11,
        goldtrade,
        indianweather,
        linearmodel,
        stockmarket,
        studentdata,
        dataengineer,
        dataanalyst,
        datascientist,
        webdevelopment,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "journey",
        title: "Journey",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const titles = [
    'Data Engineer.',
    'Abinitio Developer.',
    'ETL Developer.',
    'Sofware Engineer.'
]

const open_roles = [
    {
        title: "Data Engineer",
        icon: dataengineer,
    },
    {
        title: "Data Analyst",
        icon: dataanalyst,
    },
    {
        title: "Data Scientist",
        icon: datascientist,
    },
    {
        title: "Web Developer",
        icon: webdevelopment,
    },
];

const professional_technologies = [
    {
        name: "Abinitio",
        icon: abinitio,
    },
    {
        name: "Oracle SQL",
        icon: oraclesql,
    },
    {
        name: "Korn Shell Scripting",
        icon: kornshell,
    },
    {
        name: "Jira",
        icon: jira,
    },
    {
        name: "Confluence",
        icon: confluence,
    },
    {
        name: "Microsoft Office",
        icon: msoffice,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "RLM",
        icon: rlm,
    },
    {
        name: "HP ALM",
        icon: alm,
    },
    {
        name: "BitBucket",
        icon: bitbucket,
    }
];

const other_technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tableau",
        icon: tableau,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Microsoft Azure",
        icon: azure,
    },
];

const journeys = [
    {
        title: "M.Sc in Data Science",
        name: "University of Europe for Applied Sciences",
        icon: ue,
        iconBg: "#E6DEDD",
        date: "Mar 2024 - Feb 2026",
        points: [

        ],
    },
    {
        title: "Senior Data Engineer",
        name: "LTIMindtree",
        icon: lti,
        iconBg: "#E6DEDD",
        date: "Oct 2021 - Feb 2024",
        points: [
            "Created a unified reporting framework based on user requirements from Jira to streamline reporting submissions",
            "Developed automated recalculation processes for efficient report generation.",
            "Implemented variance procedures to identify and analyze discrepancies between reports.",
            "Incorporated supplemental data loads to enhance report comprehensiveness.",
            "Improved report usability through drill-down capabilities and performance optimizations.",
            "Provided timely resolution for production issues and BRE engine defects.",
            "Ensured report accuracy and reliability through rigorous testing and evidence collection.",
            "Maintained development environment health and performance"
        ],
    },
    {
        title: "Associate Consultant",
        name: "Atos Syntel",
        icon: atos,
        iconBg: "#fff",
        date: "May 2018 - Oct 2021",
        points: [
            "Design, develop, and maintain interfaces based on client requirements and field mapping documents",
            "Conduct thorough testing, analysis, and validation",
            "Provide ongoing support and troubleshooting until production readiness.",
            "Monitor scheduled jobs, analyze failures, and provide RCA with solutions.",
            "Generate and distribute status reports.",
            "Identify and correct data discrepancies to ensure timely and accurate employee payments.",
            "Analyze and resolve data inconsistencies between source systems and Datahub.",
            "Develop and implement reporting solutions to meet client needs.",
            "Automate report generation and distribution."
        ],
    },
    {
        title: "B.Tech in Information Technology",
        name: "KCG College of Techonology",
        icon: kcg,
        iconBg: "#E6DEDD",
        date: "Aug 2014 - May 2018",
        points: [

        ],
    },
];

const projects = [
    {
        name: "Significance of Gold Trade",
        description:
            "This research provides the importance of gold trade imports from the reporting countries such as South Africa, Kenya and Egypt focusing on relation between the BRICS countries and other nations.",
        tags: [
            {
                "name": "python",
                "color": "text-sky-400"
            },
            {
                "name": "pandas",
                "color": "text-emerald-400"
            },
            {
                "name": "scipy",
                "color": "text-pink-400"
            },
            {
                "name": "UNComTrade",
                "color": "text-rose-400"
            },
            {
                "name": "worldbank",
                "color": "text-orange-300"
            },
            {
                "name": "SqlAlchemy",
                "color": "text-amber-400"
            },
            {
                "name": "OracleSQL",
                "color": "text-yellow-500"
            },
            {
                "name": "Docker",
                "color": "text-teal-400"
            },
            {
                "name": "tableau",
                "color": "text-indigo-300"
            },
        ],
        image: goldtrade,
        source_code_link: "https://github.com/Perinban/Significance-Of-Gold-Trade",
        demo_link: "https://public.tableau.com/app/profile/perinban.parameshwaran/viz/SignificanceofGoldTradeonBRICSvsOtherCountries/PartnersList",
        category: "Data Wrangling, Data Visualisation",
    },
    {
        name: "Stock Market Analysis on DAX Companies",
        description:
            "This project focuses on examining the variances in the stock market performance among DAX companies over a three-year period.",
        tags: [
            {
                "name": "python",
                "color": "text-sky-400"
            },
            {
                "name": "numpy",
                "color": "text-emerald-400"
            },
            {
                "name": "scipy",
                "color": "text-pink-400"
            },
            {
                "name": "SqlAlchemy",
                "color": "text-orange-300"
            },
            {
                "name": "yfinance",
                "color": "text-rose-400"
            },
            {
                "name": "alphavantage",
                "color": "text-lime-300"
            },
            {
                "name": "OracleSQL",
                "color": "text-yellow-500"
            },
            {
                "name": "Docker",
                "color": "text-teal-400"
            },
            {
                "name": "tableau",
                "color": "text-indigo-300"
            },
        ],
        image: stockmarket,
        source_code_link: "https://github.com/Perinban/Stock-Market-Analysis-DAX",
        demo_link: "https://public.tableau.com/app/profile/perinban.parameshwaran/viz/StockAnalysisonDAXCompanies/Closing_Price",
        category: "Data Wrangling, Data Visualisation",
    },
    {
        name: "Indian Weather Analysis",
        description:
            "The project share bridges that gap by using machine learning models to study how different weather conditions on India cause various effects on the air quality alongside other metrics.",
        tags: [
            {
                "name": "python",
                "color": "text-sky-400"
            },
            {
                "name": "pandas",
                "color": "text-emerald-400"
            },
            {
                "name": "OracleSQL",
                "color": "text-yellow-500"
            },
            {
                "name": "Docker",
                "color": "text-teal-400"
            },
            {
                "name": "kaggle",
                "color": "text-lime-400"
            },
            {
                "name": "scikit-learn",
                "color": "text-emerald-300"
            },
            {
                "name": "matplotlib",
                "color": "text-cyan-400"
            },
            {
                "name": "seaborn",
                "color": "text-blue-400"
            },
            {
                "name": "tableau",
                "color": "text-indigo-300"
            },
            {
                "name": "drawsql",
                "color": "text-teal-300"
            },
        ],
        image: indianweather,
        source_code_link: "https://github.com/Perinban/Indian-weather-analysis/",
        demo_link: "https://public.tableau.com/app/profile/perinban.parameshwaran/viz/EDAAnalysisonIndianWeather/Myth1",
        category: "Data Wrangling, Normalization, Data Visualisation, Machine Learning",
    },
    {
        name: "Best Eleven Analysis on Cricket",
        description:
            "The findings of this project are based on the data analysis of T20 World Cup through statistical methods and data visualization.",
        tags: [
            {
                "name": "python",
                "color": "text-sky-400"
            },
            {
                "name": "pandas",
                "color": "text-emerald-400"
            },
            {
                "name": "espn",
                "color": "text-orange-400"
            },
            {
                "name": "powerbi",
                "color": "text-yellow-400"
            },
        ],
        image: best11,
        source_code_link: "https://github.com/Perinban/Indian-weather-analysis/",
        demo_link: "https://app.powerbi.com/reportEmbed?reportId=ee1d329c-33ae-4c3c-a441-4584b5e37d1b&autoAuth=true&ctid=b4b62109-b5e5-499a-a5da-97f68d962343",
        category: "Data Wrangling, Data Visualisation",
    },
    {
        name: "Data Analytics in Project for Linear Regression Model",
        description:
            "This project provides the details on linear regression model analysis on dummy company data",
        tags: [
            {
                "name": "python",
                "color": "text-sky-400"
            },
            {
                "name": "pandas",
                "color": "text-emerald-400"
            },
            {
                "name": "numpy",
                "color": "text-rose-400"
            },
            {
                "name": "matplotlib",
                "color": "text-pink-400"
            },
            {
                "name": "seaborn",
                "color": "text-fuchsia-400"
            },
            {
                "name": "scikit-learn",
                "color": "text-violet-400"
            },
            {
                "name": "statsmodels",
                "color": "text-indigo-400"
            },
        ],
        image: linearmodel,
        source_code_link: "https://github.com/Perinban/simple-linear-regression-ml/",
        demo_link: "https://github.com/Perinban/simple-linear-regression-ml/blob/main/index.ipynb",
        category: "Machine Learning",
    },
    {
        name: "Analysis on Student Data",
        description:
            "This project provides the analysis on dummy student data",
        tags: [
            {
                "name": "OracleSQL",
                "color": "text-yellow-500"
            },
            {
                "name": "drawsql",
                "color": "text-teal-400"
            },
            {
                "name": "docker",
                "color": "text-pink-400"
            },
        ],
        image: studentdata,
        source_code_link: "https://github.com/Perinban/simple-linear-regression-ml/",
        demo_link: "https://drawsql.app/teams/de-28/diagrams/de",
        category: "Normalization",
    },
];

export { professional_technologies, other_technologies, open_roles, journeys, projects  };