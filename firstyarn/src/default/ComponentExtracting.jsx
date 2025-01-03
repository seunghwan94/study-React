
import ComponentExtractingUserInfo from "./ComponentExtractingUserInfo";

// 컴포넌트 추출 방법
const ComponentExtracting = function(props){
  // 디스트럭트
  const {author, text, date} = props;
  const eles = 
    <div className="comment">
      <ComponentExtractingUserInfo author={author} />
      <div className="comment-text">{text}</div>
      <div className="comment-date">{formatDate(date)}</div>
    </div>

  return eles;
}

function formatDate(d){
  return new Date(d).toLocaleDateString("ko-KR");
}

export default ComponentExtracting