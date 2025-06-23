import {
  AcademicCapIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  SquaresPlusIcon,
  CommandLineIcon
} from '@heroicons/react/24/solid';

// Social links and contact information
export const contactInfo = {
  email: "ashtin@walterhouse.co.za",
  phone: "+27 78 051 6010",
  location: "Cape Town, Western Cape, ZA",
  social: {
    github: {
      url: "https://github.com/Ashtin-Walter",
      label: "GitHub Profile"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/ashtin-walter-b60709250/",
      label: "LinkedIn Profile"
    }
  }
};

// Navigation structure
export const navigation = {
  main: [
    { id: "about", label: "About" },
    { id: "freelance-projects", label: "Freelance Work" },
    { id: "toolshed", label: "Toolshed" },
    { id: "arcade", label: "Arcade" },
    { id: "personal-projects", label: "Personal Projects" },
    { id: "skills", label: "Skills" },
    { id: "learning-research", label: "Learning Research" },
    { id: "testimonials", label: "Testimonials" }
  ],
  footer: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ]
};

// Personal Information
export const personalInfo = {
  name: "Ashtin Walter",
  title: "Full Stack Developer",
  headline: "I love to build amazing things.",
  intro: "I am passionate about creating websites, apps, and developing skills in music, gardening, business, and coding. Collaboration is key to achieving extraordinary results. Let's build something incredible together.",
  stats: [
    { value: "2020", label: "Coding Since" },
    { value: "10+", label: "Repositories Published" },
    { value: "111%", label: "Effort Given" },
    { value: "500K+", label: "Lines Of Code Written" },
    { value: "1000+", label: "Cups Of Coffee" },
    { value: "?", label: "Time Spent Coding For You" }
  ],
  education: {
    degree: "Bachelor of Computer Science",
    school: "University of the People",
    status: "In Progress - 2025",
    courses: ["Python", "Java", "Data Structures", "Algorithms", "Operating Systems"]
  }
};

// Skills and technologies categorized
export const skills = {
  frontend: [
    "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Bootstrap", "ShadCN", "Redux"
  ],
  backend: [
    "Node.js", "Express.js", "PHP", "REST APIs", "Python", 
    "MySQL", "MariaDB", "Firebase", "AWS"
  ],
  devOps: [
    "Docker", "CI/CD Pipelines", "Nginx", "PM2", "Linux Server Management", 
    "Git & GitHub", "Raspberry Pi Server Setup"
  ],
  tools: [
    "Jira", "Confluence", "Google Suite", "Slack", "Figma", "UI/UX Design"
  ]
};

// Legacy exports for backward compatibility
export const { frontend, backend, devOps } = skills;
export const productTools = skills.tools;
export const designTools = ["Figma", "UI/UX Design", "Wireframing", "Design Systems"];

// Experience timeline
export const experience = [
 {
      company: 'MPC Recruitment',
      position: 'Language Consultant',
      period: 'Feb 2017 - Sep 2017',
      year: '2017',
      location: 'Durban, South Africa',
      type: 'Full-time',
      description: 'Provided English tutoring and language support to students of varying ages and proficiency levels.',
      skills: ['Teaching', 'Communication', 'Problem Solving', 'Mentorship'],
      icon: AcademicCapIcon
    },
    {
      company: 'The Fro Co.',
      position: 'Owner',
      period: 'Jan 2018 - Aug 2021',
      year: '2018',
      location: 'Durban, South Africa',
      type: 'Full-time',
      description: 'Owned and operated a successful vegan ice cream business serving markets across Durban.',
      skills: ['Small Business', 'Graphic Design', 'Digital Marketing', 'Communication', 'Sales'],
      icon: BuildingStorefrontIcon
    },
    {
      company: 'Rev',
      position: 'Transcriptionist',
      period: '2021 - 2023',
      year: '2021',
      location: 'Cape Town, South Africa',
      type: 'Freelance',
      description: 'Specialized in accurate transcription of audio and video content, ensuring high-quality deliverables for various clients.',
      skills: ['Digital Dictation', 'Transcribing', 'Typing', 'Active Listening'],
      icon: DocumentTextIcon
    },
    {
      company: 'Freelance',
      position: 'Web Developer & Consultant',
      period: 'Mar 2023 - Apr 2025',
      year: '2023',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      description: 'Helping businesses grow through web development, UI/UX, and digital marketing solutions. Building responsive, SEO-optimized websites using React, Next.js, and Tailwind CSS.',
      skills: ['Web Development', 'Digital Marketing', 'Graphic Design', 'Communication', 'Sales'],
      icon: CodeBracketIcon
    },
    {
      company: 'Artlogic',
      position: 'Product Support Engineer',
      period: 'Apr 2025 - Present',
      year: '2025',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      description: 'Working with SRE and platform engineering teams to provide technical support for Artlogic, a leading art industry SaaS platform. Handling web application support, incident management, and contributing to product improvement.',
      skills: ['Python', 'SQL', 'REST APIs', 'Problem Solving', 'Technical Support', 'Incident Management'],
      icon: ComputerDesktopIcon
    }
];

