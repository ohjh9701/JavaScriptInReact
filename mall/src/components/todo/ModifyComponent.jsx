import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import InfoModal from "../common/InfoModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno, moveToList, moveToRead }) => {
  const [todo, setTodo] = useState({ ...initState });
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [infoModalOnDel, setInfoModalOnDel] = useState(false);

  useEffect(() => {
    getOne(tno).then((data) => setTodo(data));
  }, [tno]);

  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTodoComplete = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      complete: value === "Y", // 불리언 값으로 직접 저장
    });
  };

  const handleClickModify = () => {
    putOne(todo).then((data) => {
      console.log(data); // 데이터가 정상적으로 오는지 확인
      //데이터 메시지를 보여주는 모달창 생성
      setInfoModalOn(true);
    });
  };
  const handleClickDelete = () => {
    // 실제 삭제 로직 호출 (예시)
    deleteOne(tno).then((data) => {
      console.log(data); // 데이터가 정상적으로 오는지 확인
      //데이터 메시지를 보여주는 모달창 생성
      setInfoModalOnDel(true);
    });
  };

  const closeModal = () => {
    //모달창을 isShow 감춘다
    setInfoModalOn(false);
    moveToRead(tno);
  };
  const closeModalDel = () => {
    //모달창을 isShow 감춘다
    setInfoModalOnDel(false);
    moveToList();
  };

  return (
    <div className="modify-container">
      <InfoModal
        show={infoModalOn}
        title={`${todo.title} 게시글 수정`}
        content={`New ${tno} 수정완료`}
        callbackFn={closeModal}
      />
      <InfoModal
        show={infoModalOnDel}
        title={`${todo.title} 게시글 삭제`}
        content={`New ${tno} 삭제완료`}
        callbackFn={closeModalDel}
      />
      <div className="form-group">
        <label className="form-label">TNO</label>
        <input className="form-control" value={tno} type="text" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">WRITER</label>
        <input
          className="form-control"
          value={todo.writer}
          type="text"
          disabled
        />
      </div>

      <div className="form-group">
        <label className="form-label">TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">DATE</label>
        <input
          className="form-control"
          name="dueDate"
          value={todo.dueDate}
          type="date"
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">COMPLETE</label>
        <select
          className="form-select"
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComplete}
        >
          <option value="Y">Completed</option>
          <option value="N">Not Yet</option>
        </select>
      </div>
      <div className="button-group">
        <button
          className="btn btn-modify"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="btn btn-delete"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
