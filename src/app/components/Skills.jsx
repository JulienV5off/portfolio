import React, { useRef } from "react";
import { skills } from "../../constants";
import Image from "next/image";
import { useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="skills"
      className="flex flex-col justify-center min-h-screen transition-all duration-500 transform py-20 px-24 w-full"
    >
      <div className="absolute top-4 right-5 w-96 h-96 md:block hidden opacity-50 animate-float">
        <Image src={"/img/atom_hexa.png"} width={600} height={600} alt="atom" />
      </div>
      <div className="hidden absolute bottom-8 md:left-1/2 md:flex right-10 w-96 h-96 opacity-50 animate-floatReverse2">
        <Image
          src={"/img/atom_tetra.png"}
          width={600}
          height={600}
          alt="tetra"
        />
      </div>
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div>
        <h1 className="text-7xl lg:text-left text-center w-full">Skills</h1>
      </div>
      <div>
        <span>The main laguages I use.</span>
      </div>
      <div className="flex flex-col mt-14 gap-4 w-full">
        {skills.map((skill, index) => (
          <div ref={ref} key={index} className="flex gap-3 leading-3">
            <div
              className={`${skill.color} rounded-2xl px-3 flex items-center justify-center`}
            >
              {skill.name}
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 my-2 dark:bg-gray-300 w-1/2">
              <div
                style={{
                  transform: `scaleX(${isInView ? 1 : 0})`,
                  transition: "transform 1.5s ease-out, opacity 1.5s ease-out",
                  transformOrigin: "left", // Set the transform origin to left
                }}
                className={`${skill.color} h-2.5 rounded-full ${skill.level}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
