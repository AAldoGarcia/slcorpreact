import styles from './styles.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutImg}>
        <img 
          src="\assets\abogado-tomando-notas-caso.jpg" 
          alt="Abogado tomando notas de un caso en su escritorio" 
        />
      </div>
      
      <div className={styles.aboutContent}>
        <h2>Quiénes Somos</h2>
        <p>
          SL Servicios Corporativos es una firma boutique que brinda servicios altamente calificados, 
          conformado por un clúster de Abogados y Contadores especializados en temas de Litigio Fiscal 
          y Administrativo, Contabilidad Fiscal, Estrategias y Planeación corporativa...
        </p>
        <a href="/about" className={styles.aboutBtn}>Más información</a>
      </div>
    </section>
  );
};

export default AboutUs;