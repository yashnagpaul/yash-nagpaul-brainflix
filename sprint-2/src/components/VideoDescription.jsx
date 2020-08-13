import React from "react";
import NewComment from "./NewComment";
import CommentItem from "./CommentItem";

const VideoDescription = ({ video }) => {
  // if (video.comments === undefined) {
  //   return <p>Loading comments</p>;
  // } else
  return (
    <div className="video-description">
      <h1 className="video-description__title">{video.title}</h1>
      <div className="video-description__date-channel-views-likes-container">
        <div className="video-description__date-channel-container">
          <p className="video-description__channel-name">By {video.channel}</p>
          <p className="video-description__date-posted">
            {new Date(video.timestamp).toDateString()}
          </p>
        </div>

        <div className="video-description__views-likes-container">
          <img
            className="video-description__views-icon"
            src="/icons/svg/icon-views.svg"
            alt=""
          />
          <p className="video-description__views">{video.views} </p>
          <img
            className="video-description__likes-icon"
            src="/icons/svg/icon-likes.svg"
            alt=""
          />
          <p className="video-description__likes">{video.likes}</p>
        </div>
      </div>
      <p className="video-description__description">{video.description}</p>

      <NewComment />

      <ul className="comments-list">
        {video.comments ? (
          video.comments.map((comment, index) => (
            <CommentItem key={index} commentData={comment} />
          ))
        ) : (
          <p>Loading Comments</p>
        )}
        {/* {video.comments.map((comment, index) => (
            <CommentItem key={index} commentData={comment} />
          ))} */}
      </ul>
    </div>
  );
};

export default VideoDescription;
