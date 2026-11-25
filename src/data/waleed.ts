export const siteConfig = {
  name: "Waleed Tahir",
  first: "WALEED",
  last: "TAHIR",
  role: "Full Stack Developer",
  tagline:
    "Full Stack Developer with a Computer Science degree, specializing in building AI-powered mobile apps and responsive websites. Experienced across both frontend and backend — developing scalable APIs, integrating AI features, and crafting pixel-perfect, user-friendly interfaces.",
  description:
    "A motivated and enthusiastic Computer Science graduate with a strong foundation in programming, databases, and computer systems. Possesses excellent analytical and problem-solving skills, along with a passion for learning and adapting to new technologies. A quick learner and dedicated team player, eager to begin a professional career in the tech industry, gain hands-on experience, and contribute effectively to organizational success.",
  location: "Lahore, Pakistan",
  email: "waleedtahir916@gmail.com",
  phone: "0319-6280661",
  phoneDisplay: "+92 319 6280661",
  phoneDial: "+923196280661",
  whatsapp: "https://wa.me/923196280661",
  github: "https://github.com/waleed1233",
  linkedin: "https://www.linkedin.com/in/waleed-tahir-3a7064254",
  connectText:
    "Open to internships, freelance projects, and full-time opportunities. Feel free to reach out!",
};

export const heroRoles = [
  "Full Stack Developer",
  "React Native Engineer",
  "Web & App Developer",
  "AI-Powered App Builder",
  "BS Computer Science Graduate",
];

export const aboutParagraphs = [
  "I'm Waleed Tahir, a Computer Science graduate from Muhammad Nawaz Sharif University of Agriculture, Multan, passionate about building responsive websites and cross-platform mobile apps.",
  "Full-Stack Developer | CS Graduate from Muhammad Nawaz Sharif University of Agriculture, Multan | Building responsive websites and cross-platform mobile apps — from front-end design to back-end development and databases..",
  "My Final Year Project, Potato Disease Detection App, is a bilingual (Urdu/English) cross-platform mobile application built for Pakistani farmers using React Native and Expo — integrating AI-based disease detection, GPS-based weather risk alerts, and Urdu text-to-speech to make the app accessible even to illiterate users.",
];

export const quickFacts = [
  { icon: "location", label: "Location", value: "Lahore, Pakistan" },
  { icon: "degree", label: "Degree", value: "BS Computer Science" },
  {
    icon: "specialty",
    label: "Primary Specialty",
    value: "Full Stack Developer",
  },
  { icon: "specialty", label: "Experience", value: "2+ years" },
];

