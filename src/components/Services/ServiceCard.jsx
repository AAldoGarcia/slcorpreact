import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ServiceCard = ({ service }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current && window.animatedIconsLoaded) {
      // Limpiamos cualquier icono existente primero
      iconRef.current.innerHTML = '';
      
      const icon = document.createElement('animated-icons');
      icon.setAttribute('src', service.icon);
      icon.setAttribute('trigger', 'loop');
      icon.setAttribute('height', '120');
      icon.setAttribute('width', '120');
      icon.setAttribute('attributes', '{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":0.5,"defaultColours":{"group-1":"#AD7B1DFF","background":"#FFFFFF"}}');
      
      iconRef.current.appendChild(icon);
    }

    // Función de limpieza para cuando el componente se desmonta
    return () => {
      if (iconRef.current) {
        iconRef.current.innerHTML = '';
      }
    };
  }, [service.icon]); // Solo se ejecuta cuando service.icon cambie

  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIconContainer} ref={iconRef} />
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <a href={service.link} className={styles.serviceLink}>
        Más detalles
      </a>
    </div>
  );
};

export default ServiceCard;