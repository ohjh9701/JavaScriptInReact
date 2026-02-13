import Header from './Header'
import Button from './Button'
import Viewer from './Viewer'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { DiaryDispatchContext, DiaryStateContext } from '../App'

//날짜를 문자열로 리턴하는 함수
const getStringDate= (targetDate)=>{
  //yyyy-mm-dd 형식
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth()+1;
  let date = targetDate.getDate();

  if(month < 10) month = `0${month}`
  if(date < 10) date = `0${date}`
  return `${year}-${month}-${date}`;
}

const Diary = ()=>{
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);

   // useState와 useEffect를 제거하고 useMemo로 대체
      const curDiaryItem = useMemo(()=>{
        return data.find((item)=>String(item.id) === String(params.id))
      }, [data, params.id]) // data나 id가 바뀔 때만 다시 계산
    
      // // 데이터 확인 및 리다이렉트 로직
      // useEffect(()=>{
      //   if (data.length < 0 && !curDiaryItem) {
      //     window.alert("존재하지 않는 일기입니다.")
      //     nav("/", {replace: true})
      //   }
      // }, [data, curDiaryItem, nav])
     
      // 데이터가 로드될 때까지 렌더링 방어
      if (!curDiaryItem) {
      return <div>데이터를 불러오는 중입니다...</div>;
    }
    const title = getStringDate(new Date(curDiaryItem.createdDate))
  return <>
    <Header 
      leftChild={<Button text={"< 돌아가기"} type={"POSITIVE"} onClick={()=> nav(-1)} />} 
      rightChild={<Button text={"수정하기"} type={"NEGATIVE"} onClick={()=> nav(`/edit/${params.id}`)}/>} 
      title={`${title} 기록된 일기`} />
    <Viewer initData={curDiaryItem}/>
  </>
}
export default Diary;