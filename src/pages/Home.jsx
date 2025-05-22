import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Introduction from '../components/Introduction/Introduction';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Values from '../components/Values/Values';
import Team from "../components/Team/Team";
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    // Cargar scripts externos
    const loadScripts = () => {
      const flickityScript = document.createElement('script');
      flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
      flickityScript.async = true;
      
      const animatedIconsScript = document.createElement('script');
      animatedIconsScript.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
      animatedIconsScript.async = true;
      
      document.body.appendChild(flickityScript);
      document.body.appendChild(animatedIconsScript);
    };

    loadScripts();
    
    // Cargar FontAwesome
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);
    
    // Cargar Flickity CSS
    const flickityCSS = document.createElement('link');
    flickityCSS.rel = 'stylesheet';
    flickityCSS.href = 'https://unpkg.com/flickity@2/dist/flickity.min.css';
    document.head.appendChild(flickityCSS);
    
    return () => {
      // Limpieza opcional si es necesario
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
         <Introduction />
        <AboutUs />
         <Services />
         <Values />
            <Team />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Home;