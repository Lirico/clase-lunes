// Hook -> funcion nativa de react
// useState -> Usar estado
import { useState } from "react"


const Estado = () => {

    const initialState = "Jorge"

    const [cabello, setCabello] = useState(initialState) 

  return (
    <>
        <h2>{cabello}</h2>
        <button onClick={() => setCabello("Rubio")}>Rubio (SSJ)</button>
        <button onClick={() => setCabello(initialState)}>Volver morocho a Goku</button>
    </>
  )
}

export default Estado