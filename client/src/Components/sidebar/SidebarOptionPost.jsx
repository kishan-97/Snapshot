import React from "react";
import { useHistory } from "react-router-dom";

function SidebarOptionPost({ Icon, title }) {
  const history = useHistory();
  const create_post = () => {
    history.push("/post");
  };
  return (
    <div className="sidebar-option" onClick={() => create_post()}>
      <Icon />
      <h3 className="title"> {title} </h3>
    </div>
  );
}

export default SidebarOptionPost;
