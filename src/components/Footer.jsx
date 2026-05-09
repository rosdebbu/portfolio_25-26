import { ArrowUp, Github, Linkedin, Instagram, Youtube, Mail, MapPin, Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
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
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                Debjit <span className="text-primary">Das</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
            <h4 className="text-base font-semibold text-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Column */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-primary/10 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:debjitdas@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              debjitdas@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-red-400">❤</span> by Debjit Das
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Scroll to top */}
          <a
            href="#hero"
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
