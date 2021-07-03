import React from "react";
import { useState } from "react";
import { profile } from "../../fake_profile";

function Profile() {
  const [myProfile, setprofile] = useState({ profile });
  console.log(myProfile);
  return <div className="profile">My Profile</div>;
}

export default Profile;
