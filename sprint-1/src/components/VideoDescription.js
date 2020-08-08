import React from "react";

const VideoDescription = () => {
  return (
    <section className="video-description">
      <h1 className="video-description__title">BMX Rampage: 2018 Highlights</h1>
      <div className="video-description__date-channel-container">
        <p className="video-description__channel-name">By Red Cow</p>
        <p className="video-description__date-posted">12/18/2018</p>
      </div>
      <div className="video-description__views-likes-container">
        <p className="video-description__views">1,001,023 </p>
        <p className="video-description__likes">110,985</p>
      </div>
      <p className="video-description__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </section>
  );
};

export default VideoDescription;
