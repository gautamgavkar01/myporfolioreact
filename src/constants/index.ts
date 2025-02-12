// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: "https://www.linkedin.com/in/gautam-gavkar-7256a4260/",
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/gautamgavkar01",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web-Java Developer",
    company_name: "Test Yantra Software Solutions Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - July 2024",
    points: [
      "Designed and developed user-friendly web interfaces using HTML, CSS, JavaScript, and React.js to enhance user experience",
      "Built and maintained backend logic using Node.js and Express.js for seamless application functionality.",
      "Created and managed relational databases with MySQL and MongoDB for efficient data storage and retrieval.",
      "Debugged and optimized code to improve application performance and scalability.",
      "Collaborated with cross-functional teams to deliver end-to-end web application solutions.",
      "Conducted rigorous testing and troubleshooting to ensure application reliability and security.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Celebal Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - Sep 2023",
    points: [
      "Developed and maintained web applications, integrating front-end and back-end functionalities for seamless performance.",
      "Designed and optimized database schemas, queries, and stored procedures using SQL to ensure efficient data   management",
      "Automated data handling processes by implementing complex SQL queries and triggers.",
      "Conducted performance tuning and debugging of database queries to enhance application efficiency",
      "Collaborated with team members to understand business requirements and implement technical solutions.",
      "Documented project workflows and database designs for future scalability and maintenance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ITPreneur",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - Ongoing",
    points: [
      "Developed and maintained Java-based applications, ensuring high performance and scalability.",
      "Performed bug fixes and optimized code for efficiency and reliability.",
      "Designed and managed databases using PL/SQL, SQL, and MongoDB to support application functionality.",
      "Collaborated with frontend teams to integrate user-friendly interfaces and enhance user experience.",
      "Conducted system analysis and troubleshooting to improve application stability.",
      "Worked closely with cross-functional teams to deliver software solutions aligned with business requirements.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Diksha Agrawal",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: null,
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: null,
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: null,
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: null,
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: null,
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "#",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/gautam-gavkar-7256a4260/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "#",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/gautamgavkar01",
  },
] as const;

