import { useState, useEffect } from "react"
// Paso 1 -> Importar la nave
import { BooksContext } from "@/context/BooksContextProvider"
// Paso 2 -> Importar el hook que va a llevar el paquete de la nave al domicilio
import { useContext } from "react"


const RelojEffect = () => {


    const books = useContext(BooksContext)

    const initialStateVisible = false;

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(initialStateVisible) // Con booleano

    useEffect(() => {

        let temporizador;

        if(visible){
            temporizador = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
        }

        return () => clearInterval(temporizador)

    }, [visible])
    

  return (
    <>
        <h2>Reloj con Efecto</h2>
        {
            visible && <h3>{hora}</h3>
        }
        <div>
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </div>
        <ul>
            {
                books.map(book => <li>
                    <p>{book.title}</p>
                    <h2>{book.author}</h2>
                </li>)
            }
        </ul>
    </>
  )
}
export default RelojEffect

