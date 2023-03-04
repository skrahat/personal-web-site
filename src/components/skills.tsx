import Image from "next/image";
import React, { useState } from "react";
import CDK from "../../public/assets/skills/cdk.png";
import Java from "../../public/assets/skills/java.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import Ts from "../../public/assets/skills/ts.png";
import Github from "../../public/assets/skills/github1.png";
import Node from "../../public/assets/skills/node.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import AWS from "../../public/assets/skills/aws.png";

const Skills = () => {
  const [experienceYears, setExperienceYears] = useState<number>(0);
  const [alogorithm, setAlogorithm] = useState<number>(0);

  const onMouseEnter = (num: number, numTwo: number) => {
    setExperienceYears(num);
    setAlogorithm(numTwo);
  };
  const onMouseLeave = (num: number, numTwo: number) => {
    setExperienceYears(num);
    setAlogorithm(numTwo);
  };
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-teal-600">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Java} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Ts} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AWS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CDK} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CDK</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-bold text-blue-700 dark:text-white">
                Front-end
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: 80 + "%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-bold text-blue-700 dark:text-white">
                Back-end
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-pink-600 h-2.5 rounded-full"
                style={{ width: 85 + "%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-bold text-blue-700 dark:text-white">
                Algorithm Complexity
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: 90 + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
