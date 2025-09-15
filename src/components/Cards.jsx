import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <>
      <Link to={`/blog/${props.blog._id}`}>
        <div className="bg-slate-800 text-white rounded-xl shadow-md w-80 flex flex-col">
          <div className="w-full h-48 overflow-hidden rounded-t-xl">
            <img
              className="w-full h-full object-cover"
              src={`http://localhost:3000/${props.blog.image}`}
              alt=""
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.blog.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {props.blog.subtitle}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </Link>
    </>
  );
};

export default Cards;
