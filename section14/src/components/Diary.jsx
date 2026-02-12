import Header from './Header'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Diary = ()=>{
  const nav = useNavigate();
  const params = useParams();
  return <>
    <Header 
      leftChild={<Button text={"돌아가기"} type={"POSITIVE"} onClick={()=> nav("/")} />} 
      rightChild={<Button text={"Right"} type={"NEGATIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} 
      title={`일기`} />
    <h1>{params.id} - Diary</h1>
  </>
}
export default Diary;