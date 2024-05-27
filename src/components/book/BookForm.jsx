import { useState } from "react"

function BookForm (){

    const [titulo, setTitulo] = useState ('')
    const [autor, setAutor] = useState ('')
    const [categoria, setCategoria] = useState('')

    const handleTituloChange = (event) =>{
        setNumeroDocumento(event.target.value)
    }

    const handleAutorChange = (event) =>{
        setNombre(event.target.value)
    }

    const handleCategoriaChange = (event) =>{
        setApellido(event.target.value)
    }

    //funcion para enviar el formulario

    const handleSubmit = (event) =>{
        event.preventDefault()
        onsubmit(titulo, autor, categoria)
        setTitulo('')
        setAutor('')
        setCategoria('')
    }

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titulo" value={titulo} onChange={handleTituloChange} required />
            <input type="text" placeholder="Autor" value={autor} onChange={handleAutorChange} required />
            <input type="text" placeholder="Categoria" value={categoria} onChange={handleCategoriaChange} required />
            <button type="submit">Guardar</button>
        </form>

    )
}
export default BookForm

