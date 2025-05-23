export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/jake-squelch",
  github: "https://github.com/jake-squelch",
  email: "jake.squelch@aston.ac.uk",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Backend API",
    description: "RESTful API built with Node.js and Express for handling product management, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/jake-squelch/ecommerce-api",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Full-stack application for team collaboration with real-time updates, drag-and-drop functionality, and user management.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/jake-squelch/task-manager",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Weather API Service",
    description: "Microservice that aggregates weather data from multiple sources with caching, rate limiting, and comprehensive API documentation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "api",
    technologies: ["Python", "FastAPI", "Redis"],
    githubUrl: "https://github.com/jake-squelch/weather-api",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "Real-time messaging application with private and group chats, file sharing, and message encryption.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/jake-squelch/chat-app",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Blog CMS Backend",
    description: "Content management system backend with admin panel, role-based permissions, and SEO optimization features.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/jake-squelch/blog-cms",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Authentication Service",
    description: "Microservice for user authentication with JWT tokens, OAuth integration, and comprehensive security features.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "api",
    technologies: ["Node.js", "JWT", "OAuth", "Redis"],
    githubUrl: "https://github.com/jake-squelch/auth-service",
    liveUrl: "#",
  },
];

export const SKILLS = {
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "PostgreSQL", level: 70 },
  ],
  frontend: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 70 },
    { name: "HTML/CSS", level: 85 },
    { name: "TypeScript", level: 75 },
  ],
  tools: [
    { name: "Git", level: 88 },
    { name: "Docker", level: 65 },
    { name: "MongoDB", level: 72 },
    { name: "AWS", level: 60 },
  ],
};

export const EXPERIENCE = [
  {
    title: "Backend Software Engineer",
    company: "Tech Startup",
    duration: "6 months",
    description: "Developed and maintained backend services, worked with APIs, and contributed to system architecture decisions.",
    color: "electric",
  },
  {
    title: "Computer Science Student",
    company: "Aston University, UK",
    duration: "2021 - Present",
    description: "Studying core computer science principles including algorithms, data structures, software engineering, and web development.",
    color: "purple",
  },
];
