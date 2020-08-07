import React from "react";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import VideoDescription from "./components/VideoDescription";
import NewComment from "./components/NewComment";
import CommentList from "./components/CommentList";
import VideoList from "./components/VideoList/VideoList";
import "./styles/main.css";

// CLASS FROM HERE

class App extends React.Component {
  state = {
    commentList: [
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

    sidebarVideos: [
      {
        image: "/images/video-list-1.jpg",
        title: `Become A Travel Pro In 7O0npxe Easy Lesson`,
        name: `Scotty Cranmer`,
      },
      {
        image: "/images/video-list-2.jpg",
        title: `Les Houches The Hidden Gem Of The Chamonix`,
        name: `Scotty Cranmer`,
      },
      {
        image: "/images/video-list-3.jpg",
        title: `Travel Health Useful Medical Information For`,
        name: `Scotty Cranmer`,
      },
      {
        image: "/images/video-list-4.jpg",
        title: `Cheap Airline Tickets Great Ways To Save`,
        name: `Emily Harper`,
      },
      {
        image: "/images/video-list-5.jpg",
        title: `Take A Romantic Break In A Boutique Hotel`,
        name: `Ethan Owen`,
      },
      {
        image: "/images/video-list-6.jpg",
        title: `Choose The Perfect Accommodations`,
        name: `Lydia Perez`,
      },
      {
        image: "/images/video-list-7.jpg",
        title: `Cruising Destination Ideas`,
        name: `Timothy Austin`,
      },
      {
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
        <MainVideo />
        <VideoDescription />
        <NewComment />
        <CommentList comments={this.state.commentList} />
        <VideoList videos={this.state.sidebarVideos} />
      </div>
    );
  }
}

// CLASS TO HERE

// FUNCTIONS FROM HERE

// const commentList = [
//   {
//     name: "Micheal Lyons",
//     timestamp: 1530744338878,
//     comment:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
//   },
//   {
//     name: "Gary Wong",
//     timestamp: 1530744338878,
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//   },
//   {
//     name: "Theodore Duncan",
//     timestamp: 1530744138878,
//     comment:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//   },
// ];

// function App() {
//   const sidebarVideos = [
//     {
//       image: "/images/video-list-1.jpg",
//       title: `Become A Travel Pro In 7O0npxe Easy Lesson`,
//       name: `Scotty Cranmer`,
//     },
//     {
//       image: "/images/video-list-2.jpg",
//       title: `Les Houches The Hidden Gem Of The Chamonix`,
//       name: `Scotty Cranmer`,
//     },
//     {
//       image: "/images/video-list-3.jpg",
//       title: `Travel Health Useful Medical Information For`,
//       name: `Scotty Cranmer`,
//     },
//     {
//       image: "/images/video-list-4.jpg",
//       title: `Cheap Airline Tickets Great Ways To Save`,
//       name: `Emily Harper`,
//     },
//     {
//       image: "/images/video-list-5.jpg",
//       title: `Take A Romantic Break In A Boutique Hotel`,
//       name: `Ethan Owen`,
//     },
//     {
//       image: "/images/video-list-6.jpg",
//       title: `Choose The Perfect Accommodations`,
//       name: `Lydia Perez`,
//     },
//     {
//       image: "/images/video-list-7.jpg",
//       title: `Cruising Destination Ideas`,
//       name: `Timothy Austin`,
//     },
//     {
//       image: "/images/video-list-8.jpg",
//       title: `Train Travel On Track For Safety`,
//       name: `Scotty Cranmer`,
//     },
//   ];

//   return (
//     <div className="App">
//       <Header />
//       <MainVideo />
//       <VideoDescription />
//       <NewComment />
//       <CommentList comments={commentList} />
//       <VideoList videos={sidebarVideos} />
//     </div>
//   );
// }

// FUNCTIONS TO HERE

export default App;
