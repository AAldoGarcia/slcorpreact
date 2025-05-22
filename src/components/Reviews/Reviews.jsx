import styles from './styles.module.css';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Gómez",
      location: "León, Guanajuato",
      comment: "Excelente servicio y asesoría, fueron muy claros con todo lo que realizaron.",
      icon: "https://animatedicons.co/get-icon?name=Male%20Avatar&style=minimalistic&token=a32b377a-3824-4193-92ca-c161222cc188"
    },
    {
      id: 2,
      name: "Alejandra Resa",
      location: "Villahermosa, Tabasco",
      comment: "Excelente servicio fiscal a las empresas ⭐️⭐️⭐️⭐️⭐️",
      icon: "https://animatedicons.co/get-icon?name=Female%20Avatar&style=minimalistic&token=a32b377a-3824-4193-92ca-c161222cc188"
    },
    {
      id: 3,
      name: "Crys Arias",
      location: "Villahermosa, Tabasco",
      comment: "Excelente servicio legal! recomendados para toda la población ☝️",
      icon: "https://animatedicons.co/get-icon?name=Female%20Avatar&style=minimalistic&token=a32b377a-3824-4193-92ca-c161222cc188"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=529931605989&text=Deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios', '_blank');
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsText}>
        <h2>Nuestros Clientes</h2>
        <p>Nuestro enfoque y cultura de servicio al cliente nos deja como resultado clientes satisfechos.</p>
        <button onClick={handleWhatsAppClick}>
          <span>Escríbenos</span>
          <i className="fa-brands fa-whatsapp"></i>
        </button>
      </div>
      
      <div className={styles.reviewContainer}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.review}>
            <div className={styles.reviewIcon}>
              <animated-icons
                src={testimonial.icon}
                trigger="loop"
                height="100"
                width="100"
              ></animated-icons>
            </div>
            <div className={styles.reviewContent}>
              <h3>{testimonial.name}</h3>
              <p className={styles.location}>{testimonial.location}</p>
              <p>{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;