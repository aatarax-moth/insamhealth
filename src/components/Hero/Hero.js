import React, { useState, useEffect } from "react";
import slides from "../../data/slidesData";
import "./Hero.css";
import Container from "../Container/Container";

const Hero = () => {
const [current, setCurrent] = useState(0);
const length = slides.length;

useEffect(() => {
const interval = setInterval(() => {
    setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
}, 5000);
return () => clearInterval(interval);
}, [length]);

const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

return (
<Container>
    <section className="hero">
        <button className="arrow left" onClick={prevSlide}>
        &#10094;
        </button>

        {slides.map((slide, index) => (
        <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
        >
            <a href={slide.link}>
            <img src={slide.image} alt={slide.title} className="slide-img" />
            <h2 className="slide-title">{slide.title}</h2>
            </a>
        </div>
        ))}

        <button className="arrow right" onClick={nextSlide}>
        &#10095;
        </button>
    </section>
</Container>
);
};

export default Hero;
