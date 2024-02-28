import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(cardRef.current);

    return () => {
      observer.unobserve(cardRef.current);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className={`bg-gray-100 p-5 rounded-2xl sm:w-[360px] w-full ${
        isVisible ? "animate-card-enter" : ""
      }`}
    >
      <div className="relative w-full ">
        <div className="flex justify-between p-2 gap-1 items-center">
          <div className="flex gap-1">
            <div className="">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-gray-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-600 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div>
              <p className="text-sm">
                {">"}
                {name}
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/img/github-mark.svg"
              alt="source code"
              className="object-contain"
              width={25}
              height={25}
            />
          </div>
        </div>
        <img
          src="https://random.imagecdn.app/800/500"
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className=" font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={`${name}-${tag.name}`}
            className={`${tag.color} rounded-2xl px-3 flex items-center justify-center`}
          >
            <p className="text-[14px]">{tag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
