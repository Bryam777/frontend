import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import userTable from './components/user/UserTable';
import AdministratorTable from './components/administrator/AdministratorTable';
import BookTable from './components/book/BookTable';

function App() {

  const [users, setUsers] = useState([]);
  const [libros, setLibros] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editingLibro, setEditingLibro] = useState(null);

  //Va actulizar la lista por cada usuario y usernistrador nuevo

  useEffect(()=>{
    fetchUsers().then(data => setUsers(data));
    fetchAdmin().then(data => setAdmis(data));
    fetchLibros().then(data => setLibros(data));
  }, [])

  
  const fetchAdmin = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/api/administrador')
      setusers(response.data)
    } catch (error) {
      console.log('Error al consultar los administrador', error)
    }
  }

  const fetchUsers = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/api/usuarios')
      setusers(response.data)
    } catch (error) {
      console.log('Error al consultar los usuarios', error)
    }
  }

  const fetchLibros = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/api/libros')
      setusers(response.data)
    } catch (error) {
      console.log('Error al consultar los libros', error)
    }
  }

  //La funcion para crear o actualizar un usernistrador
  const handleCreateOrUpdateAdministrador = async (admiData) =>{
    if (editingAdmin) {
      await axios.put(`http://localhost:8080/api/administrador/${admiData.id}`,admiData)
    } else {
      await axios.post(`http://localhost:8080/api/administrador`, admiData)
    }
  }

  //La funcion para crear o actualizar un usuario
  const handleCreateOrUpdateUser = async (userData) =>{
    if (editingUser) {
      await axios.put(`http://localhost:8080/api/usuarios/${userId.id}`,userData)
    } else {
      await axios.post(`http://localhost:8080/api/usuarios`, userData)
    }
  }

  const handleCreateOrUpdateLibros = async (librosData) =>{
    if (editingLibro) {
      await axios.put(`http://localhost:8080/api/libros/${librosData.id}`,librosData)
    } else {
      await axios.post(`http://localhost:8080/api/libros`, librosData)
    }
  }

  //La funcion permite editar un usuario
  const handleEditAdministrador = (admin) =>{
    setEditingAdmin(admin)
  }

  //La funcion permite editar un usuario
  const handleEditUser = (user) =>{
    setEditingUser(user)
  }

  //La funcion permite editar un libro
  const handleEditLlibro = (libro) =>{
    setEditingLibro(libro)
  }

  //La funcion permite eliminar un administrador apartir de id
  const handleDeleteAdministrador = async (admiId) =>{
    await axios.delete(`http://localhost:8080/api/administrador/${admiId}`)
    fetchAdmin()
  }

  //La funcion permite eliminar un usuario apartir de id
  const handleDeleteUser = async (userId) =>{
    await axios.delete(`http://localhost:8080/api/usuarios/${userId}`)
    fetchUsers()
  }

  //La funcion permite eliminar un libro apartir de id
  const handleDeleteLibro= async (libroId) =>{
    await axios.delete(`http://localhost:8080/api/usuarios/${libroId}`)
    fetchLibros()
  }

  return (
    <div>
      <h1>Biblioteca</h1>
      <br/>
      <h2>Lista usuarios</h2>
      <userTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <h2>{editingUser ? 'editar usuario' :'crear usuario'}</h2>
      <userForm onSubmit={handleCreateOrUpdateUser} initialuser={editingUser} />
    </div>
  )
}

export default App
