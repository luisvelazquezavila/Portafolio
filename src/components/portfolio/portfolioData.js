import trailersMoviesImg from '../../assets/img/capturada1.jpg'
import reactShopImg from '../../assets/img/shop-and-cart.jpg'
import killMartiansImg from '../../assets/img/kill-martians.jpg'
import landingPageImg from '../../assets/img/landing-page.jpg'
import crudImg from '../../assets/img/crud.jpg'

export const portfolioData = [
  {
    img: trailersMoviesImg,
    title: "APP para ver de tráilers de películas",
    tags: ["#HTML", "#CSS", "#JavaScrip", "#React"],
    link: "https://video-trailer-movies.netlify.app/",
    repository: "https://github.com/luisvelazquezavila/video-trailer-movies",
    description: "Aplicación de trailers de películas utilizando React y API externa para la adquisición de datos, cuenta con un diseño es responsivo y dinámico, funcionalidades de búsqueda y reproducción de video integrando react-youtube, rendimiento optimizado mediante el uso avanzado de hooks de React: useState, useContext, useRef y useEffect; además de la implementación de Material UI para una interfaz de usuario atractiva y funcionalidad mejorada."
  },
  {
    img: reactShopImg,
    title: "Tienda virtual con carrito",
    tags: ["#HTML", "#CSS", "#JavaScrip", "#React"],
    link: "https://chipper-stardust-8124ff.netlify.app/",
    repository: "https://github.com/luisvelazquezavila/shop-and-cart",
    description: "Carrito de compras dinámico y responsivo utilizando React, con funcionalidades avanzadas de filtrado y gestión de productos, implementación de Material UI para una interfaz de usuario atractiva y moderna, código optimizado mediante la integración de los hooks useContext y useReducer, mejorando la eficiencia y mantenibilidad del proyecto."
  },
  {
    img: killMartiansImg,
    title: "Juego de mata marcianos",
    tags: ["#HTML", "#JavaScrip"],
    link: "https://luisvelazquezavila.github.io/Kill-Martians-Game/",
    repository: "https://github.com/luisvelazquezavila/Kill-Martians-Game",
    description: "Juego de mata marcianos creado con el elemento <canvas> de HTML5 y el contexto de dibujo 2D. Cuenta con botones de movimiento y disparo, implementación de coalisiones, sistema de puntuación, efectos de sonido y música de fondo"
  },
  {
    img: crudImg,
    title: "CRUD desarrollado con React JS",
    tags: ["#HTML", "#CSS", "#JavaScrip", "React JS"],
    link: "https://merry-duckanoo-08dedb.netlify.app/",
    repository: "https://github.com/luisvelazquezavila/react-crud",
    description: "Aplicación CRUD responsiva y funcional, optimizada para una experiencia de usuario sencilla y eficaz, haciendo uso de tecnologías de vanguardia en React, incluyendo React Hooks (useState, useEffect, useForm, customHooks) para una gestión de estado y efectos avanzada. Cuenta con la implementación de la librería UUID para la generación de identificadores únicos, asegurando la unicidad y consistencia de los datos, demás de habilidades de mapeo y filtrado de datos para facilitar la manipulación y visualización de la información, mejorando la interactividad y accesibilidad de la aplicación."
  },
  {
    img: landingPageImg,
    title: "Landing page",
    tags: ["#HTML", "#CSS", "#JavaScrip"],
    link: "https://luisvelazquezavila.github.io/responsive-landing-page/",
    repository: "https://github.com/luisvelazquezavila/responsive-landing-page",
    description: "Landing page moderna, adaptable a dispositivos móviles, creada con Tailwind CSS y JavaScript para dar funcionalidad a la página y agilizar el proceso de estilizado haciendoló más rápido y con un mejor control de estilos."
  },
];