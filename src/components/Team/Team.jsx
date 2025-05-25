import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';
import styles from './styles.module.css';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('http://localhost:3001/team');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeam();
  }, []);

  if (loading) return <div className={styles.loading}>Cargando equipo...</div>;

  return (
    <div className="team-page">
      <section className={styles.team}>
        <h2>Conoce a Nuestros Profesionales</h2>
        <p>Expertos en diversas áreas del derecho y consultoría</p>
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              profileUrl={member.profileUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}