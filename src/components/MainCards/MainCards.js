import React, { useState } from "react";
import Container from "../Container/Container.js";
import "./MainCards.css";

const MainCards = ({ title, data, link }) => {
  const pageSize = 4;
  
  const totalPages = Math.ceil(data.length / pageSize);

  const [page, setPage] = useState(0);

  const start = page * pageSize;
  const visibleCards = data.slice(start, start + pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <section className="maincards">
      <Container>
        <h2 className="maincards-title">{title}</h2>

        <div className="cards-grid">
          {visibleCards.map(card => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title} className="card-img" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </div>
          ))}
        </div>

        {/* 🚀 New Pagination Block Below the Grid */}
        <div className="pagination-controls">
          {/* Previous Page Button */}
          <button 
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className="pageButton prev-next"
          >
            &lt;
          </button>
          
          {/* Render Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`pageButton ${page === index ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Page Button */}
          <button 
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages - 1}
            className="pageButton prev-next"
          >
            &gt;
          </button>
        </div>
        
        {/* The original link button */}
        <a href={link} className="maincards-button">
          Go To Page
        </a>
      </Container>
    </section>
  );
};

export default MainCards;