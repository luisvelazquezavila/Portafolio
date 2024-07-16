import { portfolioData } from "./portfolioData"
import ProjectCard from "./ProjectCard"
import "./portfolio.css"
import Section from "../section/Section";
import Title from "../title/Title";

const [ pjt1, ...rest ] = portfolioData;

const projects = [pjt1, ...rest];

export default function Portfolio() {
  return (
  <Section id="portfolio">
    <Title title="Proyectos" />
    <div className="portfolio__projects">
      {
        projects.map((project, id) => (
          <ProjectCard 
            key={id}
            img={project.img} 
            title={project.title} 
            tags={project.tags} 
            link={project.link} 
            repo={project.repository}
          />
        ))
      }
    </div>
  </Section>
    

  )
}