// Interests and hobbies
export const interests = [
  {
    category: "Technology",
    items: ["AI & Machine Learning", "Web Development", "Open Source", "Blockchain"]
  },
  {
    category: "Learning",
    items: ["Computer Science", "Mathematics", "Language Learning", "Teaching"]
  },
  {
    category: "Creative",
    items: ["UI/UX Design", "Digital Art", "Photography", "Writing"]
  },
  {
    category: "Lifestyle",
    items: ["Fitness", "Meditation", "Cooking", "Travel"]
  }
];

// Certifications
export const certifications = [
  {
    title: "Responsive Web Design",
    url: "https://www.freecodecamp.org/certification/AshtinJW/responsive-web-design",
    icon: SquaresPlusIcon,
    color: "text-indigo-400"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    url: "https://www.freecodecamp.org/certification/AshtinJW/javascript-algorithms-and-data-structures",
    icon: CommandLineIcon,
    color: "text-yellow-400"
  },
  {
    title: "Front End Development Libraries",
    url: "https://www.freecodecamp.org/certification/AshtinJW/front-end-development-libraries",
    icon: CodeBracketIcon,
    color: "text-blue-400"
  }
];

// Tools and setup
export const developmentSetup = [
  {
    category: "Development Environment",
    icon: "CommandLine",
    items: [
      { name: "VS Code", description: "Primary code editor with custom extensions" },
      { name: "Windows Terminal", description: "PowerShell" },
      { name: "Ubuntu", description: "Linux development environment" },
      { name: "SSH", description: "Remote Development" }
    ]
  },
  {
    category: "Version Control & Deployment",
    icon: "Cloud",
    items: [
      { name: "Git", description: "Version control with GitHub" },
      { name: "GitHub Actions", description: "CI/CD automation" },
      { name: "Cloudflare", description: "Domain Management" }
    ]
  },
  {
    category: "Frontend Stack",
    icon: "Code",
    items: [
      { name: "React.js", description: "UI development" },
      { name: "Next.js", description: "React framework" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first styling" }
    ]
  },
  {
    category: "Backend & DevOps",
    icon: "Server",
    items: [
      { name: "Node.js", description: "Runtime environment" },
      { name: "Express", description: "Backend framework" },
      { name: "Firebase", description: "Various Tools(DB, Auth etc.)" },
      { name: "MariaDB", description: "Relational database" }
    ]
  },
  {
    category: "Design Tools",
    icon: "ColorSwatch",
    items: [
      { name: "Figma", description: "UI/UX design" },
      
      { name: "Canva", description: "Quick graphics" },
     
    ]
  },
  {
    category: "Productivity",
    icon: "Lightning",
    items: [
      { name: "Confluence", description: "Notes & documentation" },
      { name: "Jira", description: "Project management" },
      { name: "Slack", description: "Team communication" },
      { name: "Google Suite", description: "Business Tools" }
    ]
  }
];

// Keep existing data exports
export const websites = [
  {
    id: 1,
    title: "Kwantu Guesthouses",
    subtitle: "Web Development & UI Design",
    category: "freelance",
    description: "Developed a modern, responsive website for Kwantu Guesthouses, a luxury accommodation provider in Cape Town, enhancing their online presence and booking experience.",
    skills: ["React", "Bootstrap", "JavaScript", "Responsive Design"],
    demo: "https://kwantuguesthouses.capetown/",
    image: "images/projects/kwantu-guesthouses.png",
  },
  {
    id: 2,
    title: "Gras-Groen",
    subtitle: "Web Development & Branding",
    category: "freelance",
    description: "Designed and developed a clean, professional website for Gras-Groen, focusing on showcasing their high-quality services and improving online presence.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript"],
    demo: "https://gras-groen.co.za/",

    image: "images/projects/gras-groen.png",
  },
  {
    id: 3,
    title: "Crater Bush Villa",
    subtitle: "Web Development & Graphic Design",
    category: "freelance",
    description: "A comprehensive project involving web development and graphic design to create an immersive online experience for Crater Bush Villa, a luxury accommodation provider.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript"],
    demo: "https://craterbushvilla.co.za/",

    image: "images/projects/crater collage.png",
  },
  {
    id: 4,
    title: "Annie's Social Healthcare",
    subtitle: "Web Development & UX/UI Design",
    category: "freelance",
    description: "Focused on enhancing user experience and accessibility by developing a user-friendly website for Annie's Social Healthcare services.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript"],
    demo: "https://annies-healthcare.netlify.app/",

    image: "images/projects/annies-social-healthcare.png",
  },
  {
    id: 5,
    title: "Johnny Green Thumb",
    subtitle: "Web Development & Branding",
    category: "freelance",
    description: "Built a visually appealing and easy-to-navigate website for Johnny Green Thumb, effectively showcasing their services and expertise.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript"],
    demo: "https://johnnygreenthumbza.co.za/",

    image: "images/projects/johnny-green-thumb.png",
  },
  {
    id: 6,
    title: "Ngena Ekasi Tours",
    subtitle: "Web Development, Digital Marketing, Graphic Design",
    category: "freelance",
    description: "One of my foundational projects integrating web development, digital marketing, and graphic design to promote Ngena Ekasi's unique tour experiences.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript"],
    demo: "https://ngena-ekasi-tours.netlify.app/",
    github: "https://github.com/Ashtin-Walter/ngena-ekasi-tours",
    image: "images/projects/ngena collage.png",
  },
  {
    id: 7,
    title: "The Kushader Co.",
    subtitle: "Web Development, Digital Marketing, Graphic Design",
    category: "freelance",
    description: "Contributed to The Kushader Co.'s online presence through Wix website development, SEO optimization, and social media marketing strategies.",
    skills: ["Wix", "SEO", "Social Media Marketing"],
    demo: "https://www.thekushaderco.co.za/",
    image: "images/projects/kushader collage.png",
  },
  {
    id: 8,
    title: "Rekindle Candle Co.",
    subtitle: "Wix Website Optimization & Updates",
    category: "freelance",
    description: "Optimized and updated the Wix website for Rekindle Candle Co., a scent and candle studio, enhancing user experience and performance.",
    skills: ["Wix", "Support", "Website Optimization"],
    demo: "https://rekindlecandleco.co.za/",
    image: "images/projects/rekindle-candle.png"
  },
  {
    id: 9,
    title: "Robyn Chloe Photography",
    subtitle: "Web Development & Portfolio Showcase",
    category: "freelance",
    description: "Developed a visually stunning portfolio website for Robyn Chloe Photography, a Cape Town-based photographer, showcasing her work elegantly.",
    skills: ["Wix", "SEO", "Portfolio Design"],
    demo: "https://robynchloephotography.co.za/",
    image: "images/projects/robyn-chloe.png"
  }
];

