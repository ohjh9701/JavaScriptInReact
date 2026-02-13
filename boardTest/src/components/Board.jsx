import { useNavigate } from "react-router-dom";

const Board = ({ no, title, writer, createdDate }) => {
  const nav = useNavigate();

  return (
    <tr className="board-item-row" onClick={() => nav(`/BoardDetail/${no}`)}>
      <td className="col-no">{no}</td>
      <td className="col-title">{title}</td>
      <td className="col-writer">{writer}</td>
      <td className="col-date">{new Date(createdDate).toLocaleDateString()}</td>
    </tr>
  );
};

export default Board;