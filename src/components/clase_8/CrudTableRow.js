


const CrudTableRow = ({caballero}) => {

    const {name, constellation, id} = caballero;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
