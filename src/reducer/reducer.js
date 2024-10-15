import { TYPES } from "@/actions/actions"
import { initialState } from "./initialState"


export function reducer(state, action) {
    switch (action.type) {
        /*******  CONTADOR *******/
        case TYPES.INCREMENTAR: {
            return {
                ...state,
                contador: state.contador + action.payload 
            }
        }
        case TYPES.RESETEAR: {
            return initialState
        }
        case TYPES.DECREMENTAR: {
            return {
                ...state,
                contador: state.contador - action.payload
            }
        }
        /*******  VISIBLE *******/
        case TYPES.MOSTRAR: {
            return {
                ...state,
                visible: true
            }
        }
        case TYPES.OCULTAR: {
            return {
                ...state,
                visible: false
            }
        }
        default:
            return state
    }
}
