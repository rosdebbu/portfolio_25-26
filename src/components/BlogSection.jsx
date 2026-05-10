import { useState, useEffect } from "react";
import { X, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "My Coding Journey",
    image: "/blog/coding-journey.png",
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
  {
    id: 2,
    title: "Campus Life",
    image: "/blog/campus-life.png",
    date: "March 2025",
    readTime: "3 min read",
    excerpt:
      "A time worth remembering — reflections on college life at SRMIST, hackathons, friendships, and growing as a developer.",
    content: `Joining SRM Institute of Science and Technology was a turning point. Chennai's energy, the campus culture, and the incredible people I've met — it all shaped who I am today.

Between lectures on data structures and late-night study sessions, I found my tribe — fellow developers who shared the same passion for building things. We'd hack together on weekends, participate in coding competitions, and push each other to be better.

The campus gave me more than just a degree path. It gave me exposure to research, faculty collaborations on Graph Neural Networks, and the confidence to present my work. The hackathons taught me to think fast, prototype quickly, and ship under pressure.

Some of my best memories are from the computer lab at 2 AM, surrounded by empty coffee cups and half-finished code, working on projects that felt impossible until they suddenly worked.

College isn't just about grades — it's about the experiences that shape your thinking and the people who believe in you.`,
  },
  {
    id: 3,
    title: "Hardware & IoT",
    image: "/blog/hardware-tinkering.png",
    date: "February 2025",
    readTime: "5 min read",
    excerpt:
      "Beyond software — my experiments with ESP32 microcontrollers, sensor arrays, and building real-world IoT systems.",
    content: `Most people know me as a web developer, but there's another side to my work that I'm equally passionate about — hardware and IoT.

It started when I got my first ESP32 microcontroller. The idea of writing code that controls physical devices in the real world fascinated me. No browser, no DOM — just raw signals, sensors, and actuators.

I've built environmental monitoring systems that stream real-time data from temperature, humidity, and air quality sensors to cloud dashboards. The stack is surprisingly web-adjacent: the ESP32 sends data via MQTT, a Node.js backend processes it, and a React dashboard visualizes everything.

The biggest challenge in IoT isn't the code — it's the debugging. When something doesn't work, it could be a hardware issue, a wiring problem, a firmware bug, or a network configuration error. You learn patience quickly.

What I love most about hardware projects is the tangible feedback. When an LED blinks because of code you wrote, or a motor spins on command, it feels different from rendering a div on screen. It's real, it's physical, and it's incredibly satisfying.

Next on my list: building a smart home system powered by AI that learns from usage patterns.`,
  },
  {
    id: 4,
    title: "AI Research",
    image: "/blog/ai-research.png",
    date: "January 2025",
    readTime: "6 min read",
    excerpt:
      "Diving into Graph Neural Networks — my research journey into AI, PyTorch, and the intersection of web and intelligence.",
    content: `Artificial Intelligence isn't just a buzzword for me — it's a field I'm actively researching alongside university faculty.

My current focus is on Graph Neural Networks (GNNs) using PyTorch and PyG (PyTorch Geometric). GNNs are fascinating because they can learn from data that has relational structure — social networks, molecular structures, knowledge graphs, and more.

The research started when I built a codebase knowledge graph for one of my projects. I realized that understanding relationships between code modules, functions, and data flows could be represented as a graph problem. That insight led me to GNNs.

Working with faculty has been an incredible learning experience. The academic rigor — reading papers, understanding mathematical foundations, running experiments, and documenting results — is very different from the "ship fast" mentality of web development. Both are valuable.

I've also built NLP chatbots that use fuzzy logic for data processing and natural language database queries. Combining AI with web interfaces creates powerful tools that feel like magic to end users.

The intersection of web engineering and AI is where I see the future. Web developers who understand ML, and ML engineers who can build production UIs — that's the sweet spot I'm aiming for.`,
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
