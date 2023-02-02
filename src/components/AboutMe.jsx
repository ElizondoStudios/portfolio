import { nanoid } from "nanoid"

function AboutMe(props){
    const info= props.text.map(e => <p className="component" key={nanoid()}>{e}</p>)

    return(
        <section className="About-me" onClick={props.toggleShowAM}>
          <h3 className="component">{props.title}</h3>
          {props.showAM && info}
          <h3 className="component">▼</h3>
        </section>
    )
}

export default AboutMe