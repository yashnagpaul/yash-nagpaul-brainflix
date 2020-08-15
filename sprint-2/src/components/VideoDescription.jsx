import React from "react";
import NewComment from "./NewComment";
import CommentItem from "./CommentItem";
// import { render } from "react-dom";

class VideoDescription extends React.Component {
  // if (this.props.video.comments === undefined) {
  //   return <p>Loading comments</p>;
  // } else

  render() {
    console.log(this.props);
    return (
      <div className="video-description">
        <h1 className="video-description__title">{this.props.video.title}</h1>
        <div className="video-description__date-channel-views-likes-container">
          <div className="video-description__date-channel-container">
            <p className="video-description__channel-name">
              By {this.props.video.channel}
            </p>
            <p className="video-description__date-posted">
              {new Date(this.props.video.timestamp).toDateString()}
            </p>
          </div>

          <div className="video-description__views-likes-container">
            <img
              className="video-description__views-icon"
              src="/icons/svg/icon-views.svg"
              alt=""
            />
            <p className="video-description__views">
              {this.props.video.views}{" "}
            </p>
            <img
              className="video-description__likes-icon"
              src="/icons/svg/icon-likes.svg"
              alt=""
            />
            <p className="video-description__likes">{this.props.video.likes}</p>
          </div>
        </div>
        <p className="video-description__description">
          {this.props.video.description}
        </p>

        <NewComment videoId={this.props.video.id} />

        <ul className="comments-list">
          {this.props.video.comments ? (
            this.props.video.comments
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((comment, index) => (
                <CommentItem key={index} commentData={comment} />
              ))
          ) : (
            <p>Loading Comments</p>
          )}

          {/* {this.props.video.comments.map((comment, index) => (
            <CommentItem key={index} commentData={comment} />
          ))} */}
        </ul>
      </div>
    );
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.video.comments !== this.props.video.comments) {
  //     console.log("updated!");
  //     // this.render();
  //   }
  // }
}

export default VideoDescription;
