import React from "react";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import VideoDescription from "./components/VideoDescription";
import NewComment from "./components/NewComment";
import CommentsToBePosted from "./components/CommentsToBePosted";

function App() {
  return (
    <div className="App">
      <Header />
      <MainVideo />
      <VideoDescription />
      <NewComment />
      <CommentsToBePosted />
    </div>
  );
}

export default App;
