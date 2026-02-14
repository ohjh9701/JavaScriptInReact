import { Link } from "react-router-dom";

const Header = ()=>{
    return <>
         <Link to={"/"}> <h1>OHBoard</h1> </Link>
        <hr />
    </>
}
export default Header;