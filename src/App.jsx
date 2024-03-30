import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Pdf from './components/Pdf'
import HallofFame from './pages/HallofFame'


function App() {
const location = useLocation()

const isHeader = () =>{
  return location.pathname=='/format-c-7'
}
  return (
    <>
          {!isHeader() && <Header/> }

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/format-c-7' element={<Pdf/>}/>
      <Route path='/hall-of-fame' element={<HallofFame/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    
      </Routes>
      {!isHeader() && <Footer/> }
    </>
  )
}

export default App
