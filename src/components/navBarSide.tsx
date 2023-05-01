import React from "react";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi";
import { SiSkillshare } from "react-icons/si";
import { TbOld } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import ARLogo from "../../public/arLogoNoBg.png";
import Link from "next/link";

const navBarSide = () => {
  return (
    <div className=" fixed left-0 top-0 h-full bg-slate-100 w-[5vw] text-xl text-slate-900 lg:flex flex-col justify-center dark:bg-gray-900 overflow-y-auto">
      <div className="flex justify-center items-center py-4">
        <Image src={ARLogo} alt="AR Logo" />
      </div>
      <ul className="py-4">
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#">
            <HiOutlineHome
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#skills">
            <SiSkillshare
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#experience">
            <TbOld
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#education">
            <FaGraduationCap
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#project">
            <AiOutlineFundProjectionScreen
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
        <li className="flex-grow flex justify-center items-center py-2">
          <Link href="/#contactme">
            <IoMdContacts
              size={30}
              className="cursor-pointer hover:animate-bounce"
              color="teal"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default navBarSide;
