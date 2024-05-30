import htmlIcon from "../../assets/icons/icons8-html.svg"
import cssIcon from "../../assets/icons/icons8-css3.svg"
import javaScripIcon from "../../assets/icons/icons8-js.svg"
import gitIcon from "../../assets/icons/icons8-git.svg"
import reactIcon from "../../assets/icons/icons8-reaccionar.svg"
import nodeJsIcon from "../../assets/icons/icons8-nodo-js.svg"
import typeScriptIcon from "../../assets/icons/icons8-TypeScript.svg"
import javaIcon from "../../assets/icons/icons8-logotipo-de-java-coffee-cup.svg"
import "./skills.css"
import Title from "../title/Title"
import Section from "../section/Section"

const icons = [
  {
    icon: htmlIcon,
    title: "HTML 5"
  },
  {
    icon: cssIcon,
    title: "CSS 3"
  },
  {
    icon: javaScripIcon,
    title: "JavaScript"
  },
  {
    icon: gitIcon,
    title: "Git/GitHub"
  },
  {
    icon: reactIcon,
    title: "React JS"
  },
  {
    icon: nodeJsIcon,
    title: "Node JS"
  },
  {
    icon: typeScriptIcon,
    title: "TypeScript"
  },
  {
    icon: javaIcon,
    title: "Java"
  }  
]

export default function Skills() {

  return (
      <Section id="skills">
        <Title title="Habilidades" />
        <div className="skills__icons">
          {
            icons.map((icon, id) => (
              <figure className="skills__icon" key={id}>
                <img 
                  className="skills__img"
                  src={icon.icon} 
                  alt="icon.title" 
                />
                <figcaption className="skills__title">  
                  {icon.title}
                </figcaption>
              </figure>
            ))
          }
        </div>
      </Section>
  )
}