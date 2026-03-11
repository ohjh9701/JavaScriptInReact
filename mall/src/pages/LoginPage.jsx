import Header from "../include/Header";
import "./LoginPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Login Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
