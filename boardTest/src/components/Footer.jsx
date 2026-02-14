const Footer = ()=>{

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">OHBoard</div>
        <div className="footer-info">
          <p>
            <span>관리자 : <strong>오지훈</strong></span>
            <span className="divider">|</span>
            <span>전화번호 : <strong>010-8735-4875</strong></span>
          </p>
          <p>이메일 : <strong>ohjh4875@gmail.com</strong></p>
        </div>
        <div className="footer-copyright">
          © 2026 OHBoard. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;