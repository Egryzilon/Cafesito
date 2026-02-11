import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="*" element={<Navigate to="/"/>} />

    </Routes>
  </BrowserRouter>
  ) 
}

export default App
