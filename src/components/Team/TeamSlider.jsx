import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './carousel';
import styles from './styles.module.css';

export default function TeamSlider({ isHomePage }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('http://localhost:3001/team', {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        // Verifica que la respuesta sea un array
        if (Array.isArray(response.data)) {
          setTeamMembers(response.data);
        } else {
          throw new Error('La respuesta no es un array válido');
        }
      } catch (error) {
        console.error('Error fetching team:', error);
        setError(error.message);
        // Datos de ejemplo para desarrollo
        setTeamMembers([
          {
            id: 1,
            name: "Dr. Lucio Heriberto Sosa Cerda",
            position: "Experto en Derecho Corporativo y Fiscal",
            imageUrl: "/assets/Dr_Lucio_Heriberto_Sosa_Cerda.png"
          },
          // Añade más miembros de ejemplo si es necesario
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeam();
  }, []);

  if (loading) return <div className={styles.loading}>Cargando equipo...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <section className={`${styles.team} ${isHomePage ? styles.homeTeam : ''}`}>
      <h2>Nuestro Equipo</h2>
      <Carousel cards={teamMembers.slice(0, 9)} />
    </section>
  );
}