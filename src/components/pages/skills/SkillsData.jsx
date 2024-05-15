import cssIcon from '../../../assets/icons/icons8-css3.svg'
import htmlIcon from '../../../assets/icons/icons8-html.svg'
import jsIcon from '../../../assets/icons/icons8-js.svg'
import gitIcon from '../../../assets/icons/icons8-git.svg'
import reactIcon from '../../../assets/icons/icons8-reaccionar.svg'

import { HtmlYCss } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages'
import { Css1 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Css2 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages'
import { Css3 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js1 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js2 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js3 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js4 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js5 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js6 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Js7 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Git1 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { Git2 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { React1 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { React2 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { React3 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import { React4 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages'
import { React5 } from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 
import React6 from '../../../components/pages/skills/skills_certificates/certificate_pages/CertificatePages' 

const SkillsData = [
  {
    icon: htmlIcon,
    title: "HTML",
    certificates: [
      {  
        title: "Diploma-HTML-CSS - Platzi",
        path: "/diploma-html-css",
        element: <HtmlYCss />
      }
    ]
  },
  {
    icon: cssIcon,
    title: "CSS",
    certificates: [
      {  
        title: "CURSO CSS3 [Aprende y DOMINA CSS3 desde cero a avanzado] - Udemy",
        path: "/curso-css3-[aprende-y-domina-css3-desde-cero-a-avanzado",
        element: <Css1 />
      },
      {    
        title: "Curso Arquitectura CSS_ descomplicando los problemas - Alura",
        path: "/curso-arquitectura-css-descomplicando-los-problemas",
        element: <Css2 />
      },
      {    
        title: "Curso Layouts Responsivos Trabajando con layouts mobile -  Alura",
        path: "/curso-layouts-responsivos-trabajando-con-layouts-mobile",
        element: <Css3 />
      },
    ]
  },
  {
    icon: jsIcon,
    title: "JavaScript",
    certificates: [
      {
        title: "Diploma-Básico-JavaScript - Platzi",
        path: "/diploma-básico-javascript",
        element: <Js1 />
      },
      {    
        title: "Diploma-JavaScript-Práctico - Platzi",
        path: "/diploma-javaScript-práctico",
        element: <Js2 />
      },
      {    
        title: "Diploma-Web-Components-JavaScript - Platzi",
        path: "/diploma-web-components-javascript",
        element: <Js3 />
      },
      {    
        title: "Curso JavaScript_ primeros pasos con el lenguaje - Alura",
        path: "/curso-javascript-primeros-pasos-con-el-lenguaje",
        element: <Js4 />
      },    
      {    
        title: "Curso JS en la Web_ Manipulación del DOM con JavaScript - Alura",
        path: "/curso-js-en-la-web-manipulación-del-dom-con-javacript",
        element: <Js5 />
      },
      {    
        title: "Curso JS en la Web_ Validación de Formularios y HTML5 - Alura",
        path: "/curso-js-en-la-web-validación-de-formularios-y-html5",
        element: <Js6 />
      },
      {    
        title: "Curso JS en la Web_ CRUD con JavaScript asíncrono - Alura",
        path: "/curso-js-en-la-web-crud-con-javascript-asíncrono",
        element: <Js7 />
      },    
      
    ]
  },
  {
    icon: gitIcon,
    title: "Git / GitHub",
    certificates: [
      {
        title: "Diploma-Git-Github - Platzi",
        path: "/diploma-git-github",
        element: <Git1 />
      },
      {    
        title: "Curso Git y GitHub_ controle y comparta su código - Alura",
        path: "/curso-git-y-github-controle-y-comparta-su-código",
        element: <Git2 />
      },
    ]
  },
  {
    icon: reactIcon,
    title: "Rreact",
    certificates: [
      {    
        title: "Curso React_ desarrollando con JavaScript - Alura",
        path: "/curso-react-desarrollando-con-javascript",
        element: <React1 />
      },   
      {    
        title: "Curso React_ como los componentes funcionan - Alura",
        path: "/curso-react-como-los-componentes-funcionan",
        element: <React2 />
      },
      {    
        title: "Curso React Router_ Navegación en una SPA - Alura",
        path: "/curso-react-router-navegación-en-una-spa",
        element: <React3 />
      },
      {    
        title: "Curso React_ Utilizando Styled Components - Alura",
        path: "/curso-react-utilizando-styled-components",
        element: <React4 />
      },
      {    
        title: "Curso React_ Function Components - Alura",
        path: "/curso-react-function-components",
        element: <React5 />
      },
      {    
        title: "Curso React_ Hooks, contextos y buenas prácticas - Alura",
        path: "/curso-react-hooks-contextos-y-buenas-prácticas",
        element: <React6 />
      },     
    ] 
  },
]

export default SkillsData;