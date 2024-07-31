import { portfolioData } from "./portfolioData"
import ProjectCard from "./ProjectCard"
import "./portfolio.css"
import Section from "../section/Section";
import Title from "../title/Title";
import { Box } from "@mui/material";

const [ pjt1, ...rest ] = portfolioData;

const projects = [pjt1, ...rest];

export default function Portfolio() {
  return (
  <Section id="portfolio">
    <Title title="Proyectos" />
    <Box 
      className="portfolio__projects"
      sx={{ gap: { xs: "1rem", sm: "3rem" } }}
    >
      <ProjectCard 
        projects={projects}
      />
    </Box>
  </Section>
    

  )
}