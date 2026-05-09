import { Download, Briefcase, GraduationCap, Code2, Database, Brain, Globe } from "lucide-react";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          A snapshot of my education, experience, and technical expertise.
        </p>

        {/* Download CV Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/resume-debjit-das.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 border border-primary/30"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </div>

        {/* Resume Card */}
        <div className="gradient-border rounded-2xl overflow-hidden">
          <div className="bg-card/80 backdrop-blur-sm p-6 md:p-10">
            {/* Top: Profile + About Me */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start mb-12">
              {/* Left – Profile */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_25px_rgba(139,92,246,0.15)] mb-5">
                  <img
                    src="/profile-photo.jpg"
                    alt="Debjit Das"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase">
                  Debjit
                </h3>
                <h3 className="text-2xl font-extrabold tracking-tight uppercase text-primary">
                  Das
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">
                  Full-Stack Developer
                </p>
                <div className="w-12 h-0.5 bg-primary/40 rounded-full mt-3"></div>
              </div>

              {/* Right – About Me */}
              <div className="text-left">
                <div className="inline-block px-5 py-2 bg-primary/15 rounded-lg mb-5">
                  <h4 className="text-lg font-bold tracking-wide text-primary uppercase">
                    About Me
                  </h4>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  I'm a 2nd-year B.Tech CSE (Data Science) student at SRM
                  Institute of Science and Technology (SRMIST), Chennai,
                  graduating in 2028. My focus is on building production-grade
                  full-stack applications with real databases, authentication
                  systems, and deployment pipelines.
                </p>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  My tech stack includes React 19, Next.js 14, FastAPI, Node.js,
                  PostgreSQL, MySQL, and Prisma ORM — deployed across Vercel and
                  Render. I'm proficient in both frontend and backend
                  development, with a strong emphasis on user experience and
                  clean architecture.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Beyond web development, I'm actively researching Graph Neural
                  Networks with university faculty and prototyping IoT devices
                  with ESP32 microcontrollers — bridging the gap between web
                  engineering and applied AI.
                </p>
              </div>
            </div>

            {/* Work Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Work Experience */}
              <div>
                <div className="inline-block px-5 py-2 bg-primary/15 rounded-lg mb-6">
                  <h4 className="text-lg font-bold tracking-wide text-primary uppercase flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Work Experience
                  </h4>
                </div>

                <div className="space-y-6">
                  <TimelineItem
                    title="Full-Stack Developer"
                    subtitle="Freelance / Personal Projects"
                    date="2024 – Present"
                    description="Building production-grade web applications including e-commerce platforms with Google OAuth, hotel booking systems with AI chatbots, and autonomous agent dashboards with WebSocket streaming."
                    icon={<Code2 className="h-4 w-4" />}
                  />
                  <TimelineItem
                    title="AI & Research Assistant"
                    subtitle="SRMIST – Faculty Collaboration"
                    date="2025 – Present"
                    description="Collaborating on Graph Neural Network research using PyTorch/PyG. Developing NLP chatbots, codebase knowledge graphs, and fuzzy logic data processing pipelines."
                    icon={<Brain className="h-4 w-4" />}
                  />
                  <TimelineItem
                    title="IoT Hardware Engineer"
                    subtitle="University Projects"
                    date="2024 – Present"
                    description="Prototyping ESP32-based IoT devices for environmental monitoring. Integrating sensors, real-time data streaming, and cloud dashboards."
                    icon={<Database className="h-4 w-4" />}
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="inline-block px-5 py-2 bg-primary/15 rounded-lg mb-6">
                  <h4 className="text-lg font-bold tracking-wide text-primary uppercase flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </h4>
                </div>

                <div className="space-y-6">
                  <TimelineItem
                    title="B.Tech CSE (Data Science)"
                    subtitle="SRM Institute of Science & Technology"
                    date="2024 – 2028 (Expected)"
                    description="Specializing in Data Science with coursework in machine learning, database systems, algorithms, and software engineering."
                    icon={<GraduationCap className="h-4 w-4" />}
                  />
                  <TimelineItem
                    title="Higher Secondary (12th)"
                    subtitle="Science Stream"
                    date="Completed 2024"
                    description="Focused on Physics, Chemistry, Mathematics, and Computer Science. Developed early interest in programming and web technologies."
                    icon={<Globe className="h-4 w-4" />}
                  />
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-semibold">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "FastAPI",
                      "Python",
                      "PostgreSQL",
                      "Prisma",
                      "Docker",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Timeline Item sub-component */
const TimelineItem = ({ title, subtitle, date, description, icon }) => {
  return (
    <div className="relative pl-8 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 group-last:bg-transparent"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center text-primary group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300">
        {icon}
      </div>
      <div>
        <span className="text-xs text-primary/70 font-semibold uppercase tracking-wider">
          {date}
        </span>
        <h5 className="text-base font-semibold text-foreground mt-1">
          {title}
        </h5>
        <p className="text-sm text-primary/60 font-medium">{subtitle}</p>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
