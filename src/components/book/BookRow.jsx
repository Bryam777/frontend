
function BookRow ({book, onEdit, onDelete}){

    const handleEdit = () =>{
        onEdit(book)
    }

    const handleDelet = () =>{
        onDelete(book.id)
    }

    return(
        <tr>//table row
            <td>{book.titulo}</td>//definicion table
            <td>{book.autor}</td>
            <td>{book.categoria}</td>
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