import styles from './styles.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <p>Llámanos: 99 3131 3088</p>
      <p>Correo: contacto@slcorp.com.mx</p>
      
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/slcorp.com.mx/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/slcorpcommx/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/sl-servicios-corporativos" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://x.com/slcorpcommx" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBar; 