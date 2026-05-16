import { useState, useEffect } from "react";
import { X, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "My Coding Journey",
    image: "/blog/my-coding-journey.jpg",
    date: "April 2025",
    readTime: "4 min read",
    excerpt:
      "A personal introduction — who I am, my passion for programming, late-night coding sessions, and the path that brought me here.",
    content: `It all started with curiosity. I remember the first time I wrote a "Hello World" program — it felt like unlocking a superpower. From there, I fell deeper into the rabbit hole of web development.

What started as simple HTML pages quickly evolved into full-stack applications with React, Next.js, and real databases. I spent countless nights debugging, learning, and building things that actually work in production — not just localhost demos.

The journey hasn't been easy. There were times when I questioned everything, stared at error messages for hours, and almost gave up. But every bug I fixed made me stronger, and every project I shipped gave me more confidence.

Today, I build production-grade applications with authentication, payment systems, and deployment pipelines. My stack includes React 19, Next.js 14, FastAPI, PostgreSQL, and Prisma ORM. Every project teaches me something new, and that's what keeps me going.

The best part? I'm just getting started.`,
  },
];

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* ── Section Heading ── */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Blog</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Personal stories, thoughts, and experiences from my life.
        </p>

        {/* ── Blog Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card group"
              onClick={() => setSelectedPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedPost(post);
              }}
            >
              {/* Image */}
              <div className="blog-card-image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                  loading="lazy"
                />
                <div className="blog-card-overlay">
                  <span className="blog-card-read-btn">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="blog-card-body">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span>
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {selectedPost && (
        <div
          className="blog-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPost(null);
          }}
        >
          <div className="blog-modal" role="dialog" aria-modal="true">
            {/* Close Button */}
            <button
              className="blog-modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="blog-modal-image-wrap">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="blog-modal-image"
              />
            </div>

            {/* Modal Content */}
            <div className="blog-modal-content">
              <div className="blog-modal-meta">
                <span>
                  <Calendar className="h-4 w-4" />
                  {selectedPost.date}
                </span>
                <span>
                  <Clock className="h-4 w-4" />
                  {selectedPost.readTime}
                </span>
                <span>
                  <BookOpen className="h-4 w-4" />
                  Personal
                </span>
              </div>

              <h2 className="blog-modal-title">{selectedPost.title}</h2>

              <div className="blog-modal-body">
                {selectedPost.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