export const projects = [
  {
    id: 1,
    title: "To-Do List",
    subtitle: "Personal Project",
    category: "personal",
    description: "A simple yet functional To-Do List app built using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    demo: "/todolist",
    github: "https://github.com/Ashtin-Walter/ToDoList",
    image: "images/projects/to-do-collage.png",
  },
  {
    id: 2,
    title: "Muncharoo",
    subtitle: "Full-Stack Recipe Website",
    category: "personal",
    description: "Muncharoo is a full-stack recipe website built with Next.js, Tailwind CSS, and a SQL backend.",
    skills: ["Next.js", "TailwindCSS", "SQL"],
    demo: "https://github.com/AshtinJW-Dev/Muncharoo",
    github: "https://github.com/Ashtin-Walter/muncharoo",
    image: "images/projects/muncharoo-collage.png",
  }
];

export const tools = [
  {
    id: 1,
    title: "URL Shortener",
    subtitle: "Web Utility",
    category: "utility",
    description: "A simple and efficient URL shortening service that creates compact, shareable links from long URLs.",
    skills: ["React", "Node.js", "MongoDB"],
    demo: "https://tools.walterhouse.co.za/url-shortener",
    github: "https://github.com/Ashtin-Walter/url-shortener",
    image: "images/tools/url-shortener.png",
    releaseDate: "2024-05-15"
  },
  {
    id: 2,
    title: "QR Code Generator",
    subtitle: "Code Generator",
    category: "generator",
    description: "Create customizable QR codes for websites, contact information, Wi-Fi credentials, and more.",
    skills: ["JavaScript", "Canvas API", "HTML5"],
    demo: "https://tools.walterhouse.co.za/qr-generator",
    github: "https://github.com/Ashtin-Walter/qr-generator",
    image: "images/tools/qr-code.png",
    releaseDate: "2024-06-01"
  },
  {
    id: 3,
    title: "Image Converter",
    subtitle: "Media Tool",
    category: "converter",
    description: "A powerful utility for converting images between various formats including WebP, JPEG, PNG and SVG with optimization options.",
    skills: ["Node.js", "Express", "Sharp", "File Handling"],
    demo: "https://tools.walterhouse.co.za/image-converter",
    github: "https://github.com/Ashtin-Walter/image-converter",
    image: "images/tools/image-converter.png",
    releaseDate: "2024-06-15"
  }
];

