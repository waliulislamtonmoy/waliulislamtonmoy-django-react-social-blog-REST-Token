import Home from "../Pages/Home";
import { Route, Routes } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../Features/ProfileSlice";

import Navigations from "./Navigations";
import DetailBlog from "../Pages/DetailBlog";
import Profile from "../Pages/Profile";
import SIgnup from "../Pages/SIgnup";
import Signin from "../Pages/Signin";
import { BrowserRouter } from "react-router-dom";

const Maincomponents = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profileR.data);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SIgnup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/details/:id" element={<DetailBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Maincomponents;
