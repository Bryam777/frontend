
function UserRow ({user, onEdit, onDelete}){

    const handleEdit = () =>{
        onEdit(user)
    }

    const handleDelet = () =>{
        onDelete(user.id)
    }

    return(
        <tr>//table row
            <td>{user.numeroDocumento}</td>//definicion table
            <td>{user.nombre}</td>
            <td>{user.apellido}</td>
            <td>{user.email}</td>
            <td>{user.contrasenia}</td>
            <td>{user.numeroContacto}</td>
            <td>{user.direccion}</td>
            <td>{user.fechaNacimiento}</td>
            <td>
                <button onClick={handleEdit}>Editar</button>
            </td>
            <td>
                <button onClick={handleDelet}>Eliminar</button>
            </td>
        </tr>
    )
}
export default UserRow