import Header from './Header'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const New = ()=>{
  const nav = useNavigate();
  return <>
      <Header 
      leftChild={<Button text={"돌아가기"} type={"POSITIVE"} onClick={()=> nav("/")} />} 
      rightChild={<Button text={"Right"} type={"NEGATIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} 
      title={"new 새 일기 쓰기"} />

    <h1>New</h1>
  </>
}
export default New;