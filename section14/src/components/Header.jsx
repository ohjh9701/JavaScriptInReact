import { Link, useNavigate } from "react-router-dom";

const Header = ()=>{
  const nav = useNavigate();

  const onClickGoPage = (e)=>{
    nav(`/${e.target.value}`)
  }

  return <>
    <div>
      <table>
        <tr>
          {/* <th><a href="/">Home</a></th> ... </th> a herf는 페이지 전체가 깜빡여서 사용 X */}
          <Link to={"/"}>Home</Link> || <Link to={"/new"}>New</Link> || <Link to={"/diary"}>Diary</Link> || <Link to={"/edit"}>Edit</Link><br />
          
          <button onClick={onClickGoPage} value={""}>Home 바로가기</button>
          <button onClick={onClickGoPage} value={"new"}>New 바로가기</button>
          <button onClick={onClickGoPage} value={"diary"}>Diary 바로가기</button>
          <button onClick={onClickGoPage} value={"edit"}>Edit 바로가기</button>
        </tr>
      </table>
      <hr />
    </div>
  </>
}
export default Header;