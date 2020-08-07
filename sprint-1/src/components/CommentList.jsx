import React from "react";
import CommentItem from "./CommentItem";

function CommentList(props) {
  console.log(props);

  return (
    <ul className="comments-list">
      {props.comments.map((comment, index) => (
        <CommentItem key={index} commentData={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
