import { GitHubCalendar } from "react-github-calendar";

export const GitHubHeatmap = () => {
  // Use the exact colors from your screenshot
  const explicitTheme = {
    light: ["rgba(255,255,255,0.05)", "#064e3b", "#047857", "#10b981", "#34d399"],
    dark: ["rgba(255,255,255,0.05)", "#064e3b", "#047857", "#10b981", "#34d399"],
  };

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Days I <span className="text-primary">Code</span>
      </h3>

      {/* Heatmap Box */}
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
  );
};
