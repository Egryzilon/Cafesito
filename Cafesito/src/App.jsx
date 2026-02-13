import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './components/Dashboard'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/pokedex" element={<Dashboard/>} />
      <Route path="*" element={<Navigate to="/"/>} />

    </Routes>
  </BrowserRouter>
  ) 
}

export default App
