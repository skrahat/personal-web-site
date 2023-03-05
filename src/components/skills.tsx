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
import progressBar from "./microComponent/progressBar";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-3xl tracking-widest uppercase text-teal-600">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">What I Can Do</h2>
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
            {progressBar("Algorithm Complexity", 90, "red")}
            {progressBar("Front-end", 80, "green")}
            {progressBar("Back-end", 85, "pink")}
          </div>
        </section>
        <section className="dark:text-white">
          As a skilled software engineer, I have extensive experience developing
          and deploying projects in various languages such as TypeScript,
          JavaScript, C++, Java, and Python. I have also designed numerous
          models and systems while solving complex algorithm problems, and have
          taken courses in Software Validation, Software Engineering Practice,
          Computer Vision, Artificial Intelligence, and Applied Machine
          Learning.
          <br />
          <br />
          With my expertise in these areas, I am confident in my ability to
          tackle any challenge and deliver high-quality solutions to clients.
        </section>
      </div>
    </div>
  );
};

export default Skills;
