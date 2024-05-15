import Navegador from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import AboutMe from './components/pages/AboutMe'
import Skills from './components/pages/Skills/Skills'
import SkillsData from './components/pages/Skills/SkillsData'
import Projects from "./components/pages/projects/Projects"

const certificates = SkillsData.reduce((allCertificates, skill) => [...allCertificates, ...skill.certificates], []);

const navLinks = [
  {
    title: "Acerca de mi",  
    path: "/", 
    icon: <HomeIcon />,
    element: <AboutMe />
  },
  {
    title: "Habilidades",    
    path: "/habilidades", 
    icon: <LoginIcon />,
    element: <Skills />
  },
  {
    title: "Proyectos",  
    path: "/proyectos", 
    icon: <HowToRegIcon />,
    element: <Projects />
  },
  {
    title: "Contacto",  
    path: "/contacto", 
    icon: <HowToRegIcon />,
    element: "#"
  },
];

function App() {
  return (
    <>
      <Navegador navLinks={navLinks} />
      <Routes>
        {
          navLinks.map((route, id) => (
            <Route key={id} exact path={route.path} element={route.element} />
          ))
        }
        {
          certificates.map((certificate, id) => (
            <Route key={id} exact path={certificate.path} element={certificate.element} />
          ))
        }
      </Routes>        
    </>
    
  )
}

export default App
