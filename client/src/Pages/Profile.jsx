import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../Features/ProfileSlice";
import { useParams } from "react-router";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pdata = useSelector((state) => state.profileR.data);
  const [profile, setProfile] = useState();
  console.log(pdata);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handlechange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <section className="py-10 my-auto dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <form onSubmit={handleFormSubmit}>
            <div className="">
              <figure className="max-w-lg">
                <img
                  className="h-96 max-w-full rounded-lg"
                  src={`http://127.0.0.1:8000${pdata?.data?.image}/`}
                  alt="Profile Image"
                />
              </figure>
            </div>
            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div className="w-full  mb-4 mt-6">
                <label htmlFor="" className="mb-2 ">
                  User Name
                </label>
                <input
                  value={pdata?.data?.user?.username}
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg "
                  placeholder="User Name"
                />
              </div>
              <div className="w-full  mb-4 mt-6">
                <label htmlFor="fist_name" className="mb-2 dark:text-gray-300">
                  First Name
                </label>
                <input
                  name="fist_name"
                  value={pdata?.data?.user?.first_name}
                  onChange={handlechange}
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder="First_Name"
                />
              </div>
              <div className="w-full  mb-4 lg:mt-6">
                <label htmlFor="" className=" ">
                  Last Name
                </label>
                <input
                  value={pdata?.data?.user?.last_name}
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div className="w-full  mb-4 mt-6">
                <label htmlFor="" className="mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  value={pdata?.data?.user?.email}
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
              <button type="submit" className="w-full p-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
