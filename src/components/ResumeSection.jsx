import { Download, ExternalLink } from "lucide-react";

const CV_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1TQb-ydOLoHBFCUoK4dw4Taf4Cx35ioYV";
const CV_VIEW_URL =
  "https://drive.google.com/file/d/1TQb-ydOLoHBFCUoK4dw4Taf4Cx35ioYV/view?usp=sharing";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* ── Section Heading ── */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          A snapshot of my education, experience, and technical expertise.
        </p>

        {/* ── Download CV Button ── */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href={CV_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-btn"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
          <a
            href={CV_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-view-btn"
          >
            <ExternalLink className="h-4 w-4" />
            View on Drive
          </a>
        </div>

        {/* ── Inline Resume Preview ── */}
        <div className="resume-preview-card">
          <div className="resume-preview-glow" />
          <img
            src="/resume-preview.jpg"
            alt="Debjit Das — Resume / CV"
            className="resume-preview-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
