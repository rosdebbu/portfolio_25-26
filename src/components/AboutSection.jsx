import { Briefcase, Code, User, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* ── Heading ── */}
        <h2 className="about-heading">
          LET ME <span className="text-primary">INTRODUCE</span> MYSELF
        </h2>

        {/* ── Two-column: Text + Photo ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          {/* Left – paragraphs with highlighted keywords */}
          <div className="about-text-col space-y-6 text-left">
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

          {/* Right – circular profile photo */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            href="https://github.com/rosdebbu"
            target="_blank"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
