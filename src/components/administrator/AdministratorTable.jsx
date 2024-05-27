import React from 'react';

const AdministratorTable = ({ administrator, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Contrasenia</th>
                    <th>Numero contacto</th>
                    <th>Direccion</th>
                    <th>Fecha nacimiento</th>
                </tr>
            </thead>
            <tbody>
                {administrator.map((administrator) => (
                    <userRow key={administrator.id} administrator={administrator} onEdit={onEdit} onDelete={onDelete} />
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

export default AdministratorTable

