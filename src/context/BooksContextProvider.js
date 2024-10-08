import { createContext, useState } from "react"


// Paso 1 - Crear el context (Nave espacial)
export const BooksContext = createContext()

const BooksContextProvider = (props) => {

    // Paso 2 - Definir las props (el/los paquete/s)
    const [books, setBooks] = useState([
        { title: "Justine",  author: "Marques de Sade"},
        { title: "Martin Fierro", author: "Jose Hernandez"},
        { title: "Cronicas de Narnia", author: "C.S. Lewis"}
    ])
    // Provider es el flaco de la gorra
    // value -> La mano del flaco
    // Paso 3 - Pasar la prop al provider (poner el paquete en la mano del flaco)
    // Paso 4 - Definir los children (lista de componentes)
  return (
    <BooksContext.Provider value={books}>
        {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider