// All site content lives here. Edit this file to change text, links or projects.

export const me = {
  name: "Dibosh Sarker",
  logo: "DIBOSH",
  designation: "Full Stack Developer",
  roles: ["Full Stack Developer", "Next.js Developer", "React Developer"], // typed one by one in the hero
  tagline:
    "Building modern, responsive, and user-friendly web applications with passion and purpose.",
  intro:
    "Hi, I'm Dibosh Sarker, a Full Stack Web Developer passionate about building modern and scalable web applications. I work with React, Next.js, TypeScript, and MongoDB to turn ideas into functional digital experiences. I'm always eager to learn new technologies and take on new challenges.",
  photo: "profile.png", // put your photo at public/profile.png
  resume: "/resume.pdf", // put your resume at public/resume.pdf
  email: "diboshsarker45@gmail.com",
  phone: "+8801616661468",
  whatsapp: "8801732192920",
  whatsappDisplay: "01732192920",
  address: "Mirpur-1, Dhaka",
  github: "https://github.com/NeoPhyt000",
  linkedin: "https://www.linkedin.com/in/dibosh-sarker/",
  facebook: "https://www.facebook.com/diboshsarker.sarker/",
};

export const about = [
  {
    title: "My journey",
    text: [
      "My journey into software development began with pure curiosity. I wanted to understand how a simple line of code turns into an interactive webpage on the screen. Starting with HTML and CSS, I quickly fell in love with seeing my ideas come to life in the browser. As my passion grew, I mastered JavaScript and moved on to modern tech stacks like React, Next.js, and TypeScript.",
      "The real turning point was moving from watching tutorials to building full-scale applications. Working on projects like Bazar Dor, where I implemented Google and GitHub authentication and integrated MongoDB for backend storage, gave me a deep understanding of full-stack architecture from database to UI. Every challenge and bug I solved along the way shaped me into a stronger, more resilient developer.",
    ],
  },
  {
    title: "Work I enjoy",
    text: [
      "I thrive on building clean, responsive, and user-centric web applications that solve practical everyday problems, whether it's helping people track grocery prices or stay consistent with their workouts.",
      "I love taking an abstract idea and transforming it into a fully functional product. Working primarily with Next.js and TypeScript, I take pride in polishing micro-interactions and perfecting UI details to ensure a seamless experience on every device.",
    ],
  },
  {
    title: "Who I am",
    text: [
      "I am a curious, patient, and detail-oriented developer with a growth mindset. I view every bug as a learning opportunity and every project as a chance to innovate. Whether collaborating with a team or working independently, I bring enthusiasm, adaptability, and a commitment to creating meaningful digital experiences.",
    ],
  },
];

export const hobbies = [
  { emoji: "⚽", title: "Sports", text: "Playing or watching football." },
  { emoji: "🧭", title: "Exploration", text: "Traveling to new places and refreshing my perspective." },
  { emoji: "🎬", title: "Entertainment", text: "Catching up on good movies." },
  { emoji: "📚", title: "Continuous learning", text: "Exploring modern web technologies and testing new tools." },
];

// level is optional: skills with a level show as a bar, the rest as chips.
export const skills: { category: string; items: { name: string; level?: number }[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "CSS" },
      { name: "daisyUI" },
      { name: "HeroUI" },
    ],
  },
  { category: "Backend", items: [{ name: "Node.js" }, { name: "Express" }, { name: "Better Auth" }, { name: "JWT" }] },
  { category: "Database", items: [{ name: "MongoDB" }, { name: "MySQL" }] },
  { category: "Tools", items: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Figma" }, { name: "Vercel" }, { name: "ESLint" }] },
];

export const education = [
  { degree: "BSc in Computer Science & Engineering", institution: "Prime University, Dhaka", period: "Oct 2022 – Oct 2026", result: "" },
];

export const projects = [
  {
    id: "bazardor",
    name: "BazarDor",
    image: "BazarDorImg.png", // public/BazarDorImg.png
    short: "A grocery price tracker for Bangladesh: 33 everyday products across 12 markets.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HeroUI", "MongoDB", "Better Auth", "Vercel"],
    description:
      "BazarDor (বাজার দর) helps people in Bangladesh check everyday grocery prices in one place. Users can browse products like rice, vegetables, fish and meat, explore categories, compare market prices, sign in with email, Google or GitHub, and manage their profile.",
    live: "https://bazar-dor-silk-beta.vercel.app/",
    github: "https://github.com/NeoPhyt000/bazar-dor",
    challenges: [
      "Setting up authentication with Better Auth: email/password plus Google and GitHub login, and keeping protected pages secure.",
      "Designing the MongoDB data structure so products, categories and prices from different markets can be queried and compared easily.",
      "Making the product grid and price comparison layout responsive on small screens.",
      "Handling loading and error states cleanly while data is fetched from the database.",
    ],
    improvements: [
      "Real-time or daily price updates from market sources.",
      "Price history charts to show how prices change over time.",
      "Search, filters and sorting by price, plus a favorites list.",
      "Admin dashboard to add and update products and prices, and a Bangla/English language switch.",
    ],
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "FitLogImg.jpg",
    short: "A dark-themed workout library and planner that tracks your daily totals.",
    stack: ["TypeScript", "Next.js (App Router)", "Tailwind CSS", "daisyUI", "Lucide React", "localStorage"],
    description:
      "FitLog is a dark-themed workout library app. Users browse workouts in a responsive grid, open a detail page with a specs table and step-by-step instructions, and add workouts to Today's Plan or Save for later. The My Plan page shows live Exercises / Minutes / Calories counters, tabs for Today's Plan and Saved, and sorting by duration, calories or rating.",
    live: "https://fit-log-smoky-nine.vercel.app/",
    github: "https://github.com/NeoPhyt000/fit-log",
    challenges: [
      "Persisting the plan and saved lists in localStorage without hydration mismatches in Next.js.",
      "Building dynamic detail pages with the App Router, plus a custom 404 page and loading states.",
      "Keeping the Exercises / Minutes / Calories counters in sync whenever workouts are added or removed.",
      "Making the grid work well across 3-column desktop, 2-column tablet and 1-column mobile layouts.",
    ],
    improvements: [
      "User accounts and a database so plans sync across devices instead of living in localStorage.",
      "Weekly plan calendar and progress charts for completed workouts.",
      "Search and filters by muscle group, difficulty and equipment.",
      "Let users create custom workouts and add a light theme.",
    ],
  },
  {
    id: "devstack",
    name: "DevStack",
    image: "DevStackImg.jpg",
    short: "Explore and compare frontend, backend, database and tooling options to build your ideal stack.",
    stack: ["React", "Vite", "Tailwind CSS", "daisyUI", "Netlify"],
    description:
      "DevStack helps developers build their ideal development stack. Visitors can explore frontend, backend, database and tooling options, compare them side by side, and put together the stack that fits their next project. It was built as a course assignment with a clean layout, reusable UI sections and a smooth experience across devices.",
    live: "https://keen-hotteok-12a335.netlify.app/",
    github: "https://github.com/NeoPhyt000/Dev-Stack-Assignment05",
    challenges: [
      "Structuring the layout so every section stays responsive on mobile, tablet and desktop.",
      "Breaking the UI into reusable components and keeping the code organized.",
      "Deploying to Netlify and fixing build and routing issues after the first deploy.",
    ],
    improvements: [
      "Add more interactive features and better loading and error states.",
      "Improve accessibility (keyboard navigation, alt text, contrast).",
      "Add a backend or API integration, plus tests and performance optimization.",
    ],
  },
];
