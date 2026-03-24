import React from "react";
import "./Blog.css";
import { FiCalendar, FiUser } from "react-icons/fi";

export default function Blog() {
<<<<<<< HEAD
  const blogs = [
    {
      title: "Building Scalable E-Commerce Solutions",
      category: "Web Development",
      date: "Jan 10, 2024",
      read: "6 min read",
      desc: "Learn how modern e-commerce platforms scale efficiently using cloud-native architecture and performance optimization strategies."
    },
    {
      title: "Digital Transformation in Healthcare",
      category: "Healthcare Tech",
      date: "Jan 8, 2024",
      read: "7 min read",
      desc: "Discover how AI, IoT, and data analytics are revolutionizing patient care and operational efficiency in healthcare."
    },
    {
      title: "Cybersecurity Best Practices",
      category: "Cybersecurity",
      date: "Jan 5, 2024",
      read: "5 min read",
      desc: "Essential security frameworks and compliance strategies to protect your business from evolving cyber threats."
    },
    {
      title: "The Role of No-Code/Low-Code Platforms",
      category: "Software Development",
      date: "Jan 3, 2024",
      read: "6 min read",
      desc: "How no-code tools are accelerating product development and reducing time-to-market for startups."
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      category: "Data Science",
      date: "Dec 28, 2023",
      read: "8 min read",
      desc: "Transform raw business data into strategic decisions using advanced analytics and visualization tools."
    }
  ];

  return (
    <section className="blog-page">
      <div className="blog-hero">
        <h1>Blog & Insights</h1>
        <p>
          Explore expert perspectives on AI, digital transformation, cloud computing,
          cybersecurity, and emerging technologies shaping the future of business.
        </p>
      </div>

      <div className="blog-section">
        <h2>Latest <span>Insights</span></h2>
        <p className="blog-subtitle">
          Thought leadership, industry trends, and actionable technology strategies.
        </p>

=======
  return (
    <section className="blog-page">
      {/* HERO */}
      <div className="blog-hero">
        <h1>Blog & Insights</h1>
        <p>
          Stay updated with the latest trends in AI, digital transformation, and
          emerging technologies through our expert insights and industry
          analysis.
        </p>
      </div>

      {/* LATEST INSIGHTS */}
      <div className="blog-section">
        <h2>
          Latest <span>Insights</span>
        </h2>
        <p className="blog-subtitle">
          Stay updated with the latest trends in AI, technology, and digital
          innovation.
        </p>

        {/* FEATURED BLOG */}
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
        <div className="featured-blog">
          <div className="featured-image">
            <span className="badge">Featured Article</span>
          </div>

          <div className="featured-content">
            <div className="meta">
              <span className="tag">AI & Machine Learning</span>
<<<<<<< HEAD
              <span><FiCalendar /> January 15, 2024</span>
=======
              <span>
                <FiCalendar /> January 15, 2024
              </span>
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
            </div>

            <h3>The Future of AI in Business Automation</h3>

            <p>
<<<<<<< HEAD
              Artificial intelligence is redefining how businesses operate.
              From workflow automation to predictive analytics, discover how AI
              is driving efficiency and innovation.
            </p>

            <div className="author">
              <span><FiUser /> Saurabh Gite</span>
              <span>8 min read</span>
            </div>

            <button className="read-more">Read More →</button>
=======
              Explore how artificial intelligence is revolutionizing business
              processes and what it means for the future of work.
            </p>

            <div className="author">
              <span>
                <FiUser /> Saurabh Gite
              </span>
              <span>8 min read</span>
            </div>

            <div className="blog-tags">
              <span>AI</span>
              <span>Automation</span>
              <span>Business Strategy</span>
            </div>

            <button className="read-more">
              Read More →
            </button>
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="blog-grid">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-card-image" />
            <div className="blog-card-content">
              <div>
                <span className="tag">{b.category}</span>
                <h4>{b.title}</h4>
                <p className="card-desc">{b.desc}</p>
              </div>

  <div>
    <div className="meta small">
      <span>{b.date}</span>
      <span>{b.read}</span>
    </div>
    <button className="read-article">Read Article →</button>
  </div>
</div>

=======
      {/* BLOG GRID */}
      <div className="blog-grid">
        {[
          {
            title: "Building Scalable E-Commerce Solutions",
            category: "Web Development",
            date: "Jan 10, 2024",
            read: "6 min read",
          },
          {
            title: "Digital Transformation in Healthcare",
            category: "Healthcare Tech",
            date: "Jan 8, 2024",
            read: "7 min read",
          },
          {
            title: "Cybersecurity Best Practices for Modern Businesses",
            category: "Cybersecurity",
            date: "Jan 5, 2024",
            read: "5 min read",
          },
          {
            title: "The Role of No-Code/Low-Code Platforms",
            category: "Software Development",
            date: "Jan 3, 2024",
            read: "6 min read",
          },
          {
            title: "Data Analytics: Turning Information into Insights",
            category: "Data Science",
            date: "Dec 28, 2023",
            read: "8 min read",
          },
        ].map((b, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-card-image" />

            <div className="blog-card-content">
              <span className="tag">{b.category}</span>

              <h4>{b.title}</h4>

              <div className="meta small">
                <span>{b.date}</span>
                <span>{b.read}</span>
              </div>

              <button className="read-article">
                Read Article →
              </button>
            </div>
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
          </div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="newsletter">
        <h3>Stay Updated with Our Latest Insights</h3>
        <p>
          Subscribe to receive expert articles, industry updates, and innovation
          insights directly in your inbox.
=======
      {/* NEWSLETTER */}
      <div className="newsletter">
        <h3>Stay Updated with Our Latest Insights</h3>
        <p>
          Subscribe to our newsletter and get the latest articles, industry
          trends, and technology insights delivered straight to your inbox.
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>

<<<<<<< HEAD
        <p className="privacy-text">
          No spam. Unsubscribe at any time. We respect your privacy.
        </p>

=======
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
        <button className="view-all">View All Articles →</button>
      </div>
    </section>
  );
}
