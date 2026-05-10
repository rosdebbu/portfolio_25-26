import { ArrowUp, Github, Linkedin, Instagram, Youtube, Mail, MapPin, Code2, ExternalLink, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rosdebbu", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/debjit-das", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const canvasRef = useRef(null);

  // Floating particles effect in the footer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <footer className="footer-wrapper relative overflow-hidden">
      {/* ── Animated Layered Waves ── */}
      <div className="footer-waves" aria-hidden="true">
        {/* Wave Layer 1 – Back (deep purple, slowest) */}
        <svg
          className="footer-wave footer-wave--1"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,224L48,202.7C96,181,192,139,288,154.7C384,171,480,245,576,234.7C672,224,768,128,864,122.7C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        {/* Wave Layer 2 – Middle (medium purple) */}
        <svg
          className="footer-wave footer-wave--2"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        {/* Wave Layer 3 – Front (matches footer bg, fastest) */}
        <svg
          className="footer-wave footer-wave--3"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,202.7C672,213,768,235,864,218.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="footer-body relative z-10">
        {/* Floating particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="footer-brand-icon">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  Debjit <span className="text-primary">Das</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Full-Stack Developer from Chennai, India. Building production-grade
                web applications with React, Next.js, and FastAPI.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary/60" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Navigate Column */}
            <div>
              <h4 className="footer-heading">Navigate</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="footer-link group"
                    >
                      <span className="footer-link-dot" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Column */}
            <div>
              <h4 className="footer-heading">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="footer-tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="footer-heading">Connect</h4>
              <div className="flex gap-3 mb-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-btn"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a
                href="mailto:debjitdas@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="h-4 w-4 group-hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
                debjitdas@example.com
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-bar relative z-10">
          <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap">
              Made with{" "}
              <Heart className="h-4 w-4 text-red-400 fill-red-400 footer-heart" />{" "}
              by Debjit Das &copy; {new Date().getFullYear()}. All rights
              reserved.
            </p>

            {/* Scroll to top */}
            <a
              href="#hero"
              className="footer-scroll-top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
