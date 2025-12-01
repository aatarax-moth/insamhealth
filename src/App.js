import './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsletterTop from './components/NewsletterTop/NewsletterTop.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Blog from './components/Blog/Blog.js';

import FitnessPage from './pages/Fitness.js';
import SupplementsPage from './pages/Supplements.js';
import BodyCarePage from './pages/BodyCare.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NewsletterTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fitness" element={<FitnessPage />} />
          <Route path="/Supplements" element={<SupplementsPage />} />
          <Route path="/BodyCare" element={<BodyCarePage />} />
          <Route path="/:category/:id" element={<Blog />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
