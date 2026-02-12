import { useNavigate } from 'react-router-dom';
import {getEmotionImage} from '../util/getEmotionImage'
import Button from './Button';
import './DiaryItem.css'


const DiaryItem = ({id, emotionId, createdDate, content})=>{
  const nav = useNavigate();
  return <>
    <div className="DiaryItem">
      <div className="img_section" onClick={()=>nav(`/Diary/${id}`)}>
        <img src={getEmotionImage(emotionId)} alt='감정표현 이미지' />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="content">
        {content}
      </div>
      </div>
      <div className="button_section">
      <Button text={"수정하기"} onClick={()=>nav(`/edit/${id}`)} />
      </div>
    </div>
  </>
}
export default DiaryItem;