import { useParams } from "react-router-dom";
import Header from './Header'
import Button from './Button'
import { useNavigate } from "react-router-dom";

const Edit = ()=>{
  const nav = useNavigate();
  const params = useParams();

  return <>
  <Header 
      leftChild={<Button text={"돌아가기"} type={"POSITIVE"} onClick={()=> nav("/")} />} 
      rightChild={<Button text={"Right"} type={"NEGATIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} 
      title={"new 새 일기 쓰기"} />
    <h2>{params.id} Edit</h2>
  </>
}
export default Edit;