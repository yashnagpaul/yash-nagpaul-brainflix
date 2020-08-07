import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  console.log(props);

  return (
    <section className="video-list">
      <h5 className="video-list__heading-label">NEXT VIDEO</h5>
      <ul className="video-list__list">
        {props.videos.map((video, index) => (
          <VideoItem key={index} videoData={video} />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
