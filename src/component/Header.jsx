import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Header() {
  return (
    <>
      <h1 className="my-10 font-serif text-center text-7xl ">
        <FaBookOpen className="inline mr-4 text-lime-900" />
        This is My <span className="font-bold text-lime-900">BookList</span>
      </h1>
    </>
  );
}

export default Header;
