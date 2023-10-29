import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      axios
        .get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setProfile(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchProfile();
  }, []);
  return (
    <div className="bg-gray-100 mt-100">
      <div className="container ">
        <div>
          <img
            style={{ height: "500px", width: "600px" }}
            className="rounded"
            src={`http://127.0.0.1:8000${profile?.image}/`}
            alt="profileimage"
          />
          <div className="container">
            <p>User Name : {profile?.data?.username}</p>
            <p>User Email : {profile?.data?.email}</p>
            <p>Profile Created : {profile?.data?.created}</p>
          </div>

          <div className="container m-3">
            <form action="">
              <div className="mb-2">
                <label htmlFor="first_name" className="label-control">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="last_name" className="label-control">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="username" className="label-control">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="label-control">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="biodata" className="label-control">
                  Biodata
                </label>
                <textarea
                  id="biodata"
                  name="biodata"
                  rows="4"
                  cols="50"
                  className="form-control"
                ></textarea>
              </div>
              <button className="px-5 py-2 rounded-lg bg-green-400 text-white  hover:bg-green-600">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
