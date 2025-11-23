import React, { useState } from "react";
import Container from "../Container/Container.js";
import "./MainCards.css";

const MainCards = ({ title, data, link }) => {
  const pageSize = 4;
  const totalPages = Math.ceil(data.length / pageSize);

  const [page, setPage] = useState(0);

  const start = page * pageSize;
  const visibleCards = data.slice(start, start + pageSize);

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

        <div className="cards-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
                key={i}
                className={`dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
                >
                <span className="sr-only">Go to page {i + 1}</span>
            </button>
          ))}
        </div>

        <a href={link} className="maincards-button">
          Go To Page
        </a>
      </Container>
    </section>
  );
};

export default MainCards;
