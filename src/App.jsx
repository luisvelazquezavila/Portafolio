import AboutMe from "./components/aboutMe/AboutMe"
import NavBar from "./components/nav/NavBar"
import { useState } from "react"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import WorkIcon from "@mui/icons-material/Work"
import PsychologyIcon from "@mui/icons-material/Psychology"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import { Drawer } from "@mui/material"
import NavBarDrawer from "./components/nav/NavBarDrawer"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

function App() {

  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title: "Acerca de mi",
      to: "about",
      icon: 
        <AccountBoxIcon 
          sx={{ 
            color: "orange",
            backgroundColor: "white", 
            borderRadius: "50%", 
            padding: "2px" 
          }}
        />
    },
    {
      title: "Proyectos",
      to: "portfolio",
      icon: 
        <WorkIcon
          sx={{ 
            color: "grey",
            backgroundColor: "white", 
            borderRadius: "50%", 
            padding: "2px" 
          }}
        />
    },
    {
      title: "Habilidades",
      to: "skills",
      icon: 
        <PsychologyIcon
          sx={{ 
            color: "blueviolet",
            backgroundColor: "white", 
            borderRadius: "50%", 
            padding: "2px" 
          }}
        />
    },
    {
      title: "Contacto",
      to: "contact",
      icon: 
        <ContactMailIcon
          sx={{ 
            color: "dodgerblue",
            backgroundColor: "white", 
            borderRadius: "50%", 
            padding: "2px" 
          }}
        />
    }
  ];

  return (
    <>
      <NavBar navLinks={navLinks} setOpen={setOpen} /> 
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavBarDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
      <main className="main-container">  
        <AboutMe />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App