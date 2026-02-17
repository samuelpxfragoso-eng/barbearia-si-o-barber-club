
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import CinematicVideo from './components/CinematicVideo';
import About from './components/About';
import Locations from './components/Locations';
import Services from './components/Services';
import ProductShop from './components/ProductShop';
import ShortVideos from './components/ShortVideos';
import Academy from './components/Academy';
import Gallery from './components/Gallery';
import Community from './components/Community';
import ReviewsFAQ from './components/ReviewsFAQ';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen aurora-bg">
      <div className="film-grain" />
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <CinematicVideo />
        <About />
        <Locations />
        <Services />
        <ProductShop />
        <ShortVideos />
        <Academy />
        <Gallery />
        <Community />
        <ReviewsFAQ />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;