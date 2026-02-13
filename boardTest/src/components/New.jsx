import { useContext, useState } from "react";
import { BoardDispatchContext } from '../App'
import { useNavigate } from "react-router-dom";




const New = ()=>{
    const nav = useNavigate();
    const {onCreate} = useContext(BoardDispatchContext);
    const [board, setBoard] = useState({
        title:"", writer:"", content:""
    });
    const onChangeBoardData = (e)=>{
        setBoard({
            ...board,
            [e.target.name]:e.target.value
        })
    }

   const onClickCreateBoard = () => {
    if (board.title === "" || board.writer === "") {
      alert("제목과 작성자를 입력해주세요!");
      return;
    }

    onCreate(board.title, board.writer, board.content);
    alert("게시글이 등록되었습니다.");
    nav("/")
    };

    return <>
        <div className="form-container">
  <h2>새 글 작성</h2>
    <div className="input-group">
      <label>제목</label>
      <input name="title" value={board.title} onChange={onChangeBoardData} type="text" placeholder="제목을 입력하세요" />
    </div>
    <div className="input-group">
      <label>작성자</label>
      <input name="writer" value={board.writer} onChange={onChangeBoardData}  type="text" placeholder="닉네임" />
    </div>
    <div className="input-group">
      <label>내용</label>
      <textarea name="content" value={board.content} onChange={onChangeBoardData}  rows="10" placeholder="내용을 작성해주세요"></textarea>
    </div>
    <div className="form-actions">
      <button type="button" className="cancel-btn">취소</button>
      <button type="button" className="submit-btn" onClick={onClickCreateBoard}>등록하기</button>
    </div>
</div>
    </>
}
export default New;