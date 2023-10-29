import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./pages/Header/Header";
import Home from "./pages/Body/Home";
import Profile from "./pages/Body/Profile";
import Error from "./pages/Header/Error";
import Userregester from "./pages/Body/Userregester";
import UserLogin from "./pages/Body/UserLogin";

const Maincomponents = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProfile(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchProfile();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        {profile !== null ? (
          <>
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<Userregester />} />
          </>
        )}

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Maincomponents;
