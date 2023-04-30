import Image from "next/image";
import OnboardingImg from "../../public/assets/projects/onboarding.png";
import Netflix from "../../public/assets/projects/netflix.jpg";
import DawaSwift from "../../public/assets/projects/dawaSwift.png";
import TeamTree from "../../public/assets/projects/teamTree.png";
import RideShare from "../../public/assets/projects/rideShare.png";
import RestoApp from "../../public/assets/projects/restoApp.png";

import { useState } from "react";
import Link from "next/link";
/**
 * 
 * <div className="w-full lg:h-screen p-2" id="project">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-teal-600 dark:text-white">
          Projects
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Merchant-Onboarding Portal: Fairstone financial Inc
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          The Global Healthcare Management Platform: DawaSwift Inc. [NDA]
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Team Tree Web App (site)
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Anonymous Retrieval Robot
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Ride-Sharing App (git)
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Resto App: Restaurant management System (git)
        </p>
        
      </div>
      
    </div>
 */
export default function Project() {
  const imgArray = {
    1: OnboardingImg,
    2: DawaSwift,
    3: TeamTree,
    4: RideShare,
    5: RestoApp,
  };

  const [num, setNum] = useState<number>(0);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = (num: number) => {
    setNum(num);
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setNum(0);
    setIsHovered(false);
  };
  return (
    <div className="w-full max-h-[1040px] lg:h-screen pb-2" id="project">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full dark:text-white">
        <p className="text-3xl pb-5 tracking-widest uppercase text-teal-600 ">
          Projects
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg">
            <ul className="text-lg ">
              <li
                onMouseEnter={() => onMouseEnter(1)}
                //onMouseLeave={onMouseLeave}
                className="py-5 cursor-pointer hover:text-blue-500"
              >
                Merchant-Onboarding Portal: Fairstone financial Inc
              </li>
              <li
                onMouseEnter={() => onMouseEnter(2)}
                //onMouseLeave={onMouseLeave}
                className="py-5 cursor-pointer hover:text-blue-500"
              >
                The Global Healthcare Management Platform: DawaSwift Inc.
              </li>
              <li
                onMouseEnter={() => onMouseEnter(3)}
                //onMouseLeave={onMouseLeave}
                className="py-5 cursor-pointer hover:text-blue-500"
              >
                Team Tree Web App
              </li>
              <li
                onMouseEnter={() => onMouseEnter(4)}
                //onMouseLeave={onMouseLeave}
                className="py-5 cursor-pointer hover:text-blue-500"
              >
                Ride-Sharing App
              </li>
              <li
                onMouseEnter={() => onMouseEnter(5)}
                //onMouseLeave={onMouseLeave}
                className="py-5 cursor-pointer hover:text-blue-500"
              >
                Resto App: Restaurant management System
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl group-hover:opacity-10">
                <Image
                  className="rounded-xl group-hover:opacity-10 max-w-full max-h-full object-cover"
                  src={imgArray[num]}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
