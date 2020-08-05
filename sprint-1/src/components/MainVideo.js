import React from "react";
import Video from "../assets/videos/brainstation-sample-video.mp4";

const MainVideo = () => {
  return (
    <div className="main-video">
      <video src={Video}></video>
    </div>
  );
};

export default MainVideo;
