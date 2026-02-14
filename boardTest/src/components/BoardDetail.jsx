import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardStateContext } from "../App";
import { BoardDispatchContext } from '../App'

const BoardDetail = ()=>{
    const nav = useNavigate();
    const state = useContext(BoardStateContext);
    const {onDelete} = useContext(BoardDispatchContext);
    const { no } = useParams();

    const targetBoard = state.find((item) => String(item.no) === String(no));

    const onClickDelete = ()=>{
      window.alert("정말 게시물을 삭제하시겠습니까?")
      onDelete(targetBoard.no)
      nav("/",{replace:true})
    }

    

    return (
    <>
    <div className="detail-container">
      <header className="detail-header">
        <div className="detail-info">
          <span className="info-no">게시글 번호: {targetBoard.no}</span>
          <span className="info-date">
            작성일: {new Date(targetBoard.createdDate).toLocaleDateString()}
          </span>
        </div>
        <h2 className="detail-title">{targetBoard.title}</h2>
        <div className="detail-writer">
          작성자: <strong>{targetBoard.writer}</strong>
        </div>
      </header>

      <section className="detail-content">
        {targetBoard.content}
      </section>

      <footer className="detail-footer">
        <button className="btn-list" onClick={() => nav("/")}>
          목록보기
        </button>
        <div className="btn-group">
          <button className="btn-edit" onClick={() => nav(`/edit/${no}`)}>
            수정하기
          </button>
          <button className="btn-delete" onClick={onClickDelete}>
            삭제하기
          </button>
        </div>
      </footer>
    </div>
  </>
);
}
export default BoardDetail;