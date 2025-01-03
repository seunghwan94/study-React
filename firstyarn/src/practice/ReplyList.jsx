import React from 'react';
import Reply from './Reply';

const comments = [
  {
    name: "이승환",
    comment: "댓글 연습 1"
  },
  {
    name: "Mago",
    comment: "댓글 연습 2"
  },
  {
    name: "lee seunghwan",
    comment: "댓글 연습 3"
  },
]


const ReplyList = () => {
  return (
    <div>
      {comments.map((comment,idx)=>{
        return (
          <Reply key={idx} name={comment.name} comment={comment.comment}/>
        );
      })}
    </div>
  );
}

export default ReplyList;
