import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import axios from 'axios';
import styles from './Team.module.css';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/team');
        setTeamMembers(response.data);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError('No pudimos cargar la información del equipo. Por favor intenta más tarde.');
        // Datos de ejemplo como respaldo
        setTeamMembers([
          {
            id: 1,
            name: 'Dr. Lucio Heriberto Sosa Cerda',
            position: 'Experto en Derecho Corporativo y Fiscal',
            imageUrl: '/assets/Dr_Lucio_Heriberto_Sosa_Cerda.png'
          },
          {
            id: 2,
            name: 'L.C.P. Abdy Abigail López Montuy',
            position: 'Gerente Contable/Administradora de Consultoría',
            imageUrl: '/assets/Lic_Abdy_Abigail_López_Montuy.png'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className={styles['loading-container']}>
        <div className={styles['loading-spinner']}></div>
        <p>Cargando información del equipo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles['error-container']}>
        <p className={styles['error-message']}>{error}</p>
        <p>Mostrando información de ejemplo.</p>
      </div>
    );
  }

  return (
    <div className={styles['team-page']}>
      <div className={styles['team-grid-container']}>
        <h1 className={styles['team-grid-title']}>Nuestro Equipo</h1>
        <p className={styles['team-grid-description']}>
          Conoce a nuestros profesionales altamente calificados en diversas áreas del derecho
        </p>
        
        <div className={styles['team-grid']}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles['team-card']}>
              <div className={styles['team-card-image-container']}>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className={styles['team-card-image']}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/assets/placeholder-lawyer.png';
                  }}
                />
              </div>
              <div className={styles['team-card-content']}>
                <h3 className={styles['team-card-name']}>{member.name}</h3>
                <p className={styles['team-card-position']}>{member.position}</p>
                {/* Reemplaza el <a> por <Link> de React Router */}
                <Link 
                  to={`/equipo/${member.id}`} 
                  className={styles['team-card-link']}
                >
                  Ver perfil completo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}