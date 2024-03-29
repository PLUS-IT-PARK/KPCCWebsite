import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'


function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Format' />
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
