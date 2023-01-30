import GithubIcon from "../assets/github-white.svg"
import LinkedinIcon from "../assets/linkedin-white.svg"
import MailIcon from "../assets/email-white.svg"

function Socials(){
    return(
        <section className="Socials">
          <h3 className="component">Socials 📱</h3>
          <div className="Socials--icons">
            <a href="https://github.com/ElizondoStudios" className="component">
              <img src={GithubIcon} alt="Github icon" className="icon" id="icon1"/>
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-luis-elizondo-562398231" className="component">
              <img src={LinkedinIcon} alt="Linkedin icon" className="icon" id="icon2"/>
            </a>
            <a href="mailto:elizondostudios@gmail.com" className="component">
              <img src={MailIcon} alt="Email Icon" className="icon" id="icon3"/>
            </a>
          </div>
        </section>
    )
}

export default Socials