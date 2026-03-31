import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container.js";
import "./PageCards.css";

const PageCards = ({ title, data, link, category }) => {
  const effectiveData = data || [];
  const pageSize = 24; 
  const totalPages = Math.ceil(effectiveData.length / pageSize);

  const [page, setPage] = useState(0);

  // 🚀 Helper function to create a URL-friendly slug
  const slugify = (text) => {
    if (!text) return "";
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')     // Spaces to hyphens
      .replace(/[^\w-]+/g, '')   // Remove special characters (like ? or !)
      .replace(/--+/g, '-');    // Remove double hyphens
  };

  const start = page * pageSize;
  const visibleCards = effectiveData.slice(start, start + pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
        setPage(newPage);
        window.scrollTo(0, 0); // Reset scroll to top on page change
    }
  };

  if (visibleCards.length === 0) {
    return (
        <section className="pagecards">
        <Container>
            <h2 className="pagecards-title">{title}</h2>
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            No cards to display.
            </p>
        </Container>
        </section>
    );
  }

  return (
    <section className="pagecards">
        <Container>
        <h2 className="pagecards-title">{title}</h2>

        <div className="cards-grid-large" key={page}>
            {visibleCards.map((card, index) => {
            const cardId = card.id || index;
            
            // 🚀 Updated Link Logic: 
            // It now uses /category/slug-title (e.g., /Fitness/how-to-stay-fit)
            const postSlug = slugify(card.title);
            const to = `/${category}/${card.id}/${postSlug}`;

            return (
                <Link to={to} key={cardId} className="card-link">
                <div className="card">
                    <img src={card.image} alt={card.title} className="card-img" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-text">{card.description}</p>
                </div>
                </Link>
            );
            })}
        </div>

        {totalPages > 1 && (
            <div className="pagination-controls">
            <button 
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
                className="pageButton prev-next"
            >
                &lt;
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`pageButton ${page === index ? 'active' : ''}`}
                >
                {index + 1}
                </button>
            ))}

            <button 
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages - 1}
                className="pageButton prev-next"
            >
                &gt;
            </button>
            </div>
        )}
        </Container>
    </section>
  );
};

export default PageCards;