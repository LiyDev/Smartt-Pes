import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import './styles/GlobalStyle.css'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Services from "./pages/ServicesPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/criar' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Services/>} />
        <Route path='/agendamento' element={<>agendamento</>} />
        <Route path='/teleconsulta' element={<>teleconsulta</>} />
        <Route path='/tratamentos' element={<>tratamentos</>} />
        <Route path='/podomoto' element={<>podomoto</>} />
        <Route path='/servicos' element={<>servicos</>} />
        <Route path='/planos' element={<>planos</>} />
        <Route path='/perfil' element={<>perfil</>} />
        <Route path='/historico' element={<>historico</>} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
