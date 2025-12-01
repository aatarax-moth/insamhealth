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
  const { category, id } = useParams();

  const key = category.toLowerCase();
  const posts = allBlogs[key] || [];
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <section className="blogpage">
        <Container>
          <p>Blog post not found.</p>
          <Link to={`/${category}`}>← Back to {category}</Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="blogpage">
      <Container className="page-container">
        {/* Back link uses the dynamic category */}
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
                        <a 
                        href={section.title_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {section.title}
                        </a>
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
                <li>
                  <a href="#link1">Sample related article 1</a>
                </li>
                <li>
                  <a href="#link2">Sample related article 2</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
