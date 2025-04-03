import "./Card.css";
export default function Card() {
   return (
      <div className="Card">
         {/* <img src="" alt="" /> */}
         <div>이미지</div>

         <article className="content">
            <title>[번역]최악의 개발자</title>
            <p>
               언제쯤 수업을 따라갈 수 있다는 것인가. 무슨 내용인지 도무지...{" "}
            </p>
            <p>2025 04 03</p>
            <p>댓글</p>
         </article>

         <div className="info">
            <p>by gompro</p>
            <p>like</p>
         </div>
      </div>
   );
}
