import { Box, Button } from "@mui/material"
import photo from "../../assets/img/luis.png"
import cv from "../../assets/img/Curriculum CV.pdf"
import { Typewriter } from "react-simple-typewriter"
import "./aboutMe.css"
import Section from "../section/Section"
import Title from "../title/Title"
import iconGitHub from "../../assets/icons/icons8-github.svg"
import iconLinkedin from "../../assets/icons/icons8-linkedin.svg"

export default function AboutMe() {

  const contactLinks = [
    {
      icon: iconGitHub,
      title: "GitHub icon",
      href: "https://github.com/luisvelazquezavila"
    },
    {
      icon: iconLinkedin,
      title: "Linkedin icon",
      href: "https://www.linkedin.com/in/luis-vel%C3%A1zquez-%C3%A1vila-48b28b25a/"
    },
  ]

  return (
    <Section id="about">
      <Title title="Acerca de mi" />
      <Box 
        className="card"
        sx={{
          flexDirection: {md: "row", sm: "column", xs: "column"},
          gap: {md: 5, sm: 3, xs: 1},
        }}>
        <img 
          className="card__img"
          src={photo}
          alt="Mi foto"
        />
        <Box
          className="card__content"
          sx={{
            padding: { xs: "1rem", sm: "1.5rem 3rem" }
          }}
        >
          <p className="card__title card__title--resize">          
            Hola, soy <span className="card__span">
              <Typewriter
                words={['Luis']}
                loop={3}
                cursorStyle='_'
                delaySpeed={2500}
                typeSpeed={200}
                deleteSpeed={200}
              />
            </span>
          </p>
          <h4 className="card__subtitle">
              Front-End Developer Jr
          </h4>
          <p className="card__text">
            <Typewriter
              words={['Apasionado por la tecnología y el diseño web, con una formación autodidacta robusta adquirida a través de plataformas reconocidas como YouTube, Platzi, Udemy y Alura. He desarrollado habilidades avanzadas en los principales lenguajes de programación orientados al Front-End, preparándome intensamente para afrontar los retos del sector.']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={5}
            />
          </p>
          <Box 
            className="card__actions"
            sx={{
              justifyContent: { xs: "center", sm: "space-between" }
            }}
          >
            <Button
              component="a"
              href={cv}
              download
              variant="contained" 
              color="primary"
              sx={{ 
                boxShadow: "0 0 5px rgba(255, 255, 255, .5)", 
                color: "white",
              }}
            >
              Descargar CV
            </Button>
            <div className="contact__social-networks">
              {
                contactLinks.map((contactIcon, id) => (
                  <a key={id} href={contactIcon.href} target="_blank" rel="noreferrer">
                    <img src={contactIcon.icon} alt={contactIcon.title} />
                  </a>
                ))
              }
            </div>
          </Box>
        </Box>
      </Box>
    </Section>
    
  )
}