import { useCallback } from "react";
import Header from "../../include/Header";
import "./ReadPage.css";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { tno } = useParams();
  const nav = useNavigate();
  const [queryParams] = useSearchParams();

  const { moveToList, moveToModify } = useCustomMove();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const queryStr = createSearchParams({ page, size }).toString();
  //동적 페이지 이동
  const moveModify = useCallback(() => {
    alert("수정하시겠습니까?");
    nav({
      pathname: `/todo/modify/${tno}`,
      search: queryStr,
    });
  }, [nav, tno, queryStr]);

  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent
          tno={tno}
          moveToList={moveToList}
          moveToModify={moveToModify}
        />
      </div>
    </>
  );
};

export default ReadPage;
