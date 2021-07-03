import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Trending></Trending>
      </div>
    </div>
  );
};

export default Home;
