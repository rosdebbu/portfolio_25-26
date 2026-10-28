import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Bot, Gem, TrendingUp, Map, Dumbbell, Sprout, ShieldCheck, Radio, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "KisanZess",
    badge: "Google Cloud Hackathon 2026",
    image: "/projects/kisanzess.jpg",
    description:
      "Dual-brain reflex agent system for Indian agriculture. Features a 4-agent Krishi Panchayat consensus debate arena (Pathologist, Economist, Ecologist, Sarpanch), sub-35ms ModernBERT reflex router, Scikit-Learn crop & fertilizer ML models, Google Gemini 1.5 Flash leaf vision diagnosis, and real-time APMC Mandi price intelligence.",
    icon: Sprout,
    color: "text-lime-400",
    bgColor: "bg-lime-500/10",
    borderColor: "border-lime-500/20 group-hover:border-lime-500/50",
    shadowColor: "hover:shadow-lime-500/20",
    tags: ["Python", "FastAPI", "ModernBERT", "Scikit-Learn", "Gemini 1.5 Flash", "Multi-Agent", "WebSockets"],
    category: "AI & Full-Stack",
    demoUrl: "https://github.com/rosdebbu/KisanZess",
    githubUrl: "https://github.com/rosdebbu/KisanZess",
  },
  {
    id: 2,
    title: "SatyaPay (CommitGuard)",
    badge: "Fintech Hackathon Finalist",
    image: "/projects/satyapay.jpg",
    description:
      "Pre-commitment financial transparency interceptor for POS & banking that catches cognitive lock-in in under 3 seconds. Features deterministic calculation of true effective APR, hidden GST drag, exit penalty modeling, and 100% on-device sandboxed IndexedDB storage with zero central telemetry.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20 group-hover:border-emerald-500/50",
    shadowColor: "hover:shadow-emerald-500/20",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "IndexedDB", "Chrome Extension", "Financial Engine"],
    category: "AI & Full-Stack",
    demoUrl: "https://github.com/rosdebbu/SatyaPay",
    githubUrl: "https://github.com/rosdebbu/SatyaPay",
  },
  {
    id: 3,
    title: "OpenZess",
    badge: "Flagship Robotics & Agents",
    image: "/projects/openzess.jpg",
    description:
      "Full-stack autonomous agent platform with React dashboard, FastAPI backend, PostgreSQL (Neon) with connection pooling, WebSocket-based matrix viewer, Graphify codebase AST knowledge graph analysis, and automated email reporting. Deployed on Vercel + Render.",
    icon: Bot,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20 group-hover:border-blue-500/50",
    shadowColor: "hover:shadow-blue-500/20",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "WebSocket", "Graphify"],
    category: "AI & Full-Stack",
    demoUrl: "https://openzess-docs.vercel.app/",
    githubUrl: "https://github.com/rosdebbu/openzess",
  },
  {
    id: 4,
    title: "IndiGlam",
    badge: "Production E-Commerce",
    image: "/projects/indiglam.svg",
    description:
      "Production-grade luxury jewellery e-commerce platform with Google OAuth, Prisma ORM over PostgreSQL, paginated catalog with advanced filters, cart/checkout flow, and responsive dark-gold luxury UI with GSAP animations.",
    icon: Gem,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20 group-hover:border-amber-500/50",
    shadowColor: "hover:shadow-amber-500/20",
    tags: ["React 19", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Google OAuth", "GSAP"],
    category: "Full-Stack",
    demoUrl: "https://github.com/rosdebbu/IndiGlam",
    githubUrl: "https://github.com/rosdebbu/IndiGlam",
  },
  {
    id: 5,
    title: "InvestTrack",
    badge: "AI Wealth Advisor",
    image: "/projects/investtrack.svg",
    description:
      "Comprehensive personal finance & wealth management platform with multi-asset portfolio tracking, sector heatmaps, market sentiment index, and an AI-powered financial advisor driven by Google Gemini API.",
    icon: TrendingUp,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20 group-hover:border-cyan-500/50",
    shadowColor: "hover:shadow-cyan-500/20",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Vite"],
    category: "AI & Full-Stack",
    demoUrl: "https://inversttrack.vercel.app",
    githubUrl: "https://github.com/rosdebbu/inversttrack",
  },
  {
    id: 6,
    title: "IoT Environmental Smart Stick",
    badge: "Hardware & Edge AI",
    image: "/projects/iot-smartstick.svg",
    description:
      "Portable IoT hardware telemetry device engineered with ESP32 and environmental sensor fusion for real-time coastal metrics capture. Feeds sensor data into fuzzy logic models to forecast water quality degradation and environmental anomalies.",
    icon: Radio,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20 group-hover:border-violet-500/50",
    shadowColor: "hover:shadow-violet-500/20",
    tags: ["ESP32", "C++", "Python", "Fuzzy Logic", "Sensor Fusion", "IoT"],
    category: "Hardware & IoT",
    demoUrl: "https://github.com/rosdebbu",
    githubUrl: "https://github.com/rosdebbu",
  },
  {
    id: 7,
    title: "CampusCompass",
    badge: "University Navigation",
    image: "/projects/campuscompass.png",
    description:
      "University navigation platform helping students discover campus resources, services, and routes at SRMIST. Built with a modern TypeScript + React stack and deployed on Vercel.",
    icon: Map,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20 group-hover:border-purple-500/50",
    shadowColor: "hover:shadow-purple-500/20",
    tags: ["TypeScript", "React", "Vite"],
    category: "Frontend",
    demoUrl: "https://capmass2.vercel.app",
    githubUrl: "https://github.com/rosdebbu/campuscompas.",
  },
  {
    id: 8,
    title: "FitPulse",
    badge: "Mobile Fitness",
    image: "/projects/fitpulse.svg",
    description:
      "Mobile-first fitness application with multi-step onboarding flow, daily goal selection, and workout tracking. Designed to feel native on mobile devices with responsive CSS.",
    icon: Dumbbell,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20 group-hover:border-rose-500/50",
    shadowColor: "hover:shadow-rose-500/20",
    tags: ["React", "TypeScript", "Vite", "Mobile-First CSS"],
    category: "Frontend",
    demoUrl: "https://github.com/rosdebbu/FITNESS-APP",
    githubUrl: "https://github.com/rosdebbu/FITNESS-APP",
  },
];

const categories = ["All", "AI & Full-Stack", "Full-Stack", "Hardware & IoT", "Frontend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Production-grade applications shipped with real databases, auth
            systems, and deployment pipelines. Each project solves a real
            problem — not just a tutorial clone.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 font-medium tracking-wide border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary/40 text-foreground border-border/40 hover:bg-secondary/80 hover:border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, key) => (
            <div
              key={key}
              className={cn(
                "group flex flex-col sm:flex-row bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl",
                project.borderColor,
                project.shadowColor
              )}
            >
              {/* Screenshot & Preview Container */}
              <div className="sm:w-5/12 relative overflow-hidden bg-muted/20 border-b sm:border-b-0 sm:border-r border-border/40 min-h-[220px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-card/60 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Floating Category Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border/70 shadow-xs">
                  <project.icon className={`w-3.5 h-3.5 ${project.color}`} />
                  <span className="text-[11px] font-medium text-foreground/90">{project.category}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="sm:w-7/12 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase border border-primary/20 rounded bg-primary/5 text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary/80 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View Github Bottom Button ── */}
        <div className="text-center mt-20">
          <a
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold tracking-wide shadow-md"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rosdebbu"
          >
            <Github size={20} />
            Explore More on GitHub
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
