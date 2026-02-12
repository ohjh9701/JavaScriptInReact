import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary' element={<Diary />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
    <Footer />
    </>
  )
}

export default App
