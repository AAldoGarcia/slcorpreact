import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Columna 1: Menú */}
        <div className={styles.footerColumn}>
          <h3>Menú</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/team">Fuerza Laboral</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 2: Servicios */}
        <div className={styles.footerColumn}>
          <h3>Servicios</h3>
          <ul>
            <li><a href="/contabilidad">Contabilidad Fiscal</a></li>
            <li><a href="/negocios">Negocios y Financiamiento</a></li>
            <li><a href="/defensa">Defensa Fiscal</a></li>
            <li><a href="/consultoria">Consultoría Fiscal</a></li>
            <li><a href="/productividad">Productividad Fiscal</a></li>
            <li><a href="/auditoria">Auditoría y Control</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className={styles.footerColumn}>
          <h3>Contacto</h3>
          <address>
            <p>Calle Turín #206<br />
            Fracc. La Gloria, Centro Tabasco<br />
            C.P. 86170</p>
            <p>Teléfono: 99 3131 3088</p>
            <p>Correo: contacto@slcorp.com.mx</p>
          </address>
        </div>

        {/* Columna 4: Logo */}
        <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
          <img 
            src="/assets/Logo_Sl_Legales.png" 
            alt="SL CORP Logo" 
            className={styles.logoImage}
          />
          <p>Firma que ofrece servicios altamente especializados en materia tributaria.</p>
          
          {/* Contacto para móviles */}
          <div className={styles.mobileContact}>
            <p>Teléfono: 99 3131 3088</p>
            <p>Correo: contacto@slcorp.com.mx</p>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} SL CORP. Todos los derechos reservados.<br />
          Sitio web desarrollado por{' '}
          <a href="https://www.instagram.com/aldogsolorzano/" target="_blank" rel="noopener noreferrer">
            Aldo con react alv
          </a>
        </p>
        
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/slcorp.com.mx/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-square-facebook"></i>
          </a>
          <a href="https://www.instagram.com/slcorpcommx/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/sl-servicios-corporativos" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/slcorpcommx" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;