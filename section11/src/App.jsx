import { useState, useRef } from 'react'
import './css/App.css'
import Header from './components/Header'
import InputStudent from './components/InputStudent'
import List from './components/List'

function App() {
  const [students, setStudents] = useState([]);

  const noRef = useRef(1);

  const onCreate = (student) => {
    const newStudent = {
      no:noRef.current++,
      name:student.name,
      kor:student.kor,
      eng:student.eng,
      math:student.math,
      total:parseInt(student.kor)+parseInt(student.eng)+parseInt(student.math),
      avg:(parseInt(student.kor)+parseInt(student.eng)+parseInt(student.math))/3,
      date:new Date().getTime()
    };
    setStudents([newStudent, ...students]);
  }

  const onDelete = (no)=>{
    setStudents(students.filter((student)=>{return student.no !== no}));
  }

  const onUpdate = (no, editData)=>{
    setStudents(students.map((student)=>{
      if(student.no === no) {
        const kor = parseInt(editData.kor)
        const eng = parseInt(editData.eng)
        const math = parseInt(editData.math)
        return {
          ...student,
          name: editData.name,
          kor, eng, math,
          total:kor+eng+math,
          avg:(kor+eng+math)/3
        }
      }
      return student;
    }))
  }

  return (
    <>
      <div className="App">
        <Header />
        <InputStudent onCreate={onCreate}/>
        <List students={students} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
    </>
  )
}

export default App
