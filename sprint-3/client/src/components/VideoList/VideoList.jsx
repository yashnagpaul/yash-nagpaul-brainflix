import React from "react";
import VideoItem from "./VideoItem";
import { Link } from "react-router-dom";

function VideoList(props) {
  const filteredVideos = props.videos.filter(
    (video) => video.title !== props.mainVideo.title
  );
  return (
    <section className="video-list">
      <h5 className="video-list__heading-label">NEXT VIDEO</h5>
      <ul className="video-list__list">
        {filteredVideos.map((video) => (
          <Link to={`/videos/${video.id}`} key={video.id}>
            <VideoItem videoData={video} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
