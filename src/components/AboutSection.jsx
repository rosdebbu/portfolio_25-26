import { Briefcase, Code, User, Cpu } from "lucide-react";
import { GitHubHeatmap } from "./GitHubHeatmap";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* ── Heading ── */}
        <h2 className="about-heading text-center md:text-left">
          Know Who <span className="text-primary">I'M</span>
        </h2>

        {/* ── Two-column: Text + Photo ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          {/* Left – paragraphs with highlighted keywords */}
          <div className="about-text-col space-y-6 text-left">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Hi everyone! I'm <span className="about-highlight">Ross</span>, originally from Agartala and currently based in <span className="about-highlight">Chennai, India</span>.
            </p>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              I'm an AI Developer and aspiring researcher specializing in <em className="about-highlight">Large Language Models (LLMs), RAG, and Graph Neural Networks (GNNs)</em>.<br />
              I am currently pursuing a B.Tech in <span className="about-highlight">Computer Science and Engineering (Data Science)</span> at the <span className="about-highlight">SRMIST</span>.
            </p>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Outside of training models and deploying apps, I spend my time on activities that keep me analytical and engaged:
            </p>

            <ul className="space-y-3 mt-4 ml-4">
              <li className="flex gap-3 items-center text-foreground/80 text-base md:text-lg">
                <span className="text-xl">⌨️</span> Customizing mechanical keyboards and researching hardware
              </li>
              <li className="flex gap-3 items-center text-foreground/80 text-base md:text-lg">
                <span className="text-xl">🔭</span> Exploring astrology and birth chart analysis
              </li>
              <li className="flex gap-3 items-center text-foreground/80 text-base md:text-lg">
                <span className="text-xl">💻</span> Building open-source projects like CampusCompass and IndiGlam
              </li>
            </ul>

            <div className="pt-6 text-center">
              <p className="text-primary text-base md:text-lg mb-2 tracking-wide font-medium">
                "Always open to research collaborations and development projects. Feel free to contact me!"
              </p>
              <p className="text-muted-foreground">— DEBJIT DAS</p>
            </div>
          </div>

          {/* Right – coding illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm" />
              <img
                src="/coding-illustration.png"
                alt="Developer Illustration"
                className="relative z-10 w-full h-full object-contain p-4 drop-shadow-2xl"
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

        {/* ── GitHub Heatmap ── */}
        <div className="mt-16">
          <GitHubHeatmap />
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
