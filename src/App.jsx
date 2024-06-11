import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Planes from './components/Planes'
import Saws from './components/Saws'
import Chisels from './components/Chisels'
import ToolDetails from './components/ToolDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Planes />} />
        <Route path='/saws' element={<Saws />} />
        <Route path='/chisels' element={<Chisels />} />
        <Route path='/tool/:id' element={<ToolDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
