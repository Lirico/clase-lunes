import { TYPES } from "@/actions/actions";
import { shoppingInitialState } from "./shoppingInitialState";



export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload.products,
                cart: action.payload.cart
            }
        }   
        case TYPES.ADD_TO_CART: {
            // Que mecanismo de JS puedo usar para buscar un elemento en un arreglo?
            const newItem = state.products.find(product => product.id === action.payload) // -> el ID de la tarjeta

            // Como reviso si el newItem ya existe en carrito?
            const itemInCart = state.cart.find(item => item.id === newItem.id)
            // Valor 1 -> El objeto en cuestion (el que encontramos) 
            // Valor 2 -> Que no exista -> 

            // Sabemos que cada caso del reductor de devolver un nuevo estado
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === itemInCart.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }
                            : item
                    ) 
                }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
        }
        case TYPES.REMOVE_ONE_ITEM: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === itemToDelete.id
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item
                    ) 
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                }
        }
        case TYPES.REMOVE_ALL_ITEMS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
            return state;
    }
}

