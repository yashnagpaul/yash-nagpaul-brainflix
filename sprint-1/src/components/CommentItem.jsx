import React from "react";

function CommentItem(props) {
  return (
    <li className="comment">
      <p className="comment__name">{props.commentData.name}</p>
      <p className="comment__timestamp">{props.commentData.timestamp}</p>
      <p className="comment__content">{props.commentData.comment}</p>
    </li>
  );
}

export default CommentItem;
