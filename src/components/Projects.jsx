import React from "react";
import useProjects from "../assets/useProjects";

const Projects = () => {
  const projects = useProjects();
  return (
    <div className="mx-auto my-0">
      <div className="flex items-center flex-col text-white">
        {!projects.length && <p>Fetching details.....</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[90%] mx-auto md:max-w-screen-xl justify-items-stretch items-stretch	">
        {projects.length &&
          projects.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Projects;

const Card = ({ item }) => {
  return (
    <div className="relative m-4 group">
      <div className="absolute top-0 left-0 bg-gradient-to-br from-pink-800 to-purple-600 w-full h-full blur opacity-75 -inset-0.5 group-hover:duration-200 duration-1000 group-hover:opacity-90 rounded-xl" />
      <div className="neo relative flex flex-col lg:flex-row items-center gap-2 p-8 bg-opacity-70 rounded-xl group-hover:duration-200">
        <img
          className="my-2 w-[100px] h-[100px] mb-3 p-4 object-contain"
          src={item.icon}
          alt="Project"
        />
        <div className="flex flex-col">
          <h5 className="mb-1 text-xl font-semibold text-gray-900">
            {item.projectName}
          </h5>
          <p className="text-sm font-medium text-gray-500">
            {item.impact}
          </p>
          <div className="flex space-x-3 mt-2">
            <a
              href={item.projectLink}
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
    </div>
  );
};
