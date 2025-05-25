import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PersonDetail.module.css';

export default function PersonDetail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para manejar rutas de imágenes
 // Función modificada que no depende de process.env
  const getImageUrl = (path) => {
    // Si la ruta ya es absoluta (comienza con /), úsala directamente
    if (path.startsWith('/')) {
      return path;
    }
    // Si no, asume que está en /assets/
    return `/assets/${path}`;
  };

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/team/${id}`);
        setMember(response.data);
      } catch (err) {
        console.error('Error fetching member:', err);
        setError('No se pudo cargar la información del miembro');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMember();
  }, [id]);

  if (loading) return <div className={styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!member) return <div className={styles.error}>Miembro no encontrado</div>;

  return (
    <div className={styles.personPage}>
      {/* Sección Semblanza */}
      <section className={styles.semblanza}>
        <div className={styles.semblanzaImg}>
          <img 
            src={getImageUrl(member.imageUrl)} 
            alt={member.name}
            onError={(e) => {
              e.target.onerror = null;
                 e.target.src = '/assets/default-profile.png';
            }}
          />
        </div>
        <div className={styles.semblanzaContent}>
          <h1>{member.name}</h1>
          <h2>{member.position}</h2>
          <p>{member.bio}</p>
          {member.email && (
            <a href={`mailto:${member.email}`} className={styles.contactButton}>
              Contactar
            </a>
          )}
        </div>
      </section>

      {/* Sección Experiencia */}
      {member.experience?.length > 0 && (
        <section className={styles.experiencia}>
          <h2>Experiencia Profesional</h2>
          <ul>
            {member.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Sección Expertise */}
      {member.expertise?.length > 0 && (
        <section className={styles.expertise}>
          <div className={styles.expertiseContent}>
            <h2>Áreas de Expertise</h2>
            <ul>
              {member.expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {member.expertiseImageUrl && (
            <div className={styles.expertiseImg}>
              <img 
                src={getImageUrl(member.expertiseImageUrl)} 
                alt="Expertise"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = process.env.PUBLIC_URL + '/assets/default-expertise.png';
                }}
              />
            </div>
          )}
        </section>
      )}

      {/* Sección Premios */}
      {member.awards?.length > 0 && (
        <section className={styles.premios}>
          <h2>Reconocimientos y Premios</h2>
          <div className={styles.premiosGrid}>
            {member.awards.map((award, index) => (
              <div key={index} className={styles.premioCard}>
                {award.imageUrl && (
                  <div className={styles.premioImg}>
                    <img 
                      src={getImageUrl(award.imageUrl)} 
                      alt={award.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = process.env.PUBLIC_URL + '/assets/default-award.png';
                      }}
                    />
                  </div>
                )}
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <button onClick={() => window.history.back()} className={styles.backButton}>
        Volver al equipo
      </button>
    </div>
  );
}