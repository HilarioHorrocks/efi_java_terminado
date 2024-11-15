import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './components/MyButton'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import { Menubar } from 'primereact/menubar'
import CreateUser from './components/Users/CreateUser'
import Home from './components/Home'
import LoginUser from './components/Users/LoginUser'
import Perfumes from "./components/Perfumes/Perfumes"
import AddPerfume from "./components/Perfumes/AddPerfume"


function App() {
  const [count, setCount] = useState(0)

  const items = [
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { label: 'Nuevo usuario', icon: 'pi pi-user-plus', url: '/nuevo-usuario' },
    { label: 'Inicio', icon: 'pi pi-home', url: '/' },
    { label: 'Inicio Sesion', icon: 'pi pi-user', url: '/inicio-sesion' },
    { label: 'Editar Usuario', icon: 'pi pi-user', url: '/editar-usuario' },
    { label: 'Perfumes', icon: 'pi pi-user', url: '/Perfumes' },
    { label: 'Add Perfume', icon: 'pi pi-user', url: '/AddPerfume' },
  ]

  return (
    <BrowserRouter>
      <Menubar model={items} />
      <Routes>
        <Route path='/usuarios' element={<UsersContainer />} />
        <Route path='/nuevo-usuario' element={<CreateUser />} />
        <Route path='/inicio-sesion' element={<LoginUser />} />
        <Route path='/' element={<Home />} />
        <Route path="/perfumes" component={Perfumes} />
        <Route path="/add-perfume" component={AddPerfume} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
