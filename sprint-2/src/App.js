import React from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./components/Header.jsx";
import MainVideo from "./components/MainVideo.jsx";
import VideoList from "./components/VideoList/VideoList";
import VideoDescription from "./components/VideoDescription";

import "./styles/app.css";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    mainVideo: {},

    sidebarVideos: [],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          render={(routeProps) => (
            <MainVideo video={this.state.mainVideo} {...routeProps} />
          )}
        />
        <div className="App__MainVideo-and-VideoList-container">
          <VideoDescription video={this.state.mainVideo} />
          <VideoList
            mainVideo={this.state.mainVideo}
            videos={this.state.sidebarVideos}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=yash"
      )
      .then((response) => {
        this.setState({ mainVideo: response.data });
      });
    axios
      .get("https://project-2-api.herokuapp.com/videos/?api_key=yash")
      .then((result) => this.setState({ sidebarVideos: result.data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.url !== this.props.match.url) {
      let pathToVideo = this.props.match.url;
      axios
        .get(`https://project-2-api.herokuapp.com${pathToVideo}/?api_key=yash`)
        .then((response) => {
          this.setState({ mainVideo: response.data });
        });
    }
  }
}

export default App;
