import React from "react";
import NewComment from "./NewComment";
import CommentItem from "./CommentItem";

const CommentDescription = (props) => {
  console.log(props.comments);
  return (
    <div className="video-description">
      <h1 className="video-description__title">{props.title}</h1>
      <div className="video-description__date-channel-views-likes-container">
        <div className="video-description__date-channel-container">
          <p className="video-description__channel-name">{props.channel}</p>
          <p className="video-description__date-posted">{props.timestamp}</p>
        </div>

        <div className="video-description__views-likes-container">
          <img
            className="video-description__views-icon"
            src="/icons/svg/icon-views.svg"
            alt=""
          />
          <p className="video-description__views">{props.views} </p>
          <img
            className="video-description__likes-icon"
            src="/icons/svg/icon-likes.svg"
            alt=""
          />
          <p className="video-description__likes">{props.likes}</p>
        </div>
      </div>
      <p className="video-description__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>

      {NewComment()}

      <ul className="comments-list">
        {props.comments.map((comment, index) => (
          <CommentItem key={index} commentData={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentDescription;
