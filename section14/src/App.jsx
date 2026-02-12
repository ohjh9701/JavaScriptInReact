import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { useReducer, useRef, createContext } from 'react'

//가상의 데이터 목업
const mockData = [
 {
 id: 1,
 createdDate: new Date(2026,1,1).getTime(),
 emotionId: 1,
 content: "1번 일기 내용",
 },
 {
 id: 2,
 createdDate: new Date(2026,1,15).getTime(),
 emotionId: 2,
 content: "2번 일기 내용",
 },
 {
 id: 3,
 createdDate: new Date(2026,0,25).getTime(),
 emotionId: 2,
 content: "3번 일기 내용",
 },
];

//useReducer
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];      
    case "UPDATE":
      return state.map((item)=>{
        item.id === action.id ? action.data : item
      });      
    case "DELETE":
      return state.filter((item)=>{item.id !== action.id});      
    default:
      return state;      
  }
}

  //공동으로 사용할 props 내용을 담을 장소 설정
  export const DiaryStateContext = createContext();
  export const DiaryDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  //이벤트처리 onCreate, onUpdate, onDelete
  const onCreate = (createdDate, emotionId, content)=>{
    const newItem = {
      id:idRef.current++,
      createdDate,
      emotionId,
      content
    }
    dispatch({type: "CREATE", data:newItem})
  }

  const onUpdate = (id, createdDate, emotionId, content)=>{
    const newItem = {
      id,
      createdDate,
      emotionId,
      content
    }
    dispatch({type: "UPDATE", data:newItem})
  }

  const onDelete = (id)=>{
    dispatch({type: "DELETE", data:id})
  }



  return (
    <>
    <DiaryStateContext.Provider value={state}>
    <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary/:id' element={<Diary />}/>
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
    <Footer />
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
