import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import MainVideo from "./components/MainVideo.jsx";
import VideoList from "./components/VideoList/VideoList";
import VideoDescription from "./components/VideoDescription";

import "./styles/app.css";

const apiKey = "8b50868d-4e62-4256-b64a-acfc383944fe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

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
          <VideoDescription
            video={this.state.mainVideo}
            fetchData={this.fetchData}
          />
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
        `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${apiKey}`
      )
      .then((response) => {
        this.setState({ mainVideo: response.data });
      });
    axios
      .get("http://localhost:8080/videos")
      .then((result) => this.setState({ sidebarVideos: result.data }));
  }

  componentDidUpdate(prevProps, prevState) {
    let pathToVideo;
    if (prevProps.match.url !== this.props.match.url) {
      if (this.props.match.url === "/")
        pathToVideo = `${this.props.match.url}videos/1af0jruup5gu`;
      else pathToVideo = this.props.match.url;

      axios
        .get(
          `https://project-2-api.herokuapp.com${pathToVideo}/?api_key=${apiKey}`
        )
        .then((response) => {
          this.setState({ mainVideo: response.data });
        });
    }
  }

  // fetchData function is passed to VideoDescription as a prop.
  // When the "Comment" button is clicked, this function is called
  // to display the newly added comment.

  fetchData() {
    let pathToVideo;
    if (this.props.match.url === "/")
      pathToVideo = `${this.props.match.url}videos/1af0jruup5gu`;
    else pathToVideo = this.props.match.url;
    axios
      .get(
        `https://project-2-api.herokuapp.com${pathToVideo}/?api_key=${apiKey}`
      )
      .then((response) => {
        this.setState({ mainVideo: response.data });
      });
  }
}
export default App;
