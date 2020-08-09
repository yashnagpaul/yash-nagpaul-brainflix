import React from "react";

const MainVideo = (props) => {
  return (
    <div className="main-video">
      <video
        className="main-video__video"
        poster={props.video.image}
        src={props.video.src}
      ></video>
    </div>
  );
};

export default MainVideo;
