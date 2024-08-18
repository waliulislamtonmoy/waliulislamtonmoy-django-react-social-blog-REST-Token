import React from "react";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router";

import Navigations from "./Navigations";
import DetailBlog from "../Pages/DetailBlog";
import Profile from "../Pages/Profile";

const Maincomponents = () => {
  return (
    <div>
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="profile/" element={<Profile />} />
        <Route path="details/:id/" element={<DetailBlog />} />
      </Routes>
    </div>
  );
};

export default Maincomponents;
