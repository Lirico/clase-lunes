// Hook -> funcion nativa de react
// useState -> Usar estado
import { useState, useEffect } from "react"


const Estado = () => {

    const initialState = "Morocho"

    const [cabello, setCabello] = useState(initialState) 

    useEffect(() => {
      if(cabello === "Rubio"){
        console.info("Cabello actualizado")
      } else {
        console.warn("Cabello reiniciado")
      }
    
    }, [cabello])
    

  return (
    <>
        <h2>{cabello}</h2>
        <button onClick={() => setCabello("Rubio")}>Rubio (SSJ)</button>
        <button onClick={() => setCabello(initialState)}>Volver morocho a Goku</button>
    </>
  )
}

export default Estado
