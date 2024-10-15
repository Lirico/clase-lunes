import { useReducer } from "react"
import { TYPES } from "@/actions/actions"
import { initialState } from "@/reducer/initialState"
import { reducer } from "@/reducer/reducer"


const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const incrementar = () => dispatch({type: TYPES.INCREMENTAR, payload: 1}) 

    const resetear = () => dispatch({type: TYPES.RESETEAR})

    const decrementar = () => dispatch({type: TYPES.DECREMENTAR, payload: 1})

  return (
    <>
        <div style={estilos}>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
            </div>
            <h3>{state.contador}</h3>
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
