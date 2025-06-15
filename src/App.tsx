import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import './styles/GlobalStyle.css'
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/criar' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
