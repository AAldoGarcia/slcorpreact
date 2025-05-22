import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import styles from './styles.module.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Cargar el script de animated-icons
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };

    if (!window.animatedIconsLoaded) {
      window.animatedIconsLoaded = true;
      loadScript();
    } else if (window.animatedIconsLoaded && !scriptLoaded) {
      setScriptLoaded(true);
    }

    // Datos de servicios
    const mockServices = [
      {
        id: 1,
        title: "Servicios Contables y Fiscales",
        icon: "https://animatedicons.co/get-icon?name=Tax&style=minimalistic&token=17427ea4-89f9-4e81-82ce-9ca380c7c41e",
        link: "/servicios"
      },
      {
        id: 2,
        title: "Asesoría de Negocios",
        icon: "https://animatedicons.co/get-icon?name=Training&style=minimalistic&token=6c957804-4670-47c0-966e-e4c3ad32540d",
        link: "/servicios"
      },
      {
        id: 3,
        title: "Medios de Defensa Fiscal",
        icon: "https://animatedicons.co/get-icon?name=Security&style=minimalistic&token=af857f3d-6096-42d0-9f04-a9ee72f54aa4",
        link: "/servicios"
      },
      {
        id: 4,
        title: "Consultoría Fiscal y Financiera",
        icon: "https://animatedicons.co/get-icon?name=Sales%20Consultant&style=minimalistic&token=44577189-f341-489d-9e3b-5fc74aea03ed",
        link: "/servicios"
      },
      {
        id: 5,
        title: "Productividad Fiscal",
        icon: "https://animatedicons.co/get-icon?name=Income&style=minimalistic&token=ca37a84b-da2e-4cf2-8edd-d0210474f04d",
        link: "/servicios"
      },
      {
        id: 6,
        title: "Auditoria Financiera y Control Interno",
        icon: "https://animatedicons.co/get-icon?name=reports&style=minimalistic&token=ff77881b-18e9-4ba6-b464-bfa18f63dab8",
        link: "/servicios"
      }
    ];
    
    setServices(mockServices);
  }, []);

  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <p className={styles.servicesIntro}>
        SL Servicios Legales es una firma boutique que ofrece servicios especializados.
      </p>

      <div className={styles.serviceContainer}>
        {scriptLoaded ? (
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p>Cargando servicios...</p>
        )}
      </div>
    </section>
  );
};

export default Services;