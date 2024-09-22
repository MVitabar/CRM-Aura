import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex p-2 items-center justify-between border-gray-400 border-solid border-2 px-3 w-full max-w-4xl">
      <h1 className="sm:text-base md:text-3xl font-bold ">Tus productos</h1>
      <div className="flex w-7/12 justify-end py-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-full border mr-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-white border ml-2 mr-2 border-gray-300  rounded-md hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
