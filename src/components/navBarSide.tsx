import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { SiSkillshare } from "react-icons/si";
import { TbOld } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
const navBarSide = () => {
  return (
    <div className=" fixed left-0 top-0 h-full bg-slate-100 w-[5vw] text-xl text-slate-900 lg:flex flex-col justify-center dark:bg-gray-900 overflow-y-auto">
      <ul className="py-4">
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#">
            <HiOutlineHome
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#skills">
            <SiSkillshare
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#education">
            <FaGraduationCap
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#experience">
            <TbOld
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#project">
            <AiOutlineFundProjectionScreen
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <a href="/#contactme">
            <IoMdContacts
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default navBarSide;
