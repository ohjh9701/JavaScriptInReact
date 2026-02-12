import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { Link, useNavigate } from "react-router-dom";

function App() {

    const nav = useNavigate();

  const onClickGoPage = (e)=>{
    nav(`/${e.target.value}`)
  }

  return (
    <>
              {/* <th><a href="/">Home</a></th> ... </th> a herf는 페이지 전체가 깜빡여서 사용 X */}
          <Link to={"/"}>Home</Link> || <Link to={"/new"}>New</Link> || <Link to={"/diary"}>Diary</Link> || <Link to={"/edit"}>Edit</Link><br />
          
          <button onClick={onClickGoPage} value={""}>Home 바로가기</button>
          <button onClick={onClickGoPage} value={"new"}>New 바로가기</button>
          <button onClick={onClickGoPage} value={"diary"}>Diary 바로가기</button>
          <button onClick={onClickGoPage} value={"edit"}>Edit 바로가기</button>    
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary/:id' element={<Diary />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
    <Footer />
    </>
  )
}

export default App
