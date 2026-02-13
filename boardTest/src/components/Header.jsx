import { Link } from "react-router-dom";
import './Header.css'

const Header = ()=>{
    return <>
         <div className="header-container">
           <Link to={"/"}> <h1>OHBoard</h1> </Link>
        </div>
        <hr />
    </>
}
export default Header;