export const skillGroups = [
  {
    icon: "mobile",
    title: "Front End Development",
    items: [
      "React Native",
      "TypeScript",
      "Expo",
      "React.js",
      "React + Vite",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS/JS",
      "Responsive Design",
    ],
  },
  {
    icon: "web",
    title: "Backend Development",
    items: [
      "Node.js",
      "FastAPI (Python)",
      "Rest APIs",
      "Firestore",
      "Firebase Auth",
    ],
  },
  {
    icon: "web",
    title: "Databses and Storage",
    items: ["PostgreSQL", "SQLite", "Firebase"],
  },
  {
    icon: "tools",
    title: "Tools & APIs",
    items: [
      "Git & GitHub",
      "Android Studio",
      "Gemini AI API",
      "Supabase",
      "VS Code",
      "Cursor",
    ],
  },
  {
    icon: "code",
    title: "Languages",
    items: ["Python", "JavaScript", "C", "C++", "XML"],
  },
  {
    icon: "team",
    title: "Soft Skills",
    items: [
      "Communication",
      "Multitasking",
      "Time Management",
      "Documentation",
      "Team Work",
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  org: string;
  year?: string;
  badge?: string;
  category: "mobile" | "web";
  description: string[];
  tags: string[];
  githubUrl: string;
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-powered Potato Disease Detection App",
    org: "FYP · MNS University Of Agriculture Multan",
    year: "2026",
    badge: "Featured",
    category: "mobile",
    featured: true,
    description: [
      "Built a bilingual (Urdu/English) React Native + TypeScript app for Pakistani potato farmers, featuring AI-based disease detection via REST API, a 12-disease knowledge base, and Urdu text-to-speech for accessibility to illiterate users.",
      "Implemented a Context API-driven translation system (80+ strings, AsyncStorage-persisted) enabling instant language switching, plus GPS-based real-time weather and disease-risk alerts via OpenWeatherMap.",
      "Designed a custom bilingual BottomNavBar and enforced strict TypeScript typing across navigation, props, and data models to minimize runtime errors.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Machine Learning",
      "REST API",
      "OpenWeatherMap API",
      "Python",
      "API Development",
    ],
    githubUrl: "https://github.com/waleed1233/potato-disease-app.git",
    images: [
      "/screenshots/potato/dashboard.png",
      "/screenshots/potato/login.png",
      "/screenshots/potato/data.png",
      "/screenshots/potato/result.png",
      "/screenshots/potato/weather.png",
      "/screenshots/potato/officer.png",
      "/screenshots/potato/detail.png",
    ],
  },
  {
    id: 2,
    title: "Personal Expense Tracker App",
    org: "Personal",
    category: "mobile",
    featured: true,
    description: [
      "Built a cross-platform iOS & Android expense tracking app with features including categorized expense & income management, monthly budget limits with push notifications alerts, and an interactive calendar view showing daily transactions. Integrated an analytics dashboard with 6-month trend charts and category breakdowns, with persistent local storage ensuring data is retained across sessions. Implemented full dark mode support, real-time budget progress tracking, and multi-screen navigation using React Navigation with a clean, responsive UI.",
    ],
    tags: ["React Native", "TypeScript", "AsyncStorage", "Chart Kit"],
    githubUrl: "https://github.com/waleed1233/expense-tracker",
    images: [
      "/screenshots/expense/main.png",
      "/screenshots/expense/cal.png",
      "/screenshots/expense/analytics.png",
      "/screenshots/expense/settings.png",
    ],
  },
  {
    id: 3,
    title: "Fitness & Workout Planner",
    org: "Personal",
    category: "mobile",
    description: [
      "React Native app for planning and tracking workout routines. Includes an exercise library, daily schedule builder, and progress tracking with a clean sports-inspired UI.",
    ],
    tags: ["React Native", "TypeScript", "UI/UX", "Health Tech"],
    githubUrl: "https://github.com/waleed1233",
    images: [
      "/screenshots/fitness/Dashboard_fitness.jpeg",
      "/screenshots/fitness/workout_library_screen.jpeg",
      "/screenshots/fitness/performance_analysis.jpeg",
      "/screenshots/fitness/AI_screen.jpeg",
    ],
  },
  {
    id: 4,
    title: "StudentMS",
    org: "Interview Project",
    category: "web",
    description: [
      "A full-stack web application for managing student profiles, built with a FastAPI + PostgreSQL backend and a React frontend. Implements secure JWT-based authentication with mandatory email verification, and validates phone numbers using Google's libphonenumber with an optional SMS OTP confirmation flow. The backend follows a clean, microservice-style layered architecture — routers handle HTTP only, all business logic lives in dedicated service classes, and a repository layer isolates database access — making the codebase easy to test, extend, and maintain. Includes role-based access control with a dedicated admin dashboard for viewing all registered students.",
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "JWT", "SQLAlchemy", "Pydantic"],
    githubUrl: "https://github.com/waleed1233/expense-tracker",
    images: [
      "/screenshots/students/admin.png",
      "/screenshots/students/login.png",
      "/screenshots/students/profile.png",
      "/screenshots/students/register.png",
    ],
  },
];

export const experience = [
  {
    title: "Odoo Developer",
    org: "RDC (Red Flag Consulting) Group",
    period: "Aug - Present",
    description: [
      "Developed custom modules on Odoo 18 Community using Python, XML views, and QWeb, enabling data sharing between modules.",
      "Built a vehicle and driver tracking feature within the Contacts app and a full hospital management system with departments, doctors, patients, appointments, auto-numbering, role-based access, and printable PDF slips.",
      "Implemented validation rules, import checks, SQL/Python constraints, access rights, record rules, user groups, and menu restrictions to control data integrity and visibility.",
      "Worked with computed/related fields, inherited views, and cross-module data, while debugging upgrade, XML parsing, database, and import errors via Odoo logs.",
      "Prepared Excel files for bulk contact imports.",
    ],
  },
  {
    title: "Web Developer Intern",
    org: "Corbit Soft",
    period: "Jun 2025 - Nov 2025",
    duration: "6 Months",
    description: [
      "As a Web Development Intern, I gained hands-on experience in building and maintaining dynamic and responsive websites using HTML, CSS, Bootstrap, PHP, and Java. I contributed to frontend design, backend development, and basic server-side logic implementation.",
      "I worked on debugging issues, improving UI/UX, and optimizing web pages for better performance. This experience enhanced my understanding of real-world development workflows and strengthened my ability to write clean and efficient code.",
    ],
  },
  {
    title: "Trainee",
    org: "PNY Trainings",
    period: "Jul 2024 - Dec 2024",
    description: [
      "I completed an intensive Web Development training program at PNY Trainings, where I gained practical, industry-relevant experience as a Web Development Trainee. Throughout the program, I built a strong foundation in core web technologies, including HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, while also developing a working knowledge of the MERN Stack (MongoDB, Express.js, React.js, and Node.js).",
      "I gained hands-on experience in converting Figma designs into responsive, pixel-perfect web interfaces, ensuring precision in layout, visual consistency, and overall user experience. This practical exposure significantly strengthened my front-end development skills and attention to detail.",
      "Overall, this training enhanced my technical expertise, improved my problem-solving abilities, and equipped me with the skills required to develop modern, scalable, and user-friendly web applications using both frontend and backend technologies.",
    ],
  },
];

export const education = [
  {
    title: "BS Computer Science",
    org: "MNS University of Agriculture, Multan, Pakistan",
    period: "2022 - 2026",
    grade: "CGPA: 3.5/4.00",
  },
  {
    title: "FSC — Pre Engineering",
    org: "BISE DG Khan",
    period: "2020 - 2022",
    grade: "Grade: A",
  },
  {
    title: "Matric — Science",
    org: "BISE Faisalabad",
    period: "2018 - 2020",
    grade: "Grade: A",
  },
];

export const certifications = [
  {
    title: "Full stack Web Development",
    org: "PNY Trainings",
    date: "December 2024",
  },
];
