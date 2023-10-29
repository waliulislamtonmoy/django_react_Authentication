import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Userregester = () => {
  const [username, SetUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserRegester = (e) => {
    e.preventDefault();
    const fetchRegister = async () => {
      await axios
        .post(
          "http://127.0.0.1:8000/api/register/",
          { username: username, email: email, password: password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.message);
          navigate("/register");
        });
    };
    fetchRegister();
  };
  return (
    <div>
      <section className="block">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-3xl">
              <div className="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 pt-[3em] pb-12">
                <div className="text-center">
                  <div className="mx-auto max-w-[400px] mb-4 pb-4">
                    <button className="px-3 py-3 mb-5 text-white text-2xl rounded block w-full bg-green-700">
                      Sign Up{" "}
                    </button>
                    <form onSubmit={handleUserRegester}>
                      <div className="relative">
                        <img
                          alt=""
                          src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
                          className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full"
                          style={{ height: "30px" }}
                        />
                        <input
                          type="text"
                          className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14 rounded"
                          maxLength="20"
                          name="username"
                          placeholder="Username"
                          required
                          value={username}
                          onChange={(e) => SetUsername(e.target.value)}
                        />
                      </div>

                      <div className="relative">
                        <img
                          alt=""
                          src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                          className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full"
                        />
                        <input
                          type="email"
                          className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14 rounded"
                          maxLength="256"
                          name="email"
                          placeholder="Email Address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="relative">
                        <img
                          alt=""
                          src="https://www.svgrepo.com/show/381143/password-account-security-reset-safety.svg"
                          className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full"
                          style={{ height: "30px" }}
                        />
                        <input
                          type="password"
                          className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14 rounded"
                          maxLength="256"
                          name="password"
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button
                        className="block w-full py-2 px-2 rounded bg-green-400 text-center hover:bg-green-700 "
                        type="submit"
                      >
                        submit
                      </button>
                    </form>
                    <p className="text-sm text-[#636262] mt-3">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="font-[Montserrat,_sans-serif] text-sm font-bold text-black "
                      >
                        Login now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Userregester;
