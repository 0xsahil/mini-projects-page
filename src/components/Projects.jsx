import React from "react";
import { data } from "../assets/assets";

const Projects = () => {
  return (
    <div className="w-[90%] max-w-3xl mx-auto my-0">
      <div className="flex items-center flex-col">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

const Card = ({ item }) => {
  return (
    <div className="relative w-full max-w-lg m-4 group">
      <div className="absolute top-0 left-0 bg-gradient-to-br from-pink-800 to-purple-600 w-full h-full blur opacity-75 -inset-0.5 group-hover:duration-200 duration-1000 group-hover:opacity-90 rounded-xl" />
      <div className="neo relative flex flex-col items-center pb-10 px-2 bg-opacity-70 rounded-xl group-hover:duration-200">
        <img
          className="my-2 w-[150px] h-[150px] mb-3 rounded-full object-contain"
          src={item.image}
          alt="Project"
        />
        <h5 className="mb-1 text-xl font-semibold text-gray-900">
          {item.title}
        </h5>
        <span className="text-md font-medium text-gray-500">
          {item.description}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-zinc-100 bg-purple-700 rounded-lg hover:bg-purple-800"
          >
            Visit
            <svg
              className="w-3.5 h-3.5 ml-2 -rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
