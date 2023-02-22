import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import profileImage from "../../public/profile-pic.jpg";

interface Props {
  darkMode: Boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Home(props: Props) {
  const { darkMode, setDarkMode } = props;

  return (
    <section className="">
      <nav className="py-5 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl"></h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center p-10 py-10">
        <div className="animate-bounce text-center text-2xl dark:text-white">
          {" "}
          Hi 👋, I&apos;m
        </div>
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Rahat
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Software Engineer / Full-Stack Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl"></p>
        <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-400">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={profileImage} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
    </section>
  );
}
