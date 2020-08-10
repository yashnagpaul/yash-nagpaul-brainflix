import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  console.log(props.videos, props.mainVideo);
  const filteredVideos = props.videos.filter(
    (video) => video.title !== props.mainVideo.title
  );
  return (
    <section className="video-list">
      <h5 className="video-list__heading-label">NEXT VIDEO</h5>
      <ul className="video-list__list">
        {filteredVideos.map((video) => (
          <VideoItem key={video.id} videoData={video} />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
