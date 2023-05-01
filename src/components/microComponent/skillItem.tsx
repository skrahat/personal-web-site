import { StaticImageData } from "next/image";
import Image from "next/image";
//import { useScroll } from "framer-motion";

export default function skillItem(name: string, imgSrc: StaticImageData) {
  //const { scrollYProgress } = useScroll();
  return (
    <div
      className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-200"
      // initial={{ x: -200 }}
      // animate={{ x: 0 }}
      // transition={{ type: "inertia" }}
      //   whileInView={{
      //     x: 0,
      //     transition: {
      //       type: "spring",
      //       bounce: 0.4,
      //       duration: 0.8,
      //     },
      //   }}
      //   viewport={{ once: true, amount: 0.8 }}
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgSrc} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}
