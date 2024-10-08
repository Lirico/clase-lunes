import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Header = () => {
  // Cartero extrae paquete de la nave
  const paquete = useContext(ThemeContext);

  const { handleTheme, toggleTheme, toggleIcon } = paquete;
  // Boton de alternancia
  return (
    <>
      <header className={toggleTheme}>
        <nav>
          <button onClick={handleTheme}>{toggleIcon}</button>
        </nav>
      </header>

      <style jsx>{`
        button {
            background-color: transparent;
            border: none;
            font-size: 25px;
        }
      `}</style>
    </>
  );
};

export default Header;
