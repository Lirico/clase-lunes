import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((caballero) => (
            <CrudTableRow key={caballero.id} caballero={caballero} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
