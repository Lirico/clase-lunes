import { useState, useEffect } from "react";
import Quote from "./Quote";
import Loader from "./Loader";



const BBApp = () => {

    // Estado inicial basado en la estructura de la informacion que estamos esperando desde la API
    const initialQuote = {
        text: "",
        author: ""
    }

    // Actualizaremos dicho estado conforme vaya llegando nueva informacion
    const [quote, setQuote] = useState(initialQuote)
    const [isLoading, setIsLoading] = useState(false)

    const updateQuote = async () => { // Es verdad que esta funcion hara una peticion -> para que?

        setIsLoading(true)

        // Primero necesitamos definir un "a donde?" -> Un endpoint
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"

        // Quiero pedir la informacion -> fetch() -> .then().then() -> async / await
        const response = await fetch(ENDPOINT)

        const [newQuote] = await response.json()

        const {quote: text, author} = newQuote;

        setQuote({
            text: text,
            author: author
        })

        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }

    useEffect(() => {
        updateQuote()
    }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 300 }}>
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading && <Loader />
      }
      {
        !isLoading && <Quote quote={quote}/>
      }
      <button onClick={updateQuote}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;






