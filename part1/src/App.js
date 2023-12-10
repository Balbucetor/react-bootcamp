import { useState } from "react"


const Boton = (props)=>{

  return (
    <button onClick={props.onClick}  
    >{props.text}</button>  
  )

}

const Estadisticas = ()=>{
  return (
    <div>
      
    </div>
  )
}


const App = () => {

  const [buena, setBuena] = useState(0)
  const [regular, setRegular] = useState(0)
  const [mala, setMala] = useState(0)
    
const Handlebuena = () => {
  setBuena (buena + 1)
}
const HandleRegular = () => {
  setRegular (regular + 1)
}
const HandleMala = () => {
  setMala (mala + 1)
}

    return (
    <div>
      <h1>Deja tu opinion</h1>
      <Boton onClick={Handlebuena} text="Buena" />
      <Boton onClick={HandleRegular} text="Regular" />
      <Boton onClick={HandleMala} text="Mala" />
      <h2>Estadísticas</h2>
      <p>Buenas : {buena}</p>
      <p>Regulares: {regular}</p>
      <p>Malas: {mala}</p>
      <p>Opinione totales: {buena + mala+ regular}</p>
      <p>Media: {((buena - mala)/ (buena + mala+ regular))}</p>
      <p>Positivas : {(buena/(mala+buena+regular))*100} %</p>
    </div>
  )
}

export default App
