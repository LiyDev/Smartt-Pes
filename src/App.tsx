import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import './styles/GlobalStyle.css'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Services from "./pages/ServicesPage"
import Consulta from "./pages/Consulta"
import Teleconsulta from "./pages/TeleConsulta"
import Historico from "./pages/Historico"
import Planos from "./pages/Planos"
import Podomoto from "./pages/Podomoto"
import Tratamentos from "./pages/Tratamentos"
import Perfil from "./pages/Perfil"
import MobilePreview from "./components/Mobile"
import { useEffect, useState } from "react"
import Sobre from "./pages/Sobre"

function App() {

  const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
          if(window.innerWidth <= 500){
            setIsMobile(true);
          } else {
            setIsMobile(false)
          }
        }, [])

  return (
    <BrowserRouter>
      <Routes>
        {isMobile ?
        <Route path='/' element={<Home/>} />
          : 
        <Route path='/' element={<MobilePreview/>}/>
        }
        <Route path='/criar' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Services/>} />
        <Route path='/agendamento' element={<Consulta/>} />
        <Route path='/teleconsulta' element={<Teleconsulta/>} />
        <Route path='/podomoto' element={<Podomoto/>} />
        <Route path='/servicos' element={<Tratamentos/>} />
        <Route path='/planos' element={<Planos/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/historico' element={<Historico/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
