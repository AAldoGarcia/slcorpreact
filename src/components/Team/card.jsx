import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Card({ id, name, position, imageUrl }) {
  return (
    <div className={styles.card}>
      <Link to={`/equipo/${id}`} className={styles.cardLink}>
        <img src={imageUrl} alt={name} />
        <div className={styles.cardContent}>
          <h2>{name}</h2>
          <p>{position}</p>
          <button className={styles.profileButton}>Ver perfil completo</button>
        </div>
      </Link>
    </div>
  );
}