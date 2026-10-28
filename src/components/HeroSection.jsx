import { Briefcase, Code, User, Cpu, ExternalLink, Github, Bot, Gem, TrendingUp, Linkedin, Instagram, Twitter, Sprout, ShieldCheck } from "lucide-react";

const featuredProjects = [
  {
    title: "KisanZess",
    badge: "AgTech AI",
    image: "/projects/kisanzess.jpg",
    description:
      "Dual-brain reflex agent system for Indian agriculture. 4-agent Krishi Panchayat debate arena, sub-35ms ModernBERT router, and Gemini 1.5 Flash leaf vision.",
    icon: Sprout,
    color: "text-lime-400",
    bgColor: "bg-lime-500/10",
    demoUrl: "https://github.com/rosdebbu/KisanZess",
    githubUrl: "https://github.com/rosdebbu/KisanZess",
  },
  {
    title: "SatyaPay",
    badge: "Fintech Interceptor",
    image: "/projects/satyapay.jpg",
    description:
      "Pre-commitment financial transparency interceptor for POS/banking. Deterministic true APR, hidden GST drag, exit lock-in, and sandboxed on-device IndexedDB.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    demoUrl: "https://github.com/rosdebbu/SatyaPay",
    githubUrl: "https://github.com/rosdebbu/SatyaPay",
  },
  {
    title: "OpenZess",
    badge: "Autonomous Robotics",
    image: "/projects/openzess.jpg",
    description:
      "Full-stack autonomous agent platform with React dashboard, FastAPI backend, PostgreSQL Neon pooling, WebSocket matrix viewer, and automated email reporting.",
    icon: Bot,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    demoUrl: "https://openzess-docs.vercel.app/",
    githubUrl: "https://github.com/rosdebbu/openzess",
  },
  {
    title: "IndiGlam",
    badge: "E-Commerce",
    image: "/projects/indiglam.svg",
    description:
      "Production-grade jewellery e-commerce with Google OAuth, Prisma ORM over PostgreSQL, paginated catalog with filters, and responsive dark-gold luxury UI.",
    icon: Gem,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    demoUrl: "https://github.com/rosdebbu/IndiGlam",
    githubUrl: "https://github.com/rosdebbu/IndiGlam",
  },
];

export const HeroSection = ({ onNavClick }) => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start px-4 pt-8 pb-16"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* ── Hero Intro — Two Column ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh] mb-24">
          {/* Left — Text */}
          <div className="text-left space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in">
              Hi There! <span className="inline-block animate-bounce">👋🏻</span>
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
              I'M{" "}
              <span className="text-primary">DEBJIT DAS</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary/80 font-medium opacity-0 animate-fade-in-delay-2">
              Full-Stack Developer · AI Researcher · Hackathon Finalist
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3">
              2nd-year CSE (Data Science) student at SRMIST, Chennai. I build
              production-grade full-stack apps and multi-agent AI systems, from
              database and auth to deployment. Currently researching Graph
              Neural Networks and prototyping Edge AI on ESP32.
            </p>

            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-4">
              <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                350+ GitHub Contributions
              </span>
              <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                8+ Production Projects
              </span>
              <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                GNN Researcher @ SRMIST
              </span>
              <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                Multi-Agent &amp; Edge AI
              </span>
              <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                Google Cloud Hackathon 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border rounded-full bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Internships
              </span>
            </div>

            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-4">
              <button
                onClick={() => onNavClick("projects")}
                className="px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => onNavClick("resume")}
                className="px-5 py-2.5 text-sm font-medium rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                View Resume
              </button>
              <button
                onClick={() => onNavClick("contact")}
                className="px-5 py-2.5 text-sm font-medium rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground opacity-0 animate-fade-in-delay-4">
              {["React", "Next.js", "FastAPI", "Python", "PostgreSQL", "PyTorch"].map(
                (tech) => (
                  <span key={tech} className="font-medium tracking-wide">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm" />
              <img
                src="/coding-illustration.png"
                alt="Developer Illustration"
                className="relative z-10 w-full h-full object-contain p-4 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ── About: Two-column Text + Photo ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start mb-24">
          <div className="about-text-col space-y-6 text-left">
            <h2 className="about-heading">
              LET ME <span className="text-primary">INTRODUCE</span> MYSELF
            </h2>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              I'm a Full-Stack Developer from{" "}
              <span className="about-highlight">Chennai, India</span> who loves
              transforming ideas into production-grade web applications and
              intelligent systems.
            </p>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              I'm proficient in{" "}
              <em className="about-highlight">
                React, Next.js, FastAPI, Node.js, and Python
              </em>{" "}
              — and I enjoy working across both frontend and backend stacks with
              real databases and deployment pipelines.
            </p>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              My key areas of interest include developing{" "}
              <em className="about-highlight">
                Full-Stack Web Applications, AI-Powered Systems
              </em>
              , and creating aesthetically refined, user-centric digital
              experiences with strong architecture and clean code.
            </p>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Beyond the web, I'm actively researching{" "}
              <span className="about-highlight">Graph Neural Networks</span>{" "}
              with university faculty and prototyping IoT devices with{" "}
              <em className="about-highlight">ESP32</em> microcontrollers —
              bridging software and hardware.
            </p>
          </div>

          <div className="about-photo-wrapper">
            <div className="about-photo-ring">
              <img
                src="/profile-photo.jpg"
                alt="Debjit Das"
                className="about-photo"
              />
            </div>
          </div>
        </div>

        {/* ── Expertise Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="about-card group">
            <div className="about-card-icon">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg text-foreground mb-1">
                Full-Stack Development
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React 19, Next.js 14, FastAPI, Node.js with PostgreSQL, MySQL,
                and Prisma ORM. Deployed on Vercel + Render.
              </p>
            </div>
          </div>

          <div className="about-card group">
            <div className="about-card-icon">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg text-foreground mb-1">
                AI &amp; Research
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Graph Neural Networks with PyTorch/PyG. NLP chatbots, codebase
                knowledge graphs, and fuzzy logic data pipelines.
              </p>
            </div>
          </div>

          <div className="about-card group">
            <div className="about-card-icon">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg text-foreground mb-1">
                Hardware &amp; Systems
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ESP32 IoT prototyping, OpenFOAM CFD, Docker containerization,
                and WSL2/Linux environments.
              </p>
            </div>
          </div>
        </div>

        {/* ── Featured Projects ── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            A few highlights from my recent work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Screenshot Preview */}
                <div className="relative h-44 overflow-hidden border-b border-border/40 bg-muted/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                  {project.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-background/90 text-primary border border-primary/30 backdrop-blur-md shadow-xs">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between text-center">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => onNavClick("projects")}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 font-medium tracking-wide shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
            >
              View All Projects 
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* ── Find Me On ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Find Me <span className="text-primary">On</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Feel free to <span className="text-primary">connect</span> with me
          </p>

          <div className="flex gap-5 justify-center">
            <a
              href="https://github.com/rosdebbu"
              target="_blank"
              className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/debjit-das-592982290/"
              target="_blank"
              className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/rossdebbu"
              target="_blank"
              className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/rossdebbu"
              target="_blank"
              className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
