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
import skillItem from "./microComponent/skillItem";

function progressBar(name: string, val: number, colour: string) {
  return (
    <div className="p-5">
      <div className="pb-2">
        <span className="text-base font-bold text-blue-700 dark:text-white">
          {name}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className={`bg-${colour}-600 h-1.5 rounded-full`}
          style={{ width: val + "%" }}
        ></div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-teal-600">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <section className="grid grid-cols-2 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {skillItem("Java", Java)}
            {skillItem("Ts", Ts)}
            {skillItem("Node", Node)}
            {skillItem("React", ReactImg)}
            {skillItem("AWS", AWS)}
            {skillItem("CDK", CDK)}
            {skillItem("Github", Github)}
            {skillItem("Next", NextJS)}
          </div>
          <div className="px-10 items-center justify-center">
            {progressBar("Front-end", 80, "green")}
            {progressBar("Back-end", 85, "pink")}
            {progressBar("Algorithm Complexity", 90, "red")}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
