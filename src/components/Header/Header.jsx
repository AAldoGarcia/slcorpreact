import { useState } from 'react';
import TopBar from './Topbar';
import Navbar from './Navbar';
import styles from './styles.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <TopBar />
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
    </header>
  );
};

export default Header;