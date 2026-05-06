import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Debjit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Das
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            2nd-year CSE (Data Science) student at SRMIST, Chennai. I build
            production-grade full-stack applications with real databases, auth
            systems, and deployment pipelines. Currently researching Graph
            Neural Networks and prototyping IoT hardware systems — bridging
            the gap between web engineering and applied AI.
          </p>

          <div className="flex flex-wrap gap-3 justify-center opacity-0 animate-fade-in-delay-4">
            <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
              332 GitHub Contributions
            </span>
            <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
              6+ Deployed Projects
            </span>
            <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
              GNN Researcher
            </span>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
