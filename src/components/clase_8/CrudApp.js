import { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const initialDb = [];

// CRUD
const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  // R
  const readState = async () => {
    const response = await axios.get("http://localhost:8000/santos");
    const newDb = await response.data;
    setDb(newDb);
  };

  useEffect(() => {
    readState();
  }, []);

  // C
  const createRecord = async (formData) => {
    // recibo el caballero -> Le pongo ID
    formData.id = uuidv4(); // Cuando ejecuto esta funcion -> genero un id

    await axios.post("http://localhost:8000/santos", JSON.stringify(formData)); // formData -> JS ...¿El servidor entiende JS?

    readState();
  };

  // U
  const updateRecord = async (formData) => {
    await axios.put(`http://localhost:8000/santos/${formData.id}`, JSON.stringify(formData))

    readState();
  };

  // D
  const deleteRecord = async (caballero) => {
    const confirmar = confirm(
      `¿Estás seguro de que queres eliminar a ${caballero.name} de ${caballero.constellation}?`
    );

    if (confirmar) {
      await axios.delete(`http://localhost:8000/santos/${caballero.id}`);

      readState();
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createRecord={createRecord}
        updateRecord={updateRecord}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        deleteRecord={deleteRecord}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;

// Server a Cliente
// texto plano -> JSON (formato viajero) -> JS

// Cliente a Servidor
// JS -> JSON (formato viajero) -> texto plano

// ¿Qué es JSON? -> JavaScript Object Notation -> La forma en la que un documento necesita estructurarse
// ¿Para qué? Para que cuando llegue a destino, se pueda transformar en JS
