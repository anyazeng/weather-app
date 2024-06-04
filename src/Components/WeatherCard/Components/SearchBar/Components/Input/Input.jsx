import React from "react";

const Input = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="searchInput"></label>
        <input type="text" id="searchInput" className="block w-full rounded-md border-solid py-1.5 pl-1 pr-20 text-gray-900 text-sm" placeholder="Search for a city"/>
      </form>
    </div>
  );
};

export default Input;
