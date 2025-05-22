import styles from './Values.module.css';

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles.valuesContent}>
        <h2>Misión</h2>
        <p>
          En SL CORP protegemos el patrimonio empresarial y personal, mejorando el entorno de negocios y la productividad. 
          Somos líderes en servicios corporativos y legales.
        </p>

        <h2>Visión</h2>
        <p>
          Ofrecer consultoría fiscal y defensa especializada con soluciones integrales, manteniendo un alto nivel de 
          actualización y calidad para la satisfacción de nuestros clientes.
        </p>
      </div>
      
      <div className={styles.valuesImg}>
        <img 
          src="/assets/abogado-sosteniendo-mazo-juez.jpg" 
          alt="Abogado sosteniendo un mazo de juez" 
        />
      </div>
    </section>
  );
};

export default Values;