import React from "react";
import "./Navbar.css";
import Container from '../Container/Container.js';

const Navbar = () => {
return (
        <nav className="navbar">
                <Container>
                    <section className="navbar-container">
                        <div className="navbar-logo">
                        <img className="navbar-img" src="/logo192.png" alt="Insam Health Logo"/>
                        </div>
                        <ul className="navbar-links">
                            <li><a href="#fitness">Fitness Products</a></li>
                            <li><a href="#supplements">Supplements</a></li>
                            <li><a href="#bodycare">Body Care Products</a></li>
                            <li className="button-subscribe"><a href="#subscribe">Subscribe To Our Newsletter</a></li>
                        </ul>
                    </section>
                </Container>
        </nav>
    );
};

export default Navbar;
