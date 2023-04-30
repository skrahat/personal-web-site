import Image from "next/image";
import fsLogo from "../../public/fairstone-logo.png";
import ptwLogo from "../../public/PTW-logo.png";
import bccLogo from "../../public/BCC-logo.png";
import { useRef } from "react";
export default function Experience() {
  return (
    <div className="w-full lg:h-screen p-2" id="experience">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-3xl tracking-widest uppercase text-teal-600">
          Experience
        </p>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-auto dark:bg-gray-200">
            <Image src={fsLogo} width={100} height={100} alt="" />
            <h3 className="py-4 text-teal-600">fairstone Inc</h3>
            <p className="py-2">Software Engineer</p>
            <h4 className="py-1">Developed micro projects</h4>
            <p className="py-1">Implemented CDK</p>
            <p className="py-1">Optimized code efficiency</p>
            <p className="py-1">Deployed automated AWS security</p>
          </div>
          <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-auto dark:bg-gray-200">
            <Image src={bccLogo} width={100} height={100} alt="" />
            <h3 className="py-4 text-teal-600">BCC (federal)</h3>
            <p className="py-2">Software Engineer Jr</p>
            <h4 className="py-1">Analyze datasets</h4>
            <p className="py-1">Implemented Cucumber</p>
            <p className="py-1">research in NLP</p>
          </div>
          <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-auto dark:bg-gray-200">
            <Image src={ptwLogo} width={100} height={100} alt="" />
            <h3 className="py-4 text-teal-600">Pole To Win Canada Inc</h3>
            <p className="py-2">Automated QA Tester</p>
            <h4 className="py-1">Automate script</h4>
            <p className="py-1">Track bugs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
