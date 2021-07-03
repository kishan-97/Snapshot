import React from "react";
import { useHistory } from "react-router-dom";

const SidebarOptionProfile = ({ title, Icon }) => {
  const history = useHistory();

  const get_profile = () => {
    history.push("/profile");
  };
  return (
    <div className="sidebar-option" onClick={() => get_profile()}>
      <Icon />
      <h3 className="title"> {title} </h3>
    </div>
  );
};

export default SidebarOptionProfile;
