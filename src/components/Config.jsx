import React from "react"
import configIcon from "../assets/gear-white.svg"
import './Config.css'

function Config(props){
    const [menu, setMenu]= React.useState(false)

    function toggleMenu(){
        setMenu(prevMenu => !prevMenu)
    }

    function setLanguaje(event){
        props.changeLanguaje(event.target.value)
    }

    // Click away of menu to close it
    const menuRef= React.useRef()

    React.useEffect(()=>{
        const handleClick=(event)=>{
            if(!menuRef.current.contains(event.target))
                setMenu(false)
        }

        const clickListener= document.addEventListener("click", handleClick)

        return()=>{
            document.removeEventListener("click", clickListener)
        }
    }, [])

    return(
        <div className="Config" ref={menuRef}>
            <img src={configIcon} alt="open config" className="Config--icon" onClick={toggleMenu}/>
            {menu && 
            <div className="Config--menu menu">
                <h3 className="menu">{props.lang==="English"? "Languaje": "Idioma"}</h3>
                <div className="Config--menu--lang-select">
                    <select className="lang-select menu" onChange={setLanguaje} value={props.lang}>
                        <option value="English">English</option>
                        <option value="Español">Español</option>
                    </select>
                </div>
            </div> }
        </div>
    )
}

export default Config