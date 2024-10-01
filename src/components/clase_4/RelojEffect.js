import { useState, useEffect } from "react"


const RelojEffect = () => {

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
    </>
  )
}
export default RelojEffect

