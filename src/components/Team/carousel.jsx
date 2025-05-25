import { useState, useEffect } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Card from './card';
import styles from './styles.module.css';

export default function Carousel({ cards = [] }) { // Valor por defecto como array vacío
  const [active, setActive] = useState(2);
  const MAX_VISIBILITY = 3;

  // Verifica que cards sea un array antes de renderizar
  if (!Array.isArray(cards)) {
    console.error('Carousel espera un array en la prop "cards", recibió:', cards);
    return (
      <div className={styles.error}>
        Error: No se pudieron cargar los miembros del equipo
      </div>
    );
  }

  // Si no hay cards, muestra un mensaje
  if (cards.length === 0) {
    return <div className={styles.loading}>Cargando miembros del equipo...</div>;
  }

  return (
    <div className={styles.carousel}>
      {active > 0 && (
        <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      
      {cards.map((card, i) => (
        <div
          className={styles.cardContainer}
          key={card.id || i} // Usa card.id si existe, si no usa el índice
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          <Card {...card} />
        </div>
      ))}
      
      {active < cards.length - 1 && (
        <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
}