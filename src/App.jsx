// import { useInView } from 'react-intersection-observer';
import React from "react"
import GithubIcon from "./assets/github-svgrepo-com.svg"
import LinkedinIcon from "./assets/linkedin-svgrepo-com.svg"
import MailIcon from "./assets/mail-02-svgrepo-com.svg"

function App() {

 // code needed to animate elemnts when they enter the card 
  const containerRef= React.useRef(null)

  const observerCB= (entries) => {
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.style="opacity: 1; transform: none; filter: blur(0);"
      }else{
        entry.target.style="opacity: 0;"
      }
    })
  }

  const options={
    root: document.querySelector('.App--card'),
    rootMargin: '0px',
    threshold: 0
  }

  React.useEffect(()=>{
    const observer= new IntersectionObserver(observerCB, options)
    const components= document.querySelectorAll(".component")

    if(containerRef.current){
      components.forEach(component => {
        observer.observe(component)
      })
    }

      return ()=>{
        if(containerRef.current){
          components.forEach(component => {
            observer.unobserve(component)
          })
        }
      }
  },[containerRef, options])

  // State for 'about me'
  const [showAM, setShowAM]= React.useState(false);

  function toggleShowAM(){
    setShowAM(prevShowAM => !prevShowAM)
  }

  return (
    <div className="App">
      <div className="App--card" ref={containerRef}>
        <h1 className="component show">José Luis Elizondo F.</h1>
        <h2 className="component">✨portfolio✨</h2>
        <section className="App--card--about-me" onClick={toggleShowAM}>
          <h3 className="component">About me 👇</h3>
          {showAM && <p className="component">Hello world!</p>}
          <h3 className="component">▼</h3>
        </section>
        <section className="App--card--projects">
          <h3 className="component">Projects 😎</h3>
        </section>
        <section className="App--card--social">
          <h3 className="component">Socials 📱</h3>
          <div className="App--card--social--icons">
            <img src={GithubIcon} alt="Github icon" />
            <img src={LinkedinIcon} alt="Linkedin icon" />
            <img src={MailIcon} alt="Email Icon" />
          </div>
        </section>
        <div id="test">Hello world!</div>
      </div>
    </div>
  )
}

export default App