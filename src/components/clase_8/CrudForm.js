import {useState} from "react";

const CrudForm = () => {

    const initialState = {
        name: "",
        constellation: "",
        id: null
    }

    const [form, setForm] = useState(initialState)

    const handleChangeName = () => {}

    const handleChangeConstellation = () => {}

    const handleSubmit = () => {}

    const handleReset = () => {}

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" placeholder="Nombre" onChange={handleChangeName} />
        <input type="text" name="constellation" placeholder="constellation" onChange={handleChangeConstellation} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
