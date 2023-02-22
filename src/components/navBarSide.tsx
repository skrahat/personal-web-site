import React from "react";
import { email } from "../config";

const ContactMe = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-slate-600 w-[5vw] text-xl text-slate-300 flex flex-col justify-center dark:bg-slate-900">
      <ul className="py-4">
        <li className="border-t border-gray-700 py-2">
          <a
            href="/"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Home
          </a>
        </li>
        <li className="border-t border-b border-gray-700 py-2">
          <a
            href="/about"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Skills
          </a>
        </li>
        <li className="border-t border-b border-gray-700 py-2">
          <a
            href="/about"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Experience
          </a>
        </li>
        <li className="border-t border-b border-gray-700 py-2">
          <a
            href="/about"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Projects
          </a>
        </li>
        <li className="border-b border-gray-700 py-2">
          <a
            href="/contact"
            className="block text-center transition-colors duration-300 ease-in-out hover:text-teal-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ContactMe;