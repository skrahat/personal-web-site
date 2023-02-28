import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { email } from "../config";

const navBarSide = () => {
  return (
    <div className="shadow fixed left-0 top-0 h-full bg-slate-800 w-[5vw] text-xl text-slate-300 lg:flex flex-col justify-center dark:bg-black ">
      <ul className="py-4">
        <li className="border-t border-gray-700 py-2">
          <a
            href="/#"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Home
          </a>
        </li>
        <li className="border-t border-b border-gray-700 py-2">
          <a
            href="/#skills"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Skills
          </a>
        </li>
        <li className="border-t text-center border-b border-gray-700 py-2 transition-colors duration-300 ease-in-out hover:text-teal-600">
          <a href="/#experience" className="block ">
            Experience
          </a>
        </li>
        <li className="border-t border-b border-gray-700 py-2">
          <a
            href="/#project"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Projects
          </a>
        </li>
        <li className="border-b border-gray-700 py-2">
          <a
            href="/#contactme"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default navBarSide;
