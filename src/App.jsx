import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Netflix from './pages/Netflix'

function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Netflix />} />
     </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
