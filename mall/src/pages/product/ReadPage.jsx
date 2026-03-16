import Header from "../../include/Header";
import "./ReadPage.css";
import ReadComponent from "../../components/product/ReadComponent";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { pno } = useParams();
  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent pno={pno} />
      </div>
    </>
  );
};

export default ReadPage;
