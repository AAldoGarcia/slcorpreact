import styles from './Introduction.module.css';
import AnimatedIcon from './AnimatedIcon';
import ErrorBoundary from './ErrorBoundary';

const Introduction = () => {
  const diferenciadores = [
    {
      iconProps: {
        src: "https://animatedicons.co/get-icon?name=Accreditation&style=minimalistic&token=f7f902ac-91df-4d7d-8444-71b41d1a2a9e",
        attributes: JSON.stringify({
          variationThumbColour: "#FFFFFF",
          variationName: "Normal",
          variationNumber: 1,
          numberOfGroups: 1,
          backgroundIsGroup: false,
          strokeWidth: 0.5,
          defaultColours: {
            "group-1": "#AD7B1DFF",
            background: "#FFFFFF"
          }
        }),
        height: "150",
        width: "150"
      },
      title: "Más de 40 años de experiencia",
      description: "Estamos conformados por un grupo de especialistas en el ramo contable y fiscal."
    },
   
     {
      iconProps: {
        src: "https://animatedicons.co/get-icon?name=Partnership&style=minimalistic&token=104a0159-353d-4ea9-bf34-e4a891d9f871",
        attributes: JSON.stringify({
          variationThumbColour: "#FFFFFF",
          variationName: "Normal",
          variationNumber: 1,
          numberOfGroups: 1,
          backgroundIsGroup: false,
          strokeWidth: 0.5,
          defaultColours: {
            "group-1": "#AD7B1DFF",
            background: "#FFFFFF"
          }
        }),
        height: "150",
        width: "150"
      },
      title: "Estrategias personalizadas",
      description: "Ofrecemos estrategias personalizadas para prevenir riesgos legales."
    },
     {
      iconProps: {
        src: "https://animatedicons.co/get-icon?name=analytics&style=minimalistic&token=2bdff727-9a4f-41a9-8222-312ccd145207",
        attributes: JSON.stringify({
          variationThumbColour: "#FFFFFF",
          variationName: "Normal",
          variationNumber: 1,
          numberOfGroups: 1,
          backgroundIsGroup: false,
          strokeWidth: 0.5,
          defaultColours: {
            "group-1": "#AD7B1DFF",
            background: "#FFFFFF"
          }
        }),
        height: "150",
        width: "150"
      },
      title: "Diseñamos tu modelo operativo",
      description: "A través de la revisión de opciones distintas al Sistema Financiero Nacional e Internacional."
    },
  ];

  return (
    <section className={styles.introduction}>
      <h2>Servicios en materia fiscal y corporativa</h2>
      <p>
        Ofrecemos consultoría y soluciones personalizadas en materia legal, fiscal, contable, 
        financiera y administrativa, apoyando a empresarios que requieren asesoría especializada.
        <br /><br />
        Nuestros servicios están disponibles en Tabasco, Ciudad de México, Campeche, Chiapas, 
        Veracruz, Yucatán, Quintana Roo y Nuevo León, y contamos con una alianza estratégica 
        para atender clientes en Estados Unidos.
      </p>

      <div className={styles.diferenciadoresContainer}>
        <div className={styles.diferenciadores}>
          {diferenciadores.map((dif, index) => (
            <div key={index} className={styles.diferenciador}>
              <ErrorBoundary fallback={<div className={styles.iconPlaceholder} />}>
                <AnimatedIcon {...dif.iconProps} />
              </ErrorBoundary>
              <h3>{dif.title}</h3>
              <p>{dif.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;