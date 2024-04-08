import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Pdf from './components/Pdf'
import HallofFame from './pages/HallofFame'
import OfficeBearers from './pages/OfficeBearers'
import FrontalOrganizations from './pages/FrontalOrganizations'
import View from './pages/View'
import PacPDF from './components/PacPDF'
import Contribute from './pages/Contribute'
import BlogView from './pages/BlogView'
import ManifestoPdf from './components/ManifestoPdf'


function App() {
const location = useLocation()

const isHeader = () =>{
  return (location.pathname=='/format-c-7' || location.pathname=='/political-pdf' || location.pathname=='/manifesto' || location.pathname=='/view' || location.pathname=='/blogs')
}
  return (
    <>
          {!isHeader() && <Header/> }

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/format-c-7' element={<Pdf/>}/>
      <Route path='/political-pdf' element={<PacPDF/>}/>
      <Route path='/manifesto' element={<ManifestoPdf/>}/>
      <Route path='/hall-of-fame' element={<HallofFame/>} />
      <Route path='/office-bearers' element={<OfficeBearers/>} />
      <Route path='/frontal-organizations' element={<FrontalOrganizations/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/donate' element={<Contribute/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/blogs/:slug' element={<BlogView/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    
      </Routes>
      {!isHeader() && <Footer/> }
    </>
  )
}

export default App
