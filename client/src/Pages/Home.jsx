import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchblog } from "../Features/BlogSlice";

const Home = () => {
  const { error, data } = useSelector((state) => state.blogR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchblog());
  }, [dispatch]);
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold md:text-5xl">
              The latest and greatest news{" "}
            </h2>
            <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
              {data &&
                data.map((data, key) => {
                  return (
                    <div key={key}>
                      <a
                        href={`details/${data.id}/`}
                        className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
                      >
                        <img
                          src={data.image}
                          alt=""
                          className="h-60 object-cover"
                        />
                        <div className="px-6 py-4">
                          <p className="mb-4 text-xl font-semibold">
                            {data.title}
                          </p>
                          <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                            {data.content.slice(0, 100)} .....
                          </p>
                          <div className="flex">
                            <img
                              src={`http://127.0.0.1:8000/${data.user.image}/`}
                              alt=""
                              className="mr-4 h-10 w-10 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                              <h6 className="text-base font-bold">
                                {data.user.username}
                              </h6>
                              <div className="flex flex-col lg:flex-row">
                                <p className="text-sm text-gray-500">
                                  {data.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>

            <a
              href="#"
              className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
