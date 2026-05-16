import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Bot, Gem, TrendingUp, Map, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "OpenZess",
    description:
      "Full-stack autonomous agent platform with React dashboard, FastAPI backend, PostgreSQL (Neon) with connection pooling, WebSocket-based matrix viewer, codebase graph analysis, and automated email reporting. Deployed on Vercel + Render.",
    icon: Bot,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20 group-hover:border-blue-500/50",
    shadowColor: "hover:shadow-blue-500/20",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "WebSocket"],
    category: "AI & Full-Stack",
    demoUrl: "https://openzess-docs.vercel.app/",
    githubUrl: "https://github.com/rosdebbu/openzess",
  },
  {
    id: 2,
    title: "IndiGlam",
    description:
      "Production-grade jewellery e-commerce with Google OAuth, Prisma ORM over PostgreSQL, paginated catalog with advanced filters, cart/checkout flow, and responsive dark-gold luxury UI with GSAP animations.",
    icon: Gem,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20 group-hover:border-amber-500/50",
    shadowColor: "hover:shadow-amber-500/20",
    tags: ["React 19", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Google OAuth"],
    category: "Full-Stack",
    demoUrl: "#",
    githubUrl: "https://github.com/rosdebbu/IndiGlam",
  },
  {
    id: 3,
    title: "InvestTrack",
    description:
      "Comprehensive personal finance & wealth management platform with portfolio tracking, market analysis, goal planning, AI-powered advisor using Google Gemini, and multi-asset tracking with sector heatmaps.",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20 group-hover:border-emerald-500/50",
    shadowColor: "hover:shadow-emerald-500/20",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Vite"],
    category: "AI & Full-Stack",
    demoUrl: "https://inversttrack.vercel.app",
    githubUrl: "https://github.com/rosdebbu/inversttrack",
  },
  {
    id: 4,
    title: "CampusCompass",
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
    id: 5,
    title: "FitPulse",
    description:
      "Mobile-first fitness application with multi-step onboarding flow, daily goal selection, and workout tracking. Designed to feel native on mobile devices with responsive CSS.",
    icon: Dumbbell,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20 group-hover:border-rose-500/50",
    shadowColor: "hover:shadow-rose-500/20",
    tags: ["React", "TypeScript", "Vite", "Mobile-First CSS"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "https://github.com/rosdebbu/FITNESS-APP",
  },
];

const categories = ["All", "AI & Full-Stack", "Full-Stack", "Frontend"];

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
              {/* Icon Container (Left side on desktop, top on mobile) */}
              <div className={`sm:w-2/5 p-8 flex items-center justify-center transition-colors duration-500 ${project.bgColor}`}>
                <div className="relative">
                  <div className={`absolute inset-0 blur-xl opacity-50 ${project.color}`} />
                  <project.icon className={`relative w-24 h-24 transition-transform duration-500 group-hover:scale-110 ${project.color} drop-shadow-2xl`} />
                </div>
              </div>

              {/* Content Container */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
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