export const games = [
  {
    id: 1,
    title: "Tenfinity",
    subtitle: "Game Development",
    category: "puzzle",
    description: "Tenfinity is an addictive grid-based puzzle game inspired by the classic 1010!",
    skills: ["React", "Canvas API", "JavaScript"],
    demo: "https://arcade.walterhouse.co.za/games/original/tenfinity/",
    github: "https://github.com/Ashtin-Walter/tenfinity",
    image: "images/projects/tenfinity.png",
    difficulty: 2,
    highscore: "12,450",
    completion: "85%",
    playCount: 27,
    releaseDate: "2023-11-15"
  },
  {
    id: 2,
    title: "Flappy Ostrich",
    subtitle: "Game Development",
    category: "action",
    description: "Flappy Ostrich is my take on the classic Flappy Bird game, built with Nextjs and TailwindCSS.",
    skills: ["Next.js", "TailwindCSS", "JavaScript"],
    demo: "https://arcade.walterhouse.co.za/games/original/flappy-ostrich/",
    github: "https://github.com/Ashtin-Walter/flappy-ostrich",
    image: "images/projects/flappy-ostrich.png",
    difficulty: 3,
    highscore: "34",
    completion: "100%",
    playCount: 48,
    releaseDate: "2024-01-22"
  },
  {
    id: 3,
    title: "Meme Match",
    subtitle: "New Release",
    category: "puzzle",
    description: "A classic memory card matching game with a twist - match cards while racing against the clock!",
    skills: ["React", "Framer Motion", "JavaScript"],
    demo: "https://arcade.walterhouse.co.za/games/original/meme-match/",
    github: "https://github.com/Ashtin-Walter/meme-match",
    image: "images/projects/meme-match.png",
    difficulty: 1,
    highscore: "9,200",
    completion: "60%",
    playCount: 14,
    releaseDate: "2024-03-10"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: '"Working with you has been a game-changer for our business. Your expertise and dedication are unmatched."',
    name: "Thandisizwe Dhano",
    company: "Ngena Ekasi Tours",
  },
  {
    id: 2,
    quote: '"Your work exceeded our expectations. We are thrilled with the results and look forward to future projects together."',
    name: "Lana Rodel",
    company: "Crater Bush Villa",
  },
  {
    id: 3,
    quote: '"Your creativity and professionalism have significantly boosted our brand. Thank you for your outstanding work."',
    name: "Jasmine Budd",
    company: "The Kushader Co.",
  },
  {
    id: 4,
    quote: '"The website you built for us is fantastic! It perfectly captures our brand and has been a hit with our customers."',
    name: "Johnny",
    company: "Johnny Green Thumb",
  },
];
