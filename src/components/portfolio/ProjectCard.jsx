import { Box, Button, Typography } from "@mui/material"
import { PropTypes } from "prop-types"
import "./projectCard.css"

export default function ProjectCard({ img, title, tags, link, repo }) {
  return (
    <Box
      className="project-card" 
      sx={{ padding: { xs: ".5rem", sm: "1rem" } }}
    >
    <img 
      className="project-card__img"
      src={img} 
      alt={title}
    />
    <div className="project-card__texts">
      <p className="project-card__title">
        {title}
      </p>
      <div className="project-card__tags">
        {
          tags.map((tag, id) => (
            <Typography className="project-card__tag" key={id}>{tag}</Typography>
          ))
        }  
      </div> 
      <div className="project-card__buttons">
        <Button
          color="primary"
          component="a"
          href={link}
          variant="contained"
          size="small"
          target="_blank"
        >
          Demo
        </Button>
        <Button
          color="primary"
          component="a"
          href={repo}
          variant="outlined"
          sx={{fontWeight: "bold"}}
          size="small"
          target="_blank"
        >
          Repositorio
        </Button>
      </div>          
    </div>
    </Box>
  )
}

ProjectCard.propTypes = {
  img: PropTypes.string,  
  title: PropTypes.string,  
  tags: PropTypes.array,  
  link: PropTypes.string,  
  repo: PropTypes.string
}