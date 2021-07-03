import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/sidebarComponents/Profile";
import Post from "./Components/sidebarComponents/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
    </BrowserRouter>
  );
};

export default App;
