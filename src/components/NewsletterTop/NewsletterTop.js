import React from "react";
import './NewsletterTop.css';
import Container from "../Container/Container";

const NewsletterTop = () => {
    return (
        <div className="newsletter-background">
            <Container>
                <div className="newsletter-content">
                    Subscribe to our <a href="">Insam Health Newsletter</a> to keep up with healthy trends!
                </div>
            </Container>
        </div>
    );
};

export default NewsletterTop;