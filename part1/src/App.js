import { useState } from "react"


const Boton = (props)=>{

  return (
    <button onClick={props.onClick}  
    >{props.text}</button>  
  )

}

const LineaTabla = (props)=> {
  if (props.texto === "Positivas"){
    return  (
      <tr>
        <td>{props.texto}</td>
        <td>{props.value} %</td>
      </tr>
    )
  }
  return  (
    <tr>
      <td>{props.texto}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Estadisticas = ({clicks})=> {

  const total = clicks.buena + clicks.regular + clicks.mala
  const media = ((clicks.buena * 1 + clicks.regular * 0 + clicks.mala * (-1))/total)
  const porcentaje = (clicks.buena * 100 / (total))

  if (total === 0) {
    return (<div>
      No se han dado evaluaciones todavía
    </div>
  )
    }
  return (
    <tbody>
      <LineaTabla texto="Buenas" value={clicks.buena} />
      <LineaTabla texto="Regulares" value={clicks.regular} />
      <LineaTabla texto="Malas" value={clicks.mala} />
      <LineaTabla texto="Total" value={total} />
      <LineaTabla texto="Media" value={media.toFixed(2)} />
      <LineaTabla texto="Positivas" value={porcentaje.toFixed(2)} />
    </tbody>
  )



}


const App = () => {

  const [clicks, setClicks] = useState({
    buena :0,
    mala: 0,
    regular:0
  })

const Handlebuena = () => {
  setClicks ({...clicks, buena: clicks.buena + 1})
  console.log("Click en buena")
}
const HandleRegular = () => {
  setClicks ({...clicks, regular: clicks.regular + 1})
}

const HandleMala = () => {
  setClicks ({...clicks, mala: clicks.mala + 1})
}

const handleReset = ()=>{
  setClicks ({...clicks, buena: 0, regular: 0, mala: 0})
}

 
    return (
    <div>
      <h1>Deja tu opinion</h1>
      <Boton onClick={Handlebuena} text="Buena" />
      <Boton onClick={HandleRegular} text="Regular" />
      <Boton onClick={HandleMala} text="Mala" />
      <h2>Estadísticas</h2>
      <Estadisticas clicks={clicks}/>
      <br/>
      <Boton onClick={handleReset} text="Poner a cero" />
    </div>
  )
}

export default App
