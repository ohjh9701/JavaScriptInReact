import { useState } from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useNavigate } from "react-router-dom";

const DiaryList = ({monthlyData})=>{
  //정렬순서 상태 변화
  const [sortType, setSortType] = useState("larest");

  //페이징 라우팅
  const nav = useNavigate();

  //정렬 처리
  const getSortedMonthlyData = ()=>{
    return monthlyData.toSorted((a, b)=>{
      if(sortType === "oldest") {
        return a.createdDate - b.createdDate
      }else {
        return b.createdDate - a.createdDate
      }
    })
  }

  const sortedMonthlyData = getSortedMonthlyData();

  return <>
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={(e)=> setSortType(e.target.value)}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오랜순</option>
        </select>
        <Button text={"new 일기 작성"} type={"POSITIVE"} onClick={()=> nav("/new")}/>
      </div>
      <div className="list_wrapper">
        {sortedMonthlyData.map((data)=>{
          return <DiaryItem key={data.id} {...data} />
        })}
      </div>
    </div>
  </>
}
export default DiaryList;