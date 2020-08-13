import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import UploadPage from "./components/UploadPage/UploadPage";
// import VideoItem from "./components/VideoList/VideoItem";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/videos/:id" component={App} />
        <Route path="/upload" component={UploadPage} />
        {/* <Route
          path="/:id"
          render={(routeProps) => <VideoItem videoData={this.state.videos} />}
        /> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
