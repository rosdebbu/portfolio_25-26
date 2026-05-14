import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Code2, FolderKanban, FileText, BookOpen, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Skills", id: "skills", icon: Code2 },
  { name: "Projects", id: "projects", icon: FolderKanban },
  { name: "Resume", id: "resume", icon: FileText },
  { name: "Blog", id: "blog", icon: BookOpen },
  { name: "Contact", id: "contact", icon: Mail },
];

export const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <nav className="fixed w-full z-40 py-3 bg-background/80 backdrop-blur-md shadow-xs transition-all duration-300">
      <div className="container flex items-center justify-between">
        <button
          className="text-xl font-bold text-primary flex items-center"
          onClick={() => handleClick("home")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Ross </span>{" "}
            Portfolio
          </span>
        </button>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5",
                item.name === "Resume"
                  ? cn(
                      "ml-2 px-4 py-1.5 border border-primary rounded font-medium",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-primary hover:bg-primary/10"
                    )
                  : activeSection === item.id
                  ? "text-primary bg-primary/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
              {activeSection === item.id && item.name !== "Resume" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "transition-colors duration-300 cursor-pointer flex items-center gap-3",
                  activeSection === item.id
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => handleClick(item.id)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
