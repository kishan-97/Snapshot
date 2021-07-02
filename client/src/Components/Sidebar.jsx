import React from "react";
import SidebarOption from "./SidebarOption";
import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SidebarOptionProfile from "./sidebar/SidebarOptionProfile";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOption Icon={SendIcon} title="Post" />
      <SidebarOptionProfile Icon={AccountCircleIcon} title="Profile" />
      <SidebarOption Icon={SettingsIcon} title="Settings" />
      <SidebarOption Icon={ExitToAppIcon} title="Logout" />
    </div>
  );
};

export default Sidebar;
