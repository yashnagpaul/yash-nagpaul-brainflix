import React from "react";

const MainVideo = (props) => {
  return (
    <div className="main-video">
      <div className="main-video__controls">
        <button className="main-video__btn">
          <img src="/icons/SVG/Icon-play.svg" alt="" />
        </button>
        <div className="main-video__progress-bar">
          <div className="main-video__progress-timeline">
            <div className="main-video__progress-scrubber"></div>
          </div>
          <div className="main-video__progress-text">0:00 / 0:42</div>
        </div>
        <div className="main-video__btn-group">
          <button className="main-video__btn">
            <img src="/icons/SVG/Icon-fullscreen.svg" alt="" />
          </button>
          <button className="main-video__btn">
            <img src="/icons/SVG/Icon-volume.svg" alt="" />
          </button>
        </div>
      </div>
      <video
        className="main-video__video"
        poster={props.video.image}
        src={props.video.src}
      ></video>
    </div>
  );
};

export default MainVideo;
