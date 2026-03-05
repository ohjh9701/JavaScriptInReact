import Header from "../include/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
