import { useState, useRef } from 'react';
import '../css/Editor.css'

const Editor = ({onCreate}) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('')
  }

  const onKeyDown = (e)=>{
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  return <>
    <div className="Editor">
      <input value={content} onChange={onChangeContent} onKeyDown={onKeyDown} ref={inputRef} placeholder="오늘의 할 일은...?" />
      <button onClick={onSubmit}>Add List</button>
  </div>
  </>
}

export default Editor;