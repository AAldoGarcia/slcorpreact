## Proyecto React – SL CORP

Este proyecto es una versión reconstruida de la página web de SL CORP usando **React.js**. El objetivo fue poner en práctica conceptos como la creación de componentes reutilizables, el uso de hooks (`useEffect`) y una mejor organización del código para facilitar su mantenimiento y escalabilidad.

---

## 🎯 Objetivos

- Implementar una aplicación web modular con React.
- Cargar librerías externas usando `useEffect`.
- Aplicar estilos globales y mantener una estructura de carpetas clara.
- Reproducir el diseño original de la página de forma responsiva.
- Trabajar con componentes funcionales reutilizables.

---

## 🛠️ Tecnologías utilizadas

- **React.js**
- **React Router DOM**
- **HTML5 y CSS3**
- **JSX**
- **Vite.js**
- **Font Awesome**
- **Flickity.js**
- **Animated Icons**

---

## 🗂️ Estructura del proyecto

```
slcorpreact/
├── public/ # Recursos públicos (imágenes, íconos)
├── src/
│ ├── components/ # Componentes reutilizables por sección:
│ │ ├── Header/
│ │ ├── Hero/
│ │ ├── Introduction/
│ │ ├── AboutUs/
│ │ ├── Services/
│ │ ├── Values/
│ │ ├── Team/
│ │ ├── Reviews/
│ │ └── Footer/
│ ├── pages/
│ │ └── Home.jsx # Página principal que reúne los componentes
│ ├── styles/
│ │ └── global.css # Estilos globales
│ ├── App.jsx # Rutas principales
│ └── Index.jsx # Entrada de la aplicación
├── index.html # HTML base donde se monta la app
└── README.md # Documentación del proyecto
```
---

## 🔄 Navegación y comportamiento

El archivo `App.jsx` define una única ruta (`/`) que carga el componente `Home`. Este componente junta y muestra todos los elementos visuales del sitio, desde el encabezado hasta el pie de página:

1. Header  
2. Hero  
3. Introduction  
4. AboutUs  
5. Services  
6. Values  
7. Team  
8. Reviews  
9. Footer  

En `Home.jsx` se usa `useEffect` para cargar librerías externas como Flickity (carruseles), FontAwesome (íconos) y Animated Icons.

---

## 🧠 Reflexión final

Este proyecto fue una gran oportunidad para entender cómo organizar una aplicación web moderna con React. Nos permitió practicar la construcción de componentes, cómo integrarlos de forma modular y cómo manejar la carga de librerías externas sin complicar el flujo del sitio.

También nos ayudó a comprender mejor la estructura de archivos en un entorno real, la importancia de mantener el código limpio y ordenado, y cómo pequeñas decisiones en la organización del proyecto pueden facilitar mucho el mantenimiento a futuro.

Trabajar en equipo, combinar diferentes habilidades y lograr un resultado funcional y visualmente coherente fue uno de los aspectos más valiosos de esta experiencia.

---

## 📎 Enlace al repositorio

[🔗 GitHub – slcorpreact](https://github.com/AAldoGarcia/slcorpreact)

