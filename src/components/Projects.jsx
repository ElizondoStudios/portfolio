import ProjectCard from "./ProjectCard"
import { nanoid } from "nanoid"
import pokedexTSSS from "../assets/pokedex-TS_screenshot.png"
import pokedexSS from "../assets/pokedex_screenshot.png"
import tenziesSS from "../assets/tenzies_screenshot.png"
import quizzicalSS from "../assets/quizzical_screenshot.png"
import algebraSS from "../assets/algebra_screenshot.png"
import tiktaktoeSS from "../assets/tiktaktoe_screenshot.png"



function Projects(props){
  const info=[
    {
      key: nanoid(),
      projectName: "pokedex TS and BS",
      link: "https://pokedex-elizondo.netlify.app",
      img: pokedexTSSS
    },
    {
      key: nanoid(),
      projectName: "pokedex",
      link: "https://minimalist-pokedex.netlify.app",
      img: pokedexSS
    },
    {
      key: nanoid(),
      projectName: "tenzies",
      link: "https://tenzies-elizondo-studios.netlify.app/",
      img: tenziesSS
    },
    {
      key: nanoid(),
      projectName: "quizzical",
      link: "https://quizzical-elizondo-studios.netlify.app/",
      img: quizzicalSS
    },
    {
      key: nanoid(),
      projectName: props.lang==="English"? "linear algebra": "álgebra lineal",
      link: "https://gauss-jordan.netlify.app/",
      img: algebraSS
    },
    {
      key: nanoid(),
      projectName: "TikTakToe",
      link: "https://tiktaktoe-elizondo.netlify.app",
      img: tiktaktoeSS
    }
  ]

  const Projects= info.map(e => <ProjectCard key={e.key} projectName={e.projectName} link={e.link} img={e.img}/>)

  return(
    <section className="Projects">
        <h3 className="component">{props.title}</h3>
        <div className="Projects--cards">
          {Projects}
        </div>
    </section>
  )
}

export default Projects