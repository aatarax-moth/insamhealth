import React, { useState } from "react";
import Container from "../Container/Container.js";
import "./PageCards.css";

const PageCards = ({ title, data, link }) => {

    const effectiveData = data || [];
    const pageSize = 24; 
    const totalPages = Math.ceil(effectiveData.length / pageSize);

    const [page, setPage] = useState(0);

    const start = page * pageSize;
    const visibleCards = effectiveData.slice(start, start + pageSize);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    if (visibleCards.length === 0) {
        return (
            <section className="pagecards">
                <Container>
                    <h2 className="pagecards-title">{title}</h2>
                    <p style={{textAlign: 'center', marginTop: '2rem'}}>
                        No cards to display.
                    </p>
                </Container>
            </section>
        );
    }
    // -----------------------------------------------------------


    return (
        <section className="pagecards">
            <Container>
            <h2 className="pagecards-title">{title}</h2>

            <div className="cards-grid-large" key={page}>
                {visibleCards.map((card, index) => (
                <div className="card" key={card.id || index}> 
                    <img src={card.image} alt={card.title} className="card-img" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-text">{card.description}</p>
                </div>
                ))}
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