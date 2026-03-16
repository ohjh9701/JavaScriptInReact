import { useEffect, useRef, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/productsApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import InfoModal from "../common/InfoModal";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/todoApi";

const initState = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [],
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ModifyComponent = ({ pno, moveToProductList, moveToProductRead }) => {
  const [product, setProduct] = useState({ ...initState });
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [infoModalOnDel, setInfoModalOnDel] = useState(false);
  const [fetching, setFetching] = useState(false);
  const uploadRef = useRef();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFetching(true);
    }, 0);

    putOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
    clearTimeout(timer);
  }, [pno]);

  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const deleteOldImages = (imageName) => {
    const resultNames = product.uploadFileNames.filter(
      (name) => name !== imageName,
    );
    setProduct({ ...product, uploadFileNames: resultNames });
  };

  const handleClickModify = () => {
    const files = uploadRef.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append("uploadFileNames", product.uploadFileNames[i]);
    }
    setFetching(true);
    //수정 처리
    putOne(pno, formData).then((data) => {
      setResult("Modified");
      setFetching(false);
    });
  };
  const handleClickDelete = () => {
    // 실제 삭제 로직 호출 (예시)
    deleteOne(pno).then((data) => {
      console.log(data); // 데이터가 정상적으로 오는지 확인
      //데이터 메시지를 보여주는 모달창 생성
      setInfoModalOnDel(true);
    });
  };

  const closeModal = () => {
    //모달창을 isShow 감춘다
    setInfoModalOn(false);
    moveToProductRead(pno);
  };
  const closeModalDel = () => {
    //모달창을 isShow 감춘다
    setInfoModalOnDel(false);
    moveToProductList();
  };

  return (
    <div className="modify-container">
      {fetching && <FetchingModal />}

      <div className="modify-form">
        <div className="modify-form-group">
          <label className="modify-label">PNAME</label>
          <input
            className="modify-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PRICE</label>
          <input
            className="modify-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DESCRIPTION</label>
          <textarea
            className="modify-control"
            name="pdesc"
            rows={5}
            value={product.pdesc}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DELETE (Flag)</label>
          <select
            className="modify-select"
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
          >
            <option value={false}>사용 (Keep)</option>
            <option value={true}>삭제 (Delete)</option>
          </select>
        </div>

        <div className="modify-form-group">
          <label className="modify-label">New Files</label>
          <input
            className="modify-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 기존 이미지 목록 */}
      <div className="modify-image-grid">
        {product.uploadFileNames.map((imgFile, i) => (
          <div className="modify-image-card" key={i}>
            <button
              className="btn-img-delete"
              type="button"
              onClick={() => deleteOldImages(imgFile)}
            >
              DELETE
            </button>
            <img alt="product" src={`${host}/api/products/view/s_${imgFile}`} />
          </div>
        ))}
      </div>

      <div className="modify-button-group">
        <button
          className="btn-modify-action btn-del"
          type="button"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="btn-modify-action btn-mod"
          type="button"
          onClick={handleClickModify}
        >
          MODIFY{" "}
        </button>
        <button
          className="btn-modify-action btn-list"
          type="button"
          onClick={moveToProductList}
        >
          LIST
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
