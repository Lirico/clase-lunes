


const CrudTableRow = ({caballero, deleteRecord,setDataToEdit}) => {

    const {name, constellation} = caballero;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(caballero)}>Editar</button>
        <button onClick={() => deleteRecord(caballero)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
