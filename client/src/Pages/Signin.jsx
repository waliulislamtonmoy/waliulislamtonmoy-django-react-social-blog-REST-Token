import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authLogin } from "../Features/AuthenticationSlice";

const Signin = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLoginForm = (e) => {
    e.preventDefault();
    dispatch(authLogin(user));
  };
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
          <div className=" relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
            <div className="max-w-60 mx-auto flex justify-between mb-10">
              <NavLink to="signup">
                <button className="text-xl font-bold  md:text-2xl  pb-4 px-2 uppercase">
                  Login
                </button>
              </NavLink>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="mx-auto mb-4 max-w-md pb-4">
                <form name="wf-form-password" onSubmit={handleLoginForm}>
                  <div className="relative flex flex-col">
                    <div className="font-bold mb-1 text-left">
                      Email / User Name
                    </div>
                    <input
                      name="username"
                      onChange={handleLogin}
                      type="text"
                      className="mb-6 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                      placeholder="Email Address / User Name"
                      required=""
                    />
                  </div>
                  <div className="relative mb-4">
                    <div className="font-bold mb-1 text-left">Password</div>
                    <input
                      name="password"
                      onChange={handleLogin}
                      type="password"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                      placeholder="Password (min 8 characters)"
                      required=""
                    />
                  </div>
                  <label className="mb-6 flex items-center justify-start pb-12 md:mb-10 lg:mb-1">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="float-left mr-2"
                    />
                    <span
                      className="inline-block cursor-pointer text-sm"
                      htmlFor="checkbox"
                    >
                      I agree to receive market lorem ipsum dolor from Flowspark{" "}
                    </span>
                  </label>
                  <input
                    type="submit"
                    className=" inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  />
                </form>
              </div>
              <p className="text-sm max-w-80 mx-auto">
                By proceeding, you agree to social blog <span> </span>
                <a href="#" className="font-bold underline">
                  Terms of Use & Privacy Policy.{" "}
                </a>
              </p>
              <p className="text-sm max-w-80 mx-auto mt-3">
                Don't Have An Account. Please <span> </span>
                <NavLink to="/signup" className="font-bold underline">
                  Create An Account.
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
