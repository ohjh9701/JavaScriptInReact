import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import New from './components/New'
import BoardDetail from './components/BoardDetail'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
import { useReducer, useRef, createContext, useEffect } from 'react'
import Header from './components/Header'

const mockData = [
  {
    no: 3,
    title: "게시판 테스트 3",
    writer: "테스터03",
    content: "게시판 테스트입니다.",
    createdDate: new Date(2026,1,3).getTime()
  },
  {
    no: 2,
    title: "게시판 테스트 2",
    writer: "테스터02",
    content: "게시판 테스트입니다.",
    createdDate: new Date(2026,0,23).getTime()
  },
  {
    no: 1,
    title: "게시판 테스트 1",
    writer: "테스터01",
    content: "게시판 테스트입니다.",
    createdDate: new Date(2026,0,13).getTime()
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item)=>{
        item.no !== action.no ? action.data : item
      })
    case "DELETE":
      return state.filter((item)=>{
        item.no !== action.no
      })
    default:
      return state;
  }
}

export const BoardStateContext =createContext();
export const BoardDispatchContext =createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const noRef = useRef(4);

  const onCreate = (title, writer, content)=> {
    const newBoard = {
      no:noRef.current++,
      title,
      writer,
      content,
      createdDate:new Date().getTime()
    }
    dispatch({type:"CREATE", data:newBoard});
  }

  return (
    <>
      <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={{onCreate}}>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/BoardDetail/:no' element={<BoardDetail />}/>
      <Route path='/edit/:no' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
      </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  )
}

export default App
