import { createContext, useState } from "react"

// La nave
export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    // Paquete
    const [theme, setTheme] = useState(false) 

    const handleTheme = () => setTheme(!theme) 

    const toggleTheme = theme ? "dark" : "light"
    const toggleIcon = theme ? "☀️" : "🌙"
    
    // Objetos literales
    const paquete = {theme, handleTheme, toggleTheme, toggleIcon}

    // Flaco con paquete en mano
  return (
    <ThemeContext.Provider value={paquete}> 
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider