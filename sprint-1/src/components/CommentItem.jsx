import React from "react";

function CommentItem(props) {
  return (
    <li className="comment">
      <div className="comment__name-date-container">
        <p className="comment__name">{props.commentData.name}</p>
        <p className="comment__timestamp">
          {new Date(props.commentData.timestamp).toDateString()}
        </p>
      </div>
      <p className="comment__content">{props.commentData.comment}</p>
    </li>
  );
}

export default CommentItem;
