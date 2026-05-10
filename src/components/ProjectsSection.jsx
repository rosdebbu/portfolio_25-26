import { ArrowRight, ExternalLink, Github, Bot, Gem, TrendingUp, Map, Dumbbell } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OpenZess",
    description:
      "Full-stack autonomous agent platform with React dashboard, FastAPI backend, PostgreSQL (Neon) with connection pooling, WebSocket-based matrix viewer, codebase graph analysis, and automated email reporting. Deployed on Vercel + Render.",
    icon: Bot,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "WebSocket"],
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
    tags: ["React 19", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Google OAuth"],
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
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Vite"],
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
    tags: ["TypeScript", "React", "Vite"],
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
    tags: ["React", "TypeScript", "Vite", "Mobile-First CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/rosdebbu/FITNESS-APP",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production-grade applications shipped with real databases, auth
          systems, and deployment pipelines. Each project solves a real
          problem — not just a tutorial clone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className={`h-48 flex items-center justify-center transition-colors duration-500 ${project.bgColor}`}>
                <project.icon className={`w-20 h-20 transition-transform duration-500 group-hover:scale-110 ${project.color}`} />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rosdebbu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
