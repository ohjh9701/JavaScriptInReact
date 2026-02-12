import Header from './Header'
import Button from './Button'
import DiaryList from './DiaryList'
import { DiaryStateContext } from '../App'
import { useContext, useState } from 'react'

const Home = ()=>{
  //공유자원props 가져오기
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  //이전달과 다음달 이벤트 처리
  const onDecreateMonth = (e)=>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1))
  }
  const onIncreaseMonth = (e)=>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1))
  }

  //26년 2월달(시작일~끝나는날) 해당되는 일기만 필터링하라
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0,0,0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23,59,59).getTime();

  const monthlyData = state.filter((item)=>item.createdDate >= beginTime && item.createdDate <= endTime)

  return <>
  <Header
  leftChild={<Button text={"< 이전달"} onClick={onDecreateMonth} />}
  rightChild={<Button text={"다음달 >"} onClick={onIncreaseMonth} />}
  title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} />

  <DiaryList monthlyData={monthlyData} />

  </>
}
export default Home;