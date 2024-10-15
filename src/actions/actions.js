



export const TYPES = {
    // CONTADOR
    INCREMENTAR: "INCREMENTAR",
    RESETEAR: "RESETEAR",
    DECREMENTAR: "DECREMENTAR",
    // VISIBLE
    MOSTRAR: "MOSTRAR",
    OCULTAR: "OCULTAR",
    // CARRITO
    ADD_TO_CART: "ADD_TO_CART", // Agregar un producto, pero si este ya existe, incrementa la cantidad en 1
    REMOVE_ONE_ITEM: "REMOVE_ONE_ITEM", // Eliminar un item, pero si hay mas de 1, resta la cantidad en 1
    REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS", // Eliminar el item independientemente de la cantidad
    CLEAR_CART: "CLEAR_CART" // Eliminar todos los items del carrito
}



