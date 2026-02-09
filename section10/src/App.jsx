import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import InputController from './components/InputController';

function App() {

  const [calculate, setCalculate] = useState(0);


  const onClickCalculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        setCalculate(parseInt(num1) + parseInt(num2))
        break;
      case '-':
        setCalculate(parseInt(num1) - parseInt(num2))
        break;
      case '*':
        setCalculate(parseInt(num1) * parseInt(num2))
        break;
      case '/':
        setCalculate(parseInt(num1) / parseInt(num2))
        break;
    };
  };

  return (
  <>
   <div className='App'>
    <div>
      <h1>계산기</h1>
    </div>
      <Viewer calculate={calculate}/>
      <InputController onClickCalculate={onClickCalculate}/>
      /</div>
    </>
  )};
export default App;
