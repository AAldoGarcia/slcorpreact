import styles from './styles.module.css';

export default function Card({ name, position, imageUrl, profileUrl }) {
  return (
    <div className={styles.card}>
      <a href={profileUrl} className={styles.cardLink}>
        <img src={imageUrl} alt={name} />
        <div className={styles.cardContent}>
          <h2>{name}</h2>
          <p>{position}</p>
        </div>
      </a>
    </div>
  );
}