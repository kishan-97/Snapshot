import React from "react";
import { data } from "../fake_postdata";
import { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [posts, setposts] = useState(data);
  return (
    <div className="feed">
      {posts.map((post) => {
        return <Post key={post.id} data={post}></Post>;
      })}
    </div>
  );
};

export default Feed;
