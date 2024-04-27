import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow my-4 dark:bg-gray-800">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between gap-8">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SB verma
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://0xsahil.netlify.app"
              className="hover:underline me-4 md:me-6"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/0xsahil"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/0xsahil/"
              className="hover:underline"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
