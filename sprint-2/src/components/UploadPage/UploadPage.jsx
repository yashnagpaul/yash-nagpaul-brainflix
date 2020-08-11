import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

export default class UploadPage extends Component {
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

            <div className="upload-page__title-description-container">
              <p className="upload-page__title-label">TITLE YOUR VIDEO</p>
              <input
                className="upload-page__title-input"
                type="text"
                name=""
                id=""
              />
              <p className="upload-page__description-label">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea className="upload-page__description-input"></textarea>
            </div>
          </div>

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
        </div>
      </div>
    );
  }
}
