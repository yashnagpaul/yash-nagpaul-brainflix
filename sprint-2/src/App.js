import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header.jsx";
import MainVideo from "./components/MainVideo.jsx";
import VideoList from "./components/VideoList/VideoList";
import VideoDescription from "./components/VideoDescription";

import "./styles/app.css";

class App extends React.Component {
  state = {
    mainVideo: {
      id: uuidv4(),
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "Red Cow",
      image: "/images/video-list-0.jpg",
      views: "1,001,023",
      likes: "110,985",
      duration: "type of <string>",
      src: "/videos/brainstation-sample-video.mp4",
      timestamp: "12/18/2018",
      comments: [
        {
          name: "Micheal Lyons",
          timestamp: 1530744338878,
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        },
        {
          name: "Gary Wong",
          timestamp: 1530744338878,
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          name: "Theodore Duncan",
          timestamp: 1530744138878,
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },

    sidebarVideos: [
      {
        id: uuidv4(),
        image: "/images/video-list-0.jpg",
        title: `BMX Rampage: 2018 Highlights`,
        name: `Red Cow`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-1.jpg",
        title: `Become A Travel Pro In One Easy Lesson`,
        name: `Scotty Cranmer`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-2.jpg",
        title: `Les Houches The Hidden Gem Of The Chamonix`,
        name: `Scotty Cranmer`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-3.jpg",
        title: `Travel Health Useful Medical Information For`,
        name: `Scotty Cranmer`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-4.jpg",
        title: `Cheap Airline Tickets Great Ways To Save`,
        name: `Emily Harper`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-5.jpg",
        title: `Take A Romantic Break In A Boutique Hotel`,
        name: `Ethan Owen`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-6.jpg",
        title: `Choose The Perfect Accommodations`,
        name: `Lydia Perez`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-7.jpg",
        title: `Cruising Destination Ideas`,
        name: `Timothy Austin`,
      },
      {
        id: uuidv4(),
        image: "/images/video-list-8.jpg",
        title: `Train Travel On Track For Safety`,
        name: `Scotty Cranmer`,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainVideo video={this.state.mainVideo} />
        <div className="App__MainVideo-and-VideoList-container">
          {VideoDescription(this.state.mainVideo)}
          <VideoList
            mainVideo={this.state.mainVideo}
            videos={this.state.sidebarVideos}
          />
        </div>
      </div>
    );
  }
}

export default App;
