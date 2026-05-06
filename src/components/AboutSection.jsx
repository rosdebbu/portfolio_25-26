import { Briefcase, Code, User, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Systems Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a 4th-semester B.Tech CSE (Data Science) student at SRM
              Institute of Science and Technology (SRMIST), Chennai. Expected
              graduation: 2028.
            </p>

            <p className="text-muted-foreground">
              My projects ship to production with real databases, authentication,
              and deployment pipelines — not just localhost demos. I've built
              e-commerce platforms with Google OAuth and Prisma ORM, autonomous
              agent dashboards with WebSocket streaming, and hotel booking
              systems with AI chatbots that query databases using natural
              language.
            </p>

            <p className="text-muted-foreground">
              Beyond web development, I'm actively collaborating with university
              faculty on Graph Neural Network research and engineering IoT
              devices with ESP32 microcontrollers for environmental monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
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

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    React 19, Next.js 14, FastAPI, Node.js with PostgreSQL,
                    MySQL, and Prisma ORM. Deployed on Vercel + Render.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Research</h4>
                  <p className="text-muted-foreground">
                    Graph Neural Networks research with PyTorch/PyG. NLP
                    chatbots, codebase knowledge graphs, and fuzzy logic
                    data processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hardware & Systems</h4>
                  <p className="text-muted-foreground">
                    ESP32 IoT prototyping, OpenFOAM CFD simulations, Docker
                    containerization, and WSL2/Linux environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
