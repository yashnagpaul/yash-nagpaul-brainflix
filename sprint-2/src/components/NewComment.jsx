import React from "react";
import axios from "axios";

const apiKey = "8b50868d-4e62-4256-b64a-acfc383944fe";

class NewComment extends React.Component {
  submitHandler = (event) => {
    event.preventDefault();
    const comment = event.target.textArea.value;
    event.target.textArea.value = "";
    const name = "Mohan Muruge";
    const commentObj = {
      name: name,
      comment: comment,
    };

    // ISSUE: NewComment is not rendered through a route, hence there aren't any ROUTE props. How to compare routeprops?
    // SOLUTION: Instead, in VideoDescription, where we are calling NewComment, pass the {video.id} as props to NewComment.

    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${this.props.videoId}/comments?api_key=${apiKey}`,
        commentObj
      )
      .then(this.props.fetchData);
  };

  render() {
    console.log(this.props);

    return (
      <section className="new-comment">
        <p className="new-comment__number-of-comments">
          {this.props.commentsLength} Comments
        </p>
        <div className="new-comment__user-img-comment-container">
          <img
            className="new-comment__user-img"
            src="/images/Mohan-muruge.jpg"
            alt=""
          />
          <div className="new-comment__comment-form">
            <p className="new-comment__title">JOIN THE CONVERSATION </p>
            <form onSubmit={this.submitHandler} className="new-comment__form">
              <textarea
                name="textArea"
                className="new-comment__textarea"
                placeholder="Write comment here"
              ></textarea>
              <button type="submit" className="new-comment__submit-btn">
                COMMENT
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default NewComment;
