import { useEffect } from 'react';
import styles from './styles.module.css';

const Navbar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  useEffect(() => {
    // Efecto para manejar el scroll y cambiar estilos del navbar
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.style.background = 'rgba(41, 41, 41, 0.9)';
      } else {
        header.style.background = 'rgba(41, 41, 41, 0.2)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src="\assets\Logo_Sl_Legales.png" alt="Logo Servicios Legales" />
        </a>
      </div>
      
      <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Sobre Nosotros</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/team">Fuerza Laboral</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
      
      <div className={styles.menuToggle} onClick={toggleMobileMenu}>
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;