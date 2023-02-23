// import { useInView } from 'react-intersection-observer';
import React from "react"
import Socials from "./components/Socials"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import information from "./information"
import Config from "./components/Config"

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
    threshold: 0.1
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
  const [showAM, setShowAM]= React.useState(false)

  function toggleShowAM(){
    setShowAM(prevShowAM => !prevShowAM)
  }

  // State for languaje
  const [languaje, setLanguaje]= React.useState(navigator.language.startsWith("es")?"Español":"English") 
  
  function changeLanguaje(lang){
    setLanguaje(lang)
  }

  console.log("Hello World! 😃")


  return (
    <div className="App">
      <Config
        lang={languaje}
        changeLanguaje={changeLanguaje}
      />
      <div className="App--card" ref={containerRef}>
        <h1 className="component">José Luis Elizondo F.</h1>
        <h2 className="component">
          {languaje==="English"? information.english.title: information.spanish.title}
        </h2>
        <AboutMe
         showAM={showAM} toggleShowAM={toggleShowAM}
         title={languaje==="English"? information.english.about: information.spanish.about}
         text={languaje==="English"? information.english.about_text: information.spanish.about_text}
        />
        <Projects
         title={languaje==="English"? information.english.projects: information.spanish.projects}
         lang={languaje}
        />
        <Socials
         title={languaje==="English"? information.english.socials: information.spanish.socials}
        />
      </div>
    </div>
  )
}

export default App
