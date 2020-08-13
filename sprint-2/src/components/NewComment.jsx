import React from "react";

class NewComment extends React.Component {
  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    return (
      <section className="new-comment">
        <p className="new-comment__number-of-comments">3 Comments</p>
        <div className="new-comment__user-img-comment-container">
          <img
            className="new-comment__user-img"
            src="/images/Mohan-muruge.jpg"
            alt=""
          />
          <div className="new-comment__comment-form">
            <p className="new-comment__title">JOIN THE CONVERSATION </p>
            <form
              onSubmit={(event) => this.submitHandler}
              className="new-comment__form"
            >
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
