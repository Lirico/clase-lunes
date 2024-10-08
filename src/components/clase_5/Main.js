import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";


const Main = () => {

    // Cartero extrae paquete de la nave
    const paquete = useContext(ThemeContext)

    const {toggleTheme} = paquete; // theme -> dark o light

  return (
    <div className={toggleTheme} style={{
        height: "100vh"
    }}>Main</div>


  )
}

export default Main
