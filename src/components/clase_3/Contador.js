import { useState } from "react"


const Contador = () => {

    const initialState = 0

    const [contador, setContador] = useState(initialState)

    const incrementar = () => setContador((contador) => contador + 1)

    const resetear = () => setContador(initialState)

    const decrementar = () => setContador((contador) => contador - 1)

  return (
    <>
        <div style={estilos}>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
            </div>
            <h3>{contador}</h3>
        </div>
    </>
  )
}

export default Contador

const estilos = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

// EPIC REACT PRO -> Kent Dodds
