import { getEmotionImage } from "../util/getEmotionImage";
import './Viewer.css'

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Viewer = ({initData})=>{
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(initData.emotionId));

 

  return <>
  <div className="Viewer">
    <section className="img_section">
      <h4>오늘의 감정</h4>
      <div className="emotion_img_wrapper" >
        <img src={getEmotionImage(emotionItem.emotionId)} />
        <div>{emotionItem.emotionName}</div>
      </div>
    </section>
    <section className="content_section">
      <h4>오늘의 일기</h4>
      <div className="content_wrapper">
        <p>{initData.content}</p>
      </div>
    </section>
  </div>
  </>
}
export default Viewer;