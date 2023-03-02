import Image from "next/image";
import mcgillImg from "../../public/assets/education/McGill.png";
import sfxImage from "../../public/assets/education/sfx.png";
import Experience from "./experience";
import ImageItem from "./imageItem";

export default function Education() {
  return (
    <div id="education" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-teal-600 dark:text-white">
          Education
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ImageItem
            title="McGill University"
            backgroundImg={mcgillImg}
            projectUrl="https://www.mcgill.ca"
            tech="Bachelors of Computer Engineering"
          />
          <ImageItem
            title="S.F.X GreenHerald International School"
            backgroundImg={sfxImage}
            projectUrl="https://www.sfxghis.com"
            tech="Science Major"
          />
        </div>
      </div>
    </div>
  );
}
