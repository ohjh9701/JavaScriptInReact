import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isTodoDropdownOpen, setIsTodoDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const todoDropdown = () => {
    setIsTodoDropdownOpen(!isTodoDropdownOpen);
    setIsProductDropdownOpen(false);
  };
  const productDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsTodoDropdownOpen(false);
  };

  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              MAIN
            </Link>
            <Link to="/about" className="nav-item">
              ABOUT
            </Link>

            {/* TODO 드롭다운 영역 */}
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={todoDropdown}>
                TODO<span className="arrow">▾</span>
              </button>

              {isTodoDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/todo/list">LIST</Link>
                  </li>
                  <li>
                    <Link to="/todo/add">ADD</Link>
                  </li>
                  <li>
                    <Link to="/todo/read/20">READ</Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link to="#">예비용</Link>
                  </li>
                </ul>
              )}
            </div>
            {/* PRODUCT 드롭다운 영역 */}
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={productDropdown}>
                PRODUCT<span className="arrow">▾</span>
              </button>

              {isProductDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/product/list">LIST</Link>
                  </li>
                  <li>
                    <Link to="/product/add">ADD</Link>
                  </li>
                  <li>
                    <Link to="/product/read/20">READ</Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link to="#">예비용</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="nav-right">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
