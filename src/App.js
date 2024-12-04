import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import DownloadPage from './pages/DownloadPage';
import BrowsePage from './pages/BrowsePage';
import About from './pages/About';
import FAQ from './pages/FAQ'; // Import FAQ component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} /> {/* Add FAQ route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
