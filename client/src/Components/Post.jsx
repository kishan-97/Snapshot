import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GradeSharpIcon from "@material-ui/icons/GradeSharp";

function Post({ data }) {
  return (
    <div className="post">
      <div className="image-container">
        <img className="img" src={data.avatar} alt={data.display_name} />
      </div>
      <div className="Content">
        <div className="intro">
          <div className="display_name">{data.display_name}</div>
        </div>
        <img className="img-content" src={data.image} />
      </div>
      <div className="like-options">
        <div
          style={{ color: "blue", fontSize: "26px" }}
          className="like reward"
        >
          <ThumbUpIcon />
          {data.likes}
        </div>
        <div
          style={{ color: "orange", fontSize: "26px" }}
          className="like reward"
        >
          <EmojiEmotionsIcon />
          {data.emoji}
        </div>
        <div
          style={{ color: "deepblue", fontSize: "26px" }}
          className="like reward"
        >
          <GradeSharpIcon />
          {data.stars}
        </div>
      </div>
    </div>
  );
}

export default Post;
