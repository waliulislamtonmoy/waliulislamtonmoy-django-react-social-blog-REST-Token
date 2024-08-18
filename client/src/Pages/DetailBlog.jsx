import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchblog, fetchoneblog } from "../Features/BlogSlice";
import axios from "axios";

const DetailBlog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            {blog && blog.title}
          </h2>
          <p className=" mt-2">{blog && blog.date}</p>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left capitalize">
            {blog && blog.user.user.username}
          </p>

          <div className="mx-auto grid gap-8 lg:grid-cols-2">
            <a
              href="/"
              className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8"
            >
              <img
                src={blog && blog.image}
                alt=""
                className="inline-block h-72 w-full object-cover"
              />
              <div className="flex flex-col items-start py-4">
                <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                  <p className="text-sm font-semibold text-blue-600">
                    CATEGORY NAME{" "}
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  {blog && blog.content.slice(0, 98)}
                </p>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  {blog && blog.content.slice(100, 250)}
                </p>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  {blog && blog.content.slice(250, 1000)}
                </p>
                <div className="flex">
                  <img
                    src={`http://127.0.0.1:8000${blog && blog.user.image} /`}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold">
                      {blog && blog.user.user.username}
                    </h6>
                    <div className="flex flex-col lg:flex-row">
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="md:flex md:justify-between lg:flex-col">
              <a
                href="/"
                className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
                />
                <div className="flex flex-col items-start pt-4 lg:px-8">
                  <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                    <p className="text-sm font-semibold text-blue-600">
                      CATEGORY NAME
                    </p>
                  </div>
                  <p className="mb-2 text-sm font-bold sm:text-base">
                    {" "}
                    Here is the title for this blog
                  </p>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                      <p>Laila Bahar</p>
                      <p className="mx-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
                />
                <div className="flex flex-col items-start pt-4 lg:px-8">
                  <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                    <p className="text-sm font-semibold text-blue-600">
                      CATEGORY NAME
                    </p>
                  </div>
                  <p className="mb-2 text-sm font-bold sm:text-base">
                    {" "}
                    Here is the title for this blog
                  </p>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                      <p>Laila Bahar</p>
                      <p className="mx-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
                />
                <div className="flex flex-col items-start pt-4 lg:px-8">
                  <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                    <p className="text-sm font-semibold text-blue-600">
                      CATEGORY NAME{" "}
                    </p>
                  </div>
                  <p className="mb-2 text-sm font-bold sm:text-base">
                    {" "}
                    Here is the title for this blog{" "}
                  </p>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                      <p>Laila Bahar</p>
                      <p className="mx-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailBlog;
