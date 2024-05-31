import { Box, Button, TextField, Typography } from "@mui/material"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import EmailIcon from "@mui/icons-material/Email"
import "./contact.css"
import Section from "../section/Section"
import Title from "../title/Title"

export default function Contact() {

  const handleSubmit = () => {
    alert("se ha enviado el formulario");
  }

  const dataLinks = [
    {
      href: "tel:5560188488",
      icon: <PhoneAndroidIcon sx={{ color: "white" }} />,
      text: "55 6018 8488"
    },
    {
      href: "mailto:luisvelazquezavila@gmail.com",
      icon: <EmailIcon sx={{ color: "white" }} />,
      text: "luisvelazquezavila@gmail.com"
    },
  ]

  return (
    <Section id="contact">
      <Title title="Contacto" />
      <Box
        className="form-container"
        sx={{
          padding: { xs: ".5rem", sm: "2rem 1.5rem 1rem" },
          width: { xs: "95vw", sm: "450px" }
        }}
      >
        <div>
          <Typography className="form-container__title" variant="h5">CONTÁCTAME</Typography>
        </div>
        <form 
          className="form-container__form"
          onSubmit={handleSubmit}
          noValidate 
          target="_blank"
          autoComplete="off" 
          action="https://formsubmit.co/a8635a45770f4eda7f521fb26b8db28c" 
          method="POST"
        >
          <TextField 
            color="quaternary"
            required 
            type="text" 
            name="name" 
            label="Nombre" 
            variant="filled" 
          />
          <TextField
            color="quaternary"
            required 
            type="email" 
            name="email" 
            label="Correo electrónico" 
            variant="filled" 
          />
          <textarea 
            required 
            type="text" 
            name="message" 
            placeholder="Escribir mensaje"
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ boxShadow: "0 0 1px 1px rgba(255, 255, 255, .5)" }}
          >
            Submit
          </Button>
        </form>
      </Box>
      <div className="form-container__data">
        {
          dataLinks.map((dataLink, id) => (
            <a key={id} href={dataLink.href} target="_blank" rel="noreferrer">
              {dataLink.icon}
              <p className="form-container__data-link">
                {dataLink.text}
              </p>
            </a>
          ))
        }
      </div>
    </Section>
  )
}