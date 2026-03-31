import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container.js";
import "./MainCards.css";

const MainCards = ({ title, data, link, category }) => {
  const pageSize = 4;
  const totalPages = Math.ceil(data.length / pageSize);
  const [page, setPage] = useState(0);

  // 🚀 Added Slugify Function here so it's available
  const slugify = (text) => {
    if (!text) return "";
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  };

  const start = page * pageSize;
  const visibleCards = data.slice(start, start + pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
      window.scrollTo(0, 0); // Optional: Scroll up when changing page
    }
  };

  return (
    <section className="maincards">
      <Container>
        <h2 className="maincards-title">{title}</h2>

        <div className="cards-grid">
          {visibleCards.map(card => {
            // 🚀 Move the slug calculation INSIDE the map
            const postSlug = slugify(card.title);
            
            return (
              <Link 
                to={`/${category}/${card.id}/${postSlug}`} 
                key={card.id} 
                className="card-link"
              >
                <div className="card">
                  <img src={card.image} alt={card.title} className="card-img" />
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination Block */}
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
        
        {/* Changed this to a Link to keep it within React Router */}
        <Link to={link} className="maincards-button">
          Go To Page
        </Link>
      </Container>
    </section>
  );
};

export default MainCards;