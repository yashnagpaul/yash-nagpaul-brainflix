import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

export default class UploadPage extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    alert(
      `TITLE:${this.refs.title.value} & DESCRIPTION:${this.refs.description.value}`
    );
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
              />
              <p className="upload-page__description-label">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea
                className="upload-page__description-input"
                ref="description"
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
