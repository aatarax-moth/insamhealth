import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
const year = new Date().getFullYear();

return (
<footer className="footer">
    <Container>
        <div className="footer-container">
            <div className="footer-section">
                <div>
                    <img className="footer-logo" src="/logo192.png" alt="Insam Health Logo"/>
                </div>
                <div>
                    <p className="footer-tagline">
                        Insam Health Co. Your trusted source for a healthier lifestyle.
                    </p>
                    <p className="footer-copy">
                        © {year} Insam Health Co. All rights reserved.
                    </p>
                </div>    
            </div>
            <div className="footer-section links">  
                <div>
                    <h3>Products</h3>
                    <ul>
                    <li><a href="/Fitness">Fitness Products</a></li>
                    <li><a href="/Supplements">Supplements</a></li>
                    <li><a href="/BodyCare">Body Care Products</a></li>
                    </ul>
                </div>
                <div>  
                    <h3>Company</h3>
                    <ul>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                    <li><a href="/Newsletter">Subscribe to Our Newsletter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
</footer>
);
};

export default Footer;
