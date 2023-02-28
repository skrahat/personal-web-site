import Image from "next/image";
import test from "../../public/fairstone-logo.png";

export default function Project() {
  return (
    <div className="w-full lg:h-screen p-2" id="project">
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
  );
}
