import ProjectCard from "./ProjectCard"
import { nanoid } from "nanoid"
import pokedexSS from "../assets/pokedex_screenshot.png"
import tenziesSS from "../assets/tenzies_screenshot.png"
import quizzicalSS from "../assets/quizzical_screenshot.png"
import algebraSS from "../assets/algebra_screenshot.png"



function Projects(){
  const info=[
    {
      id: nanoid(),
      projectName: "pokedex",
      link: "https://minimalist-pokedex.netlify.app",
      img: pokedexSS
    },
    {
      id: nanoid(),
      projectName: "tenzies",
      link: "https://tenzies-elizondo-studios.netlify.app/",
      img: tenziesSS
    },
    {
      id: nanoid(),
      projectName: "quizzical",
      link: "https://quizzical-elizondo-studios.netlify.app/",
      img: quizzicalSS
    },
    {
      id: nanoid(),
      projectName: "linear algebra",
      link: "https://gauss-jordan.netlify.app/",
      img: algebraSS
    }
  ]

  const Projects= info.map(e => <ProjectCard id={e.id} projectName={e.projectName} link={e.link} img={e.img}/>)

  return(
    <section className="Projects">
        <h3 className="component">Projects 😎</h3>
        <div className="Projects--cards">
          {Projects}
        </div>
    </section>
  )
}

export default Projects