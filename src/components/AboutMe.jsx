function AboutMe(props){
    const info="My name is José Luis Elizondo Figueroa"


    return(
        <section className="About-me" onClick={props.toggleShowAM}>
          <h3 className="component">About me 👇</h3>
          {props.showAM && <p className="component">{info}</p>}
          <h3 className="component">▼</h3>
        </section>
    )
}

export default AboutMe