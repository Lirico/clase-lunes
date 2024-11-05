import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragon",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andromeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fenix",
    }
]

// CRUD
const CrudApp = () => {

    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    // R
    const readState = () => {}

    // C
    const createRecord = () => {}

    // U
    const updateRecord = () => {}

    // D
    const deleteRecord = () => {}

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm  />
      <CrudTable data={db} />
    </div>
  );
};

export default CrudApp;
