import ListComponent from "../../components/product/ListComponent";
import Header from "../../include/Header";
import "./ListPage.css";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  return (
    <>
      <div className="main-container">
        <Header />
        <ListComponent />
      </div>
    </>
  );
};

export default ListPage;
