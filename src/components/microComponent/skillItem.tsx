import { StaticImageData } from "next/image";
import Image from "next/image";

export default function skillItem(name: string, imgSrc: StaticImageData) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-400">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgSrc} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>name</h3>
        </div>
      </div>
    </div>
  );
}
