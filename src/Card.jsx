import "./Card.css";
// import CPImage from "./CPImage";
import CPContent from "./CPContent";
import CPInfo from "./CPInfo";

// 컴포넌트의 함수이름의 시작은 대문자로 컴포넌트를 뜻하는 CP 붙이고 단수로 적기
// function CPImage, function CPContent, function CPInfo
export default function Card() {
   const topics = "제목";
   const bodies = "어쩌구저쩌구";
   const userID = "aa";
   const id = "bb";
   return (
      <div>
         {/* <CPImage images={images} /> */}
         <CPContent topics={topics} bodies={bodies} />
         <CPInfo userID={userID} id={id} />
      </div>
   );
}
