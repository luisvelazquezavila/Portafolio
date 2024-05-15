import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import photo from "../../assets/img/luis.png"
import backgroundCard from "../../assets/img/joshua-aragon-BMnhuwFYr7w-unsplash.jpg"
import cv from "../../assets/img/LUIS_VELÁZQUEZ.pdf"

export default function AboutMe() {
  return (
    <Box 
      sx={{
        mt: "4rem",
        minWidth: "100vw", 
        minHeight: "calc(100vh - 4rem)",
        backgroundImage: `linear-gradient(rgba(70, 131, 180, 0.2), rgba(0, 255, 255, 0.2)), url(${backgroundCard})`,
        display: "grid",
        backgroundPosition: "center"
        }}
      >

      <Card sx={{
        border: "2px solid crimson",
        margin: "auto",
        width: "clamp(300px, 100%, 1000px)",
        display: "flex",
        flexDirection: {md: "row", sm: "column", xs: "column"},
        alignItems: "center",
        padding: "1rem",
        borderRadius: 5,
        gap: {md: 5, sm: 3, xs: 1},
        backgroundColor: "rgba(0, 0, 0, 0)",
        // backgroundImage: "linear-gradient(90deg, rgb(160, 239, 92, .5), rgb(18, 233, 78, .5));",  
        
      }}>
      <CardMedia 
        image={photo}
        alt="Mi foto"
        component="img"
        sx={{
          width: "min(300px, 100%)",
          objectFit: "cover",
          display: "block",
          // boxShadow: "0 0 3px 3px rgb(18, 233, 78)",
          // filter: "drop-shadow(10px 10px 10px #1976d2)",
          aspectRatio: "9/12"
        }}
      />
      <CardContent 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // boxShadow: "0 0 6px 6px rgb(18, 233, 78, .4)",
          padding: "1rem 2rem",
          backgroundColor: "#343434ce",
          borderRadius: "0px 50px 50px 50px"
        }}
      >
        <Typography 
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: "clamp(2rem, 3vw, 4rem)"
          }}
        >          
          Hola, soy Luis
        </Typography>

        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: "bold",
            marginBottom: {md: 5, sm: 3, xs: 2},
            color: "white" 
          }}>
          Y soy Front-End Developer Jr
        </Typography>

        <Typography 
          variant="p"
          sx={{ 
            fontWeight: "500",
            marginBottom: 5,
            color: "white",
            lineHeight: 1.5 
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quae vero harum voluptatibus nobis obcaecati accusamus odit tenetur similique provident perspiciatis optio temporibus illo, exercitationem porro totam, id eos autem.
        </Typography>
        <CardActions>
          <Button
            component="a"
            href={cv}
            download
            variant="contained" 
            color="primary"
            sx={{boxShadow: "0 0 3px 3px rgba(255, 255, 255, .5)"}}
          >
            Descargar CV
          </Button>
        </CardActions>
      </CardContent>
    </Card>
    </Box>
  
  )
}