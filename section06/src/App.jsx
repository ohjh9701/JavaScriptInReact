import './App.css';
import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
const [count, setCount] = useState(0);

const onClickButton = (e) => {
    setCount(count + parseInt(e.target.value));
  }

 return (
 <>
 <div className="App">
  {/* 제목 */}
  <h1>Counter App</h1>
  {/* 카운터뷰 */}
  <Viewer count={count} />
  {/* 카운터 이벤트버튼 */}
  <Controller onClickButton = {onClickButton} />
 </div>
 </>
 );
}
export default App;
