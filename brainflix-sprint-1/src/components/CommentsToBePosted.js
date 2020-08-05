import React from "react";

const comments = [
  {
    name: "Micheal Lyons",
    timestamp: 1530744338878,
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    timestamp: 1530744338878,
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    timestamp: 1530744138878,
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

//QUESTION: something is up here...

const CommentsToBePosted = () => {
  for (const eachItem of comments) {
    return (
      <div>
        <p>{eachItem.name}</p>
        <p>{eachItem.timestamp}</p>
        <p>{eachItem.comment}</p>
      </div>
    );
  }
};
export default CommentsToBePosted;
