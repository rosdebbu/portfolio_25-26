import { useState, useEffect, useRef } from "react";
import {
  X,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const blogPost = {
  title: "My Coding Journey",
  image: "/blog/my-coding-journey.jpg",
  date: "April 2025",
  readTime: "4 min read",
  excerpt:
    "A personal introduction — who I am, my passion for programming, late-night coding sessions, and the path that brought me here.",
  pullQuote:
    "Every bug I fixed made me stronger, and every project I shipped gave me more confidence.",
  chapters: [
    {
      heading: "The Spark",
      body: `It all started with curiosity. I remember the first time I wrote a "Hello World" program — it felt like unlocking a superpower. From there, I fell deeper into the rabbit hole of web development.`,
    },
    {
      heading: "The Grind",
      body: `What started as simple HTML pages quickly evolved into full-stack applications with React, Next.js, and real databases. I spent countless nights debugging, learning, and building things that actually work in production — not just localhost demos.`,
    },
    {
      heading: "The Struggle",
      body: `The journey hasn't been easy. There were times when I questioned everything, stared at error messages for hours, and almost gave up. But every bug I fixed made me stronger, and every project I shipped gave me more confidence.`,
    },
    {
      heading: "The Stack",
      body: `Today, I build production-grade applications with authentication, payment systems, and deployment pipelines. My stack includes React 19, Next.js 14, FastAPI, PostgreSQL, and Prisma ORM. Every project teaches me something new, and that's what keeps me going.`,
    },
    {
      heading: "The Future",
      body: `The best part? I'm just getting started. Every day brings a new challenge, a new technology to explore, and a new problem to solve. This is just the beginning of something much bigger.`,
    },
  ],
};

export const BlogSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="blog" className="py-24 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        {/* ── Section Heading ── */}
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-center blog-reveal ${isVisible ? "blog-reveal--visible" : ""}`}
        >
          My <span className="text-primary">Story</span>
        </h2>
        <p
          className={`text-center text-muted-foreground mb-14 max-w-xl mx-auto blog-reveal blog-reveal--delay-1 ${isVisible ? "blog-reveal--visible" : ""}`}
        >
          The journey behind the code — from curiosity to production.
        </p>

        {/* ── Featured Story Card ── */}
        <div
          className={`blog-featured-card blog-reveal blog-reveal--delay-2 ${isVisible ? "blog-reveal--visible" : ""}`}
        >
          {/* Hero Image with Gradient Overlay */}
          <div className="blog-featured-image-wrap">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="blog-featured-image"
              loading="lazy"
            />
            <div className="blog-featured-image-overlay" />
            <div className="blog-featured-image-content">
              <div className="blog-featured-badge">
                <Sparkles className="h-3.5 w-3.5" />
                Personal Story
              </div>
              <h3 className="blog-featured-hero-title">{blogPost.title}</h3>
              <p className="blog-featured-hero-excerpt">{blogPost.excerpt}</p>
              <div className="blog-featured-hero-meta">
                <span>
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </span>
                <span>
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Pull Quote Strip */}
          <div className="blog-pullquote">
            <Quote className="blog-pullquote-icon" />
            <p>{blogPost.pullQuote}</p>
          </div>

          {/* Chapter Previews */}
          <div className="blog-chapters-preview">
            {blogPost.chapters.slice(0, 3).map((chapter, i) => (
              <div key={i} className="blog-chapter-dot">
                <span className="blog-chapter-number">0{i + 1}</span>
                <span className="blog-chapter-label">{chapter.heading}</span>
              </div>
            ))}
            <div className="blog-chapter-dot blog-chapter-dot--more">
              <span className="blog-chapter-label">
                +{blogPost.chapters.length - 3} more
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            className="blog-featured-cta"
            onClick={() => setIsExpanded(true)}
          >
            <BookOpen className="h-4 w-4" />
            Read the Full Story
            <ArrowRight className="h-4 w-4 blog-cta-arrow" />
          </button>
        </div>
      </div>

      {/* ── Full Story Modal ── */}
      {isExpanded && (
        <div
          className="blog-story-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsExpanded(false);
          }}
        >
          <div
            className="blog-story-modal"
            role="dialog"
            aria-modal="true"
            ref={contentRef}
          >
            {/* Close Button */}
            <button
              className="blog-story-close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Hero */}
            <div className="blog-story-hero">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="blog-story-hero-img"
              />
              <div className="blog-story-hero-overlay" />
              <div className="blog-story-hero-content">
                <h2 className="blog-story-hero-title">{blogPost.title}</h2>
                <div className="blog-story-hero-meta">
                  <span>
                    <Calendar className="h-4 w-4" />
                    {blogPost.date}
                  </span>
                  <span>
                    <Clock className="h-4 w-4" />
                    {blogPost.readTime}
                  </span>
                  <span>
                    <BookOpen className="h-4 w-4" />
                    Personal
                  </span>
                </div>
              </div>
            </div>

            {/* Chapter Navigation */}
            <div className="blog-story-chapnav">
              {blogPost.chapters.map((chapter, i) => (
                <button
                  key={i}
                  className={`blog-chapnav-btn ${activeChapter === i ? "blog-chapnav-btn--active" : ""}`}
                  onClick={() => {
                    setActiveChapter(i);
                    const el = document.getElementById(`chapter-${i}`);
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <span className="blog-chapnav-num">0{i + 1}</span>
                  {chapter.heading}
                </button>
              ))}
            </div>

            {/* Chapters */}
            <div className="blog-story-body">
              {blogPost.chapters.map((chapter, i) => (
                <div
                  key={i}
                  id={`chapter-${i}`}
                  className="blog-story-chapter"
                >
                  <div className="blog-story-chapter-marker">
                    <span className="blog-story-chapter-num">0{i + 1}</span>
                    <div className="blog-story-chapter-line" />
                  </div>
                  <div className="blog-story-chapter-content">
                    <h3 className="blog-story-chapter-heading">
                      {chapter.heading}
                    </h3>
                    <p className="blog-story-chapter-text">{chapter.body}</p>
                  </div>
                </div>
              ))}

              {/* Ending */}
              <div className="blog-story-ending">
                <div className="blog-story-ending-line" />
                <Sparkles className="blog-story-ending-icon" />
                <p className="blog-story-ending-text">
                  Thanks for reading my story. The journey continues...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
