import React from "react";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar-option">
      <Icon />
      <h3 className="title"> {title} </h3>
    </div>
  );
};

export default SidebarOption;
