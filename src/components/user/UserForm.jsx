import { useState } from "react"

function UserForm (){

    const [numeroDocumento, setNumeroDocumento] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [numeroContacto, setNumeroContacto] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState ('')

    const handleNumeroDocumentoChange = (event) =>{
        setNumeroDocumento(event.target.value)
    }

    const handleNombreChange = (event) =>{
        setNombre(event.target.value)
    }

    const handleApellidoChange = (event) =>{
        setApellido(event.target.value)
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handleContraseniaChange = (event) =>{
        setContrasenia(event.target.value)
    }

    const handleNumeroContactoChange = (event) =>{
        setNumeroContacto(event.target.value)
    }

    const handleDireccionChange = (event) =>{
        setDireccion(event.target.value)
    }

    const handleFechaNacimientoChange = (event) =>{
        setFechaNacimiento(event.target.value)
    }

    //funcion para enviar el formulario

    const handleSubmit = (event) =>{
        event.preventDefault()
        onsubmit(numeroDocumento, nombre, apellido, email, contrasenia, numeroContacto, direccion, fechaNacimiento)
        setNumeroDocumento('')
        setNombre('')
        setApellido('')
        setEmail('')
        setContrasenia('')
        setNumeroContacto('')
        setDireccion('')
        setFechaNacimiento('')
    }

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Documento" value={numeroDocumento} onChange={handleNumeroDocumentoChange} required />
            <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} required />
            <input type="text" placeholder="Apellido" value={apellido} onChange={handleApellidoChange} required />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            <input type="password" placeholder="Contrasenia" value={contrasenia} onChange={handleContraseniaChange} required />
            <input type="text" placeholder="Contacto" value={numeroContacto} onChange={handleNumeroContactoChange} required />
            <input type="text" placeholder="Direccion" value={direccion} onChange={handleDireccionChange} required />
            <input type="text" placeholder="Fecha Nacimiento" value={fechaNacimiento} onChange={handleFechaNacimientoChange} required />
            <button type="submit">Guardar</button>
        </form>

    )
}
export default UserForm

