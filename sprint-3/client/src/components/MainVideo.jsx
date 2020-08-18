import React from "react";
import video from "../assets/videos/brainstation-sample-video.mp4";

class MainVideo extends React.Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  render() {
    if (this.props.video.video) {
      return (
        <div className="main-video">
          <div className="main-video__controls">
            <button
              className="main-video__btn main-video__btn--play "
              ref="play-btn"
              onClick={() => {
                this.video.current.play();
              }}
            >
              <img src="/icons/SVG/Icon-play.svg" alt="" />
            </button>
            <div className="main-video__progress-bar">
              <div className="main-video__progress-timeline">
                <div className="main-video__progress-scrubber"></div>
              </div>
              <div className="main-video__progress-text">
                0:00 / {this.props.video.duration}
              </div>
            </div>
            <div className="main-video__btn-group">
              <button className="main-video__btn">
                <img src="/icons/SVG/Icon-fullscreen.svg" alt="" />
                <img src="/icons/SVG/Icon-volume.svg" alt="" />
              </button>
            </div>
          </div>
          <video
            className="main-video__video"
            poster={this.props.video.image}
            ref={this.video}
          >
            <source
              type="video/mp4"
              src={`${this.props.video.video}?api_key=yash`}
            ></source>
          </video>
        </div>
      );
    } else return <p>fetching data</p>;
  }
}

export default MainVideo;
