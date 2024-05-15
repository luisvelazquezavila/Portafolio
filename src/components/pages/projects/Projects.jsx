import { Box, Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import ProjectsData from "./ProjectsData";
import backgroundProjects from "../../../assets/img/undraw_feeling_proud_qne1.svg"

export default function Projects() {
  return(
    <Box 
      sx={{
        mt: "4rem",
        wminWidth: "100vw",
        minHeight: "100vh - 4rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {md: "flex-start", sm: "center"},
        alignItems: "center",
        columnGap: "2.5rem",
        rowGap: {md: "1rem", xs: ".5rem"} ,
        padding: {md: "2rem", xs: ".5rem"},
        backgroundImage: `linear-gradient(rgba(70, 131, 180, 0.2), rgba(0, 255, 255, 0.2)), url(${backgroundProjects})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      {
        ProjectsData.map(({img, title, tags, link, repository}, id) => (
          <Card 
            key={id}
            sx={{
              width: "300px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#17202A",
              padding: ".8rem",
              gap: "1rem",
              borderRadius: 2,
              boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.5)"
            }}
          >
            <CardMedia 
              image={img} 
              sx={{
                width: "100%", 
                aspectRatio: "16/9",
                }}
            />
            <Box 
              component="div"
              sx={{
                height: "150px", 
                width: "100%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: 0, 
                justifyContent: "space-between",
                gap: 1,
                padding: 1.5,
                backgroundColor: "#343434"
                }}
              >
              <Typography 
                sx={{
                  flexGrow: 1, 
                  fontWeight: "bold",
                  color: "white"
                }}
              >{title}</Typography>
              <Box
                sx={{
                  display: "flex", 
                  flexWrap: "wrap", 
                  columnGap: ".5rem",
                  width: "300px"
                }}
              >
                {
                  tags.map((tag, id) => (
                    <Typography color="#1976d2" key={id}>{tag}</Typography>
                  ))
                }  
              </Box> 
              <CardActions sx={{padding: 0}}>
                <Button
                  component="a"
                  href={link}
                  variant="contained"
                  size="small"
                  target="_blank"
                >
                  Demo
                </Button>
                <Button
                  component="a"
                  href={repository}
                  variant="outlined"
                  sx={{fontWeight: "bold"}}
                  size="small"
                  target="_blank"
                >
                  Repositorio
                </Button>
              </CardActions>          
            </Box>
          </Card>
        ))
      }
    </Box>
  )
}