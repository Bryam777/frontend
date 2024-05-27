import React from 'react';

const   BookTable = ({ book, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {book.map((book) => (
                    <BookRow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
                    /* <td>{user.id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>Editar</button>
                            <button onClick={() => onDelete(user.id)}>Eliminar</button>
                        </td>*/
                ))}
                    
                
            </tbody>
        </table>
    );
};

export default BookTable
