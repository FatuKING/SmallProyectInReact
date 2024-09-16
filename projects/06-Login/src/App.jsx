import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { PageRegister } from './pages/PageRegister.jsx'
import { Protected } from './pages/Protected.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<PageRegister />} />
          <Route path='/protected' element={<Protected />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
