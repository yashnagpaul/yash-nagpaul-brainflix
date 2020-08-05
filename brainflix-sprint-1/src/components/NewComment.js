import React from "react";

const NewComment = () => {
  return (
    <section>
      <p>3 Comments</p>
      <form>
        <label htmlFor="textArea"></label>
        <textarea name="textArea"></textarea>
        <button type="submit">COMMENT</button>
      </form>
    </section>
  );
};

export default NewComment;
