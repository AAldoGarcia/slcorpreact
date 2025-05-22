import styles from './styles.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Servicios Legales: Tu Aliado Fiscal</h1>
      <p>Asesoría especializada para tomar decisiones tributarias seguras y estratégicas.</p>
      <button>
        <p>Conócenos mejor</p>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
};

export default Hero;