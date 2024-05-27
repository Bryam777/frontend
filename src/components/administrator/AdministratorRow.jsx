
function AdministratorRow ({administrator, onEdit, onDelete}){

    const handleEdit = () =>{
        onEdit(administrator)
    }

    const handleDelet = () =>{
        onDelete(administrator.id)
    }

    return(
        <tr>//table row
            <td>{administrator.numeroDocumento}</td>//definicion table
            <td>{administrator.nombre}</td>
            <td>{administrator.apellido}</td>
            <td>{administrator.email}</td>
            <td>{administrator.contrasenia}</td>
            <td>{administrator.numeroContacto}</td>
            <td>{administrator.direccion}</td>
            <td>{administrator.fechaNacimiento}</td>
            <td>
                <button onClick={handleEdit}>Editar</button>
            </td>
            <td>
                <button onClick={handleDelet}>Eliminar</button>
            </td>
        </tr>
    )
}