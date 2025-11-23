import logo from './logo.svg';
import './App.css';
import NewsletterTop from './components/NewsletterTop/NewsletterTop.js';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Home from './components/HomeCards/HomeCards.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
        <NewsletterTop/>
        <Navbar/>
        <Hero/>
        <Home/>
        <Footer/>
      </div>
  );
}

export default App;
