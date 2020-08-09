import React from "react";

const NewComment = () => {
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
          <form className="new-comment__form">
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
};

export default NewComment;
