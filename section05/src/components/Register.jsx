import { useState } from "react";
//회원가입 폼
//1.이름 2.생년월일 3.국적 4.자기소개

const Register = ()=>{
  const [input, setInput] = useState({
    name:"이름",
    birth:"",
    national:"",
    bio:""
  });

  const onChange = (e) => {
    console.log(e)
    setInput({
      ...input,
      [e.target.name]:e.target.value
    });
  }

  return <>
  <div>
    <label htmlFor="name">성명</label>
    <input type="text" name="name" id="name" value={input.name} onChange={onChange}/>
  </div>
  <div>
    <label htmlFor="birth">생년월일</label>
    <input type="date" name="birth" id="birth" value={input.birth} onChange={onChange}/>
  </div>
  <div>
    <label htmlFor="national">국적</label>
    <select name="national" id="national" value={input.national} onChange={onChange}>
      <option value="">국적 선택</option>
      <option value="kr">대한민국</option>
      <option value="jp">일본</option>
      <option value="us">미국</option>
      <option value="uk">영국</option>
    </select>
  </div>
  <div>
    <label htmlFor="bio">자기소개</label>
    <textarea name="bio" id="bio" cols="30" rows="10" value={input.bio} onChange={onChange}></textarea>
  </div>
  </>
}
export default Register;