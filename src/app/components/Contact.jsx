import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative bubble">
      <div className="absolute bottom-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,hsl(0,0%,85%)_100%)]"></div>
      <div className="absolute bottom-0 z-[-2] h-screen w-screen">
        <img
          src={"/img/wave-bg.svg"}
          alt="background"
          className="background-cover w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col justify-evenly min-h-screen transition-all duration-500 gap-2 transform py-20 px-24 w-full `}
      >
        <div className="flex flex-col">
          <div>
            <h1 className="text-7xl lg:text-left text-center w-full">
              Contact
            </h1>
          </div>
          <div>
            <span>
              Contact me for any project or collaboration. I am available for
              any web development project.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center w-full ">
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Email</h2>
            <span>julien.sarrau@edu.esiee.fr</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Mobile</h2>
            <span>+33 6 12 34 56 78</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Links</h2>
            <div className="flex gap-4">
              <Link href={"/mongithub"}>
                <Image
                  src={"/img/github-mark.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
              <Link href={"/mongithub"}>
                <Image
                  src={"/img/linkedin.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center items-center h-20">
        <p>© 2024 - All rights reserved </p>
      </div>
    </section>
  );
};

export default Contact;
