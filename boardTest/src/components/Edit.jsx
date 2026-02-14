import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardStateContext } from "../App";
import { BoardDispatchContext } from '../App'


const Edit = ()=>{
    const nav = useNavigate();
    const state = useContext(BoardStateContext);
    const {onUpdate} = useContext(BoardDispatchContext);
    const { no } = useParams();
    const targetBoard = state.find((item) => String(item.no) === String(no));
    const [input, setInput] = useState({
        ...targetBoard
    });

     const onChangeBoardData = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    //no, title, writer, content, createdDate
    const onClickUpdateBoard = ()=>{
        onUpdate(input.no, input.title, input.writer, input.content, input.createdDate)
        nav("/",{replace:true})
    }


    return <>
        <div className="edit_board">
            <div className="detail-info">
          <span className="info-no">게시글 번호: {input.no}</span>
          <span className="info-date">
            작성일: {new Date(input.createdDate).toLocaleDateString()}
          </span>
            <div className="input-group">
      <label>제목</label>
      <input name="title" value={input.title} onChange={onChangeBoardData} type="text"/>
    </div>
    <div className="input-group">
      <label>내용</label>
      <textarea name="content" value={input.content} onChange={onChangeBoardData}  rows="10"></textarea>
    </div>
    <div className="form-actions">
      <button type="button" className="cancel-btn">수정취소</button>
      <button type="button" className="submit-btn" onClick={onClickUpdateBoard}>수정하기</button>
    </div>
        </div>
        </div>
    </>
}
export default Edit;