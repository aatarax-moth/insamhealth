import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../Container/Container";
import blogsFitness from "../../data/blogsFitness";
import blogsSupplements from "../../data/blogsSupplements";
import blogsBodyCare from "../../data/blogsBodyCare";
import "./Blog.css";

const allBlogs = {
  fitness: blogsFitness,
  supplements: blogsSupplements,
  bodycare: blogsBodyCare,
};

function Blog() {
  // 🚀 Changed 'id' to 'slug' to match your App.js route
  const { category, id, slug } = useParams();
  
  // 🚀 Helper function (Must match the one in PageCards exactly)
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  };

  const key = category.toLowerCase();
  const posts = allBlogs[key] || [];

  // DEBUGGING: Add these two lines to see what's happening in your console (F12)
  console.log("URL Slug:", slug);
  console.log("First Post Slugified:", posts[0] ? slugify(posts[0].title) : "No posts found");

  const post = posts.find((p) => String(p.id) === String(id)); // Search by ID (very fast and accurate)

  if (!post) {
    return (
      <section className="blogpage">
        <Container>
          <div className="not-found-container">
            <h2>Blog post not found.</h2>
            <Link to={`/${category}`} className="back-link">
              Back to {category}
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="blogpage">
      <Container className="page-container">
        <Link to={`/${category}`} className="back-link">
          Back to {category}
        </Link>

        <header className="blog-header">
          <h1 className="blog-title">{post.title}</h1>
          {post.subtitle && <h2 className="blog-subtitle">{post.subtitle}</h2>}

          <div className="blog-meta-row">
            <p className="blog-meta">
              {post.date &&
                new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>

            <div className="blog-share">
              <span className="blog-share-label">Socials</span>
              <div className="blog-socials">
                <a href="#" aria-label="See on Twitter">
                  <img src="/assets/images/x.svg" alt="Twitter" />
                </a>
                <a href="#" aria-label="See on Facebook">
                  <img src="/assets/images/facebook.svg" alt="Facebook" />
                </a>
                <a href="#" aria-label="See on Instagram">
                  <img src="/assets/images/instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="blog-layout">
          <article className="blog-main">
            {post.intro && <p className="blog-intro">{post.intro}</p>}

            {Array.isArray(post.sections) &&
              post.sections.map((section, index) => (
                <section className="blog-section" key={index}>
                  {section.image && (
                    <div className="blog-section-image">
                      <img
                        src={section.image}
                        alt={section.title || post.title}
                      />
                    </div>
                  )}

                  {section.title && (
                    <h2 className="blog-section-title">
                      {section.title_link ? (
                        <a 
                          href={section.title_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {section.title}
                        </a>
                      ) : (
                        section.title
                      )}
                    </h2>
                  )}

                  {Array.isArray(section.content) &&
                    section.content.map((para, i) => (
                      <p key={i} className="blog-paragraph">
                        {para}
                      </p>
                    ))}

                  {index !== post.sections.length - 1 && (
                    <div className="blog-section-divider" />
                  )}
                </section>
              ))}
          </article>

          <aside className="blog-sidebar">
            <div className="blog-sidebar-card">
              <h3 className="blog-sidebar-title">More reads</h3>
              <ul className="blog-sidebar-list">
                {/* 🚀 Dynamic related reads from the same category */}
                {posts.slice(0, 3).map((item) => (
                  item.title !== post.title && (
                    <li key={item.id}>
                      <Link to={`/${category}/${slugify(item.title)}`}>
                        {item.title}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default Blog;