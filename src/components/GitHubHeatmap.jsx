import GitHubCalendar from "react-github-calendar";

export const GitHubHeatmap = () => {
  // Use the exact colors from your screenshot
  const explicitTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        
        {/* Title matching your exact request */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Days I <span className="text-primary">Code</span>
        </h2>

        {/* Heatmap Box with the green glow/border matching your screenshot */}
        <div className="rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm p-8 pb-10 w-full overflow-x-auto shadow-[0_0_15px_rgba(16,185,129,0.05)]">
          <div className="flex justify-center min-w-[750px] github-calendar-wrapper">
            <GitHubCalendar
              username="rosdebbu"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              theme={explicitTheme}
              colorScheme="dark"
              hideTotalCount={false}
              hideColorLegend={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
