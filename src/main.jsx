import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuadricula from './components/Cuadricula.jsx'
import './main.css'
import Pagina404 from './components/404.jsx'
import App from './components/App.jsx'
import Home from './Home.jsx'
import CriptoPage from './components/cripto/CriptoPage.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import Perfil from './components/usuarios/Perfil.jsx'
import Login from './components/usuarios/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />}/>
        </Route>
        <Route path='/criptomonedas' element={<App />} >
          <Route index element={<Cuadricula />} />
          <Route path=':id' element={<CriptoPage />} />
        </Route>
        <Route path='*' element={<Pagina404 />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
