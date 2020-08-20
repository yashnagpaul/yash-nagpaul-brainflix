import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UploadPage extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/videos", {
      title: `${this.refs.title.value}`,
      description: `${this.refs.description.value}`,
      channel: "Mohan Muruge",
      image: "https://i.imgur.com/ENegK4F.jpg",
    });
    event.target.reset();
  };

  render() {
    return (
      <div>
        <Header className="upload-page__header" />
        <div className="upload-page">
          <h1 className="upload-page__heading">Upload Video</h1>

          <div className="upload-page__wraps-thumbnail-title-description">
            <div className="upload-page__thumbnail-label-container">
              <p className="upload-page__thumbnail-label">VIDEO THUMBNAIL</p>
              <img
                className="upload-page__thumbnail-img"
                src="../../images/Upload-video-preview.jpg"
                alt="thumbnail"
              />
            </div>

            <form
              className="upload-page__title-description-container"
              onSubmit={this.submitHandler}
            >
              <p className="upload-page__title-label">TITLE YOUR VIDEO</p>
              <input
                className="upload-page__title-input"
                type="text"
                ref="title"
                placeholder="Add a title to your video"
              />
              <p className="upload-page__description-label">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea
                className="upload-page__description-input"
                ref="description"
                placeholder="Add a description of your video"
              ></textarea>
              <div className="upload-page__buttons-container">
                <input
                  className="upload-page__submit-btn"
                  type="submit"
                  value="PUBLISH"
                />
                <Link to="/">
                  <p className="upload-page__cancel-btn">CANCEL</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
