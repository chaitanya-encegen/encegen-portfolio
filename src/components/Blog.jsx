import React from "react";
import "./Blog.css";
import { FiCalendar, FiUser } from "react-icons/fi";

export default function Blog() {
  const blogs = [
    {
      title: "Building Scalable E-Commerce Solutions",
      category: "Web Development",
      date: "Jan 10, 2024",
      read: "6 min read",
      desc: "Learn how modern e-commerce platforms scale efficiently using cloud-native architecture.",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c"
    },
    {
      title: "Digital Transformation in Healthcare",
      category: "Healthcare Tech",
      date: "Jan 8, 2024",
      read: "7 min read",
      desc: "Discover how AI and IoT are revolutionizing healthcare systems.",
      img: "https://images.unsplash.com/photo-1581091012184-5c5e8e5d5d7c"
    },
    {
      title: "Cybersecurity Best Practices",
      category: "Cybersecurity",
      date: "Jan 5, 2024",
      read: "5 min read",
      desc: "Protect your business with modern cybersecurity frameworks.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
    },
    {
      title: "The Role of No-Code/Low-Code Platforms",
      category: "Software Development",
      date: "Jan 3, 2024",     
      read: "6 min read",
      desc: "How no-code tools are accelerating product development.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section className="blog-page">
      
      {/* HERO */}
      <div className="blog-hero">
        <h1>Blog & Insights</h1>
        <p>
          Explore expert perspectives on AI, digital transformation, cloud computing,
          cybersecurity, and emerging technologies.
        </p>
      </div>

      <div className="gradient-divider" />

      {/* FEATURED */}
      <div className="blog-section">
        <h2>Latest <span>Insights</span></h2>

        <div className="featured-blog">
          
          {/* IMAGE */}
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Blog"
            />
            <span className="badge">Featured</span>
          </div>

          {/* CONTENT */}
          <div className="featured-content">
            <div className="meta">
              <span className="tag">AI & ML</span>
              <span><FiCalendar /> Jan 15, 2024</span>
            </div>

            <h3>The Future of AI in Business Automation</h3>

            <p>
              AI is transforming business operations with automation,
              predictive analytics, and intelligent workflows.
            </p>

            <div className="author">
              <span><FiUser /> Saurabh Gite</span>
              <span>8 min read</span>
            </div>

            <button className="read-more">Read More →</button>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="blog-grid">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            
            {/* IMAGE */}
            <div className="blog-card-image">
              <img src={b.img} alt={b.title} />
            </div>

            {/* CONTENT */}
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
                <button className="read-article">Read →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h3>Stay Updated</h3>
        <p>Subscribe for latest insights and updates.</p>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        <button className="view-all">View All →</button>
      </div>

    </section>
  );
}