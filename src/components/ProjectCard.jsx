function ProjectCard(props){
    return(
    <div className="project-card component">
        <a href={props.link}>
            <img src={props.img} alt="screenshot of the project" className="project-card-screenshot"/>
            <p>{props.projectName}</p>
        </a>
    </div>
    )
}

export default ProjectCard