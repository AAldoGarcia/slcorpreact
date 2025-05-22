import styles from './styles.module.css';
import Carousel from './carousel';

const teamData = [
  {
    name: 'Dr. Lucio Heriberto Sosa Cerda',
    position: 'Experto en Derecho Corporativo y Fiscal',
    imageUrl: '/assets/Dr_Lucio_Heriberto_Sosa_Cerda.png',
    profileUrl: 'person_Dr_Lucio_Sosa.html'
  },
  {
    name: 'L.C.P. Abdy Abigail López Montuy',
    position: 'Gerente Contable/Administradora de Consultoría',
    imageUrl: '/assets/Lic_Abdy_Abigail_López_Montuy.png',
    profileUrl: 'person_Lic_Abdy_Lopez.html'
  },
  {
    name: 'C.P. Alberto J. Rodríguez Pelayo',
    position: 'Gerente de Auditoría Financiera',
    imageUrl: '/assets/Lic_Alberto_J_Rodríguez_Pelayo.PNG',
    profileUrl: 'person_Lic_Alberto_Rodriguez.html'
  },
  {
    name: 'Lic. Yair E. Torres Alcázar',
    position: 'Gerente Legal/Corporativo - Asociado de Litigio Fiscal y Compliance',
    imageUrl: '/assets/Lic_Yair_Eden_Torres_Alcazar.PNG',
    profileUrl: 'person_Lic_Yair_Torres.html'
  },
  {
    name: 'Lic. Luis Fernando Velázquez Valencia',
    position: 'Coordinador en Impuestos',
    imageUrl: '/assets/Lic_Luis_Fernando_Velázquez_Valencia.png',
    profileUrl: 'person_Lic_Luis_Velazquez.html'
  },
  {
    name: 'Lic. Viviana Del Valle Cabello Espinoza',
    position: 'Coordinadora de Recursos Humanos',
    imageUrl: '/assets/Lic_Viviana_Del_Valle_Cabello_Espinoza.png',
    profileUrl: 'person_Lic_Viviana_Del_Valle.html'
  },
  {
    name: 'Lic. Juan José Sosa De La Fuente',
    position: 'Auxiliar Contable',
    imageUrl: '/assets/Lic_Juan_Jose_Sosa_De_La_Fuente.PNG',
    profileUrl: 'person_Lic_Juan_Jose.html'
  },
  {
    name: 'Ing. Héctor Osiel Sosa',
    position: 'Administrador de Tecnologías de la Información',
    imageUrl: '/assets/Ing_Héctor_Osiel_Sosa_De_La_Fuente.png',
    profileUrl: 'person_Ing_Hector_Osiel.html'
  },
  {
    name: 'Lic.Paula Crespo Mijangos',
    position: 'Auxiliar Contable de Nómina',
    imageUrl: '/assets/Lic_Paula_Crespo_Mijangos.png',
    profileUrl: 'person_Lic_Paula_Crespo.html'
  }
];

export default function Team() {
  return (
    <section className={styles.team}>
      <h2>Nuestro Equipo</h2>
      <p>Conoce a los profesionales que hacen posible nuestro éxito</p>
      <div className={styles.slider}>
        <Carousel cards={teamData} />
      </div>
    </section>
  );
}