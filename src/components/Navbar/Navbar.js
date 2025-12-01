import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from '../Container/Container.js';

const Navbar = () => {
return (
        <nav className="navbar">
                <Container>
                    <section className="navbar-container">
                        <a href="/"><div className="navbar-logo">
                        <img className="navbar-img" src="/logo192.png" alt="Insam Health Logo"/>
                        </div>
                        </a>
                        <ul className="navbar-links">
                            <li><Link to="/Fitness">Fitness Products</Link></li>
                            <li><Link to="/Supplements">Nutrition & Supplements</Link></li>
                            <li><Link to="BodyCare">Body Care Products</Link></li>
                            <li className="button-subscribe"><a href="#subscribe">Subscribe To Our Newsletter</a></li>
                        </ul>
                    </section>
                </Container>
        </nav>
    );
};

export default Navbar;
