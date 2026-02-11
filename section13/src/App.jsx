import './css/App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import Exam from './components/Exam';

const mockData = [
 {
 id: 0,
 isDone: false,
 content: "React 공부하기",
 date: new Date().getTime(),
 },
 {
 id: 1,
 isDone: false,
 content: "SpringBoot 공부하기",
 date: new Date().getTime(),
 },
 {
 id: 2,
 isDone: false,
 content: "Oracle DB 공부하기",
 date: new Date().getTime(),
 },
];

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data , ...todos];
    case "UPDATE":
      return todos.map((todo)=>{
        return todo.id === action.id ?  {...todo, isDone:!todo.isDone} : todo
      })
    case "DELETE":
      return todos.filter((todo)=>{
      return todo.id !== action.id
    })
  }
}
//공용으로 사용되는 저장소
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [count, setCount] = useState(10)
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //이벤트 함수(setTodos 생성)
  const onCreate = useCallback((content) => {
      let newTodo = {
          id: idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime(),
      }
      dispatch({type:"CREATE", data : newTodo });
  }, []);

  //이벤트 함수(setTodos 데이타 수정기능)
  const onUpdate = useCallback((id)=>{
    dispatch({
      type:"UPDATE",
      id:id
    })
  },[])
  //이벤트 함수(setTodos 데이타 삭제기능)
  const onDelete = useCallback((id) => {
    dispatch({
      type:"DELETE",
      id:id
    })
  },[])
  //이벤트 핸들러 기능을 딱 한 번만 실행한다.
  const memonizedDispatch = useMemo(()=>{
    return {onCreate, onDelete, onUpdate}
  },[onCreate, onDelete, onUpdate])


  return (
    <>
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{todos}}>
        <TodoDispatchContext.Provider value={memonizedDispatch}>
          <Exam />
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
    </>
  )
}

export default App
