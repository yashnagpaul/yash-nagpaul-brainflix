import React from "react";

function VideoItem(props) {
  return (
    <li className="video-list__item">
      <img src={props.videoData.image} className="video-list__img" alt="" />
      <h3 className="video-list__title">{props.videoData.title}</h3>
      <p className="video-list__name">{props.videoData.name}</p>
    </li>
  );
}

export default VideoItem;
