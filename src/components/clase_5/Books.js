
// Paso 1 -> Importar la nave
import { BooksContext } from "@/context/BooksContextProvider"
// Paso 2 -> Importar el hook que va a llevar el paquete de la nave al domicilio
import { useContext } from "react"

const Books = () => {

    // Extraer el paquete de la nave (el cartero)
    const books = useContext(BooksContext)

  return (
    <ul>
        {
            books.map(book => <li>
                <p>{book.title}</p>
                <h2>{book.author}</h2>
            </li>)
        }
    </ul>
  )
}

export default Books