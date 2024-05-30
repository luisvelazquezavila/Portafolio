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
      icon: <AccountBoxIcon/>
    },
    {
      title: "Habilidades",
      to: "skills",
      icon: <PsychologyIcon/>
    },
    {
      title: "Portafolio",
      to: "portfolio",
      icon: <WorkIcon/>
    },
    {
      title: "Contacto",
      to: "contact",
      icon: <ContactMailIcon/>
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
